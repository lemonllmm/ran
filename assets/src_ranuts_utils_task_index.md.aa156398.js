import{_ as e,c as t,o as a,a as s}from"./app.ce9b2832.js";const u=JSON.parse('{"title":"\u7EDF\u8BA1\u6267\u884C\u65F6\u95F4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00.startTask,taskEnd","slug":"\u4E00-starttask-taskend","link":"#\u4E00-starttask-taskend","children":[{"level":3,"title":"1.startTask","slug":"_1-starttask","link":"#_1-starttask","children":[]},{"level":3,"title":"2.taskEnd","slug":"_2-taskend","link":"#_2-taskend","children":[]},{"level":3,"title":"3.\u4F7F\u7528\u4F8B\u5B50","slug":"_3-\u4F7F\u7528\u4F8B\u5B50","link":"#_3-\u4F7F\u7528\u4F8B\u5B50","children":[]}]},{"level":2,"title":"\u4E8C.new Date().getTime()","slug":"\u4E8C-new-date-gettime","link":"#\u4E8C-new-date-gettime","children":[]},{"level":2,"title":"\u4E09.console.time(), console.timeEnd()","slug":"\u4E09-console-time-console-timeend","link":"#\u4E09-console-time-console-timeend","children":[]},{"level":2,"title":"\u56DB.performance.now()","slug":"\u56DB-performance-now","link":"#\u56DB-performance-now","children":[]}],"relativePath":"src/ranuts/utils/task/index.md","lastUpdated":1670681800000}'),n={name:"src/ranuts/utils/task/index.md"},o=s(`<h1 id="\u7EDF\u8BA1\u6267\u884C\u65F6\u95F4" tabindex="-1">\u7EDF\u8BA1\u6267\u884C\u65F6\u95F4 <a class="header-anchor" href="#\u7EDF\u8BA1\u6267\u884C\u65F6\u95F4" aria-hidden="true">#</a></h1><p>\u6709\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u9700\u8981\u7EDF\u8BA1\u4E00\u4E2A\u51FD\u6570\u7684\u6267\u884C\u65F6\u95F4\uFF0C\u7528\u4E8E\u5206\u6790\u6027\u80FD\u3002\u56E0\u6B64\u5C01\u88C5\u4E86<code>startTask</code>\u548C<code>taskEnd</code>\u51FD\u6570\u3002\u540C\u65F6\u4ECB\u7ECD\u5176\u4ED6\u4E09\u79CD\u7EDF\u8BA1\u65B9\u6CD5</p><ol><li><code>new Date().getTime()</code>,</li><li><code>console.time()</code> \u548C <code>console.timeEnd()</code>,</li><li><code>performance.now()</code></li></ol><h2 id="\u4E00-starttask-taskend" tabindex="-1">\u4E00.<code>startTask</code>,<code>taskEnd</code> <a class="header-anchor" href="#\u4E00-starttask-taskend" aria-hidden="true">#</a></h2><h3 id="_1-starttask" tabindex="-1">1.startTask <a class="header-anchor" href="#_1-starttask" aria-hidden="true">#</a></h3><p>\u4EFB\u52A1\u5F00\u59CB\u4E4B\u524D\u6267\u884C</p><h4 id="return" tabindex="-1">Return <a class="header-anchor" href="#return" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>taskId</td><td>\u4EFB\u52A1\u6807\u8BC6</td><td><code>unique symbol </code></td></tr></tbody></table><h3 id="_2-taskend" tabindex="-1">2.taskEnd <a class="header-anchor" href="#_2-taskend" aria-hidden="true">#</a></h3><p>\u4EFB\u52A1\u7ED3\u675F\u7684\u65F6\u5019\u6267\u884C\uFF0C\u9700\u8981\u4F20\u5165<code>startTask</code>\u8FD4\u56DE\u7684\u4EFB\u52A1\u6807\u8BC6</p><h4 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>taskId</td><td>\u4EFB\u52A1\u6807\u8BC6</td><td><code>unique symbol </code></td><td>\u65E0\u9ED8\u8BA4\u503C\uFF0C\u53C2\u6570\u5FC5\u4F20\uFF0C\u5426\u5219\u65E0\u6CD5\u8BC6\u522B\u662F\u54EA\u4E2A\u4EFB\u52A1</td></tr></tbody></table><h4 id="return-1" tabindex="-1">Return <a class="header-anchor" href="#return-1" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td><code>time</code></td><td><code>task</code>\u6267\u884C\u7684\u65F6\u95F4</td><td><code>number</code></td></tr></tbody></table><h3 id="_3-\u4F7F\u7528\u4F8B\u5B50" tabindex="-1">3.\u4F7F\u7528\u4F8B\u5B50 <a class="header-anchor" href="#_3-\u4F7F\u7528\u4F8B\u5B50" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> taskId </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">startTask</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// do something</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> time </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">taskEnd</span><span style="color:#A6ACCD;">(taskId)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">task \u6267\u884C\u82B1\u8D39\u7684\u65F6\u95F4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">time)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E8C-new-date-gettime" tabindex="-1">\u4E8C.new Date().getTime() <a class="header-anchor" href="#\u4E8C-new-date-gettime" aria-hidden="true">#</a></h2><p><code>new Date().getTime()</code> \u8FD4\u56DE\u4E00\u4E2A\u6570\u503C\uFF0C\u8868\u793A\u4ECE 1970 \u5E74 1 \u6708 1 \u65E5 0 \u65F6 0 \u5206 0 \u79D2\uFF08UTC\uFF0C\u5373\u534F\u8C03\u4E16\u754C\u65F6\uFF09\u8DDD\u79BB\u8BE5\u65E5\u671F\u5BF9\u8C61\u6240\u4EE3\u8868\u65F6\u95F4\u7684\u6BEB\u79D2\u6570\u3002\u7528\u6765\u8BA1\u7B97JS\u6267\u884C\u65F6\u95F4\u4F1A\u6709\u4E24\u4E2A\u95EE\u9898\uFF1A</p><ol><li>\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6BEB\u79D2\u7EA7\u7CBE\u5EA6\u53EF\u80FD\u4E0D\u591F\u3002</li><li><code>new Date()</code> \u89E3\u6790\u7684\u65F6\u95F4\u5728\u4E0D\u540C\u6D4F\u89C8\u5668\uFF0C\u6216\u8005\u4E0D\u540C\u8BBE\u5907\u4E0A\u53EF\u80FD\u5E76\u4E0D\u4E00\u81F4\u3002<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date" target="_blank" rel="noreferrer">MDN\u8BF4\u660E</a></li></ol><blockquote><p>\u7531\u4E8E\u6D4F\u89C8\u5668\u4E4B\u95F4\u7684\u5DEE\u5F02\u4E0E\u4E0D\u4E00\u81F4\u6027\uFF0C\u5F3A\u70C8\u4E0D\u63A8\u8350\u4F7F\u7528Date\u6784\u9020\u51FD\u6570\u6765\u89E3\u6790\u65E5\u671F\u5B57\u7B26\u4E32 (\u6216\u4F7F\u7528\u4E0E\u5176\u7B49\u4EF7\u7684Date.parse)\u3002\u5BF9 RFC 2822 \u683C\u5F0F\u7684\u65E5\u671F\u4EC5\u6709\u7EA6\u5B9A\u4FD7\u6210\u7684\u652F\u6301\u3002\u5BF9 ISO 8601 \u683C\u5F0F\u7684\u652F\u6301\u4E2D\uFF0C\u4EC5\u6709\u65E5\u671F\u7684\u4E32 (\u4F8B\u5982 &quot;1970-01-01&quot;) \u4F1A\u88AB\u5904\u7406\u4E3A UTC \u800C\u4E0D\u662F\u672C\u5730\u65F6\u95F4\uFF0C\u4E0E\u5176\u4ED6\u683C\u5F0F\u7684\u4E32\u7684\u5904\u7406\u4E0D\u540C\u3002</p></blockquote><h2 id="\u4E09-console-time-console-timeend" tabindex="-1">\u4E09.<code>console.time()</code>, <code>console.timeEnd()</code> <a class="header-anchor" href="#\u4E09-console-time-console-timeend" aria-hidden="true">#</a></h2><p>\u542F\u52A8\u4E00\u4E2A\u8BA1\u65F6\u5668\u6765\u8DDF\u8E2A\u67D0\u4E00\u4E2A\u64CD\u4F5C\u7684\u5360\u7528\u65F6\u957F\u3002\u6BCF\u4E00\u4E2A\u8BA1\u65F6\u5668\u5FC5\u987B\u62E5\u6709\u552F\u4E00\u7684\u540D\u5B57\uFF0C\u9875\u9762\u4E2D\u6700\u591A\u80FD\u540C\u65F6\u8FD0\u884C 10,000 \u4E2A\u8BA1\u65F6\u5668\u3002\u5F53\u4EE5\u6B64\u8BA1\u65F6\u5668\u540D\u5B57\u4E3A\u53C2\u6570\u8C03\u7528 console.timeEnd() \u65F6\uFF0C\u6D4F\u89C8\u5668\u5C06\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D\uFF0C\u8F93\u51FA\u5BF9\u5E94\u8BA1\u65F6\u5668\u6240\u7ECF\u8FC7\u7684\u65F6\u95F4\u3002\u6BD4\u8D77<code>new Date().getTime()</code>\uFF0C\u7EDF\u8BA1\u65F6\u95F4\u66F4\u52A0\u7CBE\u786E\uFF0C\u53EF\u4EE5\u7EDF\u8BA1\u52300.001\u6BEB\u79D2(\u6BD4\u5982\uFF1A0.134ms)</p><h2 id="\u56DB-performance-now" tabindex="-1">\u56DB.<code>performance.now()</code> <a class="header-anchor" href="#\u56DB-performance-now" aria-hidden="true">#</a></h2><p><code>performance.now()</code>\u8FD4\u56DE\u7684\u65F6\u95F4\u7CBE\u5EA6\u6700\u9AD8\u53EF\u8FBE\u5FAE\u79D2\u7EA7\uFF0C\u4E14\u4E0D\u4F1A\u53D7\u5230\u7CFB\u7EDF\u65F6\u95F4\u7684\u5F71\u54CD\uFF08\u7CFB\u7EDF\u65F6\u949F\u53EF\u80FD\u4F1A\u88AB\u624B\u52A8\u8C03\u6574\u6216\u88AB NTP \u7B49\u8F6F\u4EF6\u7BE1\u6539\uFF09\u3002\u53E6\u5916\uFF0C<code>performance.timing.navigationStart + performance.now()</code> \u7EA6\u7B49\u4E8E <code>Date.now()</code>\u3002\u56E0\u6B64\u5BF9\u4E8E\u7EDF\u8BA1JS\u6267\u884C\u8017\u65F6\u65B9\u9762\uFF0C\u66F4\u63A8\u8350\u4F7F\u7528<code>performance.now()</code>\u3002</p><blockquote><p>\u6CE8\u610F\uFF1A\u4E3A\u4E86\u63D0\u4F9B\u5BF9\u5B9A\u65F6\u653B\u51FB\u548C\u6307\u7EB9\u7684\u4FDD\u62A4\uFF0C<code>performance.now()</code> \u7684\u7CBE\u5EA6\u53EF\u80FD\u4F1A\u6839\u636E\u6D4F\u89C8\u5668\u7684\u8BBE\u7F6E\u800C\u88AB\u820D\u5F03\u3002 \u5728 <code>Firefox</code> \u4E2D\uFF0C<code>privacy.reduceTimerPrecision</code> \u504F\u597D\u662F\u9ED8\u8BA4\u542F\u7528\u7684\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>1ms</code>\u3002\u53EF\u4EE5\u542F\u7528 <code>privacy.resistFingerprinting</code> \u8FD9\u5C06\u7CBE\u5EA6\u6539\u4E3A 100ms \u6216<code>privacy.resistFingerprinting.reduceTimerPrecision.microseconds</code> \u7684\u503C\uFF0C\u4EE5\u8F83\u5927\u8005\u4E3A\u51C6\u3002</p></blockquote>`,25),d=[o];function r(c,l,i,p,h,m){return a(),t("div",null,d)}const _=e(n,[["render",r]]);export{u as __pageData,_ as default};
