
function LoginForm() {
    return (
        `
        <div class="w-full flex justify-between min-h-screen h-fit md:h-screen bg-zinc-200">
            <div class="container mx-auto px-5 m-auto flex flex-col md:flex-row items-center justify-center ">

                <div data-aos="zoom-out" data-aos-duration="500" class="relative mt-[5rem] md:mt-0 overflow-hidden flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
                    <!-- Left Side -->

                    <div class="max-w-[550px] p-6 md:p-20">

                        <h2 data-aos="fade-right" data-aos-duration="1000" class="font-mono mb-5 text-4xl font-bold">Login In</h2>
                        <p data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" class="max-w-sm mb-6 font-sans font-light text-gray-600">
                        Login to your account to upload or download pictures, Videos or music.</p>

                        <input data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" type="email" placeholder="Enter your email address" class="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" />                            
                        <input data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000" type="password" placeholder="Enter your password" class=" mt-6 w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" />                            
                        <input data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000" type="submit" value="Login" class="cursor-pointer mt-6 w-full p-6 border bg-indigo-500 text-white text-xl rounded-md " />


                    </div>

                    <!-- Right Side -->
                    <img class="object-cover w-[430px] hidden lg:block" src="https://images.unsplash.com/photo-1502899576159-f224dc2349fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXJiYW4lMjBpcGhvbmUlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80" />

                </div>

            </div>
        </div>
        `
    )
}

export default LoginForm