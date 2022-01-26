import React from "react"
import * as axios from "axios"
// import classes from './Users.module.css'
// import { showMoreAC } from "../../redux/usersReducer";
import Users from './Users'


class UserAPIComponent extends React.Component {


    constructor(props) {
        super(props);
        this.onShowMore = () => {
            this.props.showMore()
        }

    }

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }

        console.log(this)
    }

    componentWillUnmount() {
        // this.props.users.length = 0
    }

    onShowMore(pageNum) {
        // let heh = props
    }

    onSetPage(pageNum) {
        this.props.setPage(pageNum)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => { this.props.setUsers(response.data.items) })
    }

    render() {


        return <Users
            pageCount={this.props.pageCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onSetPage={this.onSetPage.bind(this)}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

export default UserAPIComponent
