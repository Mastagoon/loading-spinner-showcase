import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useState } from "react"
import { Router } from "next/router"
import Loading from "./components/Loading"

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  Router.events.on("routeChangeStart", () => setLoading(true)) // when next page is loading
  Router.events.on("routeChangeComplete", () => setLoading(false)) // once rout change is completed

  return (
    <>
      {loading && <Loading />}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
