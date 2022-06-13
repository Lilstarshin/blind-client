<template>
  <div class="wrap-searchbar">
    <nuxt-link
      :to="{
        name: 'search-query',
        params: {
          query,
        },
      }"
    >
      <SearchIcon class="search-icon" />
    </nuxt-link>
    <input
      type="text"
      v-model="query"
      placeholder="관심있는 내용을 검색해보세요!"
    />
  </div>
</template>
<script>
import { SearchIcon } from 'vue-feather-icons'
export default {
  components: {
    SearchIcon,
  },
  data() {
    return {
      query: null,
    }
  },
}
</script>
<style lang="scss" scoped>
.wrap-searchbar {
  width: 100%;
  margin: 40px 0 20px;
  .search-icon {
    position: absolute;
    margin-top: 18px;
    margin-left: 20px;
  }
  & > input {
    display: block;
    width: inherit;
    height: 60px;
    padding: 0 10px 0 62px;
    border: 2px solid #222;
    font-size: 18px;
    border-radius: 30px;
    box-sizing: border-box;
  }
}
</style>
