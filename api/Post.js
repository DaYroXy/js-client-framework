import database from '/database/database.js'
import User from './User.js'

class Post {

    constructor() {
        if(typeof database.getTable("posts") === "undefined") {
            database.createTable("posts", [])
        }
    }
    
    new(Token, Message) {
        const user = new User()
        const me = user.me(Token)

        if(!me) {
            throw new Error("You are not logged in.")
        }
        
        const post = {
            id: database.getTable("posts").length + 1,
            email: me.email,
            message: Message,
            created_at: new Date().getTime()
        }

        database.insert("posts", post)
        return {name:me.name, ...post};
    }

    delete(token, id) {
        const posts = database.getTable("posts")
        
        const index = posts.findIndex(post => +post.id === +id)

        if(index === -1) {
            throw new Error("Post not found.")
        }
        const user = new User()
        const me = user.me(token)
        if(me.email === posts[index].email) {
            posts[index] = {}
            database.deleteTable("posts")
            database.createTable("posts", posts)
            return true;
        }

        throw new Error("You are not the owner of this post.")

    }

    search(query) {
        const posts = database.getTable("posts");
        const filteredPosts = posts.filter(post => post.id !== undefined);
        return filteredPosts
          .map(post => {
            const user = new User();
            const me = user.getUserByEmail(post.email);
            return {...post, name: me.name };
          })
          .filter(post => post.message.toLowerCase().includes(query.toLowerCase()))
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // sort by created_at in descending order
    }
    
    getAllPosts() {
        const posts = database.getTable("posts");
        const filteredPosts = posts.filter(post => post.id !== undefined);
        return filteredPosts
          .map(post => {
            const user = new User();
            const me = user.getUserByEmail(post.email);
            return {...post, name: me.name };
          })
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // sort by created_at in descending order
          
      }


    deleteAllPosts() {
        database.deleteTable("posts")
        return database.createTable("posts", [])
    }
}

export default Post