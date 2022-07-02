Component({
  onInit() {
    this.triggerError();
  },
  onError(error) {
    console.log(error);
  },
  methods: {
    triggerError() {
      throw Error('hahaha')
    }
  }
});