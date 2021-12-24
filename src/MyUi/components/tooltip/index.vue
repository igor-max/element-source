<template>
  <div></div>
</template>

<script>
export default {
  name: "ElTooltip",
  props: {
    // 主题
    effect: {
      type: String,
      validator: (value) => ["dark", "light"].includes(value),
      default: "dark",
    },
    // 内容
    content: String,
    // tooltip出现的位置
    placement: {
      validator: (value) =>
        [
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "left",
          "left-start",
          "left-end",
          "right",
          "right-start",
          "right-end",
        ].includes(value),
      default: "bottom",
    },
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style>
</style>