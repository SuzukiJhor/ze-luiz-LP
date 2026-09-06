import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Playfair_Display, Inter } from 'next/font/google'
import { PostProvider } from './context/PostsContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Ze Luiz do Candeeiro',
  description: 'Zé Luiz do Candeeiro é a beleza do cotidiano traduzida em arte',
  verification: {
    google: 'gHYU7W7nw-LE1x53UMqbQ_TmGbwzHhOwecArFIOG2no',
  },
  icons: {
    icon: '/mandala-remove.png',
    apple: '/mandala-remove.png'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PostProvider>
          <main>{children}</main>
        </PostProvider>
      </body>
    </html>
  )
}
