import { motion } from "framer-motion"
import { BookOpen } from "lucide-react";

export default function Timeline() {

    const timeline = [
        {
            year: "1997",
            title: "Início da Docência",
            description:
                "Aos 16 anos iniciou sua jornada como professor de informática em Itaíba–PE."
        },
        {
            year: "2003",
            title: "Licenciatura em Matemática",
            description:
                "Formou-se em Licenciatura em Ciências com habilitação em Matemática pela AESA–CESA."
        },
        {
            year: "2011",
            title: "Professor do IFPB",
            description:
                "Ingressou como professor efetivo do Instituto Federal da Paraíba."
        },
        {
            year: "2018",
            title: "Doutorado",
            description:
                "Concluiu doutorado em Ensino de Ciências e Matemática."
        },
        {
            year: "Atual",
            title: "UEPB / Pesquisa",
            description:
                "Professor da Universidade Estadual da Paraíba e pesquisador em Educação Matemática."
        }
    ]

    return (
        <section className="relative py-32 px-6 bg-surface overflow-hidden">
            <div className="text-center space-y-4 max-w-3xl mx-auto mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                        Vida Acadêmica & Docência
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Um registro de projetos educacionais, publicações acadêmicas e reflexões sobre o ensino.
                    </p>
                </motion.div>
            </div>

            <div className="absolute top-0 left-0 w-full h-40 
            bg-linear-to-b from-background via-background/80 to-transparent 
            pointer-events-none z-10"
            />

            <div className="max-w-4xl mx-auto text-center relative mt-16">

                <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute -top-16 -left-16 text-6xl opacity-10"
                >
                    ✦
                </motion.div>

                <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 7, repeat: Infinity }}
                    className="absolute -bottom-16 -right-16 text-6xl opacity-10"
                >
                    ✦
                </motion.div>

                <BookOpen className="w-12 h-12 mx-auto mb-6 text-primary" />

                <div className="max-w-5xl mx-auto">

                    <h2 className="text-4xl font-bold text-center mb-20">
                        Trajetória
                    </h2>

                    <div className="relative border-l border-border">

                        {timeline.map((item, index) => (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * .2 }}
                                viewport={{ once: true }}
                                className="ml-10 mb-16"
                            >

                                <span className="absolute -left-3 w-6 h-6 bg-primary rounded-full border-4 border-background" />

                                <p className="text-sm text-primary mb-1">
                                    {item.year}
                                </p>

                                <h3 className="text-xl font-semibold mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-muted leading-relaxed">
                                    {item.description}
                                </p>

                            </motion.div>

                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}   