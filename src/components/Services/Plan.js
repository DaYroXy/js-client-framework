import formatPrice from "../../utils/formatPrice.js"

function Plan(item) {

    let {title, price, color, benifits} = item
    if(typeof benifits === "undefined") {
        benifits = []
    }

    return (
        `
        <div class="hover:scale-105 transition duration-100 w-full relative md:mt-0 overflow-hidden flex flex-col space-y-10 bg-white shadow-2xl rounded-2xl md:space-y-0">
            <!-- Title -->
            <div class="text-center  p-6 md:mb-8 bg-${color}">
                <h1 data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000" class="text-white font-semibold text-2xl">${title}</h1>
            </div>
            <div class="w-full flex h-full flex-col px-6 pb-6">
                
                <ul class="flex ml-5 flex-col gap-3">
                    ${
                        benifits.map((item,index) => {
                            return `
                            <li class="flex gap-5 items-center">
                                <i data-aos="fade-right" data-aos-delay="${index*50}" data-aos-duration="1000"  class="w-[30px] fa-solid text-${item.included ? "green-600 fa-check" : "red-600 fa-xmark"} text-3xl"></i>
                                <p data-aos="fade-right" data-aos-delay="${index*50}" data-aos-duration="1000" data-aos-delay="500" class="font-semibold">${item.desc}</p>
                            </li>
                            `
                        }).join('')
                    }
                </ul>
                <div class="mt-auto">
                    <div class="w-[85%] mx-auto h-[2px] relative my-6 bg-slate-200"></div>
                    <h1 data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" class="text-4xl font-semibold mb-5 text-center text-${color}">${formatPrice(price)}</h1>
                    <button data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000" class="w-full p-3 rounded font-semibold text-white bg-${color}"">Buy Now</button>
                </div>
            </div>
        </div>
        `
    )
}

export default Plan
