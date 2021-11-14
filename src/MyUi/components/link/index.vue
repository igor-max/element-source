<script>
export default {
  name: "ElLink",
  props: {
    type: {
      type: String,
      default: "default",
      validate: (val) =>
        ["default", "primary", "success", "warning", "danger", "info"].includes(
          val
        ),
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    href: String,
    icon: String,
  },
  render(h) {
    const { type, underline, disabled, href, icon, $slots } = this;
    const click = (e) => {
      if (!disabled) {
        this.$emit("click", e);
      }
    };
    const classList = [
      `el-link`,
      `el-link--${type}`,
      {
        'is-underline': underline && !disabled,
        'is-disabled': disabled,
      },
    ];
    return (
      <a
        href={disabled ? null :href}
        disabled={disabled}
        class={classList}
        onClick={click}
      >
        {icon && <i class={icon}></i>}
        {$slots.default}
      </a>
    );
  },
};
</script>

<style>
</style>