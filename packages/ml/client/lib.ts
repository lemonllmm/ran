import * as tf from '@tensorflow/tfjs';
import type {
  Logs,
  MemoryInfo,
  Rank,
  Tensor,
  TensorContainerObject,
  TypedArray
} from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';
import type { Point2D } from '@tensorflow/tfjs-vis';

export type TensorLike2D = TypedArray | number[] | number[][] | boolean[] | boolean[][] | string[] | string[][] | Uint8Array[] | Uint8Array[][];

/**
 * @description: 测试tf的内存管理
 * @return {*}
 */
export function createLotsOfTensors(): void {
  for (let i = 0; i < 1000; i++) {
    const a = tf.tensor1d([1, 2, 3]);
    const b = tf.scalar(i);
    a.mul(b).print();
  }
}
/**
 * @description: 测试tf的内存管理
 * @return {*}
 */
// export const cleanMemoryCreateLotsOfTensors = tf.tidy(createLotsOfTensors)
/**
 * @description: 测试tf运行成功
 * @param {*} void
 * @return {*}
 */
export const tfs = (): void => {
  // Define a model for linear regression.
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

  // Prepare the model for training: Specify the loss and the optimizer.
  model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

  // Generate some synthetic data for training.
  const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
  const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

  // Train the model using the data.
  model.fit(xs, ys).then(() => {
    // Use the model to do inference on a data point the model hasn't seen before:
    const result = model.predict(tf.tensor2d([5], [1, 1]));
    if (Array.isArray(result)) {
      result.forEach((item) => item.print());
    } else {
      result.print();
    }
  });
};

interface TfVersion {
  'tfjs-core': string;
  'tfjs-backend-cpu': string;
  'tfjs-backend-webgl': string;
  'tfjs-data': string;
  'tfjs-layers': string;
  'tfjs-converter': string;
  tfjs: string;
}

interface TfInfo {
  version: TfVersion;
  backend: string;
  memory: MemoryInfo;
  numTensors: number;
}

export const tfInfo = (): TfInfo => {
  const memory = tf.memory();
  const { numTensors } = memory;
  const info = {
    version: tf.version,
    backend: tf.getBackend(),
    memory,
    numTensors,
  };
  return info;
};

export const csv2DataSet = (path: string): tf.data.CSVDataset => {
  return tf.data.csv(path);
};

/**
 * @description: 绘制图形
 * @param {Point2D} points
 * @param {string} name
 * @return {*}
 */
export const plot = (points: Point2D[], name: string, predictPoints?: Point2D[]): void => {
  const values = [points]
  const series = ['original']
  if (Array.isArray(predictPoints)) {
    values.push(predictPoints)
    series.push('predicted')
  }
  tfvis.render.scatterplot(
    { name: `${name} vs House Price` },
    { values, series },
    {
      xLabel: name,
      yLabel: 'Price',
    },
  );
};


const createModel = () => {
  const model = tf.sequential();

  model.add(
    tf.layers.dense({
      units: 10,
      useBias: true, // 偏见 
      activation: 'sigmoid',
      inputDim: 1,
    }),
  );
  model.add(
    tf.layers.dense({
      units: 10,
      useBias: true, // 偏见 
      activation: 'sigmoid',
    }),
  );
  // output
  model.add(
    tf.layers.dense({
      units: 1,
      useBias: true, // 偏见 
      activation: 'sigmoid',
    }),
  );

  const optimizer = tf.train.sgd(0.1);
  model.compile({
    loss: 'meanSquaredError',
    optimizer,
  });
  return model;
};

