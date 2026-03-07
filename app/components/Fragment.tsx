"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Fragment() {

    return (
        <section className="py-32 bg-surface">

            <div className="max-w-7xl mx-auto px-6">

                <div className="flex justify-between items-end mb-16">

                    <div>
                        <h2 className="text-4xl font-bold mb-4">Fragmentos</h2>
                        <p className="text-muted">
                            Últimas publicações e reflexões
                        </p>
                    </div>

                    <Link
                        href="/poesia"
                        className="hidden md:flex items-center text-primary"
                    >
                        Ver tudo
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>

                </div>


                <div className="grid md:grid-cols-2 gap-8">

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="relative h-100 rounded-xl overflow-hidden group"
                    >

                        <img
                            src="https://images.unsplash.com/photo-1524901548305-08eeddc35080?q=80&w=2070"
                            alt="Docência"
                            fill
                            className="object-cover group-hover:scale-105 transition duration-700"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />

                        <div className="absolute bottom-0 p-8">

                            <span className="text-primary text-sm uppercase tracking-widest">
                                Docência
                            </span>

                            <h3 className="text-3xl font-bold mt-2">
                                A Arte de Ensinar
                            </h3>

                            <p className="text-muted mt-2">
                                Reflexões sobre metodologias e arte no ambiente escolar.
                            </p>

                        </div>

                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="relative h-100 rounded-xl overflow-hidden group"
                    >

                        <img
                            src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070"
                            alt="Música"
                            fill
                            className="object-cover group-hover:scale-105 transition duration-700"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />

                        <div className="absolute bottom-0 p-8">

                            <span className="text-primary text-sm uppercase tracking-widest">
                                Música
                            </span>

                            <h3 className="text-3xl font-bold mt-2">
                                Sons do Interior
                            </h3>

                            <p className="text-muted mt-2">
                                Composições autorais inspiradas nas raízes nordestinas.
                            </p>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}