import { FadeIn } from "./FadeIn"

const logos = [
    {
        name: "Ethereum",
        logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
        url: "https://ethereum.org"
    },
    {
        name: "Polygon",
        logo: "https://cryptologos.cc/logos/polygon-matic-logo.svg",
        url: "https://polygon.technology"
    },
    {
        name: "StarkWare",
        logo: "https://cdn.brandfetch.io/idPG1oxdfl/w/512/h/512/theme/dark/icon.png?k=id64Mup7ac&t=1724160691376",
        url: "https://starkware.co"
    },
    {
        name: "Zama",
        logo: "https://cdn.brandfetch.io/idwHEFW4MZ/theme/dark/logo.svg?k=id64Mup7ac&t=1690286908685",
        url: "https://zama.ai"
    },
    {
        name: "Fhenix",
        logo: "https://avatars.githubusercontent.com/u/129685840?s=200&v=4",
        url: "https://fhenix.io"
    },
    {
        name: "EigenLayer",
        logo: "https://cdn.brandfetch.io/idWG8x5lYy/theme/dark/logo.svg?k=id64Mup7ac&t=1728316118614",
        url: "https://eigenlayer.xyz"
    },
]

export function LogoCloud() {
    return (
        <section className="py-20 border-y border-gray-100 bg-gray-50">
            <div className="container mx-auto px-6">
                <FadeIn>
                    <p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-widest">
                        Trusted by industry leaders
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
                        {logos.map((logo) => (
                            <a
                                key={logo.name}
                                href={logo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-16 w-36 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center gap-2 px-3 hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                                title={logo.name}
                            >
                                <img
                                    src={logo.logo}
                                    alt={`${logo.name} logo`}
                                    className="h-8 w-8 object-contain"
                                />
                                <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors">
                                    {logo.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
