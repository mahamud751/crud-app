
import { useRecoilValue } from 'recoil'
import { productsState } from '../Recoil/ProductsRecoil'
import { Container, Grid } from '@mui/material';
import Product from '../Product/Product';
import Link from 'next/link';


const Products = () => {
    const products = useRecoilValue(productsState)
    // console.log(products)
    return (
        <div className='m-5'>
            <Container>
                <Grid container spacing={2}>
                    {products.map((product) => {
                        return (
                            <Product
                                key={product.id}
                                product={product}
                            ></Product>
                        )
                    })}
                </Grid>

            </Container>

        </div >
    )
}

export default Products
