<script>
export default {
  name: "ElRadio",
  props: {
    value: [Number, String],  // 作用是为了判断是否可label相等，相等就显示选中的效果
    name: String,
    size: String, // Radio 的尺寸，仅在 border 为真时有效
    border: Boolean,
    disabled: Boolean,
    label: [Number, String, Boolean],
  },
  data() {
    return {
      model: this.label, // 绑定的是label
    };
  },
  methods: {
    change(e) {
      // 最后是把label赋值给父组件
      this.$emit("input", this.label);
      this.$emit("change", this.label);
    },
  },
  render() {
    const { value, label, $slots, name, disabled, model, change } = this;
    const labelClass = [ "el-radio", disabled && 'is-disabled'];
    return (
      <label class={labelClass}>
        <span
          class={[
            "el-radio__input",
            disabled && "is-disabled",
            value === label && "is-checked",
          ]}
        >
          <span class="el-radio__inner"></span>
          {/* 这里把input的opacity: 0; 使用的是el-radio__inner的样式  */}
          {/** 一是为了修改样式，二是如果没有传递 name属性，我们可以根据 value === label 来判断是不是一个组的 */}
          <input
            class="el-radio__original"
            disabled={disabled}
            checked={value === label}
            type="radio"
            value={model}
            onChange={change}
            name={name}
          />
        </span>
        <span class="el-radio__label">{$slots.default || label}</span>
      </label>
    );
  },
};
</script>