import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Button from './components/Button';
import FeatureCard from './components/FeatureCard';
import {
  DollarSign, Zap, Shield, Layout, Cpu, Battery,
  CheckCircle, Leaf, Users, Target, Activity, Award
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: DollarSign,
      title: "Pricing & Market Position",
      description: "Sub-$70K commercial-grade EV with flexible leasing, TradeCare subscription, and guaranteed buy-back program.",
      benefit: "Reduces upfront costs and de-risks ownership."
    },
    {
      icon: Zap,
      title: "Hardware & Powertrain",
      description: "Dual-motor AWD (400hp/500lb-ft), dual-load-mode battery, and modular battery-swap capability.",
      benefit: "Reliable towing and maximized uptime."
    },
    {
      icon: Shield,
      title: "Chassis & Design",
      description: "Aluminum alloy frame, rectangular Gen 1 design with enhanced sensors, and open bed with modular accessories.",
      benefit: "Lower TCO, safer operation, and higher productivity."
    },
    {
      icon: Layout,
      title: "Interior & UX",
      description: "Hybrid interface with buttons, custom seating configurations (2/3/5), and expanded accessory catalog.",
      benefit: "Fast control access and mobile workstation capability."
    },
    {
      icon: Cpu,
      title: "Software & Connectivity",
      description: "FleetOS with predictive maintenance, analytics subscription, and FSD options.",
      benefit: "Centralized management and optimized operations."
    },
    {
      icon: Battery,
      title: "Charging Ecosystem",
      description: "Trade Hubs for truck-bay charging, no-surge fleet pricing, and Solar Base Pack.",
      benefit: "Reduced congestion and predictable costs."
    },
    {
      icon: CheckCircle,
      title: "Warranty & Service",
      description: "5yr/150k mi vehicle + 8yr/200k mi battery warranty with predictive OTA diagnostics.",
      benefit: "Lowers lifetime risk and downtime."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Low-CO₂ materials, recycled aluminum, and closed-loop battery recycling.",
      benefit: "Meets ESG requirements and lowers impact."
    },
    {
      icon: Users,
      title: "Ecosystem & Community",
      description: "Tesla Trade Community Platform and Rewards Program for safe driving.",
      benefit: "Reduces learning curve and boosts retention."
    },
    {
      icon: Target,
      title: "Target Segments",
      description: "Sector-specific targeting for hauling, durability, and TCO needs.",
      benefit: "Broadens addressable market."
    },
    {
      icon: Activity,
      title: "Safety & Comfort",
      description: "ADAS + trailer stability assist and Smart Suspension (S3).",
      benefit: "Enhances control and driver comfort."
    },
    {
      icon: Award,
      title: "Strategic Differentiators",
      description: "Sub-$70K work truck with FleetOS and Tesla Unified Platform integration.",
      benefit: "Unmatched value and cross-vehicle efficiency."
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#ff5f1f] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a2a2a] via-[#000000] to-[#000000] z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?q=80&w=2576&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay z-0" />

        <div className="container relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-6 animate-fade-in-up">
            Cybertruck <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5f1f] to-[#ff9f1f]">Trade</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light tracking-wide">
            The ultimate tool for the modern workforce. Built for durability, designed for utility.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button>Order Now</Button>
            <Button variant="outline">View Specs</Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-gray-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 bg-[#050505] relative">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
              Built for <span className="text-[#ff5f1f]">Work</span>
            </h2>
            <div className="h-1 w-20 bg-[#ff5f1f]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                benefit={feature.benefit}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#121212] border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-8">
            Ready to Upgrade Your Fleet?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join the revolution of commercial electric vehicles. Lower costs, higher efficiency.
          </p>
          <Button className="bg-white text-black hover:bg-[#ff5f1f] hover:text-white">
            Contact Sales
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
