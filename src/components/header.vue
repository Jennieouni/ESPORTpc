<template>
  <div>
    <!-- <img src="./assets/logo.png"> -->
    <!-- 头部 -->
    <div class="popup">
      <div class="login-bg" id="login-bg"></div>
      <!-- 登录弹窗 -->
      <div class="login-wrap" id="login-wrap">
        <div class="login">
          <div class="login-left"><img src="static/images/login.png" alt=""></div>
          <div class="login-right">
            <div class="login-title">用户登录</div>
            <form action="" onsubmit="return false">
              <div class="login-phone">
                <img src="static/images/user.svg" alt="">
                <span></span>
                <input v-model="loginForm.phone" type="text" placeholder="请输入您的手机号（11位数）" autocomplete="off">
              </div>
              <div class="login-pwd">
                <img src="static/images/pwd.svg" alt="">
                <span></span>
                <input v-model="loginForm.password" type="text" onfocus="this.type='password'" autocomplete="off" placeholder="请输入您的密码（至少8位数）"></div>
              <div id="errorTips" class="error-tips">用户名或密码错误！</div>
              <div class="login-button"><button type="submit" @click="login()">登录</button></div>
            </form>
            <!-- <div @click="toRegister()" class="register-button"><button>注册</button></div> -->
            <div class="bottom-tips"><p>登录获取更多最新赛事详情！</p>还没有账号？赶快去<span @click="toRegister()"> 注册 </span>一个吧！</div>
            <div class="clear" @click="closeLogin()"><img src="static/images/clear.svg" alt=""></div>
          </div>
        </div>
      </div>
      <!-- 注册弹窗 -->
      <div class="login-wrap" id="register-wrap">
        <div class="login">
          <div class="login-left"><img src="static/images/register.png" alt=""></div>
          <div class="login-right">
            <div class="login-title">用户注册</div>
            <form action="" onsubmit="return false">
              <div class="login-phone">
                <img src="static/images/user.svg" alt="">
                <span></span>
                <input v-model="registerForm.phone" type="text" placeholder="请输入您的手机号（11位数）">
              </div>
              <div class="login-pwd">
                <img src="static/images/pwd.svg" alt="">
                <span></span>
                <input v-model="registerForm.password" type="text" onfocus="this.type='password'" autocomplete="off" placeholder="请设置您的密码（至少8位数）" minlength="8">
              </div>
              <div class="register-code">
                <input v-model="registerForm.code" type="text" placeholder="请输入验证码" maxlength="6">
                <div @click="sendCode()" id="code" class="code">{{content}}</div>
              </div>
              <!-- <div class="login-button"><button>登录</button></div> -->
            </form>
            <div id="errorTips1" class="error-tips">用户名或密码错误！</div>
            <div class="register-button">
              <button @click="register()">注册</button>
              <p class="bottom-tips" id="hideTips">注册成功！赶快去<span @click="toLogin()"> 登录 </span>吧！</p>
            </div>
            <div class="clear" @click="closeRegister()"><img src="static/images/clear.svg" alt=""></div>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar">
      <div class="navbar-container">
        <img src="static/images/logo.png" class="icon_logo" onclick="hrefClicked(&quot;/&quot;)"/>
        <div class="nav-panel">
          <ul>
            <li>
              <router-link to="/index.html" active-class="isActive">首页</router-link>
              <p class="link"></p>
            </li>
            <li>
              <router-link to="/score.html" active-class="isActive">比分</router-link>
              <p class="link"></p>
            </li>
            <li>
              <router-link to="/schedule.html" active-class="isActive">赛程</router-link>
              <p class="link"></p>
            </li>
            <li>
              <router-link to="/info.html" active-class="isActive">资讯</router-link>
              <p class="link"></p>
            </li>
          </ul>
          <!---->
        </div>
        <div class="navRight-panel">
          <div class="login-panel" id="login-btn">
            <div @click="showLogin()" class="login">
              <img src="static/images/log-in.svg" alt="">
              <span>登入</span>
            </div>
            <div class="link"><p></p></div>
            <div @click="showRegister()" class="register">
              <img src="static/images/reply.svg" alt="">
              <span>快速注册</span>
            </div>
          </div>
          <div class="login-panel" id="username">
            <div class="username">
              <span>用户：{{userName}}</span>
            </div>
          </div>
          <div class="collection-panel" onclick="AddFavorite()">
            <img src="static/images/icon_favorite.png" />
            <span>收藏本站</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      userName: '',
      timer: '',
      content: '发送验证码',
      code: '',
      countdown: 60,
      canClick: true,
      loginForm: {
        phone: '',
        password: ''
      },
      registerForm: {
        phone: '',
        password: '',
        code: ''
      },
      loginStatus: 0
    }
  },
  methods: {
    routerLink (index, path) {
      this.navIndex = index
      // console.log(this.navIndex)
      this.$router.push(path)
    },
    register () {
      let _this = this
      let errorTips1 = document.getElementById('errorTips1')
      let hideTips = document.getElementById('hideTips')
      // let item = document.getElementById('bottom-tips')
      if (_this.registerForm.phone === '' || _this.registerForm.password === '') {
        errorTips1.style.display = 'block'
        errorTips1.innerHTML = '用户名或密码不能为空！'
      } else if (!(/^1[3456789]\d{9}$/.test(_this.registerForm.phone))) {
        errorTips1.style.display = 'block'
        errorTips1.innerHTML = '手机号码格式有误！请重新填写！'
      } else if (_this.registerForm.password.length < 8) {
        errorTips1.style.display = 'block'
        errorTips1.innerHTML = '为确保账户安全，请设置8位以上的密码！'
      } else {
        axios.post('/register?phone=' + this.registerForm.phone + '&password=' + this.registerForm.password + '&code=' + this.registerForm.code).then(response => {
          // console.log(response)
          hideTips.style.display = 'block'
          // console.log(this.date)
        }).catch(error => {
          if (error.response.status === 422) {
            errorTips1.style.display = 'block'
            errorTips1.innerHTML = '该手机号已被注册！'
          } else if (error.response.status === 423) {
            errorTips1.style.display = 'block'
            errorTips1.innerHTML = '验证码错误！'
          } else if (error.response.status === 500) {
            errorTips1.style.display = 'block'
            errorTips1.innerHTML = '未知错误，请稍后重试！'
          }
          // console.log(error)
        })
      }
    },
    login () {
      let _this = this
      let errorTips = document.getElementById('errorTips')
      let loginBtn = document.getElementById('login-btn')
      let username = document.getElementById('username')
      if (_this.loginForm.phone === '' || _this.loginForm.password === '') {
        errorTips.style.display = 'block'
        errorTips.innerHTML = '用户名或密码不能为空！'
      } else if (!(/^1[3456789]\d{9}$/.test(_this.loginForm.phone))) {
        errorTips.style.display = 'block'
        errorTips.innerHTML = '手机号格式不正确！'
      } else {
        axios.post('/login?phone=' + this.loginForm.phone + '&password=' + this.loginForm.password).then(response => {
          // localStorage.clear()
          // localStorage.setItem('info', 1)
          // localStorage['flag'] = 1
          // sessionStorage.clear()
          // sessionStorage.setItem('userid', JSON.stringify(response.data.userInfo.id))
          localStorage['token'] = JSON.stringify(response.data.data[0].api_token)
          localStorage['username'] = JSON.stringify(response.data.data[0].name)
          localStorage.token = localStorage['token'].replace(/^"|"$/g, '')
          // localStorage.user = localStorage['username'].replace(/^"|"$/g, '')
          // console.log(localStorage.username)
          axios.post('/token_login?token=' + localStorage.token).then(res => {
            // console.log(response.status)
            this.loginStatus = response.status
            if (localStorage.token !== undefined && this.loginStatus === 201) {
              loginBtn.style.display = 'none'
              username.style.display = 'block'
              localStorage['username'] = JSON.stringify(response.data.data[0].name)
              alert('登录成功！')
              location.reload()
            }
          }).catch(errpr => {
            alert('登录失败！请您通过正确方式登录！')
            console.log('恶意登录！！！')
          })
          // username.style.display = 'block'
          // alert('登录成功！')
          // console.log(response)
        }).catch(error => {
          if (error.response.status === 422) {
            console.log(error.response)
            errorTips.style.display = 'block'
            errorTips.innerHTML = '用户名或密码错误！'
          } else {
            errorTips.style.display = 'block'
            errorTips.innerHTML = '未知错误！请稍后重试！'
          }
          // console.log(error)
        })
      }
    },
    sendCode () {
      let errorTips1 = document.getElementById('errorTips1')
      let _this = this
      if (_this.registerForm.phone === '') {
        errorTips1.style.display = 'block'
        errorTips1.innerHTML = '手机号不能为空！'
      } else if (!(/^1[3456789]\d{9}$/.test(_this.registerForm.phone))) {
        errorTips1.style.display = 'block'
        errorTips1.innerHTML = '手机号码格式有误！'
      } else {
        axios.post('code?phone=' + this.registerForm.phone).then(res => {
          if (!this.canClick) return
          this.canClick = false
          this.content = this.countdown + 's后重新发送'
          let clock = window.setInterval(() => {
            this.countdown--
            this.content = this.countdown + 's后重新发送'
            if (this.countdown < 0) {
              window.clearInterval(clock)
              this.content = '重新发送验证码'
              this.countdown = 60
              this.canClick = true
            }
          }, 1000)
        }).catch(error => {
          // console.log(error.response.status)
          if (error.response.status === 423) {
            errorTips1.style.display = 'block'
            errorTips1.innerHTML = '验证码发送失败！请稍后重试~'
          } else if (error.response.status === 422) {
            errorTips1.style.display = 'block'
            errorTips1.innerHTML = '该手机号已被注册！'
          } else {
            errorTips1.style.display = 'block'
            errorTips1.innerHTML = '网络错误！请稍后重试~'
          }
        })
      }
    },
    showLogin () {
      let item = document.getElementById('login-wrap')
      let item2 = document.getElementById('login-bg')
      let item3 = document.getElementById('register-wrap')
      item3.style.display = 'none'
      item.style.display = 'block'
      item2.style.display = 'block'
    },
    closeLogin () {
      let item = document.getElementById('login-wrap')
      let item2 = document.getElementById('login-bg')
      item.style.display = 'none'
      item2.style.display = 'none'
    },
    showRegister () {
      let item = document.getElementById('register-wrap')
      let item2 = document.getElementById('login-bg')
      let item3 = document.getElementById('login-wrap')
      item.style.display = 'block'
      item2.style.display = 'block'
      item3.style.display = 'none'
    },
    closeRegister () {
      let item = document.getElementById('register-wrap')
      let item2 = document.getElementById('login-bg')
      item.style.display = 'none'
      item2.style.display = 'none'
    },
    toRegister () {
      let item = document.getElementById('register-wrap')
      let item2 = document.getElementById('login-wrap')
      item.style.display = 'block'
      item2.style.display = 'none'
    },
    toLogin () {
      let item = document.getElementById('register-wrap')
      let item2 = document.getElementById('login-wrap')
      item.style.display = 'none'
      item2.style.display = 'block'
    }
  },
  mounted () {
    this.routerLink()
    if (localStorage.token === undefined && this.loginStatus !== 201) {
      this.timer = setInterval(this.showLogin, 30000)
    } else {
      let loginBtn = document.getElementById('login-btn')
      let username = document.getElementById('username')
      loginBtn.style.display = 'none'
      username.style.display = 'block'
      this.userName = localStorage['username'].replace(/^"|"$/g, '')
      // console.log(localStorage.user)
      // console.log(localStorage.token)
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>
<style scope>
@import "../assets/css/layout.css";
#username{
  display: none;
}
*,
:after,
:before {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
.popup .login{
  width: 522px;
  height: 290px;
  background: #373737;
  border-radius: 6px;
  border-radius: 6px;
}
.popup .loginc{
  display: none;
}
.popup .login-left, .login-right{
  float: left;
}
.popup .login-left img{
  margin-top: 46px;
}
.popup .login-right{
  margin: 16px 0 16px 20px;
}
.popup .login-title{
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  color: #CCCCCC;
  text-align: center;
  margin: 10px 0 14px;
}
.popup .login form input{
  width: 236px;
  height: 32px;
  background: #2D2C2B;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #ffffff;
  border: none;
  border-radius: 16px;
  margin-bottom: 10px;
  outline: none;
}
.popup .login-phone input, .popup .login-pwd input{
  padding-left: 60px;
}
.popup .login form span{
  position: absolute;
  margin-left: 46px;
  width: 1px;
  height: 32px;
  background: #373737;
}
.popup .login-phone, .popup .login-pwd, .popup .register-code{
  position: relative;
}
.popup .login-phone img{
  position: absolute;
  margin: 7px 12px 0 20px;
  width: 14px;
  height: 16.8px;
}
.popup .login-pwd img{
  position: absolute;
  margin: 7px 12px 0 20px;
  width: 14px;
  height: 16.8px;
}
.popup .login button{
  width: 236px;
  height: 36px;
  color: #FFBD34;
  background: transparent;
  border: 1px solid #FFBD34;
  border-radius: 16px;
  cursor: pointer;
}
.popup button:focus{
  outline: none;
}
.popup button:hover{
  color: #000000;
  background: #FFBD34;
}
.popup .login-button{
  margin-top: 15px;
}
.popup .register-button{
  margin-top: 15px;
}
/* .bottom-tips{
  display: none;
} */
.bottom-tips{
  font-size: 13px;
  color: #ddd;
  text-align: center;
  margin-top: 20px;
}
.bottom-tips p{
  margin-bottom: 5px;
}
.bottom-tips span{
  font-size: 15px;
  color: #FFBD34;
  cursor: pointer;
}
#hideTips{
  display: none;
}
.register-button p{
  font-size: 13px;
  color: #ddd;
  text-align: center;
  margin-top: 20px;
}
.register-button span{
  font-size: 15px;
  color: #FFBD34;
  cursor: pointer;
}
.register-code input{
  padding: 0 120px 0 20px;
}
.register-code .code{
  font-size: 14px;
  color: #ddd;
  position: absolute;
  top: 8px;
  right: 12px;
  cursor: pointer;
}
.error-tips{
  color: red;
  font-size: 14px;
  text-align: center;
  animation-duration: .3s; /*动画时间*/
  animation-fill-mode: both; /*播放后的状态*/
  animation-iteration-count: 1;
  animation-name:aroundAnimation; /*动画的名称*/
  transform-origin: center bottom; /*设置动画旋转元素的基点为*/
  /* cursor: pointer; */
  display: none;
}
@keyframes aroundAnimation{
  0%, 100%, 20%, 50%, 80% {
    transition-timing-function: cubic-bezier(0.215,.61,.355,1);
    transform: translate3d(0,0,0);
  }
  40%, 43%{
    transition-timing-function: cubic-bezier(0.755,0.50,0.855,0.060);
    transform: translate3d(-15px,0,0);
  }
  70%{
    transition-timing-function: cubic-bezier(0.755,0.050,0.855,0.060);
    transform: translate3d(-5px,0px,0);
  }
  90%{
    transform: translate3d(15px,0,0);
  }
}
.popup .clear{
  width: 16px;
  height: 16px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  /* z-index: 9999999; */
}
</style>
