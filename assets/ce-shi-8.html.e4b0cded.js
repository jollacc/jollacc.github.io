import{_ as l,r as e,o as h,c as r,a as d,d as s,w as n,b as t,e as a}from"./app.33c14a1a.js";const u={},c=a('<h2 id="回顾" tabindex="-1"><a class="header-anchor" href="#回顾" aria-hidden="true">#</a> 回顾：</h2><ul><li>文件管理、用户管理、权限管理、bash的基础特性； <ul><li><p>文件管理：cp、mv、rm；</p></li><li><p>用户管理：</p><ul><li><p>useradd、usermod、chsh、chfn、chage、userdel</p></li><li><p>groupad、groupmod、groupdel</p></li><li><p>passwd、gpasswd，pwck；</p></li><li><p>id、finger、who、shoami、w</p></li><li><p>su</p></li><li><p>配置文件：/etc/passwd，/etc/shadow，/etc/group，/etc/gshadow；</p></li></ul></li><li><p>权限配置：</p><ul><li>perm mode(rwxrwxrwx)，ownership；</li><li>chmod</li><li>chown</li><li>chgrp <ul><li>-R，--reference=RFILE</li></ul></li><li>FILE：666-umask</li><li>DIR：777-umask</li></ul></li><li><p>bash基础特性：</p><ul><li>命令行展开：~，{}</li><li>命令别名：alias/ualias</li><li>历史命令：history</li><li>命令和路径补全：$PATH</li><li>glob：*，?，[]，[^]</li><li>快捷键：Ctrl+{a,e,l,c,u,k}</li><li>命令hash：hash</li></ul></li></ul></li></ul>',2),o=a('<h2 id="bash的基础特性-3" tabindex="-1"><a class="header-anchor" href="#bash的基础特性-3" aria-hidden="true">#</a> bash的基础特性（3）</h2><h3 id="_1、提供了编程环境" tabindex="-1"><a class="header-anchor" href="#_1、提供了编程环境" aria-hidden="true">#</a> 1、提供了编程环境：</h3><h4 id="程序-指令-数据" tabindex="-1"><a class="header-anchor" href="#程序-指令-数据" aria-hidden="true">#</a> 程序：指令+数据；</h4><h4 id="程序编程风格" tabindex="-1"><a class="header-anchor" href="#程序编程风格" aria-hidden="true">#</a> 程序编程风格：</h4><h5 id="过程式-以指令为中心-数据服务于指令" tabindex="-1"><a class="header-anchor" href="#过程式-以指令为中心-数据服务于指令" aria-hidden="true">#</a> 过程式：以指令为中心，数据服务于指令；</h5><h5 id="对象式-以数据为中心-指令服务于数据" tabindex="-1"><a class="header-anchor" href="#对象式-以数据为中心-指令服务于数据" aria-hidden="true">#</a> 对象式：以数据为中心，指令服务于数据；</h5><h4 id="shell程序-提供编程能力-解释执行" tabindex="-1"><a class="header-anchor" href="#shell程序-提供编程能力-解释执行" aria-hidden="true">#</a> shell程序：提供编程能力，解释执行；</h4><h4 id="程序编程方式" tabindex="-1"><a class="header-anchor" href="#程序编程方式" aria-hidden="true">#</a> 程序编程方式：</h4><h5 id="计算机-运行二进制指令" tabindex="-1"><a class="header-anchor" href="#计算机-运行二进制指令" aria-hidden="true">#</a> 计算机：运行二进制指令；</h5><h5 id="编程语言" tabindex="-1"><a class="header-anchor" href="#编程语言" aria-hidden="true">#</a> 编程语言：</h5><h6 id="低级-汇编" tabindex="-1"><a class="header-anchor" href="#低级-汇编" aria-hidden="true">#</a> 低级：汇编；</h6><h6 id="高级" tabindex="-1"><a class="header-anchor" href="#高级" aria-hidden="true">#</a> 高级：</h6><ul><li>编译：高级语言--&gt;编译器--&gt;目标代码；</li><li>解释：高级语言--&gt;解释器--&gt;机器代码； <ul><li>shell、perl、Python；</li></ul></li></ul><h5 id="过程式编程" tabindex="-1"><a class="header-anchor" href="#过程式编程" aria-hidden="true">#</a> 过程式编程：</h5><h6 id="顺序执行" tabindex="-1"><a class="header-anchor" href="#顺序执行" aria-hidden="true">#</a> 顺序执行；</h6><h6 id="循环执行" tabindex="-1"><a class="header-anchor" href="#循环执行" aria-hidden="true">#</a> 循环执行；</h6><h6 id="选择执行" tabindex="-1"><a class="header-anchor" href="#选择执行" aria-hidden="true">#</a> 选择执行；</h6><ul><li><p>shell编程：过程式、解释执行；</p><ul><li><p>编程语言基本结构：</p><ul><li>数据存储：变量、数组；</li><li>表达式；</li><li>语句</li></ul></li></ul></li></ul><h4 id="shell脚本-文本文件" tabindex="-1"><a class="header-anchor" href="#shell脚本-文本文件" aria-hidden="true">#</a> shell脚本：文本文件；</h4><h5 id="shebang" tabindex="-1"><a class="header-anchor" href="#shebang" aria-hidden="true">#</a> shebang：</h5><ul><li>#!/bin/bash</li><li>#!/usr/bin/python</li><li>#!/usr/bin/perl</li></ul><h5 id="magic-number-魔数" tabindex="-1"><a class="header-anchor" href="#magic-number-魔数" aria-hidden="true">#</a> magic number：魔数；</h5><h5 id="运行脚本" tabindex="-1"><a class="header-anchor" href="#运行脚本" aria-hidden="true">#</a> 运行脚本：</h5><ol><li>给与执行权限，通过集体的文件路径指定文件执行；</li><li>直接运行解释器，将脚本作为解释器程序的参数运行；</li></ol><h5 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量：</h5><h6 id="命名的内存空间" tabindex="-1"><a class="header-anchor" href="#命名的内存空间" aria-hidden="true">#</a> 命名的内存空间：</h6><h6 id="数据的储存方式-ascii" tabindex="-1"><a class="header-anchor" href="#数据的储存方式-ascii" aria-hidden="true">#</a> 数据的储存方式：ASCII</h6><ul><li><p>字符：110-&gt;24；</p></li><li><p>数值：110-&gt;8；</p><ul><li>整数；</li><li>浮点数；</li></ul></li></ul><h6 id="变量-变量类型" tabindex="-1"><a class="header-anchor" href="#变量-变量类型" aria-hidden="true">#</a> 变量：变量类型；</h6><ul><li><p>作用：</p><ol><li>数据储存格式；</li><li>参与的运算；</li><li>表示数据的范围；</li></ol></li><li><p>类型：</p><ul><li><p>字符；</p></li><li><p>数值：</p><ul><li>整数型；</li><li>浮点型；</li></ul></li></ul></li><li><p>编程程序语言：</p><ul><li>强类型：</li><li>弱类型：bash； <ul><li>bash脚本： <ul><li>把所以要储存的数据统统当作字符进行；</li><li>不支持浮点数</li></ul></li></ul></li></ul></li></ul><h5 id="逻辑运算" tabindex="-1"><a class="header-anchor" href="#逻辑运算" aria-hidden="true">#</a> 逻辑运算：</h5><h6 id="ture-0" tabindex="-1"><a class="header-anchor" href="#ture-0" aria-hidden="true">#</a> ture：0</h6><h6 id="false-1" tabindex="-1"><a class="header-anchor" href="#false-1" aria-hidden="true">#</a> false：1</h6><h6 id="与" tabindex="-1"><a class="header-anchor" href="#与" aria-hidden="true">#</a> 与：&amp;&amp;</h6><ul><li>1 &amp;&amp; 1 = 1</li><li>1 &amp;&amp; 0 = 0</li><li>0 &amp;&amp; 1 = 0</li><li>0 &amp;&amp; 0 = 0</li></ul><h6 id="或" tabindex="-1"><a class="header-anchor" href="#或" aria-hidden="true">#</a> 或：||</h6><ul><li>1 || 1= 1</li><li>1 || 0= 1</li><li>0 || 1= 1</li><li>0 || 0 = 0</li></ul><p>非：！</p><ul><li>!1 = 0</li><li>!0 = 1</li></ul><h6 id="短路运算" tabindex="-1"><a class="header-anchor" href="#短路运算" aria-hidden="true">#</a> 短路运算：</h6><ul><li><p>与：</p><ul><li>第一个为0，结果必定为0；</li><li>第一个为1，第二个必须要参与运算；</li></ul></li><li><p>非：</p><ul><li>第一个为1，结果必定为1；</li><li>第一个为0，第二个必须参与运算；</li></ul></li></ul><p>结束；</p>',42);function p(b,f){const i=e("RouterLink");return h(),r("div",null,[c,d("p",null,[s(i,{to:"/ce-shi-68888.html"},{default:n(()=>[t("我的测试#基本正则表达式元字符：")]),_:1})]),o])}const m=l(u,[["render",p],["__file","ce-shi-8.html.vue"]]);export{m as default};
