<template>
  <Fetch :callApi="fetchMovies" :params="movie">
    <template #default="{ result: { data, loading, error } }">
      <Search v-model="movie" />
      <div v-if="loading">Loading...!</div>
      <div v-else-if="error">{{ error }}</div>
      <MoviesList v-else @select-movie="id => showMovie(id)" :data="data" />
    </template>
  </Fetch>
</template>

<script>
import Fetch from '@/components/Fetch.vue'
import Search from '@/components/Search.vue'
import MoviesList from '@/components/MoviesList.vue'

import { fetchMovies } from '@/api'

export default {
  name: 'Home',
  components: {
    Fetch,
    Search,
    MoviesList
  },
  data () {
    return {
      movie: ''
    }
  },
  methods: {
    fetchMovies,
    showMovie (id) {
      this.$router.push({ name: 'movie', params: { id } })
    }
  }
}
</script>

<style lang="scss" scoped></style>
