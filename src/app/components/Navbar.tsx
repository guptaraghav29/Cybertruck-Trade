import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto flex items-center justify-between h-16">
                <Link href="/" className="text-xl font-bold uppercase tracking-widest">
                    Cybertruck <span className="text-[#ff5f1f]">Trade</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wide text-gray-400">
                    <Link href="#features" className="hover:text-white transition-colors">Features</Link>
                    <Link href="#specs" className="hover:text-white transition-colors">Specs</Link>
                    <Link href="/blog" className="hover:text-white transition-colors">Community</Link>
                </div>

                <Link href="/order" className="btn text-xs">
                    Order Now
                </Link>
            </div>
        </nav>
    );
}
