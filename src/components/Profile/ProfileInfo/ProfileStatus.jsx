import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const ProfileStatus = (props) => {

    useEffect(() => {

    }, [])


    const [localState, setState] = useState({ editMode: false })

    const activatedMode = () => {
        setState({ editMode: true })
    }

    const disabledMode = (e) => {
        if (e.keyCode === 13) {
            setState({ editMode: false })
        }
    }

    const editMode = useSelector(state => localState.editMode)


    console.log(editMode)

    // if (localState.editMode === true){
    //     return (<input onKeyDown={disabledMode}></input>)
    // }
    // else{
    //     return (<span onDoubleClick={activatedMode}>Hello</span>)
    // }

    return (<>
        {
            editMode ? <input onKeyDown={disabledMode}></input>
                : <span onDoubleClick={activatedMode}>Hello</span>
        }</>
    )
}

export default ProfileStatus