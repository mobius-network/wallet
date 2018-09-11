class Drawer {
  subscribe(callback) {
    this.listener = callback;
  }

  notify(event) {
    if (this.listener) {
      this.listener(event);
    }
  }

  unsubscribe() {
    this.listener = null;
  }
}

export default new Drawer();
