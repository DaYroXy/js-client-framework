import App from '../App.js';

class Router {
    // Private static variable to store the singleton instance
    static #instance = null;
    app = App.getInstance();
    bindedData = {};
  
    // Private constructor to prevent direct instantiation
    constructor() {
      // Initialize the router here
      this.url = null;
    }
  
    // Public static method to get the singleton instance
    static getInstance() {
      if (Router.#instance === null) {
        Router.#instance = new Router();
      }
      return Router.#instance;
    }
  
    // Public methods to get and set the URL
    getUrl() {
      return this.url;
    }
  
    setUrl(url) {
        const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        if (urlPattern.test(url)) {
          // input is a valid URL
            window.history.pushState({},"", url);
        } else {
          // input is a path
          window.history.pushState({},"", `${url}`);
        }

        this.url = url;
    }

    // 
    redirect(path) {

        if(path === null || path === undefined) {
            this.setUrl("/");
        }

        this.setUrl(path);
        this.app.render();
    }

    bind(name, data) {
      const bindedObject = {}
      bindedObject[name] = data;
      this.bindedData = {...this.bindedData, ...bindedObject}
    }

    getData(name) {
      return this.bindedData;
    }



    routes(path, component, others) {
      if (!Array.isArray(path)) {
        path = [path];
      }
      const currentPath = this.getUrl();
      
      if (path.includes(currentPath)) {
        const passedData = {others:others, ...this.bindedData}
        return component(passedData);
      } else {
        return "";
      }
    }

    guard(path, componenet, others, guardedData) {
      if (!Array.isArray(path)) {
        path = [path];
      }

      if(!path.includes(this.getUrl())) {
        return "";
      }

      if(!Array.isArray(guardedData)) {
        guardedData = [guardedData];
      }

      const r = guardedData.map((data) => {
        if(!data || data === null || data === undefined) {
          this.redirect("/")
          return;
        }
      })

      const passedData = {others:others, ...this.bindedData}
      return componenet(passedData);

    }

}
  
export default Router;