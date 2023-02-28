import Router from './Core/Router.js'
import Home from './pages/Home.js'
import Navbar from './components/Navbar.js'
import About from './components/About.js'

const router = Router.getInstance();

function Index() {

    return (
        `
            
            ${Navbar}
            ${router.routes(["/", "/home"], Home({username: "Venux"}))}
            ${router.routes("/about", About())}

        `
    );
}

export default Index