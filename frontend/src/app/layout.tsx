import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FitSnap – Smart Fashion, Perfect Fit',
  description: 'Fashion-tech MVP with AI fit recommendations and 3D try-on.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          {children}
        </div>
      </body>
    </html>
  )
}
