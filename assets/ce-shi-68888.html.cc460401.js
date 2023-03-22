import{_ as a,o as i,c as e,e as l}from"./app.33c14a1a.js";const r={},n=l(`<h2 id="grep" tabindex="-1"><a class="header-anchor" href="#grep" aria-hidden="true">#</a> grep：</h2><h3 id="linux上的文本处理三剑客" tabindex="-1"><a class="header-anchor" href="#linux上的文本处理三剑客" aria-hidden="true">#</a> Linux上的文本处理三剑客：</h3><h4 id="grep-文本过滤-模式-patterm-工具" tabindex="-1"><a class="header-anchor" href="#grep-文本过滤-模式-patterm-工具" aria-hidden="true">#</a> grep：文本过滤（模式：patterm）工具；</h4><ul><li>grep、egrep、fgrep；</li></ul><h4 id="sed-文本编辑" tabindex="-1"><a class="header-anchor" href="#sed-文本编辑" aria-hidden="true">#</a> sed：文本编辑；</h4><h4 id="awk-linux上实现gawk-文本报告生成器" tabindex="-1"><a class="header-anchor" href="#awk-linux上实现gawk-文本报告生成器" aria-hidden="true">#</a> awk：Linux上实现gawk，文本报告生成器；</h4><h3 id="grep-gloabl-search-regular-expression-and-ptint-out-the-line" tabindex="-1"><a class="header-anchor" href="#grep-gloabl-search-regular-expression-and-ptint-out-the-line" aria-hidden="true">#</a> grep：Gloabl search REgular expression and Ptint out the line；</h3><h5 id="作用-文本搜素工具-根据用户指定的-模式-对目标文本进行匹配检查-打印匹配到的行" tabindex="-1"><a class="header-anchor" href="#作用-文本搜素工具-根据用户指定的-模式-对目标文本进行匹配检查-打印匹配到的行" aria-hidden="true">#</a> 作用：文本搜素工具，根据用户指定的“模式”对目标文本进行匹配检查，打印匹配到的行；</h5><h6 id="模式-由正则表达式字符及文本字符编写的过滤条件" tabindex="-1"><a class="header-anchor" href="#模式-由正则表达式字符及文本字符编写的过滤条件" aria-hidden="true">#</a> 模式：由正则表达式字符及文本字符编写的过滤条件；</h6><h6 id="regexp-由一类特殊字符所编写的模式-其中有些字符不表示字符字面意义-而表示控制或通配的功能" tabindex="-1"><a class="header-anchor" href="#regexp-由一类特殊字符所编写的模式-其中有些字符不表示字符字面意义-而表示控制或通配的功能" aria-hidden="true">#</a> REGEXP：由一类特殊字符所编写的模式，其中有些字符不表示字符字面意义，而表示控制或通配的功能；</h6><h6 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类：</h6><ul><li>基本正则表达式：BRE；</li><li>拓展的正则表达式：ERE； <ul><li>grep -E ，egrep；</li></ul></li></ul><p>正则表达式引擎：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">..</span><span class="token punctuation">]</span> PATTERN <span class="token punctuation">[</span>FILE<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>选项：</p></li><li><p>--color=auto：对匹配到的文本着色显示；</p></li><li><p>-v ：显示不能被pattern匹配到的行；</p></li><li><p>-o：仅仅显示匹配到的字符串；</p></li><li><p>-q：静默模式，不输出任何信息；</p></li><li><p>-A # ：after，后#行；</p></li><li><p>-B # ：berfore，前#行；</p></li><li><p>-C # ：context，前后各#行；</p></li><li><p>-E：使用ERE；</p></li></ul><h3 id="基本正则表达式元字符" tabindex="-1"><a class="header-anchor" href="#基本正则表达式元字符" aria-hidden="true">#</a> 基本正则表达式元字符：</h3><h4 id="字符匹配" tabindex="-1"><a class="header-anchor" href="#字符匹配" aria-hidden="true">#</a> 字符匹配：</h4><ul><li><p>.：匹配任意单个字符；</p></li><li><p>[]：匹配范围内的任意单个字符；</p></li><li><p>[^]：匹配指定范围外的任意单个字符；</p><ul><li>[:digit:]、[:lower:]、[:upper:]、[:alpha:]、[:alnum:]、[:punct:]、[:space:]； ![[第一节 Linux文件查看及管理#专用字符集：]]</li></ul></li></ul><h4 id="次数匹配-用在指定次数的字符后面-用户指定前面字符要出现的次数" tabindex="-1"><a class="header-anchor" href="#次数匹配-用在指定次数的字符后面-用户指定前面字符要出现的次数" aria-hidden="true">#</a> 次数匹配：用在指定次数的字符后面，用户指定前面字符要出现的次数；</h4><ul><li><p>：匹配前面的字符任意次；</p><ul><li>比如： grep &quot;x*y&quot; <ul><li>abxy</li><li>xay</li><li>xxxxxxxy</li></ul></li></ul></li><li><p><strong>贪婪模式</strong>：默认按照最长匹配；</p></li><li><p>.*：任意长度，任意字符；</p></li><li><p>\\?：匹配前面的字符0次或1次；即前面的内容可有可无；</p></li><li><p>\\+：匹配前面的字符至少1次；</p></li><li><p>\\{m\\}：匹配前面的字符m次；</p></li><li><p>\\{m,n\\}：匹配前面的字符至少m次，至多n次；</p><ul><li>\\{0,m\\}：匹配前面字符至多m次；</li><li>\\{m,\\}：匹配前面字符至少m次</li></ul></li></ul><h4 id="位置锚定" tabindex="-1"><a class="header-anchor" href="#位置锚定" aria-hidden="true">#</a> 位置锚定：</h4><ul><li>^：行首锚定，用于模式的最左侧；</li><li>$：行尾锚定，用于模式的最右侧；</li><li>^PATTERN$：用于模式匹配整行； <ul><li>^$：空行；</li><li>^[:space:]*$：看起来的空行；</li></ul></li><li>\\&lt;或\\b：词首锚定，用于单词最左侧；</li><li>\\&gt;或\\b：此尾锚定，用于单词最右侧；</li><li>\\&lt;PATTERN\\&gt;：匹配整个单词；</li></ul><h4 id="分组" tabindex="-1"><a class="header-anchor" href="#分组" aria-hidden="true">#</a> 分组：</h4><ul><li><p>\\(\\)：将一个或多个字符捆绑在一起，当做一个整体进行处理；</p><ul><li>\\(xy\\)*ab</li></ul></li><li><p><strong>Note</strong>：分组括号中的模式匹配到内容会被正则表达式引擎记录于内部变量中，这些变量命名方式为：\\1，\\2，\\3，.....</p><ul><li>\\1：从左侧起第一个，第一个左括号以及与之匹配的有括号之间的模式所匹配的字符； <ul><li>\\(ab\\+\\(xy\\)*\\) <ul><li>\\1：ab+(xy)*</li><li>\\2：xy</li></ul></li></ul></li></ul></li><li><p>后项引用：引用前面分组括号中模式所匹配的字符，而非模式本身；</p></li></ul><h3 id="结束" tabindex="-1"><a class="header-anchor" href="#结束" aria-hidden="true">#</a> 结束；</h3>`,25),h=[n];function t(d,s){return i(),e("div",null,h)}const u=a(r,[["render",t],["__file","ce-shi-68888.html.vue"]]);export{u as default};