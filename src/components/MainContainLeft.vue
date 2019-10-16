<template>
    <b-nav vertical class="w-75" id="left-nav">
        <b-nav-item id="nav-item" v-for="item in items" :key="item.id" :class="text-danger">
            {{item}}
        </b-nav-item>
    </b-nav>
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
    methods:{
        
    }
}
</script>

<style>
    #left-nav{
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
    #nav-item{
        font-size: 14px;
        height: 35px;
    }

</style>