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
                        <div id="phoneInput" style="width:260px;height:230px;margin: 0 auto;">
                            <el-input class="input1" type="text" v-model="input" placeholder="手机号、邮箱、用户名"></el-input>
                            <el-input class="input1" type="text" v-model="passwd" placeholder="密码" :show-password=true></el-input>
                            <div><p style="margin-top:13px;">忘记密码</p></div>
                            <el-button id="dis" v-on="ifValue()" type="danger" disabled>登录</el-button>
                        </div>
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
            dialogVisible : true,
            input:"",
            passwd:""
        }
    },
    methods:{
        handleDialogClose(){
            this.dialogVisible = false
        },
        ifValue(){
            var dis = document.getElementById('dis');
            if(this.input !== "" || this.vaue !== ""){
                dis.disabled = false
            }
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
#phoneInput{
    display: flex;
    flex-direction: column;
}
#phoneInput .input1{
    margin: 8px 0;
}
</style>