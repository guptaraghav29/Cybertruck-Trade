import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12 mt-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h4 className="text-lg font-bold uppercase mb-4">Cybertruck Trade</h4>
                        <p className="text-gray-500 text-sm">
                            The ultimate tool for the modern workforce. Built for durability, designed for utility.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase mb-4 text-white">Vehicles</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-white">Cybertruck Trade</Link></li>
                            <li><Link href="#" className="hover:text-white">Cybertruck AWD</Link></li>
                            <li><Link href="#" className="hover:text-white">Cyberbeast</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase mb-4 text-white">Commercial</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-white">FleetOS</Link></li>
                            <li><Link href="#" className="hover:text-white">Charging</Link></li>
                            <li><Link href="#" className="hover:text-white">Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase mb-4 text-white">Community</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/blog" className="hover:text-white">Trade Community</Link></li>
                            <li><Link href="#" className="hover:text-white">Events</Link></li>
                            <li><Link href="#" className="hover:text-white">Support</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-600">
                        © 2025 Tesla, Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-600">
                        <Link href="#" className="hover:text-white">Privacy & Legal</Link>
                        <Link href="#" className="hover:text-white">Vehicle Recalls</Link>
                        <Link href="#" className="hover:text-white">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
