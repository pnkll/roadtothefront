import { useState } from "react"
import { useDispatch } from "react-redux"
import { onSetPageThunk } from "../../../redux/async/usersThunk"
import Preloader from "../Preloader/Preloader"
import classes from './Paginator.module.css'

const Paginator = ({ isFetching, pageSize, currentPage, totalItemsCount, portionSize }) => {

    const dispatch = useDispatch()
    const pages = []

    const pagesCount = Math.ceil(totalItemsCount / pageSize) //Всего страниц
    const portionCount = Math.ceil(pagesCount / portionSize) // Всего порций(вкладок)
    const [portionNumber, setState] = useState(1)
    const firstPortionItem = (portionNumber - 1) * portionSize + 1 //Номер первого элемента в порции
    const lastPortionItem = portionNumber * portionSize //Номер последнего элемента в порции

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionPages = pages.filter(p => (p >= firstPortionItem) && (p <= lastPortionItem)) //Какие элементы попадают в порцию

    return (
        <div className={classes.btns}>
            <div>{isFetching ? <Preloader /> : null}</div>
            {portionNumber > 1
                && <button onClick={() => setState(portionNumber - 1)}>Down</button>}
            {portionPages.map(p => {
                return <span key={p} onClick=
                    {(e) => { dispatch(onSetPageThunk(p, pageSize)) }} className={currentPage === p
                        ? classes.selectedPage
                        : classes.page}>{p}</span>
            })}
            {portionNumber < portionCount
                && <button onClick={() => setState(portionNumber + 1)} name='next'>Next</button>}

        </div>
    )
}

export default Paginator