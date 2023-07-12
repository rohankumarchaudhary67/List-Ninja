import ContextWrapper from '@/lib/context/ContextWrapper'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'List Ninja (To Do List Application)',
  description: 'List Ninja is a powerful and intuitive to-do list application designed to help individuals and teams stay organized, focused, and productive. With its user-friendly interface and robust features, List Ninja is a reliable companion for managing tasks, setting priorities, and tracking progress.',
}

export default function RootLayout({ children, }: { children: React.ReactElement }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextWrapper>
          <>
            <Navbar />
            {children}
          </>
        </ContextWrapper>
      </body>
    </html>
  )
}
