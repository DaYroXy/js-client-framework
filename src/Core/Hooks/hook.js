import App from "../../App.js";

class handleClick {
    static #instance = null;
    elementList = [
        "data-attr-mryhvp7r"
    ]
    // Public static method to get the singleton instance
    static getInstance() {
      if (handleClick.#instance === null) {
        handleClick.#instance = new handleClick();
      }
      return handleClick.#instance;
    }

    generateUniqueAttribute() {
        return `data-attr-${Math.random().toString(36).slice(2, 10)}`;
    }

    create(i) {
        // create unique id for each element randomly
        let UID = this.generateUniqueAttribute();
        const isDuplicate = this.elementList.find((element) => {
          return element === UID;
        });
        if (isDuplicate) {
          UID = this.create(i + 1);
        }
        this.elementList.push(UID);
        return UID;
    }

    waitForElementRender(element, timeout = 5000) {
        return new Promise((resolve, reject) => {
          const start = Date.now();
          const interval = setInterval(() => {
            if (element) {
              clearInterval(interval);
              resolve(true);
            } else if (Date.now() - start >= timeout) {
              clearInterval(interval);
              reject(`Timed out after ${timeout}ms waiting for element to render.`);
            }
          }, 30);
        });
    }

    async get(element) {
        try {
            const Rendered = await this.waitForElementRender(element)
            const el = document.querySelector(`[${element}]`)
            return el
        } catch (e) {
            console.log(e)
        }

    }

    
}
  
export default handleClick.getInstance();