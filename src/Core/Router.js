import App from '../App.js';

class Router {
    // Private static variable to store the singleton instance
    static #instance = null;
    app = App.getInstance();
  
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
            console.log(`${url} is a valid URL.`);
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
        console.log(this.app)
    }


    routes(path, component) {
      if (!Array.isArray(path)) {
        path = [path];
      }
      const currentPath = this.getUrl();
      if (path.includes(currentPath)) {
        return component;
      } else {
        return "";
      }
    }

}
  
export default Router;