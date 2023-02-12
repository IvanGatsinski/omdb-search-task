<template>
  <div>{{ mesage }}</div>
</template>

<script>
export default {
  props: {
    mesage: {
      type: [String, Object],
      required: true
    }
  }
}
</script>

<style></style>
