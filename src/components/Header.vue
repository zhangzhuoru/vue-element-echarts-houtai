<template>
    <el-row type="flex" justify="space-between" align="middle">
        <i class="el-icon-back lhidden" @click="handleClick"></i>
        <el-dropdown class="user-name logout" trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
                <el-avatar :size="60"> {{username}}</el-avatar>
            </span>
            <el-dropdown-menu slot="dropdown" class='uls'>
                <el-dropdown-item command="changemima">修改密码</el-dropdown-item>
                <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
       
    </el-row>
</template>

<script>

// 导入vuex的数据
import {mapState} from "vuex";


export default {
  data(){
    return {
      collapse: false,
      dialogTableVisible: false,
    }
  },
  computed: 
    mapState({
      username: 'username'
    })
  ,


  methods: {
    // 切换菜单
    handleClick(){
      this.$emit("changeShow")
    },

    // 退出
    logout(){
      // this.$router.replace("/login");
    },
     handleCommand(command) {
            if (command == 'loginout') {
                // this.$common.removeSessionStorage('token');
                localStorage.removeItem('TOKEN');
                localStorage.removeItem('pageIndex');
                this.$router.push('/login');

            }
            if (command == 'changemima') {
              this.dialogTableVisible = true;
                // this.$common.removeSessionStorage('token');
                // this.$router.push('/changemima');
            }

        },

        successUpdatePasswordHandler: function() {
            this.dialogTableVisible = false;
        },
  }
}
</script>

<style scoped>
.logout{
  cursor: pointer;
}
.lhidden {
    height: 60px;
    margin-top: -25px;
    line-height: 60px;

}

.uls {
    top: 55px !important;
}

</style>
