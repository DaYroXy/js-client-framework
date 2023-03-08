import handleHook from "../Core/Hooks/hook.js"
import Post from "../../api/Post.js"
import timeAgo from "../utils/timeAgo.js"

function Posts({me}) {
  const post = new Post()
  const posts = post.getAllPosts()

  const hook = handleHook.create()
  const hook2 = handleHook.create()
  const hook3 = handleHook.create()
  const hook4 = handleHook.create()

  const deletePost = (element) => {
    if(!element) return
    element.onclick = (e) => {
      const postId = e.target.getAttribute("data-post-id")
      post.delete(me.token, postId)
      document.querySelector(`[data-post-id="${postId}"]`).remove()
    }

  }

  const newPostHTML = (id, name, created_at, message, email, disableAnimation) => {
    return `
    <li data-post-id="${id}" ${!disableAnimation&&`data-aos="zoom-out" data-aos-delay="200" data-aos-duration="500"`} class="bg-white border drop-shadow-md rounded-xl mt-5 p-5">
      <div class="flex justify-between flex-col">
        <div class="mb-2 flex justify-between">
          <div>
            <h1 class="font-semibold">${name}</h1>
            <p class="text-gray-400">${timeAgo(created_at)}</p>
          </div>
          ${
            me.email === email ?
            `<div>
              <button data-post-id="${id}" ${hook3} class="w-[100px] bg-red-400 text-white rounded-xl px-5 p-2">Delete</button>
            </div>` : ''

          }
        </div>
        <div>
          <p>${message}</p>
        </div>
      </div>
    </li>
    `
  }
  
  const sendPost = (element) => {
    if(!element) return 
    element.onclick = () => {

      const content = element.querySelector("input").value
      if(content.length < 1) return
      try {
        const posted = post.new(me.token, content)
        const posts = document.querySelector(`[${hook2}]`)
        posts.insertAdjacentHTML("afterbegin", newPostHTML(posted.id, posted.name, posted.create_at, posted.message, posted.email))
      } catch(e) {
        console.log(e.message)
      }
    }
  }

  const clearPosts = () => {
    const posts = document.querySelector(`[${hook2}]`)
    posts.innerHTML = ''
  }

  const searchPosts = (element) => {
    if(!element) return
    element.onkeyup = (e) => {
      const query = e.target.value
      // if(!post.search(query)) {
        
      // }
      clearPosts()
      post.search(query).map(post => {
        const posts = document.querySelector(`[${hook2}]`)
        posts.insertAdjacentHTML("afterbegin", newPostHTML(post.id, post.name, post.create_at, post.message, post.email, true))
      })
    }
  }

  handleHook.attach(hook, sendPost)
  handleHook.attach(hook3, deletePost)
  handleHook.attach(hook4, searchPosts)


  return (
    `
    <div class="w-full bg-zinc-200 flex justify-between  h-fit">
        <div class="container px-2 w-full mx-auto py-[10rem]">
            <div class="max-w-[650px] mx-auto">
                <div ${hook4} class="flex drop-shadow-md bg-white p-1 rounded-xl">
                  <input type="text" class="w-full outline-none p-2" placeholder="Search for a post" />
                  <button class="w-[100px] bg-indigo-400 text-white rounded-xl px-5 p-2">Search</button>
                </div>
                
                ${me.email ? `<div ${hook} class="flex drop-shadow-md bg-white p-1 rounded-xl mt-5">
                <input type="text" class="w-full outline-none p-2" placeholder="Type something here..." />
                <button class="w-[100px] bg-indigo-400 text-white rounded-xl px-5 p-2">Post</button>
              </div>` : ''}

                <ul ${hook2}>
                  ${posts.map(post => (
                    `${newPostHTML(post.id, post.name, post.created_at, post.message, post.email)}`
                  )).join('')}
                </ul>

            </div>
        </div>
    </div>
    `
  )
}

export default Posts