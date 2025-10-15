import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Zambia Gov Interop',
  description: 'Simplified interoperability portal',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
