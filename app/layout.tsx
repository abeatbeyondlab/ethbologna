
import { fonts } from './fonts'
import { Providers } from './providers'
import type { Metadata } from 'next'
import { ColorModeScript } from '@chakra-ui/react'
//import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from './theme'
//import { Inter } from 'next/font/google'


//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EthBologna',
  description: 'A Community of ethereans in Bologna',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' className={fonts.rubik.variable}
    //className={inter.className}
    >
      <body>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}