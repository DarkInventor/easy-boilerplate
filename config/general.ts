const config = {
    domain: "theproduct.com",
    title: "Waitlist Page | The Product",
    description: `Build unlimited SaaS products with any SaaS Boilerplate

    Save months of work and focus on building a profitable business.
    
    Get lifetime access to all the kits for only $19 for first 100 users. `,
    subscribeForm: "https://dashboard.mailerlite.com/forms/631411/101265918935434456/share",

    socials: {
        twitter: "https://x.com/beratbozkurt0",
    },

    contents: {
        title: "Next.js boilerplates for building SaaS products",
        markOfTitle: "The Product", // its for marking the title. The text must contain on title. If not, it will be ignored.
        description: `Build unlimited SaaS products with any SaaS Boilerplate

        Save months of work and focus on building a profitable business.
        
        Get lifetime access to all the kits for only $19 for first 100 users. `,

        about: [
            {
                id: 1,
                emoji: "💡",
                title: "Innovative Design",
                description: "boilerplates will be designed to be a seamless experience for all users. It will be both intuitive and visually stunning."
            },
            {
                id: 2,
                emoji: "🚀",
                title: "Fast and Efficient",
                description: "We understand that your time is valuable. That's why we will try to ship it super fast 🚀"
            },
            {
                id: 3,
                emoji: "🌎",
                title: "Global Reach",
                description: "The Product is available to users all around the world. No matter where you are, you can access it."
            }
        ],

        howWorks: [
            {
                title: "Buy the Lifetime Deal",
                description: "Pay once and keep it for the life."
            },
            {
                title: "We will email you",
                description: "Once we receve the order we will email you and keep you updated."
            },
            {

                title: "Personalizes add-ons",
                description: "We also take orders for custom MVP development. Check mvp.easyui.pro"
            },
            {
                title: "Seamless integration",
                description: "Enjoy effortless quick setup"
            },
            {
                title: "Copy and paste",
                description: "Once you've downloaded the boilerplate just copy and paste your test to update the design."
            },
        ],

        price: {
            description: "Unlock endless possibilities with Easy Boilerplate. This production-ready Next.js SaaS Boilerplates include all the essential tools and resources you need to launch your project.",
            price: "$19",

            advantages: ['Shadcn UI and Tailwind CSS', 'Authentication + Payments', 'Dashboard Demo', 'Mobile Friendly', 'AI Chatbot and Blog']
        },

        faq: [
            {
                question: "What is The Product?",
                answer: "Easy Boilerplate is a SaaS Starter Kit - a codebase that you can use to build your SaaS product. It is built on top of Next.js and Firebase/Supabase. It includes authentication, billing, organizations, and more. It is a great starting point for your next project. It is not a no-code builder, which means it requires programming knowledge to use."
            },
            {
                question: "I don't know how to code. Should I buy Easy boilerplate?",
                answer: "No - Easy Boilerplate is a product for developers. You are required to have knowledge of React and TypeScript, and ideally Supabase/Firebase. Or willingness to learn."
            },

            {
                question: "How do I use The Product?",
                answer: "Highlight any text on any website and The Product will automatically will find emoji that match your selection."
            },
            {
                question: "Is The Product free?",
                answer: "The Product is available as a one-time payment (lifetime deal). You can cancel anytime, stress-free!"
            },
            {
                question: "Can I get a refund?",
                answer: "Due to the non-returnable nature of this product, we generally cannot offer refunds once access is redeemed. However, if you are unsure about the product, you can ask me any questions you may have, including coding snippets or a demo of the product. If you find a bug, please report it to me and I'll fix it as soon as possible. If you find difficulties in using the product, please let me know and I'll help you out."
            },
            {
                question: "Is The Product available globally?",
                answer: "Yes! The Product is available to users all around the world."
            },
            {
                question: "Can I open-source a project built using Easy Boilerplate?",
                answer: "I hope you understand that our kits will not have any value if they were published (well, except for the constant updates). Please do not distribute the codebase of your project outside of your organization."
            },
            {
                question: "For how long can I get updates?",
                answer: "Forever."
            }
        ]
    }
}


export default config;