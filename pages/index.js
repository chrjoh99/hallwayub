import Head from 'next/head'
import Header from '@components/Header'
//import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Site under development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hallway UB" />
        <p className="description">
          Fuck off
        </p>
      </main>

      <Footer />
    </div>
  )
}
