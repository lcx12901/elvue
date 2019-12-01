<template>
    <div class="box">
        <div class="top">
            <el-tooltip class="item" effect="dark" content="发布于2019-11-28" placement="top-start">
                <el-link class="p1" style="margin-bottom:8px;" :underline="false">发布于11：15</el-link>
            </el-tooltip>
        </div>
        <div style="display:flex;justify-content:start;">
            <el-button icon="el-icon-caret-top" type="primary">赞同 60.1K</el-button>
            <el-button icon="el-icon-caret-bottom" type="primary"></el-button>
            <el-link :underline="false" icon="el-icon-chat-line-square" class="elink">26.7K条评论</el-link>
            <el-link :underline="false" icon="el-icon-s-promotion" class="elink">分享</el-link>
            <el-link :underline="false" icon="el-icon-star-on" class="elink">收藏</el-link>
            <el-link :underline="false" icon="el-icon-s-opportunity" class="elink">感谢</el-link>
            <el-link :underline="false" icon="el-icon-more" class="elink"></el-link>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'Mess'
}
</script>

<style>
.elink{
    margin-left: 20px;
}
</style>