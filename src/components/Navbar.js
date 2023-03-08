import handleHook from "../Core/Hooks/hook.js"
import User from "../../api/User.js"

function Navbar({me}) {

    const navbarLinks = {
        Home: "/",
        About: "/about",
        Services: "/services",
        Contact: "/contact",
        Calculator: {path: "/calculator", guarded: me},
        Posts: {path: "/posts", guarded: me},
    }

    const hook = handleHook.create()
    const hook2 = handleHook.create()
    const hook3 = handleHook.create()

    const handleLogout = (element) => {
        if(element === null) return;
        element.onclick = () => {
            new User().logout(localStorage.getItem('token'))
            window.location.href = "/"
        }
    }

    const renderNavbarLink = (link, index, type)=>{
        let { path, guarded } = navbarLinks[link];
        if (typeof navbarLinks[link] !== "object") {
            path = navbarLinks[link]
        }

        const shouldRenderLink = typeof navbarLinks[link] !== "object" || guarded;
      
        if (!shouldRenderLink) {
          return '';
        }
        if(type === 1) {
            return `
              <li
                data-aos="fade-down"
                data-aos-delay="${index * 50}"
                redirect="${path}"
                class="transition-colors ease-in-out hover:text-indigo-500 hover:border-indigo-500 hover:duration-300 font-normal text-lg cursor-pointer ${index === Object.keys(navbarLinks).length - 1 ? '' : 'mr-5'}"
              >
                ${link}
              </li>
            `;
        } else {
            return `
            <li 
                data-aos="fade-right"
                redirect="${path}"
                class="py-3 border-b-2 border-zinc-300 w-full font-normal text-lg cursor-pointer"
                >
                ${link}
            </li>
            `
        }
      }

      const renderNavbarLinks = (type) => {
        return Object.keys(navbarLinks)
          .map((link, index) => renderNavbarLink(link, index, type))
          .join('');
      }

    const handleClick = (element) => {
        if(element === null) return;
            element.onclick = () => {
            document.querySelector("[responsive-ui-menu]").classList.toggle("hidden")
        };
    }

    handleHook.attach(hook, handleClick)
    handleHook.attach(hook2, handleLogout)
    handleHook.attach(hook3, handleLogout)

    return (
        `
         <nav class="bg-zinc-200 fixed z-50 w-screen drop-shadow-md">
            <div class="py-5 px-5 container mx-auto flex items-center justify-between ">
                <div class="flex items-center">
                    <h1 data-aos="fade-right" redirect="/" class="cursor-pointer text-3xl font-semibold">Venux</h1>
                    
                    <ul class="ml-10 item-center hidden md:flex">
                        ${renderNavbarLinks(1)}
                    </ul>
                </div>

                <div class="items-center hidden md:flex">
                    ${me ? `
                    <p data-aos="fade-down" class="md:hidden lg:block" data-aos-duration="1000" >${me.name}</p>
                    <button  data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000" ${hook2} class="ml-5 bg-indigo-500 text-white px-5 py-2 rounded-md">Logout</button>
                    ` :
                    `<a data-aos="fade-down" data-aos-duration="1000" class="cursor-pointer" redirect="/login">Sign In</a>
                    <button data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000" redirect="/register" class="ml-5 bg-indigo-500 text-white px-5 py-2 rounded-md">Sign Up</button>`}
                    
                </div>

                <i ${hook} class="fa-solid fa-bars text-2xl md:hidden cursor-pointer"></i>
            </div>
            
            <div responsive-ui-menu class="hidden px-5 container mx-auto md:hidden">
                <ul class="flex flex-col items-start">
                    ${renderNavbarLinks(2)}
                </ul>
                <div class="my-5 w-full items-center flex-col">
                    ${me ? 
                        `<button class="mb-2 bg-indigo-500 text-white px-5 py-3 w-full rounded-md" ${hook3}>Logout</button>`
                    : `<button data-aos="fade-up" data-aos-duration="1000" redirect="/login" class="mb-4 border-2 border-indigo-500 text-indigo-600 px-5 py-3 w-full rounded-md">Sign In</button>
                    <button redirect="/register" class="mb-2 bg-indigo-500 text-white px-5 py-3 w-full rounded-md">Sign Up</button>
                    `}

                </div>
            </div>


            
         </nav>
        `
    )
}

export default Navbar