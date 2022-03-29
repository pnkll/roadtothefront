import React from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateStatusThunk } from "../../../redux/async/profileThunk"
import { getStatus } from "../../../redux/selectors/profile-selectors"
import classes from './ProfileInfo.module.css'


//Грубейший костыль с VALUE: 0 на 33 строчке(подумать над тем как исправить)


const ProfileStatus = (props) => {

    const dispatch = useDispatch()

    const status = useSelector(getStatus)


    const [localState, setState] = useState({ editMode: false, value: status })

    const activatedMode = (e) => {
        setState({ editMode: true })
    }

    const disabledMode = (e) => {
        setState({ editMode: false, value: 0 })

        if (e.target.value != '') {
            dispatch(updateStatusThunk(e.target.value))
        }
    }

    return (<div className={classes.status}>

        {
            localState.editMode ? <input autoFocus={true} onBlur={disabledMode} />
                : <span onDoubleClick={activatedMode}>{status != null || localState.value != 0 ? status : 'Here need a status'}</span>
        }
    </div>
    )
}

export default ProfileStatus