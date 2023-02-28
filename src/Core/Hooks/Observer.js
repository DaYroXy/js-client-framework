class Observer {
  constructor() {
    this.targetNode = document.body;
    this.config = { attributes: true, childList: true, subtree: true };
    this.callback = (mutationsList, observer) => {
      if (typeof this.onUpdateFn === "function") {
        this.onUpdateFn();
      }
    };
    this.observer = new MutationObserver(this.callback);
    this.onUpdateFn = null;
  }

  onUpdate(callbackFn) {
    if (typeof callbackFn === "function") {
      this.onUpdateFn = callbackFn;
    }
    this.observer.observe(this.targetNode, this.config);
  }
}

export default Observer;
