<template>
    <b-navbar toggleable="sm" sm="true">
            <b-navbar-brand href="#">
                <img src="@/assets/nnkj.png" alt="" style="height:30px;width:auto;">
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#" id="navText" v-for="item in items" :key="item.id">
                        {{item}}
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
            <b-nav-form>
                <b-form-input size="sm" class="mr-sm-0" placeholder="文章搜索"></b-form-input>
                <b-button size="sm" class="my-1 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
            <b-navbar-nav>
                <b-nav-item>
                    <i class="el-icon-bell"><b-badge variant="danger">4</b-badge></i>
                </b-nav-item>
                <b-nav-item>
                    <router-link to="/login">登录/注册</router-link>
                </b-nav-item>
            </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
    name:"NavBar",
    data(){
        return{
            items:['首页','博客','学院','下载','论坛','图文课','问答','商城','活动','专题',
                    'VIP会员']
        }
    },
    methods: {
        jumplogin(){
            this.$router.push({path:'/login'})
        }
    }
}
</script>

<style>

</style>