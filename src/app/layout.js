import './globals.css'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({
  subsets: ['latin'],
  src: [
    {
      path: './fonts/Montserrat-Regular.ttf',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: './fonts/Montserrat-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Montserrat-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Montserrat-Thin.ttf',
      weight: '100',
      style: 'normal',
    }
  ],
  variable: 'montserrat',
 })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
