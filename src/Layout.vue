<template>
  <div class="layout__container">
    <h1>OMDB Search Task</h1>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/site.scss';

.layout__container {
  padding: 2rem 0;
  @include whenScreenIs(tablet) {
    margin-bottom: 1rem;
  }
  @include whenScreenIs(mobile-xs) {
    padding: 0;
  }
  h1 {
    text-align: center;
    margin-bottom: 3rem;
    @include whenScreenIs(tablet) {
      margin-bottom: 1rem;
    }
  }
}
</style>
