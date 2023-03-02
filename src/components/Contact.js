
function Contact(isPage) {
    return (
        `
        <div class="w-full flex justify-between min-h-screen h-fit ${typeof isPage === "undefined" ? "pb-[7rem]" : ""} bg-zinc-200">
            <div class="container mx-auto px-5 m-auto flex flex-col md:flex-row items-center justify-center ">

                <div data-aos="zoom-out" class="relative mt-[6rem] md:mt-0 overflow-hidden flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
                    <!-- Right Side -->
                    <img class="object-cover w-[50%] hidden lg:block" src="https://images.unsplash.com/photo-1677654469268-3e9b2ab99d0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
                
                    <!-- Left Side -->
                    <div class="w-full p-6 md:p-10">

                        <h2 data-aos="fade-left" data-aos-duration="1000" class="font-mono mb-5 text-4xl font-bold">Get in Touch</h2>
                        <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" class=" mb-6 w-full text-lg font-sans font-light text-gray-600">
                            Protect Your Digital Assets. Contact Us for Cyber Security Assistance. Our team of experts is here to help you stay safe and secure online.
                        </p>

                        <input data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000" type="text" placeholder="Enter your full name" class="mt-2 w-full p-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" />                            
                        <input data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000" type="email" placeholder="Enter your email address" class="mt-2 w-full p-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" />                            
                        <textarea data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000" placeholder="Enter your message" class="resize-none min-h-[180px] mt-2 w-full p-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"></textarea>
                        <input data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000" type="submit" value="Send Message" class="cursor-pointer mt-2 w-full p-3 border bg-indigo-500 text-white text-xl rounded-md " />

                    </div>


                </div>

            </div>
        </div>
        `
    )
}

export default Contact