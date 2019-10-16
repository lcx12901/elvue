<template>
    <el-card class="box-card" id="left">
        <p v-for="item in items" :key="item.id">
            {{item}}
        </p>
    </el-card>
</template>

<script>
export default {
    name:'MainContainLeft',
    data(){
        return{
            items:['推荐','关注','程序人生','Python','Java','前端','架构',
                    '区块链','数据库','游戏开发','移动开发','运维','人工智能',
                    '安全','云计算/大数据','研发管理','物联网','计算机基础',
                    '音视频开发','其他']
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll, true)
    },
    methods:{
        handleScroll () {
            var t =document.documentElement.scrollTop||document.body.scrollTop; 
            var left =document.getElementById("left");
            if( t >=100) {
                left.style.position="fixed";
                left.style.top="30px";
            }else{
                left.style.position="";
            }
        }
    }
}
</script>

<style>
#left{
    width: 120px;
}
#left p{
    font-size: 4px;
    margin: 10px 0;
}

</style>