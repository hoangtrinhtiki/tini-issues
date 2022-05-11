Page({
  data: {
    show: true,
  },
  onReady() {
    setTimeout(() => {
      this.setData({ show: false });
    }, 1000);
  },
  onShow() {},
  onHide() {},
  onUnload() {},
});
