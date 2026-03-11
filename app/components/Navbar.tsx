'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, LogOut, LayoutDashboard, Moon, Sun } from 'lucide-react'
import { useState, useEffect, useTransition } from 'react'
import { logoutAction } from '@/app/actions/auth'
import { useTheme } from 'next-themes'

export function Navbar () {
  const location = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Docência', path: '/docente' },
    { name: 'Poesia & Música', path: '/poesia' }
  ]

  if (!mounted) return null

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-lg border-b border-border py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className='max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between'>
          <Link
            href='/'
            className='text-xl font-serif font-bold tracking-tight text-foreground hover:text-primary transition-colors'
          >
            Zé Luiz<span className='text-primary'>.</span>
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-8'>
            {/* <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className='flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-surface-muted transition-colors text-muted hover:text-foreground'
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              <span className='text-[10px] font-bold uppercase tracking-widest'>
                {theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
              </span>
            </button> */}

            {navLinks.map(link => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-primary ${
                  location === link.path
                    ? 'text-primary'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className='flex items-center space-x-4 pl-8 border-l border-border'>
              <Link
                href='/login'
                className='flex items-center text-sm font-medium text-muted hover:text-foreground transition-colors'
              >
                <LayoutDashboard className='w-4 h-4 mr-2' />
                Admin
              </Link>
              <button
                onClick={() => startTransition(() => logoutAction())}
                disabled={isPending}
                className='text-muted hover:text-primary transition-colors disabled:opacity-30 cursor-pointer'
                title='Sair'
              >
                <LogOut
                  className={`w-4 h-4 ${isPending ? 'animate-pulse' : ''}`}
                />
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className='md:hidden text-foreground p-2'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 flex flex-col space-y-6 md:hidden'
          >
            {/* <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className='flex items-center w-full gap-4 text-xl font-serif text-foreground'
            >
              <div className='p-2 bg-surface-muted rounded-lg'>
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </div>
              <span>Tema {theme === 'dark' ? 'Claro' : 'Escuro'}</span>
            </button> */}

            {navLinks.map(link => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-serif tracking-wide transition-colors ${
                  location === link.path ? 'text-primary' : 'text-muted'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className='pt-8 border-t border-border flex flex-col space-y-6'>
              <Link
                href='/login'
                onClick={() => setMobileMenuOpen(false)}
                className='text-xl font-serif text-muted flex items-center'
              >
                <LayoutDashboard className='w-6 h-6 mr-4' /> Admin Panel
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  startTransition(() => logoutAction())
                }}
                disabled={isPending}
                className='text-xl font-serif text-primary flex items-center w-fit disabled:opacity-50'
              >
                <LogOut className='w-6 h-6 mr-4' />
                {isPending ? 'Saindo...' : 'Sair'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
