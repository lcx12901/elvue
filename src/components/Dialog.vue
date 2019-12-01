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
                        <div class="phoneInput" style="width:260px;height:228.5px;margin: 0 auto;">
                            <el-input class="input1" type="text" v-model="input" placeholder="手机号、邮箱、用户名"></el-input>
                            <el-input class="input1" type="text" v-model="passwd" placeholder="密码" :show-password=true></el-input>
                            <div><p style="margin-top:13px;">忘记密码</p></div>
                            <el-button id="dis" type="danger" style="background:#ca0c16;">登录</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="免密登录">
                        <div class="phoneInput">
                            <div id="select">
                                <el-select class="input1" v-model="value" style="width: 140px;">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.id"
                                        :label="item.value"
                                        :value="item.label"
                                        style="width:170px;"
                                    >
                                        <span style="float:lef">{{item.value}}</span>
                                        <span style="float:right;">{{item.label}}</span>
                                    </el-option>
                                </el-select>
                                <el-input class="input1" type="text" placeholder="请输入手机号" v-model="phonenum" style="margin-left:15px;"></el-input>
                            </div>
                            <el-input type="text" v-model="yanzheng" style="margin-top: 20px;">
                                <template slot="append">获取验证码</template>
                            </el-input>
                            <el-button type="danger" style="margin-top: 53px;background:#ca0c16;">登录</el-button>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-tab-pane>
        </el-tabs>
        <el-button type="danger" style="background:#ca0c16;width:60%;margin-top:30px;">下载NNKJ APP</el-button>
    </el-dialog>
</template>

<script>
export default {
    name:'Dialog',
    data(){
        return{
            dialogVisible : true,
            input:"",
            passwd:"",
            value: "+86",
            phonenum: "",
            yanzheng: "",
            options:[
                {value:'+86', label:'中国'},
                {value:'+1', label:'美国'},
                {value:'+852', label:'中国香港'},
                {value:'+886', label:'中国台湾'},
                {value:'+81', label:'日本'},
                {value:'+65', label:'新加坡'},
            ]
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
.phoneInput{
    display: flex;
    flex-direction: column;
    width:260px;
    height:228.5px;
    margin: 0 auto;
}
.phoneInput .input1{
    margin: 8px 0;
}
#select{
    display: flex;
    width: 100%;
}
</style>