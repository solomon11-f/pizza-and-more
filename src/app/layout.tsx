import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair-display' })

export const metadata = {
  title: 'Pizza & More - Najbolja pizza u gradu',
  description: 'Dobrodošli u Pizza & More - Vaša omiljena picerija sa najukusnijim pizzama i brzom dostavom.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
