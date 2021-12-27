<template>
  <div :id="getCardId()" class="article-card" :style="borderStyle"  @click="skipTo(path)">
    <div id="artice-title">
      {{title}}
    </div>
    <div id="artice-description">
      <div class="arrow">></div> {{description}}
    </div>
    <div id="artice-time">
      <div class="box">{{date}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    date: {
      type: String,
      default: "2021-01-01"
    },
    title: {
      type: String,
      default: "文章标题"
    },
    description: {
      type: String,
      default: "简单的文章介绍"
    },
    path: {
      type: String,
      default: "/"
    },
    index: {
      type: Number,
      default: 0
    },
    maxLength: {
      type: Number,
      default: 0
    }
  },
  methods: {
    skipTo(path) {
      window.location.href = path;
    },
    addActive() {
      document.getElementById(`article-card${this.index}`).classList.add('active');
    },
    removeActive() {
      document.getElementById(`article-card${this.index}`).classList.remove('active');
    },
    getCardId() {
      return `article-card${this.index}`;
    }
  },
  computed: {
    borderStyle: function () {
      if (this.index == this.maxLength - 1) {
        return "border-bottom: none;";
      } else {
        return "border-bottom: 1px dotted #ddd;";
      }
    }
  }
}
</script>

<style scoped>
  .no-border {
    border-bottom: none;
  }
  .article-card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px dotted #ddd;
  }
  .article-card:hover {
    color: #337ab7;
    cursor: pointer;
  }
  .article-card:hover .arrow {
    font-weight: bold;
  }
  .active {
    color: #337ab7;
  }
  .active .arrow {
    font-weight: bold;
  }
  .box {
    display: flex;
  }
  .arrow {
    display: inline;
    color: green;
  }
  #artice-time {
    display: flex;
    flex-direction: row-reverse;
    font-size: 1.5rem;
  }
  #artice-title {
    display: flex;
    font-size: 2rem;
  }
  #artice-description {
    width: 240px;
    font-size: 1.5rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
</style>