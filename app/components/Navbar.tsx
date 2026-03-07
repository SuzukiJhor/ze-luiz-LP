'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogOut, LayoutDashboard } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
    // const { data: user } = useUser();
    // const { mutate: logout } = useLogout();
    const location = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Início", path: "/" },
        { name: "Docência", path: "/docente" },
        { name: "Poesia & Música", path: "/poesia" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-white/5 py-4" : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
                    <Link href="/" className="text-xl font-serif font-bold tracking-tight hover:text-primary transition-colors">
                        Zé Luiz<span className="text-primary">.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(30,64,175,0.8)] ${location === link.path ? "text-primary" : "text-white/70"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {(
                            <div className="flex items-center space-x-4 pl-8 border-l border-white/10">
                                <Link
                                    href="/admin"
                                    className="flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors"
                                >
                                    <LayoutDashboard className="w-4 h-4 mr-2" />
                                    Admin
                                </Link>
                                <button
                                    onClick={() => console.log('deslogar')}
                                    className="text-white/50 hover:text-destructive transition-colors"
                                >
                                    <LogOut className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                    </div>

                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl pt-24 px-6 flex flex-col space-y-6 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-2xl font-serif tracking-wide transition-colors ${location === link.path ? "text-primary text-glow" : "text-white/70"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {(
                            <div className="pt-8 border-t border-white/10 flex flex-col space-y-6">
                                <Link
                                    href="/admin"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-xl font-serif text-white/70 flex items-center"
                                >
                                    <LayoutDashboard className="w-6 h-6 mr-4" /> Admin Panel
                                </Link>
                                <button
                                    onClick={() => {
                                        console.log('deslogar');
                                        setMobileMenuOpen(false);
                                    }}
                                    className="text-xl font-serif text-destructive flex items-center w-fit"
                                >
                                    <LogOut className="w-6 h-6 mr-4" /> Sair
                                </button>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
