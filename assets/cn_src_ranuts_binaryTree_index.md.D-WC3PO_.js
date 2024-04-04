import{_ as a}from"./chunks/balanceTree.CCEoBiag.js";import{_ as e,o as r,c as i,a7 as t}from"./chunks/framework.A_XI1Ui1.js";const f=JSON.parse('{"title":"二叉树的定义","description":"","frontmatter":{},"headers":[],"relativePath":"cn/src/ranuts/binaryTree/index.md","filePath":"cn/src/ranuts/binaryTree/index.md","lastUpdated":1712244666000}'),h={name:"cn/src/ranuts/binaryTree/index.md"},l=t('<h1 id="二叉树的定义" tabindex="-1">二叉树的定义 <a class="header-anchor" href="#二叉树的定义" aria-label="Permalink to &quot;二叉树的定义&quot;">​</a></h1><p>在计算机科学中，二叉树（Binary tree）是每个节点最多只有两个分支（即不存在分支度大于 2 的节点）的树结构。通常分支被称作“左子树”或“右子树”。二叉树的分支具有左右次序，不能随意颠倒<a href="#参考文档"><sup>[1]</sup></a>。。</p><h1 id="二叉树的性质" tabindex="-1">二叉树的性质 <a class="header-anchor" href="#二叉树的性质" aria-label="Permalink to &quot;二叉树的性质&quot;">​</a></h1><ul><li>在二叉树的第 i 层上最多有 2^(i-1)个结点（i&gt;=1）</li><li>深度为 h 的二叉树，最多有 2^h-1 个结点，最少有 h 个结点（h&gt;=1）</li><li>包含 n 个结点的二叉树的高度至少为(log2n)+1</li><li>非空的二叉树，分支度为 0 的总数为 n0，分支度为 2 的总数为 n2，则 n0=n2+1</li><li>二叉树的总结点数 n = n1 + n2 + n0</li><li>总连线数等于总节点数减一(B = n - 1)</li><li>总连线数等于分支度为 2 的节点的两倍加上分支度为 1 的节点(B = n2 _ 2 + n1 _ 1)</li></ul><h1 id="二叉树的类型" tabindex="-1">二叉树的类型 <a class="header-anchor" href="#二叉树的类型" aria-label="Permalink to &quot;二叉树的类型&quot;">​</a></h1><h2 id="满二叉树" tabindex="-1">满二叉树 <a class="header-anchor" href="#满二叉树" aria-label="Permalink to &quot;满二叉树&quot;">​</a></h2><p>一棵深度为 k 且有 2k-1 个节点的二叉树称为满二叉树。 除最后一层无任何子节点外，每一层上的所有结点都有两个子结点的二叉树<a href="#参考文档"><sup>[2]</sup></a>。</p><h2 id="完全二叉树" tabindex="-1">完全二叉树 <a class="header-anchor" href="#完全二叉树" aria-label="Permalink to &quot;完全二叉树&quot;">​</a></h2><p>一棵深度为 k 的有 n 个结点的二叉树，对树中的结点按从上至下、从左到右的顺序进行编号，如果编号为 i（1≤i≤n）的结点与满二叉树中编号为 i 的结点在二叉树中的位置相同，则这棵二叉树称为完全二叉树。</p><h2 id="二叉搜索树" tabindex="-1">二叉搜索树 <a class="header-anchor" href="#二叉搜索树" aria-label="Permalink to &quot;二叉搜索树&quot;">​</a></h2><p>二叉搜索树（BST）又称二叉查找树或二叉排序树。它或者是一棵空树，或者是具有下列性质的二叉树： 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值； 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值； 它的左、右子树也分别为二叉排序树。</p><h2 id="平衡二叉树" tabindex="-1">平衡二叉树 <a class="header-anchor" href="#平衡二叉树" aria-label="Permalink to &quot;平衡二叉树&quot;">​</a></h2><p>平衡二叉树(AVL)一定是二叉搜索树，且左子树和右子树的高度差的绝对值不超过 1。 <img src="'+a+'" alt="平衡二叉树"></p><h2 id="b-树" tabindex="-1">B 树 <a class="header-anchor" href="#b-树" aria-label="Permalink to &quot;B 树&quot;">​</a></h2><p>B 树属于多叉树又名平衡多路查找树（查找路径不只两个）</p><h2 id="b-树-1" tabindex="-1">B+树 <a class="header-anchor" href="#b-树-1" aria-label="Permalink to &quot;B+树&quot;">​</a></h2><p>B+树是 B 树的变体，也是一种多路搜索树。</p><h2 id="b-树-2" tabindex="-1">B*树 <a class="header-anchor" href="#b-树-2" aria-label="Permalink to &quot;B\\*树&quot;">​</a></h2><p>B* 树是 B+树的变体，在 B+树的非根和非叶子结点再增加指向兄弟的指针；B* 树定义了非叶子结点关键字个数至少为(2/3)<em>M，即块的最低使用率为 2/3（代替 B+树的 1/2）。B</em> 树分配新结点的概率比 B+树要低，空间使用率更高；</p><h2 id="红黑树" tabindex="-1">红黑树 <a class="header-anchor" href="#红黑树" aria-label="Permalink to &quot;红黑树&quot;">​</a></h2><p>红黑树是一种平衡二叉查找树的变体，它的左右子树高差有可能大于 1，所以红黑树不是严格意义上的平衡二叉树（AVL），但对它进行平衡的代价较低， 其平均统计性能要强于 AVL 。</p><h2 id="堆" tabindex="-1">堆 <a class="header-anchor" href="#堆" aria-label="Permalink to &quot;堆&quot;">​</a></h2><h1 id="遍历" tabindex="-1">遍历 <a class="header-anchor" href="#遍历" aria-label="Permalink to &quot;遍历&quot;">​</a></h1><h2 id="前序遍历" tabindex="-1">前序遍历 <a class="header-anchor" href="#前序遍历" aria-label="Permalink to &quot;前序遍历&quot;">​</a></h2><h2 id="后序遍历" tabindex="-1">后序遍历 <a class="header-anchor" href="#后序遍历" aria-label="Permalink to &quot;后序遍历&quot;">​</a></h2><h2 id="中序遍历" tabindex="-1">中序遍历 <a class="header-anchor" href="#中序遍历" aria-label="Permalink to &quot;中序遍历&quot;">​</a></h2><h2 id="层序遍历" tabindex="-1">层序遍历 <a class="header-anchor" href="#层序遍历" aria-label="Permalink to &quot;层序遍历&quot;">​</a></h2><h1 id="常见算法题" tabindex="-1">常见算法题 <a class="header-anchor" href="#常见算法题" aria-label="Permalink to &quot;常见算法题&quot;">​</a></h1><h2 id="镜像二叉树" tabindex="-1">镜像二叉树 <a class="header-anchor" href="#镜像二叉树" aria-label="Permalink to &quot;镜像二叉树&quot;">​</a></h2><h2 id="重建二叉树" tabindex="-1">重建二叉树 <a class="header-anchor" href="#重建二叉树" aria-label="Permalink to &quot;重建二叉树&quot;">​</a></h2><h2 id="二叉树深度" tabindex="-1">二叉树深度 <a class="header-anchor" href="#二叉树深度" aria-label="Permalink to &quot;二叉树深度&quot;">​</a></h2><h2 id="二叉树节点总数" tabindex="-1">二叉树节点总数 <a class="header-anchor" href="#二叉树节点总数" aria-label="Permalink to &quot;二叉树节点总数&quot;">​</a></h2><h2 id="判断二叉树子结构" tabindex="-1">判断二叉树子结构 <a class="header-anchor" href="#判断二叉树子结构" aria-label="Permalink to &quot;判断二叉树子结构&quot;">​</a></h2><p>输入两棵二叉树 A 和 B，判断 B 是不是 A 的子结构。（ps：约定空树不是任意一个树的子结构）</p><h1 id="参考文档" tabindex="-1">参考文档 <a class="header-anchor" href="#参考文档" aria-label="Permalink to &quot;参考文档&quot;">​</a></h1><ol><li><a href="https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%8F%89%E6%A0%91" target="_blank" rel="noreferrer">维基百科二叉树</a></li><li><a href="https://baike.baidu.com/item/%E6%BB%A1%E4%BA%8C%E5%8F%89%E6%A0%91/7773283" target="_blank" rel="noreferrer">百度百科满二叉树</a></li></ol>',36),o=[l];function n(d,s,c,u,b,q){return r(),i("div",null,o)}const k=e(h,[["render",n]]);export{f as __pageData,k as default};
