(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{273:function(v,_,l){"use strict";l.r(_);var t=l(13),a=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"notes"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[v._v("#")]),v._v(" NOTES")]),v._v(" "),_("h2",{attrs:{id:"d1-基本操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d1-基本操作"}},[v._v("#")]),v._v(" D1 基本操作")]),v._v(" "),_("ul",[_("li",[v._v("模式\n"),_("ul",[_("li",[v._v("normal模式 insert模式")])])]),v._v(" "),_("li",[v._v("基本移动 上下左右 HJKL")]),v._v(" "),_("li",[v._v("插入文字 i光标后方 a光标前方")]),v._v(" "),_("li",[v._v("出insert模式")]),v._v(" "),_("li",[v._v("在终端中如何退出\n"),_("ul",[_("li",[v._v(":wq 保存并退出  :q! 强制退出")])])]),v._v(" "),_("li",[v._v("ctrl和caps调换位置")]),v._v(" "),_("li",[v._v("系统键盘修改修饰键")]),v._v(" "),_("li",[v._v("快速移动\n"),_("ul",[_("li",[v._v("配置 以及 修改键盘设置")])])])]),v._v(" "),_("blockquote",[_("p",[v._v("tips： 习惯insert完立即回到Norma模式")])]),v._v(" "),_("h2",{attrs:{id:"d2-行的操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d2-行的操作"}},[v._v("#")]),v._v(" D2 行的操作")]),v._v(" "),_("ul",[_("li",[v._v("行的移动 ( normal模式下)\n行首：^ 改键 H\n行尾：g_ 改键 L\n由于输入时经常想移动光标，于是就将insert模式下的光标移动改为了 ctrl + hjkl。")]),v._v(" "),_("li",[v._v("行的插入\n行首插入 A\n行尾插入 I\n行前 O （换行）\n行后 o  （换行）")]),v._v(" "),_("li",[v._v("复制粘贴\n复制行 yy\n删除行 dd （可以粘贴）\n粘贴 p")])]),v._v(" "),_("h2",{attrs:{id:"d3-删除复制和基于单词的移动"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d3-删除复制和基于单词的移动"}},[v._v("#")]),v._v(" D3 删除复制和基于单词的移动")]),v._v(" "),_("ul",[_("li",[v._v("vim的语法\n定义：操作符 + 动作 （区域范围、使用移动的一些动作）")]),v._v(" "),_("li",[v._v("操作\n· 删除 d (hjkl/ H/ L/ webge/ )\n· 删除后进入insert模式 c\n· 复制 y")]),v._v(" "),_("li",[v._v("基于单词和字串的移动\n单词的定义： 单词与符号都认定为单个单词\n字串的定义： 以空格分割的一串字符\n"),_("ul",[_("li",[v._v("基于单词的移动\ne 单词结尾 往后\nw 单词开头 往后\nb 单词开头 往前\nge 单词结尾 往前")]),v._v(" "),_("li",[v._v("基于字串的移动\nE 字串结尾 往后\nW 字串开头 往后\nB 字串开头 往前\nGE 字串结尾 往前")])])]),v._v(" "),_("li",[v._v("组合\n"),_("ul",[_("li",[v._v("cw 删除当前单词")]),v._v(" "),_("li",[v._v("ea 在当前单词结尾处添加")])])])]),v._v(" "),_("h2",{attrs:{id:"d4-快捷删除和替换、撤销"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d4-快捷删除和替换、撤销"}},[v._v("#")]),v._v(" D4 快捷删除和替换、撤销")]),v._v(" "),_("p",[v._v("x 删除当前光标字符\nX 删除光标前的字符\ns 删除光标字符后进入insert模式\nS 删除当前行后进入insert模式\nr+【输入】 替换字符\nR+【输入多个字符】替换多个字符\nundo 和 redo\nu 撤销\nC + r 撤回撤销")]),v._v(" "),_("h2",{attrs:{id:"d5-可视化模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d5-可视化模式"}},[v._v("#")]),v._v(" D5 可视化模式")]),v._v(" "),_("p",[v._v("v 进入可视化模式;\nV 以行为单位;\nC + v 以块为单位;")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("退出可视化模式\nesc C+[ 退出\nv V 退出")])]),v._v(" "),_("li",[_("p",[v._v("选定范围\n配合动作\no 切换开始的光标位置\ngv 回到上一次选中区域")])]),v._v(" "),_("li",[_("p",[v._v("技巧\n跨多行同时操作 选中后A I d ...\n复制粘贴 利用")])])]),v._v(" "),_("h2",{attrs:{id:"d6-文本对象-范围"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d6-文本对象-范围"}},[v._v("#")]),v._v(" D6 文本对象 （范围）")]),v._v(" "),_("blockquote",[_("p",[v._v("释义：\n操作 + 内/外部 + 文本对象\n内部 i\n外部 a")])]),v._v(" "),_("p",[_("strong",[v._v("w 一个单词")]),v._v(" "),_("strong",[v._v("b  一对括号")]),v._v(" "),_("strong",[v._v("B  一对{}")]),v._v("\n() 一对括号\n{} 一对{}\n<> 一对<>\n其他符号类推\n"),_("strong",[v._v("t xml标签")]),v._v("\ns 一个句子\np 一个段落")]),v._v(" "),_("p",[v._v("vim-textobj-arguments function参数")]),v._v(" "),_("blockquote",[_("p",[v._v("ia 不包含分隔符\naa 包含分隔符\n删除一个参数 daa\n修改一个参数 cia")])]),v._v(" "),_("p",[v._v("vim-textobj-entire")]),v._v(" "),_("blockquote",[_("p",[v._v("aa 删除当前文本所有\nia 删除当前文本所有 不包含前面和后面空格")])]),v._v(" "),_("h2",{attrs:{id:"d7-滚动"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d7-滚动"}},[v._v("#")]),v._v(" D7 滚动")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("C + f 向下滚动一屏")])]),v._v(" "),_("li",[_("p",[v._v("C + B 向上滚动一屏")])]),v._v(" "),_("li",[_("p",[v._v("C + d 向下滚动半屏")])]),v._v(" "),_("li",[_("p",[v._v("C + u 向上滚动半屏")])]),v._v(" "),_("li",[_("p",[v._v("C + e 向下滚动一行")])]),v._v(" "),_("li",[_("p",[v._v("C + y 向上滚动一行")])]),v._v(" "),_("li",[_("p",[v._v("基于配置（更容易记忆）")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("上五行 K")])]),v._v(" "),_("li",[_("strong",[v._v("下五行 J")])])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("zz 将当前行置于屏幕中央")])])]),v._v(" "),_("li",[_("p",[v._v("zt 当前行置于屏幕顶部附近")])]),v._v(" "),_("li",[_("p",[v._v("zb 将当前行置于屏幕底部附近")])]),v._v(" "),_("li",[_("p",[v._v("gg 跳转到文件首")])]),v._v(" "),_("li",[_("p",[v._v("G 跳转到文件尾")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("行数 + gg / G 跳转到指定行")])])])]),v._v(" "),_("h2",{attrs:{id:"d8-搜索"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d8-搜索"}},[v._v("#")]),v._v(" D8 搜索")]),v._v(" "),_("ul",[_("li",[v._v("f 正向移动到下一个（char）所在之处")]),v._v(" "),_("li",[v._v("F 反向向移动到下一个（char）所在之处")]),v._v(" "),_("li",[v._v("t 正向移动到下一个（char）字符之前")]),v._v(" "),_("li",[v._v("T 反向移动到下一个（char）字符之前")])]),v._v(" "),_("blockquote",[_("p",[v._v("; 下一个\n, 上一个\n移动用f，配合c d等操作用t")])]),v._v(" "),_("ul",[_("li",[v._v("/ 向下全局查找")]),v._v(" "),_("li",[v._v("? 向上全局查找")])]),v._v(" "),_("blockquote",[_("p",[v._v("n/N 下一个/上一个\n/ + 方向键 查看搜索历史\n"),_("strong",[v._v("和操作使用")])])]),v._v(" "),_("ul",[_("li",[v._v("# 向上查当前光标所在单词")]),v._v(" "),_("li",[v._v("* 向下查当前光标所在单词")])]),v._v(" "),_("h2",{attrs:{id:"d9-更高效的移动-通过两个已经集成的插件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d9-更高效的移动-通过两个已经集成的插件"}},[v._v("#")]),v._v(" D9 更高效的移动 （通过两个已经集成的插件）")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("esaymotion （使用后会高亮可移动的位置）")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("<leader><leader> w  当前光标往后的word首")])]),v._v(" "),_("li",[_("p",[v._v("<leader><leader> e  当前光标往后的word尾")])]),v._v(" "),_("li",[_("p",[v._v("<leader><leader> b  当前光标往前的word首")])]),v._v(" "),_("li",[_("p",[v._v("<leader><leader> w  当前光标往后的word尾")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("<leader><leader> h  当前光标往前的word首+尾")])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("<leader><leader> l  当前光标往后的word首+尾")])])]),v._v(" "),_("li",[_("p",[v._v("<leader><leader> j  当前光标往后的行首")])]),v._v(" "),_("li",[_("p",[v._v("<leader><leader> k  当前光标往前的行首")])])])]),v._v(" "),_("li",[_("p",[v._v("sneak （通过两个字符全局搜索）")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("s + 2个字符 （改键后使用 f | F ）")])]),v._v(" "),_("li",[_("p",[v._v("改键")]),v._v(" "),_("ul",[_("li",[v._v("替换原生的f功能（比f更加强大、不用记这么多键）")]),v._v(" "),_("li",[v._v("利用映射实现原来的s/S/z/Z （与原来的s不冲突）")])])]),v._v(" "),_("li",[_("p",[v._v("在可视化visual模式下使用 v + f + 2个字符")])]),v._v(" "),_("li",[_("p",[v._v("在操作符下使用 v + f + 2字符")])])])])]),v._v(" "),_("h2",{attrs:{id:"d10-数字"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d10-数字"}},[v._v("#")]),v._v(" D10 数字")]),v._v(" "),_("ul",[_("li",[v._v("语法\n"),_("ul",[_("li",[v._v("操作符 + 数字 + 范围")]),v._v(" "),_("li",[v._v("数字 + 操作符 + 范围")])])])]),v._v(" "),_("h3",{attrs:{id:"点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#点"}},[v._v("#")]),v._v(" 点")]),v._v(" "),_("ul",[_("li",[v._v("重复上一次的修改 （增加、删除、更新）\n"),_("ul",[_("li",[v._v("例子：diw 删除单词，可用点重复")])])]),v._v(" "),_("li",[_("strong",[v._v("核心：一键移动一键操作")]),v._v(" "),_("ul",[_("li",[v._v("场景案例1： 句尾加分号")]),v._v(" "),_("li",[v._v("场景案例2： 手动查找替换")])])])]),v._v(" "),_("h2",{attrs:{id:"d11-多文件之间的跳转"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d11-多文件之间的跳转"}},[v._v("#")]),v._v(" D11 多文件之间的跳转")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("标记")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("mm 单文件")])]),v._v(" "),_("li",[_("strong",[v._v("mM 多文件")])])])]),v._v(" "),_("li",[_("p",[v._v("跳转")]),v._v(" "),_("ul",[_("li",[v._v("' 跳转到标记的行")]),v._v(" "),_("li",[v._v("` "),_("strong",[v._v("跳转到标记的行和列")])])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("gd 跳转到指定地方")])])])]),v._v(" "),_("blockquote",[_("p",[v._v("查看函数定义、使用的位置 （类似于vscode的跳转）\n"),_("strong",[v._v("可以跨文件使用")])])]),v._v(" "),_("ul",[_("li",[v._v("跳转历史\n"),_("ul",[_("li",[v._v("C + i 向前跳")]),v._v(" "),_("li",[v._v("C + o 向后跳")])])])]),v._v(" "),_("blockquote",[_("p",[v._v(":jumps 跳转的历史列表")])]),v._v(" "),_("h4",{attrs:{id:"d12-处理包裹字符的符号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d12-处理包裹字符的符号"}},[v._v("#")]),v._v(" D12 处理包裹字符的符号")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("cs+已经存在的符号+改变的符号  "),_("strong",[v._v("改变符号")])])]),v._v(" "),_("li",[_("p",[v._v("ys+范围+符号 "),_("strong",[v._v("用符号包裹字符")])])]),v._v(" "),_("li",[_("p",[v._v("ds+符号 "),_("strong",[v._v("删除符号")])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("可视化模式下")]),v._v(" S + 符号 "),_("strong",[v._v("用符号包裹字符")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);