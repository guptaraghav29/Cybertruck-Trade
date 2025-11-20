import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    benefit: string;
}

export default function FeatureCard({ icon: Icon, title, description, benefit }: FeatureCardProps) {
    return (
        <div className="group p-6 border border-white/10 bg-[#121212] hover:border-[#ff5f1f]/50 transition-colors duration-300">
            <div className="mb-4 text-[#ff5f1f]">
                <Icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold uppercase mb-2 tracking-wide text-white group-hover:text-[#ff5f1f] transition-colors">
                {title}
            </h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                {description}
            </p>
            <div className="pt-4 border-t border-white/5">
                <p className="text-xs font-mono text-[#ff5f1f] uppercase tracking-wider">
                    Benefit: {benefit}
                </p>
            </div>
        </div>
    );
}
