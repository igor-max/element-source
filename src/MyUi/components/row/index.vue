<template>
  <div class="el-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElRow',
  props: {
    type: String,
    gutter: {
      type: Number
    },
    justify: {
      type: String,
      default: 'start',
      validate: val => ['start', 'end', 'center', 'space-around', 'space-between'].includes(val)
    },
    align: {
      type: String,
      validate: val => ['top', 'middle', 'bottom'].includes(val)
    },
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>

<style>

</style>