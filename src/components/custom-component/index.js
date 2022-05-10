Component({
  onInit() {
    console.log('Primitive type:', this.counter++);
    console.log('Array is sharing ref between components', this.arrCounter.push(1));
  },
  methods: {
    counter: 1,
    arrCounter: [],
  }
});
