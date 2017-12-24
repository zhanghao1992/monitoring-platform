<template>
  <el-main>
    <el-row>
      <el-col :span="10" :offset="5">
        <el-form ref="loginForm" :model="loginForm" :rules="rules" label-width="100px">
          <el-form-item label="用户名:" prop="name">
            <el-input ref="name" v-model="loginForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input type="password" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item class="captchaBox" label="图形验证码:" prop="captcha">
            <el-input v-model="loginForm.captcha"></el-input>
            <captcha class="captcha" @setPublicKey="setPublicKeyHandler"></captcha>
          </el-form-item>
          <el-form-item class="messageBox" label="短信验证码:" prop="message">
            <el-input v-model="loginForm.message"></el-input>
            <div class="message">发送短信验证码</div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('loginForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-main>
</template>

<script type="text/ecmascript-6">
  //  import vueValidate from './vueValidate'
  import Captcha from '@/components/base/Captcha/Captcha'
  import {
    mapGetters, mapActions
  } from 'vuex'
  import jsencrypt from 'jsencrypt'

  export default {
    data() {
      return {
        loginForm: {
          name: '',
          password: '',
          captcha: '',
          encryptedCaptcha: '',
          message: ''
        },
        rules: {
          name: [
            {
              required: true, message: '输入登录名', trigger: 'blur'
            },
            {
              min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'
            }
          ],
          password: [
            {
              required: true, message: '输入密码', trigger: 'blur'
            }
//            {validator: vueValidate.validatePass, trigger: 'blur'}
//          {pattern: /^1[34578]\d{9}$/, message: '目前只支持中国大陆的手机号码', trigger: 'blur'}
          ],
          captcha: [
            {
              required: true, message: '输入图形验证码', trigger: 'blur'
            }
          ],
          message: [
            {
              required: true, message: '输入短信验证码', trigger: 'blur'
            }
          ]
        },
        publicKey: ''
      }
    },
    mounted() {
    },
    computed: {
      ...mapGetters(['captcha'])
    },
    methods: {
      setPublicKeyHandler(publicKey) {
        this.publicKey = publicKey
      },
      onSubmit() {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            const encrypt = new jsencrypt.JSEncrypt()
            // 图形验证码明文
            const captchaValue = this.loginForm.captcha
            //  密码加密传输
            const publicKey = this.publicKey
            encrypt.setPublicKey(publicKey)
            this.loginForm.encryptedCaptcha = encrypt.encrypt(captchaValue)
            this.$http.post('/node/login', {
              loginForm: this.loginForm
            }).then(json => {
              const res = json.data
              if (res.code === 0) {
//                const WL = window.localStorage
//                WL.setItem('userInfo', JSON.stringify(this.ruleForm))
                this.$router.push('/haslogin')
              } else {
                this.$notify.error({
                  title: '错误',
                  message: res.msg
                })
              }
            })
          } else {
            return false
          }
        })
      },
      ...mapActions(['setUser', 'exit'])
    },
    components: {
      Captcha
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    text-align: center;
    line-height: 100%;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .captchaBox, .messageBox {
    position: relative;
  }

  .captcha, .message {
    position: absolute;
    right: 3px;
    top: 0;
    height: 100%;
    padding: 2px;
    box-sizing: border-box;
  }

  .message {
    border-radius: 0 4px 4px 0;
    background-color: #409EFF;
    right: 0;
    color: #fff;
    width: 130px;
    text-align: center;
  }
</style>
