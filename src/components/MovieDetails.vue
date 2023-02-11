<template>
  <ul>
    <li v-for="(value, key) in data" :key="key">{{ key }}: {{ value }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {},
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