interface HouseSaleDataSet extends TensorContainerObject {
  price: number;
  sqft_living: number;
}
const trainModel = async (
  model: tf.LayersModel,
  trainingFeatureTensor: tf.Tensor<tf.Rank>,
  trainingLabelTensor: tf.Tensor<tf.Rank>,
  onEpochBegin = (epoch: number, logs?: Logs): void | Promise<void> => { }
) => {
  const { onEpochEnd, onBatchEnd } = tfvis.show.fitCallbacks(
    { name: 'Training Performance' },
    ['loss'],
  );
  return model.fit(trainingFeatureTensor, trainingLabelTensor, {
    batchSize: 512,
    epochs: 20,
    // 验证集
    validationSplit: 0.2,
    callbacks: {
      // onEpochEnd: (epoch, log) => {
      //   console.log(`Epoch ${epoch}: loss = ${log.loss}`);

      // }
      onEpochEnd,
      onBatchEnd,
      onEpochBegin
    },
  });
};
const denormalise = (tensor: Tensor, max: Tensor<Rank>, min: Tensor<Rank>) => {
  return tensor.mul(max.sub(min)).add(min);
};
const normalise = (
  tensor: Tensor,
  mi?: tf.Tensor<tf.Rank>,
  mx?: tf.Tensor<tf.Rank>,
) => {
  const min = mi || tensor.min();
  const max = mx || tensor.max();
  return {
    tensor: tensor.sub(min).div(max.sub(min)),
    max,
    min,
  };
};

interface Normalise {
  tensor: tf.Tensor<tf.Rank>;
  max: tf.Tensor<tf.Rank>;
  min: tf.Tensor<tf.Rank>;
}

export class LineModel {
  normaliseFeature?: Normalise
  normaliseLabel?: Normalise
  testingFeatureTensor?: tf.Tensor<tf.Rank>;
  testingLabelTensor?: tf.Tensor<tf.Rank>;
  model?: tf.LayersModel;
  points?: Point2D[]
  /**
   * @description: 加载数据
   * @param {string} path
   * @return {*}
   */
  loadData = async (path: string): Promise<void> => {
    // 导入数据
    const houseSaleDateSet = tf.data.csv(path);
    // 从数据中提取x,y值并绘制图形
    const pointsDataSet = houseSaleDateSet.map((record: HouseSaleDataSet) => {
      return {
        x: record.sqft_living,
        y: record.price,
      };
    });
    this.points = await pointsDataSet.toArray();

    if (this.points.length % 2 !== 0) {
      // 如果张量是奇数，会导致无法平均分割，需要变成偶数
      this.points.pop();
    }
    tf.util.shuffle(this.points);
    plot(this.points, 'Square feet');
    // Feature (inputs) 提取特征并存在张量中
    const featureValue = this.points.map((p) => p.x);
    const featureTensor = tf.tensor2d(featureValue, [featureValue.length, 1]);
    // Labels (outputs) 对标签做同样的操作
    const labelValue = this.points.map((p) => p.y);
    const labelTensor = tf.tensor2d(labelValue, [labelValue.length, 1]);
    // 标准化标签和特征
    this.normaliseFeature = normalise(featureTensor);
    this.normaliseLabel = normalise(labelTensor);
    console.log(
      `load data success, normaliseFeature:${this.normaliseFeature}, normaliseLabel:${this.normaliseLabel}`,
    );
  };
  train = async (): Promise<void> => {
    if (!this.normaliseFeature || !this.normaliseLabel) return;
    // 分割测试集和训练集
    const [trainingFeatureTensor, testingFeatureTensor] = tf.split(
      this.normaliseFeature.tensor,
      2,
    );
    this.testingFeatureTensor = testingFeatureTensor;
    const [trainingLabelTensor, testingLabelTensor] = tf.split(
      this.normaliseLabel.tensor,
      2,
    );
    this.testingLabelTensor = testingLabelTensor;
    // 创建模型
    this.model = createModel();
    this.model.summary();
    tfvis.show.modelSummary({ name: 'Modal summary' }, this.model);
    // 了解 layer
    const layer = this.model.getLayer('', 0);
    tfvis.show.layer({ name: 'Layer 1' }, layer);

    const onEpochBegin = async () => {
      await this.predictionLine()
      // 更新 layer
      const layer = this.model.getLayer('', 0);
      tfvis.show.layer({ name: 'Layer 1' }, layer);
    }
    // 训练模型
    const result = await trainModel(
      this.model,
      trainingFeatureTensor,
      trainingLabelTensor,
      onEpochBegin
    );

    await this.predictionLine()

    const trainLoss = result.history.loss.pop();
    const validationLoss = result.history.val_loss.pop();
    console.log(
      `train success trainLoss:${trainLoss}, validationLoss:${validationLoss}`,
    );
  };
  test = async (): Promise<void> => {
    if (!this.testingFeatureTensor || !this.testingLabelTensor) return;
    // 判断损失函数
    const lossTensor = this.model?.evaluate(
      this.testingFeatureTensor,
      this.testingLabelTensor,
    );
    const loss = Array.isArray(lossTensor)
      ? lossTensor.map(async (item) => await item.dataSync())
      : await lossTensor?.dataSync();
    console.log(`test success, loss:${loss}`);
  };
  save = async (
    storageID: string = 'kc-house-price-regression',
  ): Promise<void> => {
    const saveResults = await this.model?.save(`localstorage://${storageID}`);
    console.log(
      'save model success, current time is:',
      saveResults?.modelArtifactsInfo.dateSaved,
    );
  };
  loadModel = async (
    storageID: string = 'kc-house-price-regression',
  ): Promise<void> => {
    const storageKey = `localstorage://${storageID}`;
    const models = await tf.io.listModels();
    const modelInfo = models[storageKey];
    if (modelInfo) {
      this.model = await tf.loadLayersModel(storageKey);
      this.model.summary();
      tfvis.show.modelSummary({ name: 'Modal summary' }, this.model);
      // 更新 layer
      const layer = this.model.getLayer('', 0);
      tfvis.show.layer({ name: 'Layer 1' }, layer);

      await this.predictionLine()
      console.log('load model success');
    } else {
      console.log('no model', storageID);
    }
  };
  predict = async (input: number): Promise<void> => {
    tf.tidy(() => {
      if (!this.normaliseLabel || !this.normaliseFeature) return;
      const inputTensor = tf.tensor1d([input]);
      const normaliseInput = normalise(
        inputTensor,
        this.normaliseFeature?.min,
        this.normaliseLabel?.max,
      );
      const normaliseOutputTensor = this.model?.predict(normaliseInput.tensor);
      const outputTensor =
        normaliseOutputTensor &&
        !Array.isArray(normaliseOutputTensor) &&
        denormalise(
          normaliseOutputTensor,
          this.normaliseLabel.min,
          this.normaliseFeature.max,
        );
      const outputValue = outputTensor && outputTensor.dataSync()[0];
      console.log(
        'predict success, the result: ',
        outputValue && outputValue / 1000,
      );
    });
  };
  predictionLine = async (): Promise<void> => {
    const [x, y] = tf.tidy(() => {
      const normaliseXs = tf.linspace(0, 1, 100);
      const normaliseYs = this.model.predict(normaliseXs.reshape([100, 1]))

      const xs = denormalise(normaliseXs, this.normaliseFeature.min, this.normaliseFeature.max)
      const ys = denormalise(normaliseYs as tf.Tensor<tf.Rank>, this.normaliseLabel.min, this.normaliseLabel.max)
      return [xs.dataSync(), ys.dataSync()]
    })
    const predictPoints = Array.from(x).map((val, index) => {
      return { x: val, y: y[index] }
    })
    await plot(this.points, "Square feet", predictPoints)
  }
  /**
   * @description: 设置权重和偏见
   * @param {TensorLike2D} weight
   * @param {TensorLike2D} bias
   * @return {*}
   */  
  plotParams = async (weight: TensorLike2D, bias: TensorLike2D): Promise<void> => {
    this.model.getLayer(null, 0).setWeights([
      tf.tensor2d(weight),
      tf.tensor2d(bias)
    ])
    await this.predictionLine()
    // 更新 layer
    const layer = this.model.getLayer('', 0);
    tfvis.show.layer({ name: 'Layer 1' }, layer);
  }
  openTfvis = (): void => {
    tfvis.visor().toggle();
  };
}

export const tfMemory = (): number => {
  return tf.memory().numTensors;
};
