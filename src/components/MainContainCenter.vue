<template>
    <div>
        <el-row type="flex" class="row-bg" justify="center" style="height:200px;">
            <el-col :span="16" height="auto">
                <el-carousel indicator-position="outside" height="150px">
                    <el-carousel-item v-for="pic in pics" :key="pic.id">
                        <el-image
                            style="width: 500px; height: 150px"
                            :src="pic"
                            fit="fill"
                        ></el-image>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light" height="auto">
                    <div id="pic2" v-for="pic in pics2" :key="pic.id">
                        <img :src="pic" alt="" style="width:100%;height:auto;">
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-card id="centerCard" v-for="i in 2" :key="i.id">
            <h5 class="title">
                <b>{{titles[0]}}</b>
            </h5>
            <div class="summ">
                <p>{{titles[1]}}</p>
            </div>
            <div class="message">
                <div>
                    <el-avatar :size="30" id="avatar">user</el-avatar>
                    <span style="font-size:20px;">你爹的小小鸡</span>
                </div>
                <div id="messagef">
                    <i class="el-icon-chat-line-square"></i>
                    <span>45645</span>
                    <span style="margin:0 5px;">|</span>
                    <i class="el-icon-view"></i>
                    <span>485354</span>
                </div>
            </div>
        </el-card>

        <el-collapse accordion style="margin-top:40px;text-align:left;border:2px solid #eee;" v-model="activeNames">
            <el-collapse-item name="1">
                <template slot="title">
                    <b style="font-size:20px;margin-left:20px;">什么是MVVM？</b>
                </template>
                <div style="padding:0 15px;">
                    <p class="p1" style="margin-top:5px;">MVVM是是Model-View-ViewModel的缩写，Model代表数据模型，定义数据操作的业务逻辑，View代表视图层，负责将数据模型渲染到页面上，ViewModel通过双向绑定把View和Model进行同步交互，不需要手动操作DOM的一种设计思想。</p>
                    <Mess/>
                </div>
            </el-collapse-item>
            <el-collapse-item name="2">
                <template slot="title">
                    <b style="font-size:20px;margin-left:20px;">MVVM和MVC区别？和其他框架(jquery)区别？那些场景适用？</b>
                </template>
                <div style="padding:0 15px;">
                    <p class="p1" style="margin-top:5px;">MVVM和MVC都是一种设计思想，主要就是MVC中的Controller演变成ViewModel,，MVVM主要通过数据来显示视图层而不是操作节点，解决了MVC中大量的DOM操作使页面渲染性能降低，加载速度慢，影响用户体验问题。主要用于数据操作比较多的场景。</p>
                    <Mess/>
                </div>             
            </el-collapse-item>
            <el-collapse-item name="3">
                <template slot="title">
                    <b style="font-size:20px;margin-left:20px;">v-show和v-if指令的共同点和不同点?</b>
                </template>
                <div style="padding:0 15px;">
                    <p class="p1" style="margin-top:5px;">v-show指令是通过修改元素的displayCSS属性让其显示或者隐藏。</p>
                    <p class="p1">v-if指令是直接销毁和重建DOM达到让元素显示和隐藏的效果。</p>
                    <Mess/>
                </div>
            </el-collapse-item>
            <el-collapse-item name="4">
                <template slot="title">
                    <b style="font-size:20px;margin-left:20px;">$route和$router的区别</b>
                </template>
                <div style="padding:0 15px;">
                    <p class="p1" style="margin-top:5px;">$route是“路由信息对象”，包括path，params，hash，query，fullPath，matched，name等路由信息参数。而$router是“路由实例”对象包括了路由的跳转方法，钩子函数等</p>
                    <Mess/>
                </div>
            </el-collapse-item>
            <el-collapse-item name="5">
                <template slot="title">
                    <b style="font-size:20px;margin-left:20px;">简述Vue的响应式原理</b>
                </template>
                <div style="padding:0 15px;">
                    <p class="p1" style="margin-top:5px;">当一个Vue实例创建时，vue会遍历data选项的属性，用 Object.defineProperty 将它们转为 getter/setter并且在内部追踪相关依赖，在属性被访问和修改时通知变化。</p>
                    <p class="p1">每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。</p>
                    <img :src="pics3" alt="">
                </div>
                <Mess style="margin-left:2em;"/>
            </el-collapse-item>
            <el-collapse-item name="6">
                <template slot="title">
                    <b style="font-size:20px;margin-left:20px;">vue-router 有哪几种导航钩子?</b>
                </template>
                <div style="padding:0 15px;">
                    <p class="p1" style="margin-top:5px;">三种</p>
                    <ul class="p1">
                        <li>全局导航钩子</li>
                        <li>router.beforeEach(to, from, next),</li>
                        <li>router.beforeResolve(to, from, next),</li>
                        <li>router.afterEach(to, from ,next)</li>
                        <li>组件内钩子</li>
                        <li>beforeRouteEnter,</li>
                        <li>beforeRouteUpdate,</li>
                        <li>beforeRouteLeave</li>
                        <li>单独路由独享组件</li>
                        <li>beforeEnter</li>
                    </ul>
                    <Mess style="margin-left:2em;"/>
                </div>                
            </el-collapse-item>
            <el-collapse-item name="7">
                <template slot="title">
                    <b style="font-size:20px;margin-left:20px;">vue 的双向绑定的原理是什么?</b>
                </template>      
                <div style="padding:0 15px;">
                    <p class="p1" style="margin-top:5px;">vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。</p>
                    <p class="p1">具体步骤：</p>
                    <p class="p1">第一步：需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter 和 getter 这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化</p>
                    <p class="p1">第二步：compile 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图</p>
                    <p class="p1">第三步：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁，主要做的事情是:</p>
                    <ul style="text-indent:4em;">
                        <li>在自身实例化时往属性订阅器(dep)里面添加自己</li>
                        <li>自身必须有一个 update()方法</li>
                        <li>待属性变动 dep.notice()通知时，能调用自身的 update() 方法，并触发 Compile 中绑定的回调，则功成身退</li>
                    </ul>
                    <p class="p1">第四步：MVVM 作为数据绑定的入口，整合 Observer、Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据 model 变更的双向绑定效果。</p>
                    <Mess/>
                </div>       
            </el-collapse-item>
            <el-collapse-item name="8">
                <template slot="title">
                    <b style="font-size:20px;margin-left:20px;">Vue 的父组件和子组件生命周期钩子函数执行顺序?</b>
                </template>
				<div style="padding:0 15px;">
					<p class="p1" style="margin-top:5px;">Vue 的父组件和子组件生命周期钩子函数执行顺序可以归类为以下 4 部分：</p>
					<ul>
						<li>加载渲染过程
							<p class="p1">父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted</p>
						</li>
						<li>子组件更新过程
							<p class="p1">父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated</p>
						</li>
						<li>父组件更新过程
							<p class="p1">父 beforeUpdate -> 父 updated</p>
						</li>
						<li>销毁过程
							<p class="p1">父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed</p>
						</li>
					</ul>
					<Mess/>
				</div>
			</el-collapse-item>
			<el-collapse-item name="9">
                <template slot="title">
                    <b style="font-size:20px;margin-left:20px;">vuex 的 store 特性是什么?</b>
                </template>
                <div style="padding:0 15px;">
                    <p class="p1" style="margin-top:5px;">vuex 就是一个仓库，仓库里放了很多对象。其中 state 就是数据源存放地，对应于一般 vue 对象里面的 data</p>
                    <p class="p1">state 里面存放的数据是响应式的，vue 组件从 store 读取数据，若是 store 中的数据发生改变，依赖这相数据的组件也会发生更新</p>
                    <p class="p1">它通过 mapState 把全局的 state 和 getters 映射到当前组件的 computed 计算属性</p>
                    <Mess/>
                </div>                  
            </el-collapse-item>
            <el-collapse-item name="10">
                <template slot="title">
                    <b style="font-size:20px;margin-left:20px;">Github上 36 个最实用的 Vue 开源库</b>
                </template>
                <div style="padding:0 15px;">
                    <p class="p1" style="margin-top:5px;">任何一个开发者，都是十分喜欢使用开源软件包的。因为它使开发工作变得更快速、高效、容易。如果没有开源软件包，开发工作将变得疲惫不堪，不断的重复造轮子！</p>
                    <p class="p1" style="margin-buttom:20px;">下面整理了 Github 上 36 个实用的 Vue 开源库，建议收藏!</p>
                    <div v-for="(item,index) in github.title" :key="index">
                        <b>{{github.title[index]}}</b>
                        <p class="p1" style="margin-top:5px;">{{github.content[index]}}</p>
                        <p class="p1">Github: <a :href="github.link[index]">{{github.linkc[index]}}</a></p>
                    </div>
                    <Mess style="margin-left:2em;"/>    
                </div>
            </el-collapse-item>
        </el-collapse>
		<div style="width: 100%;height:auto;margin-top:50px;">
			<Pie/>
		</div>
	</div>
    
