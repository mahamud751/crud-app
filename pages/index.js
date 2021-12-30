import Head from "next/head"
import { RecoilRoot } from "recoil"
import Nav from "../components/Nav"
import Products from "../components/Products/Products"




function index() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>

      </Head>
      <Nav></Nav>
      <RecoilRoot>
        <Products></Products>
      </RecoilRoot>

    </>


  )
}
export default index