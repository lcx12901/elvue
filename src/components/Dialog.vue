<template>
    <el-dialog 

        :visible.sync="dialogVisible"
        width="40%"
        :before-close="handleDialogClose"
        >
        <h3 slot="title">NNKJ注册登录</h3>
        <el-tabs tab-position="bottom" :stretch=true>
            <el-tab-pane label="微信登录">
                <div>
                    <img src="@/assets/3.png" alt="" width="230px" height="auto">
                    <p class="sign"><i class="el-icon-thumb"></i>微信扫码</p>
                    <p class="sign">扫码关注公众号登录注册</p>
                </div>          
            </el-tab-pane>
            <el-tab-pane label="手机号登录">
                <el-tabs tab-position="top" :stretch=true>
                    <el-tab-pane label="手机登录">

                    </el-tab-pane>
                    <el-tab-pane label="免密登录"></el-tab-pane>
                </el-tabs>
            </el-tab-pane>
        </el-tabs>



    </el-dialog>
</template>

<script>
export default {
    name:'Dialog',
    data(){
        return{
            dialogVisible : true
        }
    },
    methods:{
        handleDialogClose(){
            this.dialogVisible = false
        }
    }    
}
</script>

<style>
.sign{
    font-size: 18px;
    margin: 0;
}
.tab{
    margin-bottom: 20px;
}
</style>