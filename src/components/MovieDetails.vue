<template>
  <div class="card">
    <img :src="data.Poster" alt="Poster" />
    <div class="card__text-content">
      <MovieDetailsItemText
        v-for="content in textItems"
        :key="content.heading"
        :content="content"
      />
    </div>
  </div>
</template>

<script>
import MovieDetailsItemText from './MovieDetailsItemText.vue'
export default {
  components: {
    MovieDetailsItemText
  },
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  computed: {
    textItems () {
      return [
        { heading: 'Title', paragraph: this.data.Title },
        { heading: 'Year', paragraph: this.data.Year },
        { heading: 'Plot', paragraph: this.data.Plot }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/site.scss';
.card {
  margin: auto;
  padding: 2rem;
  width: 50rem;
  display: flex;
  @include whenScreenIs(tablet) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  @include whenScreenIs(mobile-xs) {
    padding: 0;
  }
  .card__text-content {
    padding: 0 1rem;
    width: 25rem;
    display: flex;
    flex-direction: column;
    @include whenScreenIs(mobile) {
      width: 100%;
    }
  }
  img {
    width: 20rem;
    @include whenScreenIs(tablet) {
      margin-bottom: 1rem;
      width: 25rem;
    }
    @include whenScreenIs(mobile-xs) {
      width: 100%;
    }
  }
}
</style>
