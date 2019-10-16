<template>
    <div id="Card">
        <el-card class="box-card" shadow="always" id="boxCard-1">
            <div slot="header" class="clearfix">
                <i class="el-icon-circle-plus-outline sm"></i>
                <span>今日推荐</span>
            </div>
            <div v-for="msg in contains" :key="msg.id" class="flexCard">
                <el-avatar shape="square" :size="50"></el-avatar>
                <p>{{msg}}</p>
            </div>
            <hr>
            <div id="footCard">
                <p>华为开发者专区</p>
                <p>华为云</p>
                <p>腾讯云技术社区</p>
                <p>普元云计算</p>
                <p>PowerLinux技术社区</p>
            </div>
        </el-card>
        <el-card class="box-card" shadow="always" id="boxCard-2">
            <div id="vote">
                <p>技术无罪 支持！ <b>81%</b></p>
                <div style="padding:auto;"><el-button type="danger">参与投票</el-button></div>
                <p>不支持 <b>19%</b></p>
            </div>
            <hr>
            <p class="a1"><i class="el-icon-caret-right"></i>作为开发者的你，选择商用PC还是消费PC？</p>
            <hr>
            <p class="a1"><i class="el-icon-caret-right"></i>对于中小企业来说，独立服务器和云，只能是二选一？</p>
        </el-card>
        <el-card class="box-card" shadow="always" id="boxCard-3">
            <div id="erwei">
                <div>
                    <img src="@/assets/3.png" alt="" width="100px" height="100px">
                    <p>NNKJ</p>
                </div>
                <div>
                    <img src="@/assets/3.png" alt=""  width="100px" height="100px">
                    <p>扫码咨询</p>
                </div>
            </div>
            <hr style="margin-top:0;">
            <div class="mess">
                <p v-for="item in messages" :key="item.id">
                    <i :class="item[0]"></i>{{item[1]}}
                </p>
                <p style="margin:0 auto;">工作时间：从不上班</p>
            </div>
        </el-card>
    </div>    
</template>

<script>
export default {
    name:'MainContainRight',
    data(){
        return{
            contains:[
                '限时5折优惠 | BDTC 2019十五大前沿技术论坛邀您共见！',
                '5个理由告诉你, 区块链未必适合你的业务！',
                '腾讯Blade Team发现云虚拟化平台逃逸漏洞 积极护航云生态安全',
                '【角度刁钻】如果把线程当作一个人来对待，秒懂',
                '技术开发者应该如何构建小团队的微服务方案？',
                '多数编程语言里的0.1+0.2≠0.3?',
                '“苹果压根不关心开发人员的利益”！',
                '学会这门编程知识，可能决定你能进什么样的企业',
                '对话英特尔高级副总裁 Raja：软件将为硬件释放无限潜力',
                'Spring Security 是 Spring 在安全领域的顶级项目，在用户认证方面支持众多主流认证标准',
                '高架桥侧翻：物联网可以做什么？',
                '程序员学习宝典：IT好课尽情选！',
                '高通骁龙™杯3D手游开发大赛颁奖活动',
                '了解全新技术，缩短开发周期，帮助您更快地将产品推向市场。',
                '云智学院为您打开未来科技的大门'
            ],
            messages:[
                ['el-icon-loading','QQ客服'],
                ['el-icon-s-comment','kefu@nnkj.net'],
                ['el-icon-s-management','客服论坛'],
                ['el-icon-phone','10-0000-1000']

            ]
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll, true)
    },
    methods:{
        handleScroll () {
            var t =document.documentElement.scrollTop||document.body.scrollTop; 
            var left =document.getElementById("Card");
            if( t >= 1700) {
                left.style.position="fixed";
                left.style.bottom="250px";
            }else{
                left.style.position="";
            }
        }
    }
}
</script>

<style>
#Card{
    padding: 0 20px 0 15px;
    width: 380px;
}
#boxCard-1{
    position: relative;
    top: 200px;
}
.flexCard{
    display: flex;
    margin-bottom: 8px;
}
.flexCard p{
    width: 70%;
    font-size: 14px;
    font-weight: 900; 

}
.flexCard p:hover{
    color: brown;
}
#footCard{
    display: flex;
    flex-wrap:wrap;

}
#footCard p{
    display: block;
    font-size: 5px;
    margin-right: 14px;
    font-weight: 100;
}
#footCard p:hover{
    color: brown;
}

#boxCard-2{
    position: relative;
    top: 220px;
}
#boxCard-2 .a1{
    font-size: 17px;
    font-weight: 100;
    margin: 0;
} 

#vote{
    display: flex;
}
#vote p{
    margin: 0 5px 0 0;
    color: brown;
}

#boxCard-3{
    position: relative;
    top: 240px;
}
#erwei{
    display: flex;
    justify-content: space-around;

}
.mess{
    display: flex;
    flex-wrap: wrap;
}
.mess p{
    font-size: 20px;
    margin: 0 25px 0 0; 
}
.mess p:hover{
    color: brown;
}
</style>