interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline';
    children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all duration-200";
    const variants = {
        primary: "bg-white text-black hover:bg-[#ff5f1f] hover:text-white",
        outline: "bg-transparent border border-white text-white hover:bg-white hover:text-black"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
