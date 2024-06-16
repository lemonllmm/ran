import{_ as s,o as a,c as t,a6 as i}from"./chunks/framework.BZEwi-oL.js";const u=JSON.parse('{"title":"formatJson","description":"","frontmatter":{},"headers":[],"relativePath":"src/ranuts/utils/formatJson.md","filePath":"src/ranuts/utils/formatJson.md","lastUpdated":1718521444000}'),n={name:"src/ranuts/utils/formatJson.md"},e=i(`<h1 id="formatjson" tabindex="-1">formatJson <a class="header-anchor" href="#formatjson" aria-label="Permalink to &quot;formatJson&quot;">​</a></h1><p>Pass in a JSON or JSON string, add Spaces and newlines to return a formatted JSON string</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="return" tabindex="-1">Return <a class="header-anchor" href="#return" aria-label="Permalink to &quot;Return&quot;">​</a></h3><table tabindex="0"><thead><tr><th>argument</th><th>Instructions</th><th>type</th></tr></thead><tbody><tr><td><code>string</code></td><td>Return an object</td><td><code>Object</code></td></tr></tbody></table><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h3><table tabindex="0"><thead><tr><th>argument</th><th>Instructions</th><th>type</th><th>Default value</th></tr></thead><tbody><tr><td>json</td><td>JSON objects that need to be formatted</td><td><code>object</code>,<code>string</code></td><td>null</td></tr><tr><td>callback</td><td>Error callback, optional</td><td><code>function</code></td><td>null</td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { formatJson } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ranuts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;chaxus&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  age: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> formatJson</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(json);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span></code></pre></div>`,9),l=[e];function h(r,o,d,p,k,c){return a(),t("div",null,l)}const g=s(n,[["render",h]]);export{u as __pageData,g as default};