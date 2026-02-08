import { FadeIn } from "./FadeIn"
import { Shield, Zap, Cpu, Lock } from "lucide-react"

const features = [
    {
        icon: Shield,
        title: "Circuit Security Reviews",
        description: "Specialized audits for Circom, Cairo, and Noir circuits. Leveraging our internal vulnerability databases and formal verification tools."
    },
    {
        icon: Zap,
        title: "ZP1 zkVM Development",
        description: "Building the next-generation RISC-V prover system. Optimized for maximum performance and written in Rust."
    },
    {
        icon: Lock,
        title: "FHE & Privacy Proofs",
        description: "Leading security initiatives for privacy-preserving protocols. Securing over $100M+ in FHE and privacy-centric TVL."
    },
    {
        icon: Cpu,
        title: "L2 & Rollup Security",
        description: "Comprehensive security assessments for Layer 2 scaling solutions, focusing on bridge security and finality mechanisms."
    }
]

export function Challenges() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <FadeIn>
                    <div className="max-w-2xl mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Solving the hardest problems in <span className="text-blue-600">applied cryptography</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            We help protocols secure their users and optimize their performance with cutting-edge zero-knowledge and FHE expertise.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <FadeIn key={feature.title} delay={index * 0.1}>
                            <div className="p-8 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-xl hover:border-blue-200 hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
                                    <feature.icon className="text-blue-600" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}
