App({
  onLaunch(options) {
    console.log('App onLaunch');
  },
  onShow(options) {
  },
  onError(error) {
    console.log('app error', error)
  },
  onUnhandledRejection(error) {
    console.log('app promise error', error)
  }
});