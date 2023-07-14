'use client'
import './globals.css'
import 'allotment/dist/style.css'
import { Providers } from '../redux/provider'
import Header from '../components/Header'
import { usePathname } from 'next/navigation'
import localFont from 'next/font/local'
import { AppProvider } from '../contexts/app.context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const metadata = {
  title: 'Hello',
  description: 'Generated by create next app'
}

const myFont = localFont({
  src: './../fonts/CONSOLA.ttf',
  display: 'auto'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  let Navbar: () => JSX.Element = Header

  const pathname: string = usePathname()

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })

  return (
    <html lang='en'>
      <body suppressHydrationWarning={true} className={myFont.className}>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            {pathname === '/' || pathname === '/sso-callback' ? <> </> : <Navbar />}
            {children}
            <ToastContainer />
          </AppProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  )
}
