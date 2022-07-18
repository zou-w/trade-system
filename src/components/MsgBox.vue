<template>
  <h-msg-box
    v-model="modal1"
    :escClose="true"
    title="普通的MsgBox对话框标题"
    @on-ok="ok"
    @on-cancel="cancel"
    :beforeEscClose="beforetest"
  >
    <p>对话框内容</p>
    <p>对话框内容</p>
    <p>对话框内容</p>
  </h-msg-box>
</template>

<script>
export default {
  name: "MsgBox",
  props: ["modal"],
  data() {
    return {
      modal1: false,
    };
  },
  methods: {
    changeModal(params) {
      console.log(params);
      this.modal1 = params;
    },
    beforetest() {
      return true;
    },
    ok() {
      this.$hMessage.info("点击了确定");
    },
    cancel() {
      this.$hMessage.info("点击了取消");
    },
  },
};
</script>

<style></style>
