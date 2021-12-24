<script>
import ajax from "./ajax.js";
export default {
  name: "ElUpload",
  props: {
    // upload about
    headers: Object,
    withCredentials: Object,
    data: Object,
    filename: String,
    action: {
      type: String,
      required: true,
    },
    onSuccess: Function,
    onError: Function,
    onProgress: Function,
    // upload end

    // other
    limit: Number,
    fileList: Array,
    multiple: Boolean,
    autoUpload: {
      type: Boolean,
      default: true,
    },
    httpRequest: {
      type: Function,
      default: ajax,
    },
    beforeUpload: Function,
    onExceed: Function,
    
    beforeRemove: Function,  // ????
    onChange: Function,   // ???
    onRemove: Function,   // ???
    onPreview: Function   // ???
  },
  data() {
    return {
      files: [],
    };
  },
  methods: {
    change(e) {
      let files = [...e.target.files];
      if (!files.length) return;

      // 文件超出限制（直接return了，也可以上传到limit）
      if (this.limit && this.fileList.length + files.length > this.limit) {
        this.onExceed && this.onExceed(files, this.fileList);
        return;
      }

      // 是否多选
      if (!this.multiple) {
        files = files.slice(0, 1);
      }

      files.forEach((file) => {
        this.onStart();
        if (this.autoUpload) this.upload(file);
      });
    },
    upload(file) {
      if (!this.beforeUpload) {
        return this.post(file);
      }
      const res = this.beforeUpload(file);
      if (typeof res === "promise") {
        res.then(
          (r) => {
            this.post(r);
          },
          (err) => {
            this.onRemove(null, rawFile);
          }
        );
      } else if (res !== false) {
        this.post(file);
      } else {
        this.onRemove(null, rawFile);
      }
    },
    onRemove() {},
    post(file) {
      const options = {
        headers: this.headers,
        withCredentials: this.withCredentials,
        file,
        data: this.data,
        filename: this.name,
        action: this.action,
        onSuccess(res) {
          this.onSuccess && this.onSuccess(res, rawFile);
        },
        onProgress: (e) => {
          this.onProgress && this.onProgress(e, rawFile);
        },
        onError: (err) => {
          this.onError && this.onError(err, rawFile);
        },
      };
      const req = this.httpRequest(options);
    },
    click() {
      this.$refs.file.click();
    },
  },
  render() {
    return (
      <div onClick={this.click}>
        <input
          class="el-upload__input"
          type="file"
          ref="file"
          onChange={this.change}
        />
        {this.$slots.default}
      </div>
    );
  },
};
</script>