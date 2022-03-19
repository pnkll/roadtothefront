import { useDispatch } from "react-redux"
import { onSetPageThunk } from "../../../redux/async/usersThunk"
import Preloader from "../Preloader/Preloader"
import classes from './Paginator.module.css'

const Paginator = ({isFetching, pageSize, currentPage, pageCount}) => {
    
    const dispatch = useDispatch()
    const pages = []
    for (let i = 1; i <= Math.ceil(pageCount / pageSize); i++) {
        pages.push(i)
    }

    return (
    <div className={classes.btns}>
                <div>{isFetching ? <Preloader /> : null}</div>
                {pages.map(p => {
                    return <span key={p} onClick=
                        {(e) => { dispatch(onSetPageThunk(p, pageSize)) }} className={currentPage === p
                            ? classes.selectedPage
                            : classes.page}>{p}</span>
                })}
            </div>
    )
}

export default Paginator