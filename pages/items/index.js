import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material"
import Link from "next/link"
import Nav from "../../components/Nav"


export const getStaticProps = async () => {
    const res = await fetch("https://quiet-springs-52854.herokuapp.com/products")
    const data = await res.json()

    return {
        props: {
            data,
        }
    }
}


const index = ({ data }) => {

    return (
        <>
            <Nav></Nav>
            <Container>
                <h2 className="text-center m-5">All Bike Collections</h2>
                <Grid container spacing={2}>
                    {data.map((product) => {
                        return (

                            <>
                                <Grid item xs={12} md={4}>

                                    <Card>
                                        <CardMedia
                                            component="img"
                                            style={{ width: "100%", height: "300px" }}
                                            // height="550"
                                            image={product.img}
                                            alt="Paella dish"
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                {product.name}
                                            </Typography>

                                            <Typography variant="body2">
                                                {product.description}
                                            </Typography>

                                        </CardContent>

                                        <div style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            margin: 5
                                        }}>
                                            <Typography variant="h5">
                                                {product.price}
                                            </Typography>
                                            <Link href={`/items/${product._id}`}>
                                                <Typography variant="h4">
                                                    <Button variant="contained">Details</Button>
                                                </Typography>
                                            </Link>

                                        </div>




                                    </Card>

                                </Grid>
                            </>

                        )

                    })}
                </Grid>

            </Container>

        </>
    )
}

export default index
