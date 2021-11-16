import classes from './Profile.module.css'
import MyPosts from './My posts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile() {
  return (
    <div className={classes.content}>
      <ProfileInfo picture='https://phonoteka.org/uploads/posts/2021-05/1621015512_14-phonoteka_org-p-fon-dlya-akvariuma-bikini-bottom-26.jpg' avatar='https://www.seekpng.com/png/detail/59-593478_mr-krabs-mr-krabs-png.png' />
      <MyPosts />
    </div>
  )
}

export default Profile