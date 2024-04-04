import{_ as t,o as d,c as a,a7 as r}from"./chunks/framework.A_XI1Ui1.js";const u=JSON.parse('{"title":"OCR","description":"","frontmatter":{},"headers":[],"relativePath":"src/ranuts/utils/ocr.md","filePath":"src/ranuts/utils/ocr.md","lastUpdated":1712244666000}'),s={name:"src/ranuts/utils/ocr.md"},i=r(`<h1 id="ocr" tabindex="-1">OCR <a class="header-anchor" href="#ocr" aria-label="Permalink to &quot;OCR&quot;">​</a></h1><p>Pass in the image and the corresponding language type, and return the text in the image.</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="return" tabindex="-1">Return <a class="header-anchor" href="#return" aria-label="Permalink to &quot;Return&quot;">​</a></h3><table><thead><tr><th>argument</th><th>Instructions</th><th>type</th></tr></thead><tbody><tr><td><code>success</code></td><td>Whether the resolution is successful</td><td><code>boolean</code></td></tr><tr><td><code>data</code></td><td>The object is parsed successfully</td><td><code>obj</code></td></tr><tr><td><code>message</code></td><td>Analyze the reasons for success or failure</td><td><code>string</code></td></tr></tbody></table><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h3><table><thead><tr><th>argument</th><th>Instructions</th><th>type</th><th>Default value</th></tr></thead><tbody><tr><td>images</td><td>An array of images, supporting &#39;url&#39; and &#39;base64&#39;</td><td><code>Array&lt;string&gt;</code></td><td>null</td></tr><tr><td>language</td><td>Specify the language in which the text will be generated<a href="#lang-code">lang-code</a></td><td><code>string</code></td><td>无</td></tr><tr><td>langPath</td><td>When using it, you need to be able to access cdn.jsdelivr.net, which will download the corresponding language package, if you cannot access it, you can also put the language package locally, passing the corresponding <strong>directory</strong> path</td><td><code>string</code></td><td>This parameter is optional. By default, download from the network</td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ocr } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ranuts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> images</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://chaxus.github.io/ran/ocr/eng.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> languages</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;eng&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ocr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ images, language }).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res.data?.[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].data.text);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Mild Splendour of the various-vested Night!</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Mother of wildly-working visions! hail</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// I watch thy gliding, while with watery light</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Thy weak eye glimmers through a fleecy veil;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// And when thou lovest thy pale orb to shroud</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Behind the gather’d blackness lost on high;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// And when thou dartest from the wind-rent cloud</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Thy placid lightning o’er the awaken’d sky.</span></span></code></pre></div><h2 id="lang-code" tabindex="-1">Lang Code <a class="header-anchor" href="#lang-code" aria-label="Permalink to &quot;Lang Code&quot;">​</a></h2><table><thead><tr><th>Lang Code</th><th>Language</th></tr></thead><tbody><tr><td>afr</td><td>Afrikaans</td></tr><tr><td>amh</td><td>Amharic</td></tr><tr><td>ara</td><td>Arabic</td></tr><tr><td>asm</td><td>Assamese</td></tr><tr><td>aze</td><td>Azerbaijani</td></tr><tr><td>aze_cyrl</td><td>Azerbaijani - Cyrillic</td></tr><tr><td>bel</td><td>Belarusian</td></tr><tr><td>ben</td><td>Bengali</td></tr><tr><td>bod</td><td>Tibetan</td></tr><tr><td>bos</td><td>Bosnian</td></tr><tr><td>bul</td><td>Bulgarian</td></tr><tr><td>cat</td><td>Catalan; Valencian</td></tr><tr><td>ceb</td><td>Cebuano</td></tr><tr><td>ces</td><td>Czech</td></tr><tr><td>chi_sim</td><td>Chinese - Simplified</td></tr><tr><td>chi_tra</td><td>Chinese - Traditional</td></tr><tr><td>chr</td><td>Cherokee</td></tr><tr><td>cym</td><td>Welsh</td></tr><tr><td>dan</td><td>Danish</td></tr><tr><td>deu</td><td>German</td></tr><tr><td>dzo</td><td>Dzongkha</td></tr><tr><td>ell</td><td>Greek, Modern (1453-)</td></tr><tr><td>eng</td><td>English</td></tr><tr><td>enm</td><td>English, Middle (1100-1500)</td></tr><tr><td>epo</td><td>Esperanto</td></tr><tr><td>est</td><td>Estonian</td></tr><tr><td>eus</td><td>Basque</td></tr><tr><td>fas</td><td>Persian</td></tr><tr><td>fin</td><td>Finnish</td></tr><tr><td>fra</td><td>French</td></tr><tr><td>frk</td><td>German Fraktur</td></tr><tr><td>frm</td><td>French, Middle (ca. 1400-1600)</td></tr><tr><td>gle</td><td>Irish</td></tr><tr><td>glg</td><td>Galician</td></tr><tr><td>grc</td><td>Greek, Ancient (-1453)</td></tr><tr><td>guj</td><td>Gujarati</td></tr><tr><td>hat</td><td>Haitian; Haitian Creole</td></tr><tr><td>heb</td><td>Hebrew</td></tr><tr><td>hin</td><td>Hindi</td></tr><tr><td>hrv</td><td>Croatian</td></tr><tr><td>hun</td><td>Hungarian</td></tr><tr><td>iku</td><td>Inuktitut</td></tr><tr><td>ind</td><td>Indonesian</td></tr><tr><td>isl</td><td>Icelandic</td></tr><tr><td>ita</td><td>Italian</td></tr><tr><td>ita_old</td><td>Italian - Old</td></tr><tr><td>jav</td><td>Javanese</td></tr><tr><td>jpn</td><td>Japanese</td></tr><tr><td>kan</td><td>Kannada</td></tr><tr><td>kat</td><td>Georgian</td></tr><tr><td>kat_old</td><td>Georgian - Old</td></tr><tr><td>kaz</td><td>Kazakh</td></tr><tr><td>khm</td><td>Central Khmer</td></tr><tr><td>kir</td><td>Kirghiz; Kyrgyz</td></tr><tr><td>kor</td><td>Korean</td></tr><tr><td>kur</td><td>Kurdish</td></tr><tr><td>lao</td><td>Lao</td></tr><tr><td>lat</td><td>Latin</td></tr><tr><td>lav</td><td>Latvian</td></tr><tr><td>lit</td><td>Lithuanian</td></tr><tr><td>mal</td><td>Malayalam</td></tr><tr><td>mar</td><td>Marathi</td></tr><tr><td>mkd</td><td>Macedonian</td></tr><tr><td>mlt</td><td>Maltese</td></tr><tr><td>msa</td><td>Malay</td></tr><tr><td>mya</td><td>Burmese</td></tr><tr><td>nep</td><td>Nepali</td></tr><tr><td>nld</td><td>Dutch; Flemish</td></tr><tr><td>nor</td><td>Norwegian</td></tr><tr><td>ori</td><td>Oriya</td></tr><tr><td>pan</td><td>Panjabi; Punjabi</td></tr><tr><td>pol</td><td>Polish</td></tr><tr><td>por</td><td>Portuguese</td></tr><tr><td>pus</td><td>Pushto; Pashto</td></tr><tr><td>ron</td><td>Romanian; Moldavian; Moldovan</td></tr><tr><td>rus</td><td>Russian</td></tr><tr><td>san</td><td>Sanskrit</td></tr><tr><td>sin</td><td>Sinhala; Sinhalese</td></tr><tr><td>slk</td><td>Slovak</td></tr><tr><td>slv</td><td>Slovenian</td></tr><tr><td>spa</td><td>Spanish; Castilian</td></tr><tr><td>spa_old</td><td>Spanish; Castilian - Old</td></tr><tr><td>sqi</td><td>Albanian</td></tr><tr><td>srp</td><td>Serbian</td></tr><tr><td>srp_latn</td><td>Serbian - Latin</td></tr><tr><td>swa</td><td>Swahili</td></tr><tr><td>swe</td><td>Swedish</td></tr><tr><td>syr</td><td>Syriac</td></tr><tr><td>tam</td><td>Tamil</td></tr><tr><td>tel</td><td>Telugu</td></tr><tr><td>tgk</td><td>Tajik</td></tr><tr><td>tgl</td><td>Tagalog</td></tr><tr><td>tha</td><td>Thai</td></tr><tr><td>tir</td><td>Tigrinya</td></tr><tr><td>tur</td><td>Turkish</td></tr><tr><td>uig</td><td>Uighur; Uyghur</td></tr><tr><td>ukr</td><td>Ukrainian</td></tr><tr><td>urd</td><td>Urdu</td></tr><tr><td>uzb</td><td>Uzbek</td></tr><tr><td>uzb_cyrl</td><td>Uzbek - Cyrillic</td></tr><tr><td>vie</td><td>Vietnamese</td></tr><tr><td>yid</td><td>Yiddish</td></tr></tbody></table>`,11),e=[i];function n(l,h,o,p,k,c){return d(),a("div",null,e)}const y=t(s,[["render",n]]);export{u as __pageData,y as default};
