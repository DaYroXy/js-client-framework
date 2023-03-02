import Plan from './Plan.js'

function Pricing() {

    const Plans = [
        {
            title: 'Pro',
            price: 1000,
            color: "yellow-500",
            benifits: [
                {
                    desc: 'Gain access to our website',
                    included: true
                },
                {
                    desc: 'Gain access to our api application',
                    included: true
                },
                {
                    desc: 'Gain access to our forum',
                    included: true
                },
                {
                    desc: '24/7 support',
                    included: false
                },
                {
                    desc: 'Unlimited bandwidth usages',
                    included: false
                },
            ]
        },
        {
            title: 'Free',
            price: 0,
            color: "rose-600",
            benifits: [
                {
                    desc: 'Gain access to our website',
                    included: true
                },
                {
                    desc: 'Gain access to our api application',
                    included: false
                },
                {
                    desc: 'Gain access to our forum',
                    included: false
                },
                {
                    desc: '24/7 support',
                    included: false
                },
                {
                    desc: 'Unlimited bandwidth usages',
                    included: false
                },
            ]
        },
        {
            title: 'Premium',
            price: 2000,
            color: "blue-600",
            benifits: [
                {
                    desc: 'Gain access to our website',
                    included: true
                },
                {
                    desc: 'Gain access to our api application',
                    included: true
                },
                {
                    desc: 'Gain access to our forum',
                    included: true
                },
                {
                    desc: '24/7 support',
                    included: true
                },
                {
                    desc: 'Unlimited bandwidth usages',
                    included: true
                },
            ]
        }
    ]

    return (
        `
        <div class="flex flex-col items-center justify-center w-full">
            <h1 class="text-3xl
              md:text-5xl font-bold mb-10">Services</h1>
            <div class="flex flex-col gap-5 mb-10 xl:flex-row mt-10 w-full xl:w-full lg:w-[60%]">
                ${Plans.map(item => (
            Plan(item)
        )).join('')}
            </div>

        </div>
        `
    )
}

export default Pricing