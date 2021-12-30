import { Card, CardContent, CardMedia, Typography } from "@mui/material"

export const getStaticPaths = async () => {
    const res = await fetch("https://quiet-springs-52854.herokuapp.com/products")
    const data = await res.json()


    const paths = data.map((product) => {
        return {
            params: {
                pageNo: product._id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (content) => {
    const id = content.params.pageNo
    const res = await fetch(`https://quiet-springs-52854.herokuapp.com/products/${id}`)
    const data = await res.json()

    return {
        props: {
            data,
        }
    }
}

const myPage = ({ data }) => {
    const { img, title, price, category, description } = data
    return (
        <>
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                    component="img"
                    style={{ width: "100%" }}
                    // height="550"
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {title}
                    </Typography>


                </CardContent>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {category}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {description}
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

                </div>

            </Card>

        </>
    )
}

export default myPage
