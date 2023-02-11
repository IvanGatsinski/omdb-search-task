<template>
  <input
    @input="$emit('input', $event.target.value)"
    :value="value"
    type="text"
  />
</template>

<script>
export default {
  props: {
    value: String
  }
}
</script>

<style lang="scss" scoped>

</style>