</template>

<script>
import Mess from './message.vue'
import Pie from './pie.vue'
export default {
    name:'MainContainCenter',
    components:{
        Mess,
		Pie
    },
    data(){
        return{
            activeNames: ['1'],
            pics:[
                require('../assets/3.jpg'),
                require('../assets/3.jpg'),
                require('../assets/3.jpg')
            ],
            pics2:[
                require('../assets/1.jpg'),
                require('../assets/nnkj.png')
            ],
            pics3:require('../assets/5.jpg'),
            titles:[
                '世界名菜推出：大浪炒蒜、块鸡炒姜丝',
                'AI芯片总体上呈现出“百花齐放、百家争鸣”的格局，但5G芯片却大相径庭，能够推出5G手机基带芯片的厂商只有华为/联发科/高通/展讯/三星五家，这“五霸”谁才是霸中之霸，在5G时代还不好说。'
            ],
            github:{
                title:[
                    '1.Bootstrap-Vue |star 10014','2.Vue.Draggable |star 9177','3.Vue Native |star 6471','4.Vue Quill Editor |star 4628',
                    '5.Vuelidate |star 4361','6.NativeScript Vue | Star 41760','7.Vetur |star 3674','8.Epic Spinners |star 3028',
                    '9.Vue Virtual Scroller |star 3020','10.Vue.js Datepicker |star 2113','11.Vuetable-2 |star 1792','12.Vue Color |star 1624',
                    '13.Vue Notification | star 1522','14.Vue Slider Component |star 1495','15.Vue Moment |star 1048','16.Vue Content Placeholders |star 1070',
                    '17.Vue Draggable Resizable |star 1026','18.Vue Clipboard |star 961','19.Vue Trend |star 929','20. Vue Dark Mode |star 889',
                    '21.Vue-Vscode-Snippets |star 826','22.Avoriaz |star 774','23.Vue Clickaway |star 622','24.Emoji Mart Vue |star 424',
                    '25.Vue Stripe Checkout |star 365','26.Vue No SSR |star 353','27.Vue Autosuggest |star 340','28.Vue YouTube Embed |star 301',
                    '29.Vue Numeric |star 295','30.Vue Popper |star 256','31.Vue Waypoint |star 232','32.Vue Waypoint |star 223',
                    '33.Vue Cleave Component |star 222','34.Vue Swing |star 152','35.Vue Chartist |star 132','36.Vue Slideout |star 131'
                ],
                content:[
                    '具有超过40个插件和超过75个自定义组件，为Vue.js提供了最全面的Bootstrap v4组件和网格系统实现。',
                    'Vue.js 组件，基于 Sortable.js 进行同步的拖放排序。','基于 React Native 实现，允许你使用 JavaScript 来构建跨平台的原生移动应用程序。',
                    'Vue.js 的 Quill 编辑器，支持 SPA 和 SSR。','进行基于模型的验证，实现表单验证现在变得轻而易举。',
                    '可以帮助你使用 NativeScript 和 Vue.js 构建原生移动应用程序。','VS Code 的 Vue 工具，习惯使用 VS Code 的朋友值得尝试！',
                    '20 个易于使用的 css 调节器。','用于 Vue.js 应用程序的快速无限制滚动。',
                    '一个简单的 Vue.js 日期选择器组件。','Vue.js 的数据表组件。',
                    '来自 Sketch、Photoshop、Chrom 的 Vue.js 颜色选择器。','用在 Vue.js 应用程序中的成功、警告和错误通知。可以放在右侧、左侧、底部、顶部或中间，任何你想要的地方。',
                    '这里面的 10 种滑块组件都使用 Vue.js 开发。','在 Vue.js 应用程序中使用 Moment.js。',
                    '在获取真实内容时，可以使用这些可组合组件渲染虚假的渐进式内容。','Vue.js 组件，用于可调整大小和可拖动的元素，没有外部依赖。',
                    '一个简单的 Vue.js 包，允许用户将文本复制到基于clipboard.js的剪贴板。','最优雅的趋势图组件。',
                    '一个极简主义的黑暗设计系统，提供基础组件，用于构建失眠者最喜欢的深色洁面。','这些片段很棒，尽可能无缝地增强工作流程。新手值得推荐！',
                    'VueJS测试实用工具库。','一种可重复使用的点击指令，可检测并响应元素外部的点击动作。当我们需要关闭模态窗口或隐藏下拉列表时会非常方便。',
                    '从 React 的 emoji-mart fork 出来的，用于 Vue.js 的 Slack 风格的可定制表情符号选择器组件。',
                    '用于 Stripe 结帐的 Vue.js 插件。','用于包装对 SSR 不友好的组件。',
                    '一个很棒的 Vue.js 自动提示组件。','基于 Angular YouTube Embed，允许你使用 YouTube iframe API。',
                    'Vue.js 输入字段组件，用于显示格式化的货币值。','一个基于 popper.js 的 Vue.js 弹出窗口组件。',
                    '基于 CountUp.js，可用于创建显示数字数据的动画。',
                    'Vue.js 的 v-waypoint 指令，用于在滚动时触发函数。当你想要在滚动时触发动画，它就可以派上用场。',
                    'Cleave.js 的 Vue.js 组件，用于在输入时格式化输入内容（信用卡格式、日期等）。',
                    '它是Swing的 vue.js 包装器，一个卡片形式的界面（swipe-left 对应是，swipe-right 对应否）。',
                    '基于 Chartist.js 的响应式图表。','Slideout.js 的 Vue.js 实现。'
                ],
                link:[
                    'https://github.com/bootstrap-vue/bootstrap-vue','https://github.com/SortableJS/Vue.Draggable',
                    'https://github.com/GeekyAnts/vue-native-core','https://github.com/surmon-china/vue-quill-editor',
                    'https://github.com/vuelidate/vuelidate','https://github.com/nativescript-vue/nativescript-vue',
                    'https://github.com/vuejs/vetur','https://github.com/epicmaxco/epic-spinners',
                    'https://github.com/Akryum/vue-virtual-scroller','https://github.com/charliekassel/vuejs-datepicker',
                    'https://github.com/ratiw/vuetable-2','https://github.com/xiaokaike/vue-color',
                    'https://github.com/euvl/vue-notification','https://github.com/NightCatSama/vue-slider-component',
                    'https://github.com/brockpetrie/vue-moment','https://github.com/michalsnik/vue-content-placeholders',
                    'https://github.com/mauricius/vue-draggable-resizable','https://github.com/Inndy/vue-clipboard2',
                    'https://github.com/QingWei-Li/vue-trend','https://github.com/LeCoupa/vuedarkmode',
                    'https://github.com/sdras/vue-vscode-snippets','https://github.com/eddyerburgh/avoriaz',
                    'https://github.com/simplesmiler/vue-clickaway','https://github.com/jm-david/emoji-mart-vue',
                    'https://github.com/jofftiquez/vue-stripe-checkout','https://github.com/egoist/vue-no-ssr',
                    'https://github.com/Educents/vue-autosuggest','https://github.com/kaorun343/vue-youtube-embed',
                    'https://github.com/kevinongko/vue-numeric','https://github.com/RobinCK/vue-popper',
                    'https://github.com/xlsdg/vue-countup-v2','https://github.com/scaccogatto/vue-waypoint',
                    'https://github.com/ankurk91/vue-cleave-component','https://github.com/goweiwen/vue-swing',
                    'https://github.com/Yopadd/vue-chartist','https://github.com/vouill/vue-slideout'
                ],
                linkc:[
                    'github.com/boots....','github.com/Sort....','github.com/Geeky....',
                    'github.com/surm....','github.com/vue....','github.com/nativ....',
                    'github.co...','github.com/epicm....','github.com/Akry....',
                    'github.com/charliek....','github.com/rat....','github.com/xiao....',
                    'github.com/eu....','github.com/Night....','github.com/brock....',
                    'github.com/micha....','github.com/maur....','github.com/Inn....',
                    'github.com/QingW....','github.com/LeC....','github.com/sdra....',
                    'github.com/edd....','github.com/simpl....','github.com/jm-d....',
                    'github.com/joff....','github.com/eg....','github.com/Educ....',
                    'github.com/kaor....','github.com/kev....','github.com/Robi....',
                    'github.com/xls...','github.com/scacc....','github.com/anku....',
                    'github.com/gow....','github.com/Yop....','github.com/vou....'
                ]
            }
        }
    },
    methods: {

    }
}
</script>

<style>
#pic2{
    width: 100%;
    height: 100px;
}
#centerCard:hover{
    background-color: #EDEDED;
}
.title{
    position: relative;
    left: 0;
    width: 500px;
}
.summ {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0 0 3px 0;
}
.summ p{
    font-weight: 100;
    font-size: 15px;
    margin: 0;
}
.message {
    display: flex;
    justify-content: space-between;
}
#messagef i,#messagef span{
    font-size: 10px;
    color: blue;
}
.p1{
    text-indent:2em;
}
</style>