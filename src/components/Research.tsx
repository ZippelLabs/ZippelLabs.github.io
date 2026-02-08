import { FadeIn } from "./FadeIn"
import { ArrowRight, FileText } from "lucide-react"
import { Button } from "./ui/button"

const papers = [
    {
        title: "ZP1: A High-Performance RISC-V zkVM",
        summary: "Architectural overview of ZP1, a Rust-based zero-knowledge virtual machine optimized for general-purpose verifiable computation.",
        date: "Sep 2024",
        tag: "zkVM"
    },
    {
        title: "L2 Bridge Security & Finality",
        summary: "Analyzing vulnerabilities in optimistic and ZK rollup bridges, with a focus on cross-domain messaging and finality gadgets.",
        date: "Aug 2024",
        tag: "L2 Security"
    },
    {
        title: "Privacy Proofs in Production",
        summary: "Case studies on deploying FHE applications at scale. Lessons learned from securing $100M+ TVL in privacy-preserving protocols.",
        date: "Jul 2024",
        tag: "Applied FHE"
    }
]

export function Research() {
    return (
        <section id="research" className="py-24 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-6">
                <FadeIn>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                                Pioneering <span className="text-blue-600">Research</span>
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Our team publishes cutting-edge research in cryptography, contributing to the advancement of privacy-preserving technologies.
                            </p>
                        </div>
                        <Button variant="outline" className="hidden md:flex gap-2" asChild>
                            <a href="/research.html">
                                View All Publications <ArrowRight size={16} />
                            </a>
                        </Button>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                    {papers.map((paper, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                                        <FileText size={24} />
                                    </div>
                                    <span className="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                                        {paper.date}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {paper.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    {paper.summary}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                        {paper.tag}
                                    </span>
                                    <ArrowRight className="text-gray-300 group-hover:text-blue-600 transition-colors" size={16} />
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <Button variant="outline" className="gap-2 w-full justify-center" asChild>
                        <a href="/research.html">
                            View All Publications <ArrowRight size={16} />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
