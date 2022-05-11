Component({
  onInit() {
    this.notSharedRefArr = []

    console.log('Internal prop with primitive type does not share its value:', this.primitiveNumber++);
    console.log('Internal prop with reference type which is initialized in "onInit" does not share its ref', this.notSharedRefArr.push(1));
    console.log('But the one which is initialized inside "methods" is sharing ref between components', this.sharedRefArr.push(counter++));
  },
  didUnmount() {
    console.log('-------------------------when unmount-------------------------')
    console.log('Internal prop with primitive type:', this.primitiveNumber);
    console.log('Internal prop with reference type which is initialized in "onInit"', this.notSharedRefArr);
    console.log('The one which is initialized inside "methods"', this.sharedRefArr);
  },
  methods: {
    primitiveNumber: 1,
    sharedRefArr: [],
  }
});
