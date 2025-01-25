
"use client"
import React, { lazy, useState } from 'react'
import Footer from './components/Footer'
import './globals.css'
import { useRouter } from 'next/router';
import Head from 'next/head'
import { metadata } from './metadata'

// LazyLoading
const Header = lazy(() => import('./components/Header'))
const Sidebar = lazy(() => import('./components/Sidebar'))

// context
import { SideBarContext } from './components/context/SidebarContext'




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const [Open, setOpen] = useState(false)

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>
        <SideBarContext.Provider value={{ Open, setOpen }}>
          <Header />
          <Sidebar />
          {children}
          <Footer />
        </SideBarContext.Provider>
      </body>
    </html>
  )
}
