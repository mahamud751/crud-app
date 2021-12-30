import { Button, MenuItem, Select, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { productsState } from "../components/Recoil/ProductsRecoil";
import { useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";


const addProduct = () => {
    // const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm()
    const setProducts = useSetRecoilState(productsState)
    const [success, setSuccess] = useState(false);

    const onSubmit = data => {
        axios.post('https://quiet-springs-52854.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    setSuccess(true);
                    reset()
                }
            })
    };

    return (
        <div>
            <Nav></Nav>
            {<form onSubmit={handleSubmit(onSubmit)}>

                <TextField
                    id="outlined-size-small"
                    sx={{ width: "90%", m: 1 }}
                    {...register("name", { required: true, maxLength: 20 })}
                    label="Product Name"
                    size="small"
                />
                <TextField
                    id="outlined-size-small"
                    sx={{ width: "90%", m: 1 }}
                    {...register("price")}
                    label="Product Price"
                    size="small"
                />
                <TextField
                    id="outlined-size-small"
                    sx={{ width: "90%", m: 1 }}
                    {...register("img")}
                    label="Product Picture"
                    size="small"
                />
                <Select sx={{ width: "90%", m: 1 }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    {...register("description")}
                    label="type"
                    defaultValue="Ten"

                >
                    <MenuItem value="fruits">Ten</MenuItem>
                    <MenuItem value="banana">Banana</MenuItem>
                    <MenuItem value="all">All</MenuItem>
                </Select>
                <br />


                {<Button type="submit" variant="contained">Product Add</Button>}
            </form>}



        </div >
    )
}

export default addProduct
