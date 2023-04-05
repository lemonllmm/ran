import{_ as t,c as e,o as d,a}from"./app.14497a51.js";const b=JSON.parse('{"title":"\u901A\u7528\u51FD\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"filterObj","slug":"filterobj","link":"#filterobj","children":[{"level":3,"title":"API","slug":"api","link":"#api","children":[]}]}],"relativePath":"src/ranuts/utils/index.md","lastUpdated":1680692044000}'),r={name:"src/ranuts/utils/index.md"},o=a('<h1 id="\u901A\u7528\u51FD\u6570" tabindex="-1">\u901A\u7528\u51FD\u6570 <a class="header-anchor" href="#\u901A\u7528\u51FD\u6570" aria-hidden="true">#</a></h1><h2 id="filterobj" tabindex="-1">filterObj <a class="header-anchor" href="#filterobj" aria-hidden="true">#</a></h2><p>\u8FC7\u6EE4\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u53BB\u9664\u5BF9\u8C61\u4E2D\u5728 list \u6570\u7EC4\u91CC\u9762\u6709\u7684\u5C5E\u6027\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF0C\u4E00\u822C\u662F\u7528\u4E8E\u53BB\u9664\u7A7A\u5B57\u7B26\u548C null</p><h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><h4 id="return" tabindex="-1">Return <a class="header-anchor" href="#return" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>run</td><td>\u542F\u52A8\u8F6E\u8BE2</td><td><code>(...params: TParams) =&gt; void</code></td></tr><tr><td>runAsync</td><td>\u542F\u52A8\u8F6E\u8BE2</td><td><code>(...params: TParams) =&gt; Promise&lt;TData&gt;</code></td></tr><tr><td>cancel</td><td>\u505C\u6B62\u8F6E\u8BE2</td><td><code>() =&gt; void</code></td></tr></tbody></table><h4 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>pollingInterval</td><td>\u8F6E\u8BE2\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002\u5982\u679C\u503C\u5927\u4E8E 0\uFF0C\u5219\u542F\u52A8\u8F6E\u8BE2\u6A21\u5F0F\u3002</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>pollingWhenHidden</td><td>\u5728\u9875\u9762\u9690\u85CF\u65F6\uFF0C\u662F\u5426\u7EE7\u7EED\u8F6E\u8BE2\u3002\u5982\u679C\u8BBE\u7F6E\u4E3A false\uFF0C\u5728\u9875\u9762\u9690\u85CF\u65F6\u4F1A\u6682\u65F6\u505C\u6B62\u8F6E\u8BE2\uFF0C\u9875\u9762\u91CD\u65B0\u663E\u793A\u65F6\u7EE7\u7EED\u4E0A\u6B21\u8F6E\u8BE2\u3002</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>pollingErrorRetryCount</td><td>\u8F6E\u8BE2\u9519\u8BEF\u91CD\u8BD5\u6B21\u6570\u3002\u5982\u679C\u8BBE\u7F6E\u4E3A -1\uFF0C\u5219\u65E0\u9650\u6B21</td><td><code>number</code></td><td><code>-1</code></td></tr></tbody></table>',8),i=[o];function n(h,c,l,s,_,p){return d(),e("div",null,i)}const f=t(r,[["render",n]]);export{b as __pageData,f as default};