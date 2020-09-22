<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    // isMobile () {
    //   let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    //   return flag
    // }
  },
  mounted () {
    // if (this.isMobile()) {
    //   // alert("手机端");
    //   this.$router.push('/m/')
    // } else {
    //   // alert("pc端");
    //   this.$router.push('/')
    // }
  }
}
</script>
<style scope>
body{
  margin: 0;
  padding: 0;
}
</style>
