import { Card, Button, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { productsState } from '../Recoil/ProductsRecoil';

const Product = ({ product }) => {
    const { name, img, price, description, id } = product
    const [products, setProducts] = useRecoilState(productsState)
    const deleteProduct = (id) => {
        const new_pd = products.filter(pd => pd.id != id)
        setProducts(new_pd)
    }
    return (
        <>
            <Grid item xs={12} md={4}>
                <Card>
                    <CardMedia
                        component="img"
                        style={{ width: "100%", height: "300px" }}
                        // height="550"
                        image={img}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {name}
                        </Typography>
                        <Typography variant="body2">
                            {description.slice(0, 120)}
                        </Typography>

                    </CardContent>

                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: 5
                    }}>
                        <Typography variant="h5">
                            {price}
                        </Typography>
                        <Typography variant="h4">
                            <Link href={`/items`}>
                                <Button variant="contained">More Details</Button>
                            </Link>


                        </Typography>
                        <Button onClick={() => deleteProduct(id)} variant="contained"> Delete</Button>

                    </div>

                </Card>
            </Grid>
        </>
    )
}
export default Product
