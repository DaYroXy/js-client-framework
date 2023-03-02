
function Navbar() {

    const FooterLinks = [
        {
            link: "https://www.instagram.com/anas.abush/",
            icon: "fa-instagram"
        },
        {
            link: "https://steamcommunity.com/id/DaYroXy/",
            icon: "fa-steam-symbol"
        },
        {
            link: "https://github.com/DaYroXy",
            icon: "fa-github"
        }
    ]

    return (
        `
            <div class="w-full p-12 bg-slate-800">
                <div class="container mx-auto">
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <h1 class="text-white mb-10 md:mb-0 text-lg">Copyright © 2022 Venux</h1>

                        <div class="flex gap-5">
                            ${FooterLinks.map((link) => (
                                `
                                    <div class="bg-gray-700 hover:scale-110  transition duration-100 w-[45px] h-[45px] flex items-center justify-center rounded-full">
                                        <a href="${link.link}"><i class=" fa-brands ${link.icon} text-2xl text-white"></i></a>
                                    </div>
                                `
                            )).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `
    )
}

export default Navbar()