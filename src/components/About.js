
function About(isPage) {
    return (
        `
        <div class="w-full bg-zinc-200 flex ${typeof isPage === "undefined" ? "py-[5rem] md:py-[8rem]" : ""}" justify-between min-h-screen h-fit">
            <div class="container mx-auto py-0 ${typeof isPage === "undefined" ? "" : "lg:py-[10rem]"}">
                <div class="px-5 flex lg:mb-[8rem] flex-col lg:flex-row-reverse items-center justify-between ">

                    <div class="p-5 w-full mb-10 lg:mb-0 lg:max-w-[50%] lg:mt-0">
                        <h1 data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000" class="text-3xl mb-10 lg:text-5xl font-semibold">About Venux</h1>

                        <ul class="flex flex-col gap-5">
                            <p data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000" class="text-lg ">We are a professional security services provider dedicated to safeguarding individuals and organizations from potential threats. Our team of experienced security professionals is committed to providing comprehensive protection that is tailored to meet the unique needs of each client.</p>
                            <p data-aos="fade-left" data-aos-delay="800" data-aos-duration="1000" class="text-lg">We understand the importance of feeling safe and secure, which is why we prioritize our clients' safety above all else. Our security services range from on-site security personnel to digital security solutions that can help protect your personal and business information from cyber threats.</p>
                        </ul>
                    </div>
                    <div class="w-full pb-5 lg:pb-0 flex items-center justify-center">
                        <img data-aos="zoom-in" data-aos-duration="1000" class="max-w-[500px] w-full" src="/imgs/AboutSecurity.svg" alt="bg-image" />
                    </div>
                </div>

                <div class="px-5 flex flex-col-reverse lg:flex-row-reverse items-center justify-between ">
                    <div class="w-full pb-5 lg:pb-0 flex items-center justify-center">
                        <img data-aos="zoom-in" data-aos-duration="1000" class="max-w-[500px] w-full" src="/imgs/Scope.svg" alt="bg-image" />
                    </div>

                    <div class="p-5 w-full mb-10 lg:mb-0 lg:max-w-[50%] lg:mt-0">
                        <h1 data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" class="text-3xl mb-10 lg:text-5xl font-semibold">Also about us...</h1>

                        <ul class="flex flex-col gap-5">
                            <p data-aos="fade-right" data-aos-delay="600" data-aos-duration="1000" class="text-lg ">Our team is made up of highly trained and skilled professionals who have extensive experience in the security industry. We use the latest technology and techniques to provide our clients with the highest level of protection.</p>
                            <p data-aos="fade-right" data-aos-delay="800" data-aos-duration="1000" class="text-lg">Whether you are an individual in need of personal protection or a business looking for comprehensive security solutions, we are here to help. Contact us today to learn more about our professional security services and how we can help protect you.</p>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
        `
    )
}

export default About