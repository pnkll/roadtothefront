import React from "react"
import * as axios from "axios"
import { connect } from 'react-redux'
import { setUser } from '../../redux/profileReducer'
import Profile from "./Profile"


class ProfileContainer extends React.Component {



    componentDidMount() {
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
        return <Profile {...this.props} />
        }
}

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}



export default connect(mapStateToProps, { setUser })(ProfileContainer)