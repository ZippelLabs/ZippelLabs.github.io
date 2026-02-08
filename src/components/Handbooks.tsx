import { FadeIn } from "./FadeIn"
import { Book, Code, Terminal } from "lucide-react"

export function Handbooks() {
    return (
        <section id="handbooks" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <FadeIn>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Developer <span className="text-blue-600">Handbooks</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Comprehensive guides and resources for developers building with Zero Knowledge proofs and Fully Homomorphic Encryption.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <FadeIn delay={0.1}>
                        <div className="flex flex-col h-full p-8 rounded-3xl bg-gray-900 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                                    <Book className="text-blue-400" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">The FHE Handbook</h3>
                                <p className="text-gray-400 mb-8 flex-grow">
                                    Definitive guide to Fully Homomorphic Encryption. From LWE hardness assumptions to practical implementation using Zama's fhEVM and TFHE-rs.
                                </p>
                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center gap-3 text-sm text-gray-300">
                                        <Code size={16} className="text-blue-400" />
                                        <span>Bootstrapping & Noise Management</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-300">
                                        <Terminal size={16} className="text-blue-400" />
                                        <span>Encrypted Smart Contract Logic</span>
                                    </div>
                                </div>
                                <button className="w-full py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm">
                                    Read Handbook
                                </button>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="flex flex-col h-full p-8 rounded-3xl border border-gray-200 bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                                <ShieldAlertIcon />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">zkVM Vulnerability DB</h3>
                            <p className="text-gray-600 mb-8 flex-grow">
                                A comprehensive database of known vulnerabilities in zkVMs, tailored for security researchers and protocol designers.
                            </p>
                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-sm text-gray-500">
                                    <CheckIcon />
                                    <span>Common zkVM Bugs</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-500">
                                    <CheckIcon />
                                    <span>Exploit Mitigation</span>
                                </div>
                            </div>
                            <button className="w-full py-4 bg-gray-50 text-gray-900 border border-gray-200 rounded-xl font-bold hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                                Browse Database
                            </button>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}

function ShieldAlertIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
    )
}

function CheckIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M20 6 9 17l-5-5" /></svg>
    )
}
