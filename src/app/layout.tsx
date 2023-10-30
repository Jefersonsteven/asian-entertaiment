import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import '@/app/ui/global.css'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Asian Entertainment',
  description: 'Asian Entertainment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>{children}</body>
    </html>
  )
}
