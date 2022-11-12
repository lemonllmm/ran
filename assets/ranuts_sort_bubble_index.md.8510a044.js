import{_ as s,c as a,o as n,e as l}from"./app.df631a38.js";const p="/ran/assets/bubble.287f9a70.gif",d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.1 \u5192\u6CE1\u6392\u5E8F\uFF08Bubble Sort\uFF09","slug":"_1-1-\u5192\u6CE1\u6392\u5E8F-bubble-sort","link":"#_1-1-\u5192\u6CE1\u6392\u5E8F-bubble-sort","children":[]},{"level":2,"title":"1.2 \u7B97\u6CD5\u63CF\u8FF0","slug":"_1-2-\u7B97\u6CD5\u63CF\u8FF0","link":"#_1-2-\u7B97\u6CD5\u63CF\u8FF0","children":[]},{"level":2,"title":"1.3 \u52A8\u56FE\u6F14\u793A","slug":"_1-3-\u52A8\u56FE\u6F14\u793A","link":"#_1-3-\u52A8\u56FE\u6F14\u793A","children":[]},{"level":2,"title":"1.4 \u4EE3\u7801\u6F14\u793A","slug":"_1-4-\u4EE3\u7801\u6F14\u793A","link":"#_1-4-\u4EE3\u7801\u6F14\u793A","children":[]}],"relativePath":"ranuts/sort/bubble/index.md","lastUpdated":1668226709000}'),o={name:"ranuts/sort/bubble/index.md"},e=l('<h2 id="_1-1-\u5192\u6CE1\u6392\u5E8F-bubble-sort" tabindex="-1">1.1 \u5192\u6CE1\u6392\u5E8F\uFF08Bubble Sort\uFF09 <a class="header-anchor" href="#_1-1-\u5192\u6CE1\u6392\u5E8F-bubble-sort" aria-hidden="true">#</a></h2><p>\u5192\u6CE1\u6392\u5E8F\u662F\u4E00\u79CD\u7B80\u5355\u7684\u6392\u5E8F\u7B97\u6CD5\u3002\u5B83\u91CD\u590D\u5730\u8D70\u8BBF\u8FC7\u8981\u6392\u5E8F\u7684\u6570\u5217\uFF0C\u4E00\u6B21\u6BD4\u8F83\u4E24\u4E2A\u5143\u7D20\uFF0C\u5982\u679C\u5B83\u4EEC\u7684\u987A\u5E8F\u9519\u8BEF\u5C31\u628A\u5B83\u4EEC\u4EA4\u6362\u8FC7\u6765\u3002\u8D70\u8BBF\u6570\u5217\u7684\u5DE5\u4F5C\u662F\u91CD\u590D\u5730\u8FDB\u884C\u76F4\u5230\u6CA1\u6709\u518D\u9700\u8981\u4EA4\u6362\uFF0C\u4E5F\u5C31\u662F\u8BF4\u8BE5\u6570\u5217\u5DF2\u7ECF\u6392\u5E8F\u5B8C\u6210\u3002\u8FD9\u4E2A\u7B97\u6CD5\u7684\u540D\u5B57\u7531\u6765\u662F\u56E0\u4E3A\u8D8A\u5C0F\u7684\u5143\u7D20\u4F1A\u7ECF\u7531\u4EA4\u6362\u6162\u6162\u201C\u6D6E\u201D\u5230\u6570\u5217\u7684\u9876\u7AEF\u3002</p><h2 id="_1-2-\u7B97\u6CD5\u63CF\u8FF0" tabindex="-1">1.2 \u7B97\u6CD5\u63CF\u8FF0 <a class="header-anchor" href="#_1-2-\u7B97\u6CD5\u63CF\u8FF0" aria-hidden="true">#</a></h2><ul><li>\u6BD4\u8F83\u76F8\u90BB\u7684\u5143\u7D20\u3002\u5982\u679C\u7B2C\u4E00\u4E2A\u6BD4\u7B2C\u4E8C\u4E2A\u5927\uFF0C\u5C31\u4EA4\u6362\u5B83\u4EEC\u4E24\u4E2A\uFF1B</li><li>\u5BF9\u6BCF\u4E00\u5BF9\u76F8\u90BB\u5143\u7D20\u4F5C\u540C\u6837\u7684\u5DE5\u4F5C\uFF0C\u4ECE\u5F00\u59CB\u7B2C\u4E00\u5BF9\u5230\u7ED3\u5C3E\u7684\u6700\u540E\u4E00\u5BF9\uFF0C\u8FD9\u6837\u5728\u6700\u540E\u7684\u5143\u7D20\u5E94\u8BE5\u4F1A\u662F\u6700\u5927\u7684\u6570\uFF1B</li><li>\u9488\u5BF9\u6240\u6709\u7684\u5143\u7D20\u91CD\u590D\u4EE5\u4E0A\u7684\u6B65\u9AA4\uFF0C\u9664\u4E86\u6700\u540E\u4E00\u4E2A\uFF1B</li><li>\u91CD\u590D\u6B65\u9AA41~3\uFF0C\u76F4\u5230\u6392\u5E8F\u5B8C\u6210\u3002</li></ul><h2 id="_1-3-\u52A8\u56FE\u6F14\u793A" tabindex="-1">1.3 \u52A8\u56FE\u6F14\u793A <a class="header-anchor" href="#_1-3-\u52A8\u56FE\u6F14\u793A" aria-hidden="true">#</a></h2><p><img src="'+p+`" alt="\u5192\u6CE1\u6392\u5E8F"></p><h2 id="_1-4-\u4EE3\u7801\u6F14\u793A" tabindex="-1">1.4 \u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#_1-4-\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bubbleSort</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">        </span><span style="color:#676E95;">// \u76F8\u90BB\u5143\u7D20\u4E24\u4E24\u5BF9\u6BD4</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">temp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">        </span><span style="color:#676E95;">// \u5143\u7D20\u4EA4\u6362</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">temp</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,8),r=[e];function t(c,F,y,D,C,i){return n(),a("div",null,r)}const _=s(o,[["render",t]]);export{d as __pageData,_ as default};
