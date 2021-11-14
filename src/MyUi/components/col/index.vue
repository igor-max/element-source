<template>
  <div class="el-col">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>

<style>

</style>