<template>
  <ul class="movies-list__container">
    <li
      v-for="movie in data"
      :key="movie.imdbID"
      @click="$emit('select-movie', movie.imdbID)"
    >
      {{ movie.Title }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/site.scss';
.movies-list__container {
  width: 30rem;
  margin: auto;
  padding: 2rem;
  @include whenScreenIs(tablet) {
    width: 20rem;
  }
  li {
    cursor: pointer;
    margin: 0.5rem 0;
    padding: 0.5rem;
    &:hover {
      background-color: $secondary-color;
      color: $white;
    }
  }
}
</style>
