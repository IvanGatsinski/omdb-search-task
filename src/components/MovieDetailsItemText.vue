<template>
  <div class="text-item__container">
    <h3 class="heading">{{ content.heading }}</h3>
    <p>
      {{ content.paragraph }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/site.scss';
.text-item__container {
  margin-bottom: 1rem;
  @include whenScreenIs(tablet) {
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
  }
}
</style>
