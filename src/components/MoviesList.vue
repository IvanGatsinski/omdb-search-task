<template>
  <ul>
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

</style>
