<template>
  <div class="board-card">
    <div class="head">
      <div class="title-side">
        <div class="board-icon"></div>
        <h2>{{ title }}</h2>
      </div>
      <nuxt-link
        :to="{
          name: 'topics-id',
          params: {
            id: slug,
          },
        }"
        >더보기 ></nuxt-link
      >
    </div>
    <div class="body">
      <ul class="article-list">
        <li v-for="a in articleList" :key="a.id">
          <span class="article-title">{{ a.title }}</span>
          <span class="count-display">
            <EyeIcon size="1x" class="icon" />
            {{ a.viewCount }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { EyeIcon } from 'vue-feather-icons'
export default {
  components: {
    EyeIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    articleList: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
<style lang="scss"></style>
