import User from '/api/User.js'
import handleHook from "../../Core/Hooks/hook.js"

function RegisterForm() {

    const user = new User();

    const hook = handleHook.create()
    const hook2 = handleHook.create()

    handleHook.waitForElementRender(hook2).then((element) => {
        document.querySelector(`[${hook2}]`).innerText = ""
    })


    const handleSignUp = (data) => {
        const {name, email, password, password2} = data;
        const errorInput = document.querySelector(`[${hook2}]`)

        if(name === "" || email === "" || password === "" || password2 === "") {
            errorInput.innerText = "Please fill in all fields"
            return
        }

        if(user.getUserByEmail(email)) {
            errorInput.innerText = "Email already exists"
            return
        }

        if(password !== password2) {
            errorInput.innerText = "Passwords do not match"
            return
        }

        user.new(name, email, password)
        errorInput.innerText = "Registration completed successfuly."
        errorInput.classList.remove("text-red-500")
        errorInput.classList.add("text-green-700")
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

            handleSignUp(data)
        }
    }



    handleHook.attach(hook, handleClick)


    return (
        `
        <div class="w-full flex justify-between min-h-screen h-fit md:h-screen bg-zinc-200">
            <div class="container mx-auto px-5 m-auto flex flex-col md:flex-row items-center justify-center ">

                <div data-aos="zoom-out" data-aos-duration="500" class="relative mt-[6rem] md:mt-0 overflow-hidden flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
                    <!-- Right Side -->
                    <img class="object-cover w-[430px] hidden lg:block" src="https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
                
                    <!-- Left Side -->
                    <form ${hook} class="max-w-[550px] p-6 md:p-20">

                        <h2 data-aos="fade-left" data-aos-duration="1000" class="font-mono mb-5 text-4xl font-bold">Registiration</h2>
                        <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" class="max-w-sm mb-6 font-sans font-light text-gray-600">
                            Register and join the fun right away. we will protect you
                        </p>

                        <input data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000" name="name" type="text" placeholder="Enter your full name" class="mb-4 mt-2 w-full p-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" />                            
                        <input data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" name="email" type="email" placeholder="Enter your email address" class="mb-4 w-full p-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" />                            
                        <input data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000" name="password" type="password" placeholder="Enter your password" class=" mb-4 w-full p-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" />                            
                        <input data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000" name="password2" type="password" placeholder="Very your password" class=" mb-4 w-full p-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" />                            
                        <input data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000" type="submit" value="Register" class="cursor-pointer mb-4 w-full p-3 border bg-indigo-500 text-white text-xl rounded-md " />
                        <p ${hook2} class="text-red-500 text-center">Error message</p>
                    </form>


                </div>

            </div>
        </div>
        `
    )
}

export default RegisterForm