import{_ as p,B as e,o as t,c,x as l,a as o,D as a,N as n}from"./chunks/framework.1e6d3629.js";const r="/ran/assets/input-input.f80a45d3.jpg",w=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"src/ranui/input/index.md","lastUpdated":1684423852000}'),D={name:"src/ranui/input/index.md"},i=l("h1",{id:"input-输入框",tabindex:"-1"},[o("Input 输入框 "),l("a",{class:"header-anchor",href:"#input-输入框","aria-label":'Permalink to "Input 输入框"'},"​")],-1),F=l("p",null,"通过鼠标或键盘输入内容，是最基础的表单域的包装。",-1),y=l("h2",{id:"代码演示",tabindex:"-1"},[o("代码演示 "),l("a",{class:"header-anchor",href:"#代码演示","aria-label":'Permalink to "代码演示"'},"​")],-1),d={style:{width:"300px"}},_=n('<div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">r-input</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">r-input</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="标签label" tabindex="-1">标签<code>label</code> <a class="header-anchor" href="#标签label" aria-label="Permalink to &quot;标签`label`&quot;">​</a></h3><p>提供类似于 Metiral Design 的输入体验。</p>',4),u=n('<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">r-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">r-input</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="占位placeholder" tabindex="-1">占位<code>placeholder</code> <a class="header-anchor" href="#占位placeholder" aria-label="Permalink to &quot;占位`placeholder`&quot;">​</a></h3><p>与原生<code>placeholder</code>一致。</p>',3),h=n('<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">r-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">r-input</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="禁用disabled" tabindex="-1">禁用<code>disabled</code> <a class="header-anchor" href="#禁用disabled" aria-label="Permalink to &quot;禁用`disabled`&quot;">​</a></h3><p>通过<code>disabled</code>可以禁用输入框，禁用后该按钮上的事件失效。</p>',3),C=n('<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">r-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">r-input</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="值value" tabindex="-1">值<code>value</code> <a class="header-anchor" href="#值value" aria-label="Permalink to &quot;值`value`&quot;">​</a></h3><p>设置或返回输入框的<code>value</code>属性值。</p>',3),A=n('<h3 id="类型type" tabindex="-1">类型<code>type</code> <a class="header-anchor" href="#类型type" aria-label="Permalink to &quot;类型`type`&quot;">​</a></h3><p>目前支持<code>password</code>、<code>number</code>这几种类型，设置后会出现额外的<code>ui</code>控件。</p><h4 id="密码输入框" tabindex="-1">密码输入框 <a class="header-anchor" href="#密码输入框" aria-label="Permalink to &quot;密码输入框&quot;">​</a></h4><p>支持密码明文和密文切换。</p>',4),m=n('<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">r-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lock</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">r-input</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="图标icon" tabindex="-1">图标<code>icon</code> <a class="header-anchor" href="#图标icon" aria-label="Permalink to &quot;图标`icon`&quot;">​</a></h3><p>可以设置一个<code>icon</code>来表示标签标识。icon 的颜色跟随 input 颜色</p>',3),g=n('<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">r-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">r-input</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="数字输入框" tabindex="-1">数字输入框 <a class="header-anchor" href="#数字输入框" aria-label="Permalink to &quot;数字输入框&quot;">​</a></h4><p>数字输入框，类似于原生<code>input[type=number]</code>，支持<code>min</code>、<code>max</code>、<code>step</code>属性，支持键盘上下键切换数字。</p>',3),b=n('<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">r-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">min</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">-10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">max</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">step</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">r-input</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="name-属性名" tabindex="-1">name 属性名 <a class="header-anchor" href="#name-属性名" aria-label="Permalink to &quot;name 属性名&quot;">​</a></h3><p>跟 form 组件联动的时候有效，form 提交时收集的字段名字</p><h3 id="status-状态" tabindex="-1">status 状态 <a class="header-anchor" href="#status-状态" aria-label="Permalink to &quot;status 状态&quot;">​</a></h3><ul><li>error</li></ul>',5),T=n('<div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">r-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">status</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">r-input</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>',1),E=l("p",null,"warning",-1),q=n('<div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">r-input</span><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">status</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">r-input</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="事件event" tabindex="-1">事件<code>event</code> <a class="header-anchor" href="#事件event" aria-label="Permalink to &quot;事件`event`&quot;">​</a></h2><p>常见的回调事件。</p><h3 id="onchange" tabindex="-1">onchange <a class="header-anchor" href="#onchange" aria-label="Permalink to &quot;onchange&quot;">​</a></h3><p>文本改变的时候触发。</p>',5),v=n(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">r-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onchange</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">func</span><span style="color:#C3E88D;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">value</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">r-input</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> input </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">r-input</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">input</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">home</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> func </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">input</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">change</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> func)</span></span></code></pre></div><h3 id="oninput" tabindex="-1">oninput <a class="header-anchor" href="#oninput" aria-label="Permalink to &quot;oninput&quot;">​</a></h3><p>输入时触发。</p>`,4),P=n(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> input </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">r-input</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">input</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">home</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> func </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">input</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">input</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> func)</span></span></code></pre></div><p>事件的<code>e</code>参数结构 <img src="`+r+'" alt="input方法"></p>',2);function S(x,f,k,V,I,N){const s=e("r-input");return t(),c("div",null,[i,F,y,l("div",d,[o(" 输入框："),a(s)]),_,a(s,{label:"user"}),u,a(s,{placeholder:"user"}),h,a(s,{label:"user",disabled:""}),C,a(s,{value:"1234"}),A,a(s,{icon:"lock",type:"password"}),m,a(s,{icon:"user"}),g,a(s,{type:"number",min:"-10",max:"10",step:"0.5"}),b,l("div",null,[a(s,{status:"error"})]),T,l("ul",null,[l("li",null,[E,a(s,{status:"warning"})])]),q,a(s,{onchange:"console.log(this.value)"}),v,a(s,{oninput:"console.log(this.value)"}),P])}const j=p(D,[["render",S]]);export{w as __pageData,j as default};
