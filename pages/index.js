import BitmovinPlayer from "../components/BitmovinPlayer";
import Head from "next/head";

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
            <BitmovinPlayer
              source={{
                dash:
                  "https://bitdash-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd",
                hls:
                  "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
                poster:
                  "https://bitdash-a.akamaihd.net/content/MI201109210084_1/poster.jpg",
              }}
            />
          </div>
          <div className="col-md-4">
            <BitmovinPlayer
              source={{
                dash:
                  "https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd",
                hls:
                  "https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8",
                poster: "https://via.placeholder.com/1920x1080",
              }}
            />
          </div>
          <div className="col-md-4">
            <BitmovinPlayer />
          </div>
        </div>
      </main>
    </div>
  );
}
