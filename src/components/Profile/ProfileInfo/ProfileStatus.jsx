import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateStatusThunk } from "../../../redux/async/profileThunk"

const ProfileStatus = (props) => {

    useEffect(() => {

    }, [])
    console.log(props.profilePage.status)
    
    const dispatch = useDispatch()

    const [localState, setState] = useState({ editMode: false, value: props.profilePage.status })

    const activatedMode = (e) => {
        setState({ editMode: true })
        // // if (e.currentTarget === e.Target){
        //     console.log('фокус установлен')
        // // }
        // console.log(localState.value)

    }
    console.log(localState.value)

    const disabledMode = (e) => {
        // setState({value: e.target.value})
        // if (e.keyCode === 13) {
            setState({ editMode: false })
            console.log(e.target.value)
            
            dispatch(updateStatusThunk(e.target.value))
        // }

        // if (e.currentTarget === e.target){
            console.log('фокус снят')
        // }
    }
    // const onUpdateStatus = (event) => {
    //     setState({ editMode: true, value: event.target.value })
    //     // console.log(event)
    // }
    return (<>
        {
            localState.editMode ? <input autoFocus={true} onBlur={disabledMode} />
                : <span onDoubleClick={activatedMode}>{localState.value != null ? localState.value : 'Here need a status'}</span>
        }</>
    )
}

export default ProfileStatus