
import { RecoilRoot } from "recoil";
import AddProducts from "../components/AddProduct/AddProduct";



const addProducts = () => {
    return (
        < >
            <RecoilRoot>
                <AddProducts></AddProducts>
            </RecoilRoot>
        </>
    );
}
export default addProducts;
