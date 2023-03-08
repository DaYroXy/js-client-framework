import loader from "../utils/loader.js";

class Events {

    listenForAllEvents(element) {
        loader("src/Core/Events").then(method => {
            method.map((method) => {
                loader(`src/Core/Events/${method}`).then(events => {
                    events.map(event => {
                        event = event.replace(".js", "")
                        element.querySelectorAll(`[${event}]`).forEach((element) => {
                            
                            import(`../Core/Events/${method}/${event}.js`).then(modules => {
                                let attr = element.getAttribute(event)
                                let data = {
                                    element: element,
                                    attribute: attr,
                                }
                                
                                element.addEventListener(method, (e) => modules.default({event: e, ...data}))
                            }).catch(err => {
                                console.log(err)
                            })
                        })
                    })
                })
            })


        })
    }

}

export default Events