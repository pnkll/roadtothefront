import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { getOwner, getUser } from '../../../redux/selectors/profile-selectors'
import classes from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

function ProfileInfo(props) {

    const user = useSelector(getUser)
    const isOwner = useSelector(getOwner)

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data.uploadImage[0].name)
    }

    return (
        <div>
            <div className={classes.ava}><img src={user.photos.large != null
                ? user.photos.large
                : 'https://cdn1.ozone.ru/s3/multimedia-a/c1200/6064056070.jpg'} />
                {/* {isOwner && <form onSubmit={handleSubmit(onSubmit)}>
                    <input type='file'>Select file</input>
                    <input type='submit'/>
                    </form>} */}
            </div>
            <div className={classes.fullname}>{user.fullName}</div>
            {isOwner && 
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='file' {...register('uploadImage')}/><br/>
                <input type='submit'/>
            </form>
            }



            <div>Status: <ProfileStatus /></div>
            <div>Socials: <a href={`https://${user.contacts.github}`}>GitHub</a></div>

        </div>
    )
}

export default ProfileInfo