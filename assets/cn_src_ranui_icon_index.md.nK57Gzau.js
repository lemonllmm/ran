import{_ as c,o as r,c as E,R as e,k as a}from"./chunks/framework.iONrI3GR.js";const y=()=>{setTimeout(()=>{const t=["add-user","book","check-circle","close-circle","eye-close","eye","info-circle","loading","lock","message","power-off","setting","team","unlock","user"];if(typeof document<"u"){const o=document.getElementById("icon-list");t.forEach(l=>{const s=document.createElement("div");s.style.setProperty("display","flex"),s.style.setProperty("align-items","center"),s.style.setProperty("margin","15px"),s.style.setProperty("justify-content","center"),s.style.setProperty("flex-flow","column nowrap");const n=document.createElement("r-icon");n.setAttribute("name",l),n.setAttribute("size","50"),s.appendChild(n);const p=document.createElement("span");p.innerHTML=l,s.appendChild(p),o==null||o.appendChild(s)})}},0)};y();const h=JSON.parse('{"title":"Icon 图标","description":"","frontmatter":{},"headers":[],"relativePath":"cn/src/ranui/icon/index.md","filePath":"cn/src/ranui/icon/index.md","lastUpdated":1702544791000}'),i={name:"cn/src/ranui/icon/index.md"},u=e(`<h1 id="icon-图标" tabindex="-1">Icon 图标 <a class="header-anchor" href="#icon-图标" aria-label="Permalink to &quot;Icon 图标&quot;">​</a></h1><p>语义化的矢量图形</p><h2 id="代码演示" tabindex="-1">代码演示 <a class="header-anchor" href="#代码演示" aria-label="Permalink to &quot;代码演示&quot;">​</a></h2><div style="display:flex;"><r-icon name="lock" size="50"></r-icon><r-icon name="eye" size="50"></r-icon><r-icon name="user" size="50"></r-icon></div><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;lock&quot;</span><span style="color:#E1E4E8;">  &gt;&lt;/</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;eye&quot;</span><span style="color:#E1E4E8;">  &gt;&lt;/</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;user&quot;</span><span style="color:#E1E4E8;">  &gt;&lt;/</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> &lt;</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;lock&quot;</span><span style="color:#24292E;">  &gt;&lt;/</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;"> &lt;</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;eye&quot;</span><span style="color:#24292E;">  &gt;&lt;/</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;"> &lt;</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;user&quot;</span><span style="color:#24292E;">  &gt;&lt;/</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="名称name" tabindex="-1">名称<code>name</code> <a class="header-anchor" href="#名称name" aria-label="Permalink to &quot;名称\`name\`&quot;">​</a></h3><p>根据名称选择不同的图标</p><div style="display:flex;"><r-icon name="lock" size="50"></r-icon><r-icon name="eye" size="50"></r-icon><r-icon name="user" size="50"></r-icon></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;lock&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;eye&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;user&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;lock&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;eye&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;user&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="尺寸size" tabindex="-1">尺寸<code>size</code> <a class="header-anchor" href="#尺寸size" aria-label="Permalink to &quot;尺寸\`size\`&quot;">​</a></h3><div style="display:flex;align-items:flex-end;"><r-icon name="lock" size="30"></r-icon><r-icon name="lock" size="50"></r-icon><r-icon name="lock" size="70"></r-icon></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;lock&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;30&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;lock&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;50&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;lock&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;70&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;lock&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;30&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;lock&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;50&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;lock&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;70&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="颜色color" tabindex="-1">颜色<code>color</code> <a class="header-anchor" href="#颜色color" aria-label="Permalink to &quot;颜色\`color\`&quot;">​</a></h3><div style="display:flex;"><r-icon name="lock" size="50" color="red"></r-icon><r-icon name="lock" size="50" color="#1E90FF"></r-icon><r-icon name="lock" size="50" color="#F44336"></r-icon><r-icon name="lock" size="50" color="#3F51B5"></r-icon></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;lock&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;50&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;red&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;lock&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;50&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#1E90FF&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;lock&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;50&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#F44336&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;lock&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;50&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#3F51B5&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;lock&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;50&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;red&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;lock&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;50&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#1E90FF&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;lock&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;50&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#F44336&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;lock&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;50&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#3F51B5&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="旋转spin" tabindex="-1">旋转<code>spin</code> <a class="header-anchor" href="#旋转spin" aria-label="Permalink to &quot;旋转\`spin\`&quot;">​</a></h3><p>设置 spin 开启旋转，传入数字控制旋转的速度，数字越小旋转越快</p>`,18),F=a("div",{style:{display:"flex"}},[a("r-icon",{name:"loading",size:"50",color:"#1E90FF",spin:"0.7"}),a("r-icon",{name:"loading",size:"50",color:"#1E90FF",spin:""}),a("r-icon",{name:"loading",size:"50",color:"#1E90FF",spin:"5"})],-1),d=e(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;loading&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;50&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#1E90FF&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">spin</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0.7&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;loading&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;50&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#1E90FF&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">spin</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;loading&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;50&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#1E90FF&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">spin</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;5&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">r-icon</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;loading&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;50&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#1E90FF&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">spin</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0.7&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;loading&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;50&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#1E90FF&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">spin</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;loading&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;50&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#1E90FF&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">spin</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;5&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">r-icon</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="图标列表" tabindex="-1">图标列表 <a class="header-anchor" href="#图标列表" aria-label="Permalink to &quot;图标列表&quot;">​</a></h2><div style="display:flex;align-items:center;justify-content:flex-start;flex-flow:row wrap;" id="icon-list"></div>`,3),q=[u,F,d];function g(t,o,l,s,n,p){return r(),E("div",null,q)}const C=c(i,[["render",g]]);export{h as __pageData,C as default};