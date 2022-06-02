Component({
  ref() {
    return { setValue: this.setValue.bind(this) };
  },
  methods: {
    setValue(value) {
      this.setData({ value });
    },
  },
});
