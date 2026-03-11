export function Footer() {

    return (
        <footer className="border-t border-white/5 py-12 bg-background mt-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h3 className="font-serif text-2xl font-bold text-white mb-2">Zé Luiz do Candeeiro</h3>
                    <p className="text-white/50 text-sm">Poesia, Música e Educação.</p>
                </div>

                <div className="flex space-x-6 text-white/40 text-sm">
                    <p>&copy; {new Date().getFullYear()} Zé Luiz. Todos os direitos reservados.</p>
                    <span className="hidden md:inline">|</span>
                    <p>
                        Desenvolvido por{" "}
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white transition-colors"
                        >
                            J. Suzuki  Design e Tecnologia LTDA
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
