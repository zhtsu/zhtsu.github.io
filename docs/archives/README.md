<div class="archives-category-list" v-for="(category, i) in 
  ['C++', '游戏开发', '算法题', 'Python', '其他']"
  :key="i">
  <div class="archives-category-card">
    <div class="archives-category-title">{{category}}</div>
    <div v-for="(article, j) in $site.pages" :key="j">
        <a v-if="article.frontmatter.category === category" :href="article.path">{{article.frontmatter.title}}</a>
    </div>
  </div>
</div>
