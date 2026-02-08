import { FadeIn } from "./FadeIn"
import { Button } from "./ui/button"
import { CheckCircle2 } from "lucide-react"

const benefits = [
    "Soundness & Completeness Proofs",
    "Underconstrained Signal Detection in Halo2",
    "Fiat-Shamir Transformation Vulnerabilities",
    "Calldata Optimization for L1 Verifiers",
    "LWE Parameter Security against Dual Attacks"
]

export function Audits() {
    return (
        <section id="audits" className="py-24 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <FadeIn direction="right">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Secure your protocol with <span className="text-blue-600">industry-leading audits</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            We specialize in auditing ZK circuits and FHE applications. Our team of cryptographers and security engineers ensures your code is safe, optimized, and mathematically sound.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {benefits.map((benefit, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle2 className="text-blue-600" size={20} />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8" asChild>
                                <a href="/audits.html">
                                    Request an Audit
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-100 rounded-full px-8" asChild>
                                <a href="/audits.html#reports">
                                    View Past Reports
                                </a>
                            </Button>
                        </div>
                    </FadeIn>

                    <FadeIn direction="left" delay={0.2}>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-xl rounded-2xl"></div>
                            <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
                                <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-6">
                                    <div>
                                        <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Recent Audit</div>
                                        <div className="text-2xl font-bold text-gray-900">ZK-Rollup Core</div>
                                    </div>
                                    <div className="px-4 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-full">
                                        SECURED
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-semibold text-gray-700">Critical Severity</span>
                                            <span className="text-red-500 font-bold">0 Found</span>
                                        </div>
                                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                            <div className="bg-red-500 h-full w-0"></div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-semibold text-gray-700">High Severity</span>
                                            <span className="text-orange-500 font-bold">2 Fixed</span>
                                        </div>
                                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                            <div className="bg-orange-500 h-full w-full"></div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-semibold text-gray-700">Optimization</span>
                                            <span className="text-blue-500 font-bold">5 Implemented</span>
                                        </div>
                                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                            <div className="bg-blue-500 h-full w-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}
