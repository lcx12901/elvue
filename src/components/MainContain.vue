<template>
    <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="3">
            <div class="grid-content bg-purple">
                <MainContainLeft/>
            </div>
        </el-col>
        <el-col :span="6">
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
    }    
}
</script>

<style>

</style>