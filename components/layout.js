import Navigation from './navigation'
import Footer from './footer'
import Head from 'next/head'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Encoderpie</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/web_icons/code.png" />
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <Navigation />
        <div className='px-6 lg:px-10 py-6 h-full bg-gradient-to-r from-sky-900 via-blue-600 to-sky-900'>{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout