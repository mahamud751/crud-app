import Link from "next/link"
import Typography from '@mui/material/Typography';
import { Container, Navbar } from 'react-bootstrap';
import { Button } from "@mui/material";

const Nav = () => {
    return (
        <>

            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand >

                        <Typography>

                        </Typography>
                    </Navbar.Brand>
                    <Navbar.Brand >

                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">



                        <Button className="bg-danger text-white px-5 mx-2"><Link href="/"><a className="text-white" style={{
                            textDecoration: "none"
                        }}>Home</a></Link></Button>
                        <Button className="bg-danger text-white px-5 mx-2"><Link href="/items"><a className="text-white" style={{
                            textDecoration: "none"
                        }}>Items</a></Link></Button>

                        <Button className="bg-danger text-white px-5 mx-2"><Link href="/addProduct"><a className="text-white" style={{
                            textDecoration: "none"
                        }}>Add Product</a></Link></Button>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Nav
