Page({
  data: {
    showCustom: false,
  },
  saveRef(ref) {
    this.ref = ref;
  },
  showTextInCustom() {
    this.ref.setValue("text is shown!!");
  },
  showCustom() {
    this.setData({ showCustom: true });
  },
});
