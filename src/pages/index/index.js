Page({
  scrollToRed() {
    my.pageScrollTo({ selector: ".red", duration: 300 });
  },
  scrollToTop() {
    my.pageScrollTo({ scrollTop: 0, duration: 300 });
  },
});
