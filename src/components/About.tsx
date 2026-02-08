import { FadeIn } from "./FadeIn"

export function About() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <FadeIn>
                    <div className="bg-gray-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)",
                                backgroundSize: "32px 32px"
                            }}
                        ></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                About ZippelLabs
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                Founded by a team of cryptography researchers and security engineers, ZippelLabs is dedicated to advancing the state of privacy-preserving technologies. We believe that Zero Knowledge Proofs and Fully Homomorphic Encryption are the keys to a secure, private, and scalable decentralized future.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
                                <div>
                                    <div className="text-3xl font-bold text-blue-400 mb-1">20+</div>
                                    <div className="text-sm text-gray-400">Team Members</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-400 mb-1">50+</div>
                                    <div className="text-sm text-gray-400">Projects Audited</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-400 mb-1">10+</div>
                                    <div className="text-sm text-gray-400">Open Source Repos</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-400 mb-1">Global</div>
                                    <div className="text-sm text-gray-400">Remote Team</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
