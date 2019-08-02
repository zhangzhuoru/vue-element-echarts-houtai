<template>
  <el-form ref="form" :model="form" label-width="120px" >
    
    <el-form-item label="项目名称">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    
    <el-form-item label="项目描述">
      <el-input type="textarea" v-model="form.zhaiyao"></el-input>
    </el-form-item>

    <el-form-item label="所属类别">
      <el-select v-model="form.category_id" placeholder="请选择所属类别">
        <el-option
          v-for="(item, index) in categorys"
          :key="index"
          :label="item.title"
          :value="item.category_id"
        ></el-option>
      </el-select>
    </el-form-item>

     <el-form-item label="项目开始时间" required>
      <el-col :span="11">
        <el-form-item >
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
     
    </el-form-item>

    <el-form-item label="项目结束时间" required>
      <el-col :span="11">
        <el-form-item >
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date3" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
      
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item> 
  </el-form>
</template>
<script>

// 导入外部的样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  data() {
    return {
      form: {
        category_id: "", // 所属类别id
        status: false,
        is_top: false,
        is_hot: false,
        title: "",
        sub_title: "",
        imgList: [],
        fileList: [],
        content: "",
        zhaiyao: "",
        date1: "",
        date2: '',
        date3: '',
        date4: '',
        
        is_slide: false, // 在商品详情中不使用
        
      },
      // 保存类别列表
      categorys: [],
      imageUrl: "",
      // 预览图片的路径
      dialogImageUrl: '',
      // 是否显示预览窗口
      dialogVisible: false
    };
  },
  components: {
      // 编辑器组件
    quillEditor
  },
  methods: {
    onSubmit() {
      // 提交form数据
      this.$axios({
          url:  "/admin/goods/add/goods",
          method: "POST",
          data: this.form,
          // 由于在8080端口下去请求8899端口，涉及到跨域
          withCredentials: true
      }).then(res => {
          const {message, status} = res.data;

          if(status == 0){
              // 1. 提示用户
            this.$message({
                message,
                type: "success"
            });
            //2.返回上一页
            this.$router.back();
          }    
      })
    },
    // 上传成功
    handleAvatarSuccess(res, file) {
        // URL.createObjectURL是html5的新接口，可以用于预览本地图片
        // file.raw路径
        this.imageUrl = window.URL.createObjectURL(file.raw);
        this.form.imgList[0] = res
    },
    // 上传之前,file就是当前上传的文件对象
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    // 预览图片
    handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
    },
    // 删除图片时候触发
    handleRemove(file, fileList) {
        // fileList每一项的respone的属性才是 { name:xxx, shotUrl: xxx, url: xxx },
        console.log(fileList)
        this.form.fileList = fileList.map(v => {
            return v.response;
        });

        console.log(this.form.fileList)
    },
    // 上传图片成功后的回调
    handlePictureCard(res, file){
       this.form.fileList.push(res);
    }
  },
  mounted() {
    // 请求类别数据
    // this.$axios({
    //   url: "/admin/category/getlist/goods"
    // }).then(res => {
    //   const { message } = res.data;
    //   // 保存到categorys
    //   this.categorys = message;
    // });
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
 
.editor .el-form-item__content{
    line-height: unset;
}
</style>
