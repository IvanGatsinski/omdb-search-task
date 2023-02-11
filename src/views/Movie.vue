<template>
  <Fetch :callApi="fetchMovieById" :params="$route.params.id">
    <template #default="{ result: { data, loading, error } }">
      <div v-if="loading">Loading...!</div>
      <div v-else-if="error">{{ error }}</div>
      <MovieDetails v-else :data="data" />
    </template>
  </Fetch>
</template>

<script>
import Fetch from '@/components/Fetch.vue'
import MovieDetails from '@/components/MovieDetails.vue'
import { fetchMovieById } from '@/api'

export default {
  components: {
    Fetch,
    MovieDetails
  },
  methods: {
    fetchMovieById
  }
}
</script>

<style lang="scss" scoped></style>
