import{_ as t,o as e,c as d,a7 as a}from"./chunks/framework.A_XI1Ui1.js";const k=JSON.parse('{"title":"r-player 视频播放器","description":"","frontmatter":{},"headers":[],"relativePath":"cn/src/ranui/player/index.md","filePath":"cn/src/ranui/player/index.md","lastUpdated":1712244666000}'),r={name:"cn/src/ranui/player/index.md"},i=a('<h1 id="r-player-视频播放器" tabindex="-1">r-player 视频播放器 <a class="header-anchor" href="#r-player-视频播放器" aria-label="Permalink to &quot;r-player 视频播放器&quot;">​</a></h1><p>基于<code>hlsjs</code>和<code>web components</code>，让原生的标签<code>r-player</code>拥有统一的视频控件。 不采用<code>new Player(options)</code>的方式挂载到指定<code>dom</code>，视图的归视图，逻辑的归逻辑，所见及所得，更加直观。</p><ol><li>可拖拽进度条</li><li>音量控制</li><li>根据当前带宽自适应码率切换</li><li>手动清晰度切换</li><li>倍速播放</li><li>样式自定义覆盖</li><li><code>hls</code>协议标准加密视频播放</li><li>基于原生开发，可在所有框架运行，统一跨框架情况</li><li>各浏览器控件统一</li></ol><h2 id="代码演示" tabindex="-1">代码演示 <a class="header-anchor" href="#代码演示" aria-label="Permalink to &quot;代码演示&quot;">​</a></h2><r-player style="display:block;width:100%;max-width:600px;height:300px;" src="/ran/hls/example.m3u8"></r-player><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">r-player</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/ran/hls/example.m3u8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">r-player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="src" tabindex="-1">src <a class="header-anchor" href="#src" aria-label="Permalink to &quot;src&quot;">​</a></h3><p>视频的资源地址</p><h3 id="volume" tabindex="-1">volume <a class="header-anchor" href="#volume" aria-label="Permalink to &quot;volume&quot;">​</a></h3><p>设置初始音量，默认 0.5</p><h3 id="currenttime" tabindex="-1">currentTime <a class="header-anchor" href="#currenttime" aria-label="Permalink to &quot;currentTime&quot;">​</a></h3><p>设置初始播放时间，默认从头开始播放</p><h3 id="playbackrate" tabindex="-1">playbackRate <a class="header-anchor" href="#playbackrate" aria-label="Permalink to &quot;playbackRate&quot;">​</a></h3><p>设置倍速，默认 1.0</p><h3 id="debug" tabindex="-1">debug <a class="header-anchor" href="#debug" aria-label="Permalink to &quot;debug&quot;">​</a></h3><p>控制台会打印输出一些信息</p><h2 id="事件event" tabindex="-1">事件<code>event</code> <a class="header-anchor" href="#事件event" aria-label="Permalink to &quot;事件`event`&quot;">​</a></h2><h3 id="onchange" tabindex="-1">onchange <a class="header-anchor" href="#onchange" aria-label="Permalink to &quot;onchange&quot;">​</a></h3><p>监听任何播放器发生的变化，返回的值如下。</p><p>可通过这个方法获得<code>播放器的实例</code>。</p><p>活着通过<code>type</code>判断不同的事件类型，进行不同的操作</p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>type</td><td>发生变化的事件类型</td><td><code>string</code></td></tr><tr><td>data</td><td>事件的值</td><td><code>Object</code></td></tr><tr><td>currentTime</td><td>播放的当前时间</td><td><code>number</code></td></tr><tr><td>duration</td><td>视频的总时长</td><td><code>number</code></td></tr><tr><td>tag</td><td>播放器的实例</td><td><code>Element</code></td></tr></tbody></table><p>其中<code>type</code>类型有</p><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>canplay</td><td>浏览器可以播放媒体文件了，但估计没有足够的数据来支撑播放到结束，不必停下来进一步缓冲内容。</td></tr><tr><td>canplaythrough</td><td>浏览器估计它可以在不停止内容缓冲的情况下播放媒体直到结束。</td></tr><tr><td>complete</td><td>OfflineAudioContext 渲染完成。</td></tr><tr><td>durationchange</td><td>duration 属性的值改变时触发。</td></tr><tr><td>emptied</td><td>媒体内容变为空；例如，当这个 media 已经加载完成（或者部分加载完成），则发送此事件，并调用 load() 方法重新加载它。</td></tr><tr><td>ended</td><td>视频停止播放，因为 media 已经到达结束点。</td></tr><tr><td>loadedmetadata</td><td>已加载元数据。</td></tr><tr><td>progress</td><td>在浏览器加载资源时周期性触发。</td></tr><tr><td>ratechange</td><td>播放速率发生变化。</td></tr><tr><td>seeked</td><td>跳帧（seek）操作完成。</td></tr><tr><td>seeking</td><td>跳帧（seek）操作开始。</td></tr><tr><td>stalled</td><td>用户代理（user agent）正在尝试获取媒体数据，但数据意外未出现。</td></tr><tr><td>suspend</td><td>媒体数据加载已暂停。</td></tr><tr><td>loadeddata</td><td>media 中的首帧已经完成加载。</td></tr><tr><td>timeupdate</td><td>currentTime 属性指定的时间发生变化。</td></tr><tr><td>volumechange</td><td>音量发生变化。</td></tr><tr><td>waiting</td><td>由于暂时缺少数据，播放已停止。</td></tr><tr><td>play</td><td>播放已开始。</td></tr><tr><td>playing</td><td>由于缺乏数据而暂停或延迟后，播放准备开始。</td></tr><tr><td>pause</td><td>播放已暂停。</td></tr><tr><td>volume</td><td>音量发生变化。</td></tr><tr><td>fullscreen</td><td>触发全屏事件</td></tr></tbody></table>',25),l=[i];function o(s,n,h,c,p,u){return e(),d("div",null,l)}const b=t(r,[["render",o]]);export{k as __pageData,b as default};
