
function Hero() {
    return (
        `
            <div class="w-full flex justify-between h-fit md:h-screen bg-zinc-200">
                <div class="container mx-auto px-5 m-auto flex flex-col md:flex-row items-center justify-between ">
                    <div class="w-full mb-10 md:mb-0 md:max-w-[50%] mt-[8rem] lg:mt-0">
                        <h1 class="text-3xl lg:text-5xl font-semibold">
                            Professional <span class="font-bold text-indigo-500">Security Services</span><br> Ready to Protect You
                        </h1>
                        <p class="text-gray-600 text-lg font-medium mt-5">Professional security services provide comprehensive protection to individuals and organizations through the expertise and experience of security professionals. </p>
                    
                        <div class="flex mt-5 w-full md:w-[80%]">
                            <button class="w-full font-semibold bg-indigo-500 text-white px-5 py-2 rounded-md">Get Started</button>
                            <button class="w-full font-semibold ml-5 bg-gray-600 text-white px-5 py-2 rounded-md">Learn More</button>
                        </div>
                    </div>
                    <div class="w-full flex items-center justify-center">
                        <img src="https://cdn.icon-icons.com/icons2/1881/PNG/512/iconfinder-cloud-management-4341278_120575.png" alt="bg-image" />
                    </div>
                </div>
            </div>
        `
    )
}

export default Hero