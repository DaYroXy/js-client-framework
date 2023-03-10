import User from '/api/User.js'
import handleHook from "../../Core/Hooks/hook.js"
import Router from '../../Core/Router.js';

function LoginForm() {

    const user = new User();

    const hook = handleHook.create()
    const hook2 = handleHook.create()

    handleHook.waitForElementRender(hook2).then((element) => {
        document.querySelector(`[${hook2}]`).innerText = ""
    })


    const handleSignIn = (data) => {
        const {email, password} = data;
        const errorInput = document.querySelector(`[${hook2}]`)

        if(email === "" || password === "") {
            errorInput.innerText = "Please fill in all fields"
            return
        }

        try {
            user.login(email, password)
            window.location.href = "/"
        } catch(e) {
            errorInput.innerText = e.message
        }
    }

    const handleClick = (element) => {
        if(element === null) return;
        const submit = element.querySelector("[type='submit']")
        submit.onclick = (e) => {
            e.preventDefault();
            const form = new FormData(element);
            const data = {
                name: form.get("name"),
                email: form.get("email"),
                password: form.get("password"),
                password2: form.get("password2"),
            }

            handleSignIn(data)
        }
    }

    handleHook.attach(hook, handleClick)

    return (
        `
        <div class="w-full flex justify-between min-h-screen h-fit md:h-screen bg-zinc-200">
            <div class="container mx-auto px-5 m-auto flex flex-col md:flex-row items-center justify-center ">

                <div data-aos="zoom-out" data-aos-duration="500" class="relative mt-[5rem] md:mt-0 overflow-hidden flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
                    <!-- Left Side -->

                    <form ${hook} class="max-w-[550px] p-6 md:p-20">

                        <h2 data-aos="fade-right" data-aos-duration="1000" class="font-mono mb-5 text-4xl font-bold">Login In</h2>
                        <p data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" class="max-w-sm mb-6 font-sans font-light text-gray-600">
                        Login to your account to upload or download pictures, Videos or music.</p>

                        <input name="email" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" type="email" placeholder="Enter your email address" class="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" />                            
                        <input name="password" data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000" type="password" placeholder="Enter your password" class=" mt-6 w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" />                            
                        <input data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000" type="submit" value="Login" class="cursor-pointer mt-6 w-full p-6 border bg-indigo-500 text-white text-xl rounded-md " />
                        <p ${hook2} class="mt-5 text-red-500 text-center">Error message</p>

                    </form>

                    <!-- Right Side -->
                    <img class="object-cover w-[430px] hidden lg:block" src="https://images.unsplash.com/photo-1502899576159-f224dc2349fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXJiYW4lMjBpcGhvbmUlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80" />

                </div>

            </div>
        </div>
        `
    )
}

export default LoginForm