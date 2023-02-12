<template>
  <Fetch :callApi="fetchMovies" :query="movie">
    <template #default="{ result: { data, loading, error } }">
      <Search v-model="movie" />
      <Loader v-if="loading" />
      <Error v-else-if="error" :message="error" />
      <MoviesList v-else @select-movie="id => showMovie(id)" :data="data || []" />
    </template>
  </Fetch>
</template>

<script>
import Fetch from '@/components/Fetch.vue';
import Loader from '@/components/Loader.vue';
import Error from '@/components/Error.vue';
import Search from '@/components/Search.vue';
import MoviesList from '@/components/MoviesList.vue';

import { fetchMovies } from '@/api';

export default {
  name: 'Home',
  components: {
    Fetch,
    Loader,
    Error,
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
      this.$router.push({ name: 'movie', params: { id } });
    }
  }
}
</script>