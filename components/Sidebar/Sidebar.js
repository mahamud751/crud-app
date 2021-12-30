import { useRecoilState } from "recoil"
import { viewState } from "../Recoil/ProductsRecoil"
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const Sidebar = () => {
    const [view, setView] = useRecoilState(viewState)
    console.log(view)
    return (
        <div>
            <button>New</button>
            <button className={`bg-primary ${view == 'column' ? `bg-red` : null}`} onClick={() => setView('column')}>
                <AccessTimeFilledIcon></AccessTimeFilledIcon>
            </button>
            <button className={`bg-primary ${view == 'row' ? `bg-red` : null}`} onClick={() => setView('row')}>
                <AccessTimeFilledIcon></AccessTimeFilledIcon>
            </button>
        </div>
    )
}

export default Sidebar
