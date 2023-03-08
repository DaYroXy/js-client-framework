import Database from '../../database/database.js'
import Hero from '../components/Home/Hero.js'
import Services from './Services.js'
import About from '../components/About.js'
import Contact from '../components/Contact.js'

function Home() {
    return (
        `
        ${Hero()}
        ${About()}
        ${Services()}
        ${Contact()}
        `
    )
}

export default Home