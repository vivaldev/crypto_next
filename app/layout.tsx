import './globals.css'
import { Inter } from 'next/font/google'
import Header from './dashboard/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crypto Next',
  description: 'Crypto coin data fetching app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={inter.className}>
      <Header />
      {children}
    </div>
  )
}
