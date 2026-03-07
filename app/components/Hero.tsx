"use client";

import { BookOpen, Music } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

            <div className="absolute bottom-0 left-0 w-full h-40 
                bg-linear-to-t from-background via-background/80 to-transparent 
                z-10 pointer-events-none"
            />

            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop)"
                }}
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-150 h-150 bg-primary/20 blur-[160px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center relative z-20 flex flex-col items-center justify-center min-h-[80vh]">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >

                    <h2 className="text-primary tracking-[0.3em] uppercase mb-6 text-sm md:text-base">
                        Cultura & Educação
                    </h2>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-8 leading-[1.05] tracking-tight">

                        <span className="block text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]">
                            Zé Luiz do
                        </span>

                        <span className="block bg-linear-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                            Candeeiro
                        </span>

                    </h1>

                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Um espaço dedicado à <span className="text-primary">poesia</span>,
                        à <span className="text-primary">música</span> e à arte de educar.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">

                        <Link
                            href="/docente"
                            className="px-8 py-4 rounded-full bg-surface hover:bg-surface-muted border border-border backdrop-blur flex items-center gap-3 transition"
                        >
                            <BookOpen className="w-5 h-5 text-primary" />
                            Trajetória Docente
                        </Link>

                        <Link
                            href="/poesia"
                            className="px-8 py-4 rounded-full bg-primary text-primary-foreground flex items-center gap-3 shadow-lg hover:scale-105 transition"
                        >
                            <Music className="w-5 h-5" />
                            Poesia & Música
                        </Link>

                    </div>

                </motion.div>

            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">

                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    />

                </div>
            </motion.div>

        </section>
    );
}