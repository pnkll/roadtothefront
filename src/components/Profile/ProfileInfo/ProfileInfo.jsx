import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { updatePhotoThunk, updateProfileData } from '../../../redux/async/profileThunk'
import { getOwner, getUser } from '../../../redux/selectors/profile-selectors'
import classes from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

function ProfileInfo(props) {

    const dispatch = useDispatch()

    const user = useSelector(getUser)
    const isOwner = useSelector(getOwner)

    const [editMode, setEditMode] = useState(false)

    const onSubmit = (data) => {
        setEditMode(!editMode)
        data.userId = props.userId
        dispatch(updateProfileData(data))

        if (data.uploadImage.length != 0) {
            dispatch(updatePhotoThunk(data.uploadImage[0]))
        }
    }


    return (
        <div className={classes.mainWrapper}>
            <div className={classes.container}>
                <div className={classes.ava}><img src={user.photos.large != null
                    ? user.photos.large
                    : 'https://cdn1.ozone.ru/s3/multimedia-a/c1200/6064056070.jpg'} />
                    <div className={classes.status}>Status: <div className={classes.s}><ProfileStatus /></div></div>
                </div>

                <div className={classes.info}>
                    {!editMode && <div className={classes.fullname}>{user.fullName}</div>}

                    {!editMode && <ProfileData user={user} />}

                    {isOwner && editMode &&
                        <ProfileFormData user={user} onSubmit={onSubmit} />
                    }

                </div>
            </div>

            {isOwner && !editMode && <button onClick={() => { setEditMode(!editMode) }}>Редактировать страницу</button>}
        </div>
    )
}

const ProfileData = (props) => {
    return <div className={classes.data}>
        <div>About me: {props.user.aboutMe}</div>
        <div>Ищет работу: {props.user.lookingForAJob ? 'Да' : 'Нет'}</div>
        {props.user.lookingForAJob && <div>Навыки: {props.user.lookingForAJobDescription}</div>}
        {Object.keys(props.user.contacts).filter(key => props.user.contacts[key] != '' && props.user.contacts[key] != null).map(key => <div className={classes.contacts}><Contact key={key} contactValue={props.user.contacts[key]} contactTitle={key} /></div>)}
    </div>
}

const ProfileFormData = (props) => {



    const { register, handleSubmit } = useForm()


    return <div className={classes.formData}>
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <input type='file' {...register('uploadImage')} /><br />
            <br />Fullname<input type='text' defaultValue={props.user.fullName} {...register('fullName')} />
            <br />About me<input type='text' defaultValue={props.user.aboutMe} {...register('aboutMe')} />
            <br />Ищу работу<input type='checkbox' {...register('lookingForAJob')} />
            <br />Description<input type='text' defaultValue={props.user.lookingForAJobDescription} {...register('lookingForAJobDescription')} />
            <br /><div className={classes.contacts}><input type='text' defaultValue={props.user.contacts.github} {...register('github')} />Github page</div>
            <div className={classes.contacts}><input type='text' defaultValue={props.user.contacts.vk} {...register('vk')} />vk</div>
            <div className={classes.contacts}><input type='text' defaultValue={props.user.contacts.facebook} {...register('facebook')} />facebook</div>
            <div className={classes.contacts}><input type='text' defaultValue={props.user.contacts.instagram}{...register('instagram')} />instagram</div>
            <div className={classes.contacts}><input type='text' defaultValue={props.user.contacts.twitter} {...register('twitter')} />twitter</div>
            <div className={classes.contacts}><input type='text' defaultValue={props.user.contacts.website} {...register('website')} />website</div>
            <div className={classes.contacts}><input type='text' defaultValue={props.user.contacts.youtube} {...register('youtube')} />youtube</div>
            <div className={classes.contacts}><input type='text' defaultValue={props.user.contacts.mainlink} {...register('mainlink')} />mainlink</div>
            <input type='submit' value={'Сохранить изменения'} />
        </form>
    </div>
}

const Contact = (props) => {
    return <div><a href={props.contactValue != null ? props.contactValue : 'https://ya.ru'}>{props.contactTitle}</a></div>
}

export default ProfileInfo