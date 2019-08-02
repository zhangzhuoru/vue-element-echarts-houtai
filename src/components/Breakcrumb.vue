<template>
    <div style="margin-bottom:20px;background:#" class="aaa">
        <el-breadcrumb separator="/">
            <template v-if="routeInfo.length > 0">
                <el-breadcrumb-item v-for="(item, index) in routeInfo" :key="index" >
                    {{item}}
                </el-breadcrumb-item>
            </template>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    // 由于路由信息是会发生变化，通过监听$route来更新面包屑组件的数据
    // watch: {},

    computed: {
        // 面包屑组件的数据
        routeInfo: function(){
            var arr = this.$route.matched.map(v => {
                return v.meta.breadCrumbName;
            })
            return arr;
        }
    },

}
</script>

<style scoped >
.aaa >>> .el-breadcrumb__inner{
    
}
</style>
