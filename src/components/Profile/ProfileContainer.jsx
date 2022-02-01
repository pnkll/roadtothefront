import React from "react"
import * as axios from "axios"
import { connect } from 'react-redux'
import { setUser } from '../../redux/profileReducer'
import Profile from "./Profile"


class ProfileContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    componentDidMount() {
        console.log(this.props)
        // debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUser(response.data)
                console.log(response.data)
            })
        // debugger

    }
    componentWillUnmount() {

    }

    render() {

        // console.log(this)
        // debugger

        // if (this.state.hasError = true) {
        //     console.log(this)
        //     return <div>Error</div>
        // } 
        return <Profile {...this.props} profile={this.props.profile} />



    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.user
    }
}


export default connect(mapStateToProps)(ProfileContainer)