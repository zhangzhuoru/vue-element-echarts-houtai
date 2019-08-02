<template>
  <div class="menu">
    <el-row :class="isCollapse ? 'elw': ''">
      <el-col :span="12">
        <div class="logo">
          <img src="../assets/logo2.png" class="autoimg" alt />
        </div>
      </el-col>
      <el-col :span="12" :class="isCollapse ? 'hid': ''">
        <div class="ypttitle">实训云平台</div>
      </el-col>
    </el-row>
    <el-menu
      default-active="1-1"
      class="el-menu"
      @open="handleOpen"
      @close="handleClose"
      background-color="#3584cf"
      text-color="#fff"
      active-text-color="#fff"
      :collapse="isCollapse"
    >
      <!-- 菜单通过数据循环的方式生成出来 -->
      <el-menu-item index="1" @click="pushRoute('/home/about')"  class="el-submenu1">
        <i class="el-icon-menu"></i>
        <span>全部项目</span>
      </el-menu-item>

      <!-- <el-submenu index="1" class="el-submenu1" @click="pushRoute('/home/project-list')">
        <template slot="title">
          <i class="el-icon-menu"></i>
          全部项目
        </template>
        <!-- </router-link> -->
        <!-- meuns.group是菜单的子分组 -->
        <!-- 两个index的字符串相加 -->
      <!-- </el-submenu> --> 
      <el-submenu index="2">
        <template slot="title">
          <!-- 图标 -->
          <i class="el-icon-coin"></i>
          <span>项目人员组</span>
        </template>

        <!-- meuns.group是菜单的子分组 -->
        <!-- 两个index的字符串相加 -->
        <el-menu-item index="2-1" @click="pushRoute('/home/tester-list')">
          <template slot="title" style='padding-left: 20px'>测试组管理</template>
        </el-menu-item>
        <el-menu-item index="2-2" @click="pushRoute('/home/functioner-list')">
          <template slot="title" style='padding-left: 20px'>开发组管理</template>
        </el-menu-item>
        <el-menu-item index="2-3" @click="pushRoute('/home/manager-list')">
          <template slot="title">经理组管理</template>
        </el-menu-item>
      </el-submenu>
      <!-- v-if="visibleHandle()" -->
      <el-menu-item index="3"  @click="pushRoute('/home/user-list')">
        <i class="el-icon-s-check"></i>
        <span>用户管理</span>
      </el-menu-item>
      <el-menu-item index="4" @click="pushRoute('/home/function-list')">
        <i class="el-icon-s-opportunity"></i>
        <span>开发管理</span>
      </el-menu-item>
      <el-menu-item index="5" @click="pushRoute('/home/test-list')">
        <i class="el-icon-tickets"></i>
        <span>测试管理</span>
      </el-menu-item>
      <el-menu-item index="6" @click="pushRoute('/home/testflex')">
        <i class="el-icon-edit-outline"></i>
        <span>需求管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: ["isCollapse"],

  methods: {
    //项目人员组管理
    //管理员 项目经理 开发经理 测试经理
    visibleHandle() {
      if (this.$store.state.username === "ADMIN") {
        return true;
      }
      return false;
    },
    routeProjectList() {
      this.$router.push("/home/project-list");
    },
    pushRoute(routeName) {
      this.$router.push(routeName);
    },
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {}
  }
};
</script>

<style scoped>
.menu {
  height: 100%;
}
.el-menu {
  height: 100%;
  margin-top: -95px;
  z-index: 1;
}
.logo {
  top: 15px;
  margin: 0 auto;
  width: 65px;
  height: 65px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
}
.autoimg {
  width: 42px;
  height: 56px;
  margin-left: 12px;
  margin-top: 4px;
  position: absolute;
}
.hid {
  display: none;
}
.el-row {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 1000;
  background: #2374c6;
}
.elw {
  width: 64px;
  height: 95px;
}
.ypttitle {
  line-height: 95px;
  z-index: 1000;
  font-size: 20px;
  color: #fff;
}
.el-menu a {
  /*继承父级的值*/
  color: inherit;
  text-decoration: none;
}

.el-submenu1 {
  margin-top: 95px;
}
.el-menu:not(.el-menu--collapse) {
  width: 250px;
  min-height: 400px;
}
.el-menu--collapse {
  width: 64px;
}
</style>
