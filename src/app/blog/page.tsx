import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import Image from 'next/image';
import Button from '../components/Button';

const POSTS = [
    {
        slug: 'introducing-cybertruck-trade',
        title: 'Introducing Cybertruck Trade',
        excerpt: 'The ultimate tool for the modern workforce. Built for durability, designed for utility.',
        date: 'NOV 19, 2025',
        category: 'Product Launch',
        image: 'https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?q=80&w=2576&auto=format&fit=crop'
    },
    {
        slug: 'fleetos-analytics',
        title: 'FleetOS Analytics',
        excerpt: 'Our new predictive maintenance and routing algorithms are saving fleets millions.',
        date: 'NOV 15, 2025',
        category: 'Software',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop'
    },
    {
        slug: 'trade-hubs-expansion',
        title: 'Expanding Trade Hubs',
        excerpt: 'Dedicated truck-bay charging stations in major industrial corridors.',
        date: 'NOV 10, 2025',
        category: 'Infrastructure',
        image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2672&auto=format&fit=crop'
    },
    {
        slug: 'sustainability-report-2025',
        title: 'Closing the Loop',
        excerpt: 'From recycled aluminum frames to battery reuse programs.',
        date: 'OCT 28, 2025',
        category: 'Sustainability',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop'
    }
];

const GALLERY_IMAGES = [
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517154596051-c2b5d6697318?q=80&w=2574&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2570&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2570&auto=format&fit=crop'
];

export default function Blog() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-[#ff5f1f] selection:text-white">
            <Navbar />

            {/* Minimalist Header */}
            <section className="pt-40 pb-20 px-6 border-b border-white/10">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-light uppercase tracking-[0.2em] mb-4">
                        The Trade Journal
                    </h1>
                    <div className="w-24 h-px bg-[#ff5f1f] mx-auto" />
                </div>
            </section>

            {/* 4-Column Grid */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {POSTS.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Split Section: About/Mission */}
            <section className="py-20 border-y border-white/10 bg-[#121212]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2 relative h-[600px]">
                            <Image
                                src="https://images.unsplash.com/photo-1535732820275-9ffd998cac22?q=80&w=2670&auto=format&fit=crop"
                                alt="Mission"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h4 className="text-[#ff5f1f] font-bold tracking-widest uppercase text-sm mb-4">Our Mission</h4>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6 leading-tight">
                                Powering the <br /> Global Workforce
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
                                We believe that the future of industry is electric. By combining rugged durability with advanced software, we are not just building trucks; we are building the infrastructure for a sustainable economy.
                            </p>
                            <Button variant="outline" className="border-white/20 hover:border-white">
                                Read Our Story
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Strip */}
            <section className="py-20 px-6">
                <div className="container mx-auto mb-12 text-center">
                    <h3 className="text-2xl font-light uppercase tracking-widest">Fleet in Action</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {GALLERY_IMAGES.map((img, i) => (
                        <div key={i} className="relative aspect-square overflow-hidden group">
                            <Image
                                src={img}
                                alt={`Gallery ${i}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-[#ff5f1f] font-bold tracking-widest uppercase text-xs">View</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Configure Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?q=80&w=2576&auto=format&fit=crop"
                        alt="Configure Background"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
                </div>

                <div className="container relative z-10 mx-auto px-6 text-center">
                    <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8">
                        Build Your <span className="text-[#ff5f1f]">Fleet</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Customize your Cybertruck Trade with modular accessories, battery options, and software packages.
                    </p>
                    <Button className="bg-[#ff5f1f] text-white hover:bg-white hover:text-black border-none">
                        Start Configuration
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
