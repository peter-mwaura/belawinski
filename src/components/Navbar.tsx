const Navbar = () => {
    return (
        <nav className="bg-background text-text px-6 py-4 flex justify-between items-center z-50 shadow-md">
            {/* Logo */}
            <h1 className="text-2xl font-display text-primary tracking-wide">
                Belawinski
            </h1>

            {/* Links */}
            <ul className="hidden md:flex space-x-8 font-body text-muted text-sm">
                <li className="hover:text-secondary cursor-pointer transition-colors">
                    Menu
                </li>
                <li className="hover:text-secondary cursor-pointer transition-colors">
                    About
                </li>
                <li className="hover:text-secondary cursor-pointer transition-colors">
                    Contact
                </li>
            </ul>

            {/* Mobile placeholder for future hamburger */}
            <div className="md:hidden text-primary">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </div>
        </nav>
    );
};

export default Navbar;
