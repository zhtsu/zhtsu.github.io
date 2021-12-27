<template>
  <div id="header-card">
    <div class="brace-box"></div>
    <ul id="menu">
      <li id="home" class="item" @click="addActive('home'),skipTo('/')">主页</li>
      <li id="archives" class="item" @click="addActive('archives'),skipTo('/archives')">归档</li>
      <li id="about" class="item" @click="addActive('about'),skipTo('/about')">关于</li>
      <li id="other" class="item"  @click="addActive('other'),skipTo('/other')">其他</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderCard",
  data() {
    return {
      isShowMenu: false,
      isPhone: false,
      screenWidth: null
    }
  },
  methods: {
    clearAllActive() {
      document.getElementById('home').classList.remove('active');
      document.getElementById('about').classList.remove('active');
      document.getElementById('other').classList.remove('active');
      document.getElementById('archives').classList.remove('active');
    },
    addActive(id) {
      this.clearAllActive();
      document.getElementById(id).classList.add('active');
    },
    skipTo(path) {
      window.location.href = path;
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #272727;
  }
  #header-card {
    height: 50px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
  .brace-box {
    display: flex;
    flex-grow: 1;
  }
  #menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .item {
    margin-right: 2rem;
    display: flex;
    font-size: 2rem;
  }
  .item:hover {
    color: #337ab7;
    border-bottom: 1px solid #337ab7;
    line-height: 1;
    cursor: pointer;
  }
  .item.active {
    color: #337ab7;
    border-bottom: 1px solid #337ab7;
    line-height: 1;
  }
</style>