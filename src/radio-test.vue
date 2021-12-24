<template>
  <div class="app">
    <el-radio v-model="radio" name="lala" label="1">备选项</el-radio>
    <el-radio v-model="radio" name="lala" label="2">备选项</el-radio>

    <el-radio disabled v-model="radio2" label="禁用">备选项</el-radio>
    <el-radio disabled v-model="radio2" label="选中且禁用">备选项</el-radio>

    <!-- <Test v-model='name' /> -->
  </div>
</template>

<script>
import Test from "./test.vue";
export default {
  name: "App",
  components: { Test },
  data() {
    return {
      radio: "1",
      radio2: "选中且禁用",
    };
  },
  methods: {},
  watch: {
    radio(val) {
      //  console.log(val)
    },
  },
};
</script>

<style lang='scss' scoped>
</style>