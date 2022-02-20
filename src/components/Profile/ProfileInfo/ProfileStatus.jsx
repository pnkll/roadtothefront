import { useEffect, useState } from "react"

const ProfileStatus = (props) => {
    
    const localState = {
        editMode: false,
        value: 'hi'
    }

    useEffect(()=>{
        // localState.editMode = false
        console.log('Первый рендер')
    },[])
    

    const [ editMode, setState ] = useState(localState)
    
    const activatedMode = () =>{
        setState( localState.editMode === true)
    }

    const disabledMode = (e) =>{

        if (e.keyCode === 13){
        setState( localState.editMode === false)
        console.log('enter ')
        }
    }

    // console.log(localState)

    if (localState.editMode = true){
        return (<input onKeyDown={disabledMode} value='hello'></input>)
    }
    else if (localState.editMode = false) {
        return (<span onDoubleClick={activatedMode}>Hello</span>)
    }
}

export default ProfileStatus