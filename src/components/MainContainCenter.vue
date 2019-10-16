<template>
    <div>
        <el-row type="flex" class="row-bg" justify="center" style="height:200px;">
            <el-col :span="16" height="auto">
                <el-carousel indicator-position="outside" height="150px">
                    <el-carousel-item v-for="pic in pics" :key="pic.id">
                        <el-image
                            style="width: 500px; height: 150px"
                            :src="pic"
                            :fit="fill"
                        ></el-image>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light" height="auto">
                    <div id="pic2" v-for="pic in pics2" :key="pic.id">
                        <img :src="pic" alt="" style="width:100%;height:auto;">
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-card id="centerCard" v-for="i in 50" :key="i.id">
            <h5 class="title">
                <b>{{titles[0]}}</b>
            </h5>
            <div class="summ">
                <p>{{titles[1]}}</p>
            </div>
            <div class="message">
                <div>
                    <el-avatar :size="30" id="avatar">user</el-avatar>
                    <span style="font-size:20px;">你爹的小小鸡</span>
                </div>
                <div id="messagef">
                    <i class="el-icon-chat-line-square"></i>
                    <span>45645</span>
                    <span style="margin:0 5px;">|</span>
                    <i class="el-icon-view"></i>
                    <span>485354</span>


                </div>
            </div>
        </el-card>
    </div>
    
</template>

<script>
export default {
    name:'MainContainCenter',
    data(){
        return{
            pics:[
                require('../assets/3.jpg'),
                require('../assets/3.jpg'),
                require('../assets/3.jpg')
            ],
            pics2:[
                require('../assets/1.jpg'),
                require('../assets/nnkj.png')
            ],
            titles:[
                '5G 芯片的“春秋五霸”',
                'AI芯片总体上呈现出“百花齐放、百家争鸣”的格局，但5G芯片却大相径庭，能够推出5G手机基带芯片的厂商只有华为/联发科/高通/展讯/三星五家，这“五霸”谁才是霸中之霸，在5G时代还不好说。'
            ]
        }
    },
    methods: {
        load(){
            this.count += 2
        }
    }
}
</script>

<style>
#pic2{
    width: 100%;
    height: 100px;
}
#centerCard:hover{
    background-color: #EDEDED;
}
.title{
    position: relative;
    left: 0;
    width: 270px;
}
.summ {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0 0 3px 0;
}
.summ p{
    font-weight: 100;
    font-size: 15px;
    margin: 0;
}
.message {
    display: flex;
    justify-content: space-between;
}
#messagef i,#messagef span{
    font-size: 10px;
    color: blue;
}


</style>