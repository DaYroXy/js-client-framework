import Pricing from "../components/Services/Pricing.js"

function Services(asPage) {

    console.log(typeof asPage === "undefined"?"":"pt-[7rem]")

    return (
        `
        <div class="w-full flex justify-between min-h-screen h-fit bg-zinc-200">
            <div class="container mx-auto px-5 ${typeof asPage === "undefined"?"":"pt-[7rem]"}  m-auto flex flex-col md:flex-row items-center justify-between ">
                ${Pricing()}
            </div>
        </div>
        `
    )
}

export default Services