<template>
  <Fetch :callApi="fetchMovieById" :query="$route.params.id">
    <template #default="{ result: { data, loading, error } }">
      <Loader v-if="loading" />
      <Error v-else-if="error" :message="error" />
      <MovieDetails v-else :data="data || {}" />
    </template>
  </Fetch>
</template>

<script>
import Fetch from '@/components/Fetch.vue';
import Loader from '@/components/Loader.vue';
import Error from '@/components/Error.vue';
import MovieDetails from '@/components/MovieDetails.vue';

import { fetchMovieById } from '@/api';

export default {
  components: {
    Fetch,
    Loader,
    Error,
    MovieDetails
  },
  methods: {
    fetchMovieById
  }
}
</script>
