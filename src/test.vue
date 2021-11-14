<template>
  <div @click="$emit('input', 'haha')">{{ value }}</div>
</template>

<script>
export default {
  props: {
    value: String
  },
  mounted() {
    console.log(this.value);
  }
}
</script>

<style>

</style>