import React from "react";
import { follow, unfollow, setUsers, showMore, setPage, setPageCount, toogleIsFetching } from "../../redux/usersReducer"
import { connect } from "react-redux"
import Users from "./Users";
import * as axios from 'axios'

class UsersContainer extends React.Component {


    constructor(props) {
        super(props);
        this.onShowMore = () => {
            this.props.showMore()
        }

    }

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toogleIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.toogleIsFetching(false)
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
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.toogleIsFetching(false)
            })
    }


    render() {


        return <><Users
            pageCount={this.props.pageCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onSetPage={this.onSetPage.bind(this)}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFetching={this.props.isFetching}
        />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        pageCount: state.usersPage.pageCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => dispatch(followAC(userId)),
//         unfollow: (userId) => dispatch(unfollowAC(userId)),
//         setUsers: (users) => dispatch(setUsersAC(users)),
//         showMore: (users) => dispatch(showMoreAC(users)),
//         setPage: (id) => dispatch(setPageAC(id)),
//         setPageCount: (pageCount) => dispatch(setPageCountAC(pageCount)),
//         toogleIsFetching: (isFetching) => dispatch(toogleIsFetchingAC(isFetching))
//     }
// }



export default connect(mapStateToProps, 
    { follow, unfollow, setUsers, showMore, 
        setPage, setPageCount, toogleIsFetching })(UsersContainer)