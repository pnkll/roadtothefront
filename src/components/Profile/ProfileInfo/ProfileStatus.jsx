import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const ProfileStatus = (props) => {

    useEffect(() => {

    }, [])


    const [localState, setState] = useState({ editMode: false, value: props.profilePage.status })

    const activatedMode = () => {
        setState({ editMode: true })
    }

    const disabledMode = (e) => {
        // setState({value: e.target.value})
        if (e.keyCode === 13) {
            setState({ editMode: false, value: e.target.value })
        }
    }
    const onUpdateStatus = (event) => {
        // setState({ value: event.target.value })
        // console.log(event)
    }
    return (<>
        {
            localState.editMode ? <input onKeyDown={disabledMode} onChange={onUpdateStatus}/>
                : <span onDoubleClick={activatedMode}>{localState.value != null ? localState.value : 'Here need a status'}</span>
        }</>
    )
}

export default ProfileStatus