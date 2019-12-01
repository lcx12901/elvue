<template>
    <div class="main">
        <div style="width:10%;">
            <MainContainLeft/>
        </div>
        <div style="width:65%;">
            <MainContainCenter/>
        </div>
        <div style="width:25%">
            <MainContainRight/>
        </div>
    </div>
<!--    <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="3">
            <div class="grid-content bg-purple" style="width:160px;height:710px;">
                <MainContainLeft id="left"/>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple-light">
                <MainContainCenter/>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple">
                <MainContainRight/>
            </div>
        </el-col>
    </el-row>-->
</template>

<script>
import MainContainLeft from '../components/MainContainLeft.vue'
import MainContainCenter from '../components/MainContainCenter.vue'
import MainContainRight from '../components/MainContainRight.vue'

export default {
    name:'MainContain',
    components:{
        MainContainLeft,
        MainContainCenter,
        MainContainRight
    },
    methods:{

    }
}
</script>

<style>
.main{
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 150px;

}
</style>