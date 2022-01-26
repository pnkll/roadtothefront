import * as axios from "axios"
import React from "react"
import { NavLink } from "react-router-dom"
import Profile from "./Profile"
import { connect } from 'react-redux'
import { setUser } from '../../redux/profileReducer'


class ProfileContainer extends React.Component {

componentDidMount(){
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
    .then(response => {
        this.props.setUser(response.data.fullname)
    })
}
componentWillUnmount(){

}

    render(){
      return <NavLink to='/profile/2'><Profile {...this.props}/></NavLink>
    }
  }

  const mapStateToProps = (state) => {
      return {
          profilePage: state.profilePage
      }
  }



  export default connect(mapStateToProps, { setUser })(ProfileContainer)