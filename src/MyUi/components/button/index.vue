<template>
  <button :type='nativeType' class="el-button" :class="classList" :autofocus='autofocus' @click="click">
    <i v-if="loading" class="el-icon-loading"></i>
    <i v-if='icon && !loading' :class="icon"></i>
    <!-- 使用 span 包裹可以设置 align-items: center 防止图标和文字不对齐 -->
    <span v-if='$slots.default'> 
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "ElButton",
  inject: {
    chForm: {
      default: "",
    },
    chFormItem: {
      default: "",
    },
    chTableColumn: {
      default: ''
    }
  },
  props: {
    type: {
      type: String,
      default: "default",
      validator: (val) =>
        [
          "primary",
          "success",
          "warning",
          "danger",
          "info",
          "text",
          "default",
        ].includes(val),
    },
    size: String,
    icon: {
      type: String,
      default: "",
    },
    nativeType: {
      type: String,
      default: "button",
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    autofocus: Boolean,
    nativeType: {
      type: String,
      default: 'button',
      validator: (value) => ['button', 'submit', 'reset'].includes(value)
    }
  },
  data() {
    return {};
  },
  methods: {
    click(e) {
      this.$emit("click", e);
    },
  },
  computed: {
    buttonSize() {
      // size 可以设置在button上，也可以设置在form上，还可以设置在全局
      return (
        this.size ||
        (this.chFormItem || {}).chFormItemSize ||
        (this.chTableColumn || {}).buttonSize ||
        (this.$ELEMENT || {}).size
      );
    },
    buttonDisabled() {
      return this.disabled || (this.chForm || {}).disabled || (this.chTableColumn || {}).disabled;
    },
    classList() {
      return [
        this.type ? "el-button--" + this.type : "",
        this.buttonSize ? "el-button--" + this.buttonSize : "",
        {
          "is-loading": this.loading,
          "is-disabled": this.buttonDisabled,
          "is-plain": this.plain,
          "is-autofocus": this.autofocus,
          "is-round": this.round,
          "is-circle": this.circle,
        },
      ];
    },
  },
};
</script>