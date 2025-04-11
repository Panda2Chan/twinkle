import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Footer from './_footer'
import Header from './_header'
import './globals.css'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "PanChan's OK Zone🚀",
  description: 'Everything will be ok!',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-black text-white">
          <Header />
          <main className="container mx-auto pt-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
