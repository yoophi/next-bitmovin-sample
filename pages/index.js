import BitmovinPlayer from '../components/BitmovinPlayer'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>hello, world</h1>
        <div className="row">
          <div className="col-md-4">
          <BitmovinPlayer />
          </div>
          <div className="col-md-4">
          <BitmovinPlayer />
          </div>
          <div className="col-md-4">
          <BitmovinPlayer />
          </div>
        </div>
      </main>

    </div>
  )
}
