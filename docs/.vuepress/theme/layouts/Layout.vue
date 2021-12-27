<template>
  <div id="layout">
    <div id="left" v-show="!isPhone">
      <div id="left-main">
        <div id="author" class="no-select" @click="skipTo('/')">
          <AuthorCard/>
        </div>
        <div id="article-list">
          <div v-for="(article, index) in articleList" :key="index" @click="addArticleActive(index)">
            <ArticleCard
                :max-length="articleNum"
                :index="index"
                :ref="getArticleRef(index)"
                :date="showedDate(article.frontmatter.date)"
                :title="article.frontmatter.title"
                :description="article.frontmatter.description"
                :path="article.path"/>
          </div>
        </div>
      </div>
      <footer id="left-footer">
        <FooterCard/>
      </footer>
    </div>
    <div id="right">
      <header id="header">
        <HeaderCard ref="headerCard"/>
        <div class="brace-box"></div>
        <div id="collapse-button-box">
          <div class="brace-box"></div>
          <div id="collapse-button" @click="menuControl()" v-show="isPhone">
            <span id="collapse-button-image" class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
          </div>
        </div>
      </header>
      <div id="right-main">
        <Content class="content-box" v-show="!isShowMenu"/>
        <div id="phone-article-list" v-show="isShowMenu">
          <div v-for="(article, index) in articleList" :key="index" @click="addArticleActive(index)">
            <ArticleCard
                :max-length="articleNum"
                :index="index"
                :ref="getArticleRef(index)"
                :date="showedDate(article.frontmatter.date)"
                :title="article.frontmatter.title"
                :description="article.frontmatter.description"
                :path="article.path"/>
          </div>
        </div>
      </div>
      <footer id="right-footer" v-show="isPhone">
        <FooterCard/>
      </footer>
    </div>
  </div>
</template>

<script>
import AuthorCard from "../components/AuthorCard";
import Footer from "../components/FooterCard";
import FooterCard from "../components/FooterCard";
import HeaderCard from "../components/HeaderCard";
import ArticleCard from "../components/ArticleCard";
export default {
  name: "Layout",
  components: {ArticleCard, HeaderCard, FooterCard, Footer, AuthorCard},
  data() {
    return {
      isPhone: false,
      screenWidth: null,
      isShowMenu: false
    }
  },
  computed: {
    articleList: function() {
      return this.$site.pages.filter((val) => {
        return !this.empty(val.frontmatter);
      }).sort((a, b) => {
        if (this.showedDate(a.frontmatter.date) < this.showedDate(b.frontmatter.date)) {
          return 1;
        } else if (this.showedDate(a.frontmatter.date) > this.showedDate(b.frontmatter.date)) {
          return -1;
        } else {
          return 0;
        }
      });
    },
    articleNum: function() {
      return this.articleList.length;
    },
  },
  methods: {
    empty(obj) {
      for (let key in obj) {
        return false;
      }
      return true;
    },
    showedDate(dateStr) {
      return dateStr.substr(0, 10);
    },
    getArticleRef(index) {
      return "article"+index;
    },
    addArticleActive(index) {
      this.$refs[`article${index}`][0].addActive();
    },
    getIndexByPath(path) {
      let index = 0;
      for (let i = 0; i < this.articleNum; i++) {
        if (path == this.articleList[i].regularPath) {
          index = i;
          break;
        }
      }
      return index;
    },
    menuControl() {
      if (this.isShowMenu) {
        document.getElementById('collapse-button-image').classList.remove('glyphicon-remove');
        document.getElementById('collapse-button-image').classList.add('glyphicon-menu-hamburger');
        this.isShowMenu = false;
      } else {
        document.getElementById('collapse-button-image').classList.remove('glyphicon-menu-hamburger');
        document.getElementById('collapse-button-image').classList.add('glyphicon-remove');
        this.isShowMenu = true;
      }
    },
    skipTo(path) {
      window.location.href = path;
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    if (this.screenWidth < 992) {
      this.isPhone = true;
    } else {
      this.isPhone = false;
    }
    let regularPath = this.$page.regularPath;
    let index = this.getIndexByPath(regularPath);
    if (regularPath == '/') {
      this.$refs.headerCard.addActive('home');
    } else if (regularPath == '/archives/') {
      this.$refs.headerCard.addActive('archives');
    } else if (regularPath == '/about/') {
      this.$refs.headerCard.addActive('about');
    } else if (regularPath == '/other/') {
      this.$refs.headerCard.addActive('other');
    }
    this.$refs[`article${index}`][0].addActive();
    const that = this
    window.onresize = function() {
        that.screenWidth = document.body.clientWidth
    }
    // 百度统计
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?46024285b2450a5ff924a1043e0c37f1";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
  },
  watch: {
    screenWidth (newVal) {
      this.screenWidth = newVal
      if (newVal < 992) {
        this.isPhone = true;
      } else {
        this.isPhone = false;
      }
    }
  }
}
</script>

<style scoped>
  #layout {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
  }
  #left {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    border-right: 1px dotted #ddd;
    height: 100%;
    width: 18%;
    padding: 2rem;
    min-width: 300px;
  }
  #left-main {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    flex-grow: 1;
    justify-content: center;
    overflow: hidden;
  }
  #author {
    display: flex;
    width: 100%;
    border-bottom: 1px dotted #ddd;
    justify-content: center;
  }
  #author {
    cursor: pointer;
  }
  .no-select {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-decoration: none;
  }
  #article-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  #article-list::-webkit-scrollbar {
    display: none;
  }
  #left-footer {
    display: flex;
    border-top: 1px dotted #ddd;
    height: 50px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  #right-footer {
    display: flex;
    border-top: 1px dotted #ddd;
    height: 50px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  #right {
    min-width: 300px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 2rem;
    height: 100%;
    flex-grow: 1;
    overflow: hidden;
  }
  #header {
    display: flex;
    width: 100%;
    height: 50px;
    border-bottom: 1px dotted #ddd;
  }
  #right-main {
    display: flex;
    width: 100%;
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
  #right-main::-webkit-scrollbar {
    display: none;
  }
  .content-box {
    margin-top: 10px;
    width: 100%;
  }
  .brace-box {
    display: flex;
    flex-grow: 1;
  }
  #collapse-button {
    display: flex;
    background-color:transparent;
    border-style:none;
    align-items: center;
    height: 34px;
  }
  #collapse-button-box {
    display: flex;
    flex-direction: column;
  }
  #phone-article-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  #phone-article-list::-webkit-scrollbar {
    display: none;
  }
</style>