import Hero from '../components/Home/Hero.js'
import Database from '../../database/database.js'

Database.createTable('users', [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@gmail.com'
    }
])

console.log(Database.getRowBy('users', 'name', "John Doe"))

function Home() {
    return (
        `
            ${Hero()}
        `
    )
}

export default Home