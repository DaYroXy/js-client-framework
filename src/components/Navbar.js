import handleHook from "../Core/Hooks/hook.js"
import Observer from "../Core/Hooks/observer.js"

function Navbar() {

    const navbarLinks = {
        Home: "/",
        About: "/about",
        Services: "/services",
        Contact: "/contact",
    }

    const hook = handleHook.create()

    const handleClick = (element) => {
        element.onclick = () => {
            document.querySelector("[responsive-ui-menu]").classList.toggle("hidden")
        };
    }

    handleHook.attach(hook, handleClick)


    return (
        `
         <nav class="bg-zinc-200 fixed z-50 w-screen drop-shadow-md">
            <div class="py-5 px-5 container mx-auto flex items-center justify-between ">
                <div class="flex items-center">
                    <h1 data-aos="fade-right" redirect="/" class="cursor-pointer text-3xl font-semibold">Venux</h1>
                    
                    <ul class="ml-10 item-center hidden md:flex">
                        ${Object.keys(navbarLinks).map((link, index) => (
                            `<li data-aos="fade-down" data-aos-delay="${index*50}" redirect="${navbarLinks[link]}" class="transition-colors ease-in-out hover:text-indigo-500 hover:border-indigo-500  hover:duration-300 font-normal text-lg cursor-pointer ${(Object.keys(navbarLinks).length-1)==index?"":"mr-5"}">${link}</li>`
                        )).join('')}
                    </ul>
                </div>

                <div class="items-center hidden md:flex">
                    <a data-aos="fade-down" data-aos-duration="1000" class="cursor-pointer" redirect="/login">Sign In</a>
                    <button data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000" redirect="/register" class="ml-5 bg-indigo-500 text-white px-5 py-2 rounded-md">Sign Up</button>
                </div>

                <i ${hook} class="fa-solid fa-bars text-2xl md:hidden cursor-pointer"></i>
            </div>
            
            <div responsive-ui-menu class="hidden px-5 container mx-auto md:hidden">
                <ul class="flex flex-col items-start">
                    ${Object.keys(navbarLinks).map((link, index) => (
                        `<li data-aos="fade-right" redirect="${navbarLinks[link]}" class="py-3 border-b-2 border-zinc-300 w-full font-normal text-lg cursor-pointer">${link}</li>`
                    )).join('')}
                </ul>
                <div class="my-5 w-full items-center flex-col">
                    <button data-aos="fade-up" data-aos-duration="1000" redirect="/login" class="mb-4 border-2 border-indigo-500 text-indigo-600 px-5 py-3 w-full rounded-md">Sign In</button>
                    <button redirect="/register" class="mb-2 bg-indigo-500 text-white px-5 py-3 w-full rounded-md">Sign Up</button>
                </div>
            </div>


            
         </nav>
        `
    )
}

export default Navbar()