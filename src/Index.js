import Router from './Core/Router.js'
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import Services from './pages/Services.js'
import Register from './pages/Register.js'
import Navbar from './components/Navbar.js'
import About from './components/About.js'
import Footer from './components/Footer.js'
import Contact from './components/Contact.js'
const router = Router.getInstance();


function Index() {

    return (
        `
            <div class="overflow-x-hidden">
            ${Navbar}
                ${router.routes(["/", "/home"], Home())}
                ${router.routes("/register", Register())}
                ${router.routes("/login", Login())}
                ${router.routes("/about", About())}
                ${router.routes("/services", Services(true))}
                ${router.routes("/contact", Contact(true))}
            ${Footer}
            </div>
        `
    );
}

export default Index