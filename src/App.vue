<template>
  <div class="app">
    <el-upload>
      <el-button action='http://location' type='success' :beforeUpload='beforeUplaod'>upload</el-button>
    </el-upload>
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
     
    };
  },
  methods: {
    beforeUplaod() {
      return false;
    }
  },
  watch: {
  
  },
};
</script>

<style lang='scss' scoped>
</style>