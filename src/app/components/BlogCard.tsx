import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block h-full">
            <article className="flex flex-col h-full">
                <div className="relative aspect-[3/4] w-full overflow-hidden mb-6 bg-[#121212]">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                <div className="flex flex-col flex-grow text-center px-2">
                    <div className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">
                        {post.date}
                    </div>
                    <h3 className="text-lg font-medium uppercase tracking-wide mb-3 group-hover:text-[#ff5f1f] transition-colors">
                        {post.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 mb-6 font-light">
                        {post.excerpt}
                    </p>
                    <div className="mt-auto pt-4 border-t border-white/10 w-12 mx-auto">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
                            Read
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
}
