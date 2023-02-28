import handleHook from "../Core/Hooks/hook.js"

function Navbar() {

    const navbarLinks = {
        Home: "/home",
        Services: "/services",
        About: "/about",
        Contact: "/contact",
    }

    const hook = handleHook.create()
    console.log("loaded")
    handleHook.get(hook).then(element => {
        element.onclick = () => {
            console.log("hi")
            document.querySelector("[responsive-ui-menu]").classList.toggle("hidden")
        };
    })

    return (
        `
         <nav class="bg-zinc-200 fixed w-screen drop-shadow-md">
            <div class="py-5 px-5 container mx-auto flex items-center justify-between ">
                <div class="flex items-center">
                    <h1 redirect="/home" class="pointer text-3xl font-semibold">Venux</h1>
                    
                    <ul class="ml-10 item-center hidden md:flex">
                        ${Object.keys(navbarLinks).map((link, index) => (
                            `<li redirect="${navbarLinks[link]}" class="font-normal text-lg cursor-pointer ${(Object.keys(navbarLinks).length-1)==index?"":"mr-5"}">${link}</li>`
                        )).join('')}
                    </ul>
                </div>

                <div class="flex items-center hidden md:flex">
                    <a class="cursor-pointer" redirect="/signin">Sign In</a>
                    <button class="ml-5 bg-indigo-500 text-white px-5 py-2 rounded-md">Sign Up</button>
                </div>

                <i ${hook} class="fa-solid fa-bars text-2xl md:hidden cursor-pointer"></i>
            </div>
            
            <div responsive-ui-menu class="hidden px-5 container mx-auto md:hidden">
                <ul class="flex flex-col items-start">
                    ${Object.keys(navbarLinks).map((link, index) => (
                        `<li redirect="${navbarLinks[link]}" class="py-3 border-b-2 border-zinc-300 w-full font-normal text-lg cursor-pointer">${link}</li>`
                    )).join('')}
                </ul>
                <div class="my-5 w-full items-center flex-col">
                    <button class="mb-4 border-2 border-indigo-500 text-indigo-600 px-5 py-3 w-full rounded-md">Sign In</button>
                    <button class="mb-2 bg-indigo-500 text-white px-5 py-3 w-full rounded-md">Sign Up</button>
                </div>
            </div>


            
         </nav>
        `
    )
}

export default Navbar()