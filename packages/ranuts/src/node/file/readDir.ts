import fs from './fs'

interface Options {
  dirPath: string
  ignores?: Array<string>
}

const readDir = (options: Options):string => {
  const { dirPath } = options
  try {
    return fs.readdirSync(dirPath)
  } catch (error) {
    console.log('readDir error', error)
    throw error
  }
}

export default readDir
