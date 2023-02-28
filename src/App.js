// import Index from './Index.js';
import Events from './Core/Events.js';
import Router from './Core/Router.js';

export default class App {
    DOM_ROOT = ""   // Private DOM_ROOT @desc: DOM root element
    static #instance = null;


    createRoot = (element) => {
        this.DOM_ROOT = element
        
        window.history.pushState({},"", "http://127.0.0.1:5500");
        const router = Router.getInstance();

        router.setUrl('/');
        this.render()
    }

    // Public static method to get the singleton instance
    static getInstance() {
        if (App.#instance === null) {
            App.#instance = new App();
        }
        return App.#instance;
        }

    // Print the DOM root
    printDomChilds = () => {
        console.log(this.DOM_ROOT);
    }

    // Render Element to DOM
    render = () => {
        import("./Index.js").then(Index => {
            this.DOM_ROOT.innerHTML = Index.default()
            const events = new Events()
            events.listenForAllEvents(this.DOM_ROOT)
        })
    }

}

const app = App.getInstance()
app.createRoot(document.getElementById('root'))