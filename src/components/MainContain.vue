<template>
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="3">
            <div class="grid-content bg-purple">
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
    </el-row>
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

</style>