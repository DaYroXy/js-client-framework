import database from '/database/database.js'
import Encryption from '../src/utils/Encryption.js'

class User {

    constructor() {
        if(typeof database.getTable("users") === "undefined") {
            database.createTable("users", [])
        }
    }
    
    new(Name, Email, Password) {
        console.log("User Created")

        const user = {
            name: Name,
            email: Email,
            password: Password
        }

        database.insert("users", user)
    }
    
    getUserById(id) {
        return database.getTable("users")[id];
    }

    getUserByEmail(email) {
        return database.getRowBy("users", "email", email);
    }

    getAllUsers(){
        return database.getTable("users")
    }

    generateToken = () => {
        return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
    }

    me(token) {
        let user = database.getRowBy("tokens", "token", token)
        
        if(user && new Date().getTime() > user.expiry) {
            database.delete("tokens", "user_email", user.user_email)
            user = null
        }

        if(!user) {
            return false
        }
        const {password, ...me} = this.getUserByEmail(user.user_email)
        return me
    }

    logout(token) {
        let me = this.me(token)
        localStorage.removeItem("token")
        database.delete("tokens", "user_email", me.email)
    }
    
    login(email, password) {
        const user = this.getUserByEmail(email);

        if(!user) {
            throw new Error("Email does not exist")
        }

        if(user.password !== password) {
            throw new Error("Passwords do not match.")
        }

        if(!database.getTable("tokens")) {
            database.createTable("tokens", [])
        }
        
        const { password:userPassword, ...usr } = user
        let userToken = database.getRowBy("tokens", "user_email", user.email)
        if(!userToken || new Date().getTime() > userToken.expiry) {
            database.delete("tokens", "user_email", user.email)

            const token = this.generateToken()
            const enc = new Encryption("Pn53OsxiKaGSxo6HEvAvkb1yRN6du6gZCoMuhVQx1zCM1k30qaCpeOJRLASJLbAv")
            const encryptedToken = enc.encrypt(token) + enc.encrypt(new Date().getTime())
            userToken = encryptedToken;
            database.insert("tokens", {
                token: encryptedToken,
                user_email: user.email,
                // expiry: new Date().getTime() + 1000 * 60 * 60 * 24 * 7
                expiry: new Date().getTime() + 1000 * 60 * 5
            })        
        } else {
            userToken = userToken.token
        }
        
        console.log(userToken)
        localStorage.setItem("token", userToken)
        
        return true;
    }
}

export default User