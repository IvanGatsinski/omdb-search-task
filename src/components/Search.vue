<template>
  <div class="search__container">
    <label for="search">Find movie</label>
    <input
      @input="search"
      :value="value"
      type="text"
      id="search"
      name="search"
      placeholder="Search movie"
    />
  </div>
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  props: {
    value: String
  },
  methods: {
    setInputTimeout: debounce(function (value) {
      this.$emit('input', value);
    }, 600),
    search ($event) {
      this.setInputTimeout($event.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
.search__container {
  margin: auto;
  width: 10rem;
  display: flex;
  flex-direction: column;

}

</style>
