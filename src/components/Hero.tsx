import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { useCountUp } from "../hooks/useCountUp"

function StatItem({ label, value, suffix = "" }: { label: string; value: number; suffix?: string }) {
    const { count, ref } = useCountUp(value)

    return (
        <div ref={ref} className="text-center sm:text-left">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                {count}{suffix}
            </div>
            <div className="text-sm text-gray-500">{label}</div>
        </div>
    )
}

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/50 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8">
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                            <span className="text-sm text-blue-800 font-medium">Audits Open for Q3 2025</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight" style={{ color: '#800000' }}>
                            Zero Knowledge.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Maximum Performance.</span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Developers of the <strong>ZP1 zkVM</strong> and founders of the <strong>Subsidized Security Review Program</strong>.
                            Securing $10B+ TVL across privacy-preserving protocols and scaling solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                            <Button size="lg" className="rounded-full bg-blue-600 text-white hover:bg-blue-700" asChild>
                                <a href="/audits.html">
                                    Start Audit Request
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full border-gray-300 hover:bg-gray-50 text-gray-700" asChild>
                                <a href="/research.html">
                                    View Research
                                </a>
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-gray-100 pt-12">
                            <StatItem label="Audits Completed" value={15} suffix="+" />
                            <StatItem label="TVL Secured" value={500} suffix="M+" />
                            <StatItem label="Critical Bugs" value={13} suffix="" />
                            <StatItem label="Research Papers" value={8} suffix="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
