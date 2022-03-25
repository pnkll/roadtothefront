import React from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateStatusThunk } from "../../../redux/async/profileThunk"


//Грубейший костыль с VALUE: 0 на 33 строчке(подумать над тем как исправить)


const ProfileStatus = (props) => {
    
    const dispatch = useDispatch()

    const [localState, setState] = useState({ editMode: false, value: props.profilePage.status })

    const activatedMode = (e) => {
        setState({ editMode: true })
    }

    const disabledMode = (e) => {
            setState({ editMode: false, value: 0 })         
            dispatch(updateStatusThunk(e.target.value))
    }

    return (<>

        {
            localState.editMode ? <input autoFocus={true} onBlur={disabledMode} />
                // : <span onDoubleClick={activatedMode}>{localState.value != null ? localState.value : 'Here need a status'}</span>
                : <span onDoubleClick={activatedMode}>{props.profilePage.status != null || localState.value != 0 ? props.profilePage.status : 'Here need a status'}</span>
        }</>
    )
}

export default ProfileStatus