<template>
  <div>
    <slot :result="{ loading, error, data }" />
  </div>
</template>

<script>
export default {
  props: {
    callApi: {
      type: Function,
      required: true
    },
    query: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      loading: false,
      error: null,
      data: null
    }
  },
  methods: {
    async fetchData () {
      const { callApi } = this;
      this.loading = true;

      try {
        const data = await callApi(this.query);
        this.data = data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    }
  },
  watch: {
    query: {
      immediate: true,
      handler (value) {
        value && this.fetchData();
      }
    }
  }
}
</script>
