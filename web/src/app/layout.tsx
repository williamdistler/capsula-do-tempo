import './globals.css'
import { ReactNode } from 'react'
import { 
  Roboto_Flex as Roboto, 
  Bai_Jamjuree as BaiJamjuree 
} from 'next/font/google'
import { Copyright } from '@/components/Copyright'
import { Hero } from '@/components/Hero'
import { cookies } from 'next/headers'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'], 
  weight: '700', 
  variable: '--font-bai-jamjuree' 
})

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo constrúida com React, Next.js, TailwindCSS e TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body className={
        `${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`
      }>
        <main className="grid grid-cols-2 min-h-screen">
          {/* Left */}
          <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10">
            {/* Blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"/>

            {/* Stripes */}
            <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />

            {isAuthenticated ? <Profile /> : <SignIn /> }
            <Hero />
            <Copyright />
          </div>

          {/* Right */}
          <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
