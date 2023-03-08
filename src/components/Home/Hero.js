
function Hero() {
    return (
        `
            <div class="w-full bg-zinc-200 flex justify-between min-h-screen h-fit md:h-screen">
                <div class="container mx-auto px-5 flex flex-col md:flex-row items-center justify-between ">
                    <div class="w-full mb-10 md:mb-0 md:max-w-[50%] mt-[8rem] lg:mt-0">
                        <h1 data-aos="fade-right" data-aos-duration="800" class="text-3xl lg:text-5xl font-semibold">
                            Professional <span class="font-bold text-indigo-500">Security Services</span><br> Ready to Protect You
                        </h1>
                        <p data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" class="text-gray-600 text-lg font-medium mt-5">Professional security services provide comprehensive protection to individuals and organizations through the expertise and experience of security professionals. </p>
                    
                        <div class="flex mt-5 w-full md:w-[80%]">
                            <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" class="w-full font-semibold bg-indigo-500 text-white px-5 py-2 rounded-md">Get Started</button>
                            <button data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" class="w-full font-semibold ml-5 bg-gray-600 text-white px-5 py-2 rounded-md">Learn More</button>
                        </div>
                    </div>
                    <div class="w-full pb-5 md:pb-0 flex items-center justify-center">
                        <img data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000" src="/imgs/hero.png" alt="bg-image" />
                    </div>
                </div>
            </div>
        `
    )
}

export default Hero