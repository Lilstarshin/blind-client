<template>
  <div class="board-container">
    <section v-if="boardList.length > 0" class="board">
      <nuxt-link
        :class="['board-item', $route.params.id === b.slug && 'active']"
        v-for="b in boardList"
        :key="b._id"
        :to="{
          name: 'topics-id',
          params: {
            id: b.slug,
          },
        }"
      >
        {{ b.title }}
      </nuxt-link>
    </section>
    <section class="article-list">
      <GlobalArticleCard v-for="a in articleList" :key="a._id" :article="a" />
      <infinite-loading @infinite="getBoardArticleList" />
    </section>
  </div>
</template>
<script>
export default {
  components: {},
  created() {
    this.getBoardList()
  },
  data() {
    return {
      boardList: [],
      articleList: [],
      lastIndex: 0,
    }
  },
  methods: {
    async getBoardList() {
      const data = await this.$api?.$get('/board/list')

      this.boardList = data
    },
    getBoardArticleList($state) {
      setTimeout(async () => {
        if (this.articleList.length > 0) {
          this.lastIndex = this.articleList[this.articleList.length - 1]._id
        }
        const data = await this.$api?.$get(
          `/board/${this.$route.params.id}?lastIndex=${this.lastIndex}`
        )

        if (data.article.length === 0) {
          $state.complete()
        } else {
          this.articleList = this.articleList.concat(data.article)
          $state.loaded()
        }
      }, 100)

      // console.log(data)
    },
  },
}
</script>
<style lang="scss"></style>
