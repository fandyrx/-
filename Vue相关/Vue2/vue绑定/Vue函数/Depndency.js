class Dependency {
constructor() {
  this.subscribes = [];
}
addSub(sub) {
  this.subscribes.push(sub);
}

notify(){
  this.subscribes.forEach(sub=>sub.update())
}


}


class Watcher {
  constructor(vm,key,callback) {
    this.vm = vm
    this.key = key
    this.callback = callback
  }
}