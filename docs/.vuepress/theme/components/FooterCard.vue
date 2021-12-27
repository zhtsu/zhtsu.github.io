<template>
  <div id="footer-card">
    <div id="copyright">
      Copyright&nbsp;&copy;&nbsp;2021
      <a target="_blank" href="https://www.zhtsu.cn/"><strong>&nbsp;zhtsu&nbsp;</strong></a>
    </div>
    <div id="beian">
      备案号：<a target="_blank" href="https://beian.miit.gov.cn/">黔ICP备20001951号</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterCard"
}
</script>

<style scoped>
  #footer-card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  #copyright {
    display: flex;
  }
  #beian {
    display: flex;
  }
  a {
    text-decoration: none;
    color: #272727;
  }
  a:hover {
    color: #337ab7;
  }
</style>