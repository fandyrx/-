class Vue {
  constructor(obj_instance) {
   
    this.$data = obj_instance.data
    Observer(this.$data);
  }
}


