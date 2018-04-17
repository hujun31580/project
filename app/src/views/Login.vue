<template>
    <div>
    <el-row type='flex' justify='center'>
        <el-col :span='12'>
         <el-form
        :model="fromData"
        class="demo-ruleForm"
        ref='from'
      >
          <el-form-item
          label='用户名'
          prop="name"
          :rules="[
             { required: true, message: '请输入邮箱地址' },
             { type: 'email', message: '请输入正确的邮箱地址' }
          ]"
          >
            <el-input
              v-model="fromData.name"
            ></el-input>
          </el-form-item>
            <el-form-item
           label='密码'
           prop="psw"
           :rules="[
             { required: true, message: '请输入密码' },
             { type: 'number', message: '请输入数字' }
          ]"
          >
           <!-- <el-input type="age" v-model.number="numberValidateForm.age" auto-complete="off"></el-input> -->
            <el-input
              v-model.number="fromData.psw"
            ></el-input>
          </el-form-item>
      </el-form>
         
      <el-button type="text" @click="login">登录</el-button>
      </el-col>
    </el-row>
     
      
      
    </div>
</template>

<script>

export default {
  data() {
    return {
      fromData: {
        name: "",
        psw: ""
      }
    };
  },
  methods: {
    open() {
      this.$alert("用户名或密码错误", {
        dangerouslyUseHTMLString: true
      });
    },
    formData() {
      this.$alert("用户名或密码格式不对", {
        dangerouslyUseHTMLString: true
      });
    },
    login() {
      this.$refs["from"].validate(valid => {
        if (valid) {
         this.$store.dispatch('getUser',{name:this.fromData.name,psw:this.fromData.psw,open:this.open,router:this.$router})
        } else {
          this.formData();
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.el-button {
  background: #f50;
  width: 200px;
  color: #fff;
  margin-top: 50px;
}
</style>