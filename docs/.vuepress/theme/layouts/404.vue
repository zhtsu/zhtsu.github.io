<template>
  <div id="page404">
    <div class="number">404</div>
    <div class="notfound">Not Found</div>
    <div class="gohome"><a href="/">回首页</a></div>
  </div>
</template>

<script>
export default {
  name: "Page404"
}
</script>

<style scoped>
  #page404 {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Monoton-Regular', sans-serif;
  }
  .number {
    display: flex;
    font-size: 20rem;
  }
  .notfound {
    display: flex;
    font-size: 10rem;
  }
  .gohome {
    display: flex;
    font-size: 2rem;
  }
  a {
    color: #337ab7;
  }
  @media screen and (max-width: 992px) {
    .number {
      font-size: 10rem;
    }
    .notfound {
      font-size: 5rem;
    }
  }
</style>