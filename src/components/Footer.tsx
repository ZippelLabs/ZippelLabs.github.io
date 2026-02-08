

export function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-gray-50 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <img src="/logo-ZP.png" alt="ZippelLabs Logo" className="w-8 h-8 rounded-lg object-contain" />
                            <span className="text-xl font-bold text-gray-900">ZippelLabs</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Pushing the boundaries of cryptography with high-performance ZK and FHE solutions.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-6">Security Services</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">Subsidized Review Program</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">zkVM Audits (ZP1)</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">Circuits (Cairo, Noir, Circom)</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">FHE & Privacy Proofs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-6">Research & Data</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">ZP1 Architecture</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">zkVM Vulnerability DB</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">FHE Handbook</a></li>
                            <li><a href="https://github.com/ZippelLabs" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">GitHub Profile</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-6">Contact</h3>
                        <ul className="space-y-3">
                            <li><a href="mailto:zippelsec@gmail.com" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">zippelsec@gmail.com</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">Careers</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2025 ZippelLabs. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="https://twitter.com" className="text-gray-500 hover:text-blue-600 transition-colors">Twitter</a>
                        <a href="https://discord.com" className="text-gray-500 hover:text-blue-600 transition-colors">Discord</a>
                        <a href="https://github.com/ZippelLabs" className="text-gray-500 hover:text-blue-600 transition-colors">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
