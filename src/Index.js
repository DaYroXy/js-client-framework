import Router from './Core/Router.js'
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import Services from './pages/Services.js'
import Register from './pages/Register.js'
import Navbar from './components/Navbar.js'
import About from './components/About.js'
import Footer from './components/Footer.js'
import Contact from './components/Contact.js'
import Calculator from './components/Calculator.js'
import Posts from './components/Posts.js'

import Post from '../api/Post.js'
const post = new Post()

import User from '../api/User.js'

const router = Router.getInstance();

function Index() {
    console.log(post.search("anas"))
    const user = new User()
    const me = user.me(localStorage.getItem('token'))
    router.bind("me", {token:localStorage.getItem('token'),...me})

    return (
        `
            <div class="overflow-x-hidden">
                ${Navbar({me})}
                    ${router.routes(["/", "/home"], Home)}
                    ${router.routes("/register", Register)}
                    ${router.routes("/login", Login)}
                    ${router.routes("/about", About)}
                    ${router.routes("/services", Services, true)}
                    ${router.routes("/contact", Contact, true)}
                    ${router.guard("/calculator", Calculator, true, [me])}
                    ${router.guard("/posts", Posts, true, [me])}
                ${Footer}
            </div>
        `
    );
    // ${router.guard("/contact", Contact, true, me)}
}

export default Index