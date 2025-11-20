import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost({ params }: { params: { slug: string } }) {
    // In a real app, we would fetch data based on the slug
    // For now, we'll just use dummy data that matches the slug for demonstration

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-[#ff5f1f] selection:text-white">
            <Navbar />

            <article className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-[#ff5f1f] mb-8 transition-colors">
                        <ArrowLeft size={20} className="mr-2" />
                        Back to Community
                    </Link>

                    <div className="mb-8">
                        <span className="text-[#ff5f1f] font-bold uppercase tracking-wider text-sm">Product Launch</span>
                        <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
                            Introducing Cybertruck Trade: The Future of Commercial Fleets
                        </h1>
                        <div className="flex items-center text-gray-500 text-sm font-mono">
                            <span>NOV 19, 2025</span>
                            <span className="mx-4">•</span>
                            <span>5 MIN READ</span>
                        </div>
                    </div>

                    <div className="relative w-full h-[400px] md:h-[600px] mb-12 overflow-hidden rounded-sm">
                        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                        <img
                            src="https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?q=80&w=2576&auto=format&fit=crop"
                            alt="Cybertruck Trade"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="lead text-xl text-gray-300 mb-8">
                            Today marks a new era for commercial transportation. The Cybertruck Trade is not just a vehicle; it is a comprehensive tool designed to revolutionize how work gets done.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Built for the Job Site</h2>
                        <p className="text-gray-400 mb-6">
                            We listened to contractors, fleet managers, and tradespeople. You told us you needed durability, reliability, and lower operating costs. We delivered. With a sub-$70k starting price, the Cybertruck Trade makes electrification accessible to businesses of all sizes.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-10 mb-4">Key Features</h3>
                        <ul className="list-disc pl-6 text-gray-400 mb-8 space-y-2">
                            <li><strong>Dual-Motor AWD:</strong> 400hp and 500lb-ft of torque to handle any load.</li>
                            <li><strong>TradeCare:</strong> A subscription service that guarantees uptime.</li>
                            <li><strong>FleetOS:</strong> Integrated software for real-time fleet management.</li>
                        </ul>

                        <p className="text-gray-400 mb-6">
                            The aluminum alloy frame reduces weight while maintaining structural integrity, and the open bed design allows for infinite configuration options with our new modular accessory system.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Economics of Electric</h2>
                        <p className="text-gray-400 mb-6">
                            Switching to electric isn't just about sustainability; it's about the bottom line. With significantly lower fuel and maintenance costs, the Cybertruck Trade offers a Total Cost of Ownership (TCO) that beats traditional diesel trucks by a wide margin.
                        </p>

                        <blockquote className="border-l-4 border-[#ff5f1f] pl-6 italic text-2xl text-white my-12">
                            "This is the truck that pays for itself."
                        </blockquote>

                        <p className="text-gray-400">
                            We are excited to see what you build with it. Orders are open now.
                        </p>
                    </div>

                    <div className="mt-20 pt-10 border-t border-white/10">
                        <h3 className="text-2xl font-bold mb-6">Share this article</h3>
                        <div className="flex gap-4">
                            <button className="btn-outline px-6 py-2 text-sm">Twitter</button>
                            <button className="btn-outline px-6 py-2 text-sm">LinkedIn</button>
                            <button className="btn-outline px-6 py-2 text-sm">Email</button>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
