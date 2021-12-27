<template>
  <div id="author-card"  @mouseenter="enterLogo" @mouseleave="leaveLogo()">
    <div id="logo-text" v-if="!isShowLogoImage">
      ZhTSu
    </div>
    <div v-if="isShowLogoImage">
      <img id="logo" src="https://file.zhtsu.cn/zhtsu-logo.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorCard",
  data() {
    return {
      isShowLogoImage: false
    }
  },
  methods: {
    enterLogo() {
      this.isShowLogoImage = true;
    },
    leaveLogo() {
      this.isShowLogoImage = false;
    }
  },
}
</script>

<style scoped>
  #author-card {
    display: flex;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-decoration: none;
  }
  #logo {
    width: 180px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-decoration: none;
  }
  #logo-text {
    display: flex;
    font-size: 4rem;
    font-family: 'Monoton-Regular', sans-serif;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-decoration: none;
  }
</style>