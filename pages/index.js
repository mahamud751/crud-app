import Head from "next/head"
import Nav from "../components/Nav"
import Products from "../components/Products/Products"
import Sidebar from "../components/Sidebar/Sidebar"




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

      <Products></Products>


      <Sidebar></Sidebar>

    </>


  )
}
export default index