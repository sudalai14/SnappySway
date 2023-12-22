import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import './profile.css'
import ProfileLeftbar from '../../Component/ProfileLeftsidecontainer/ProfileLeftbar'
import ProfileRightbar from '../../Component/ProfileRightsideContainer/ProfileRightbar'
import ProfileMainPost from '../../Component/ProfileMainPostContainer/ProfileMainPost'

export default function Profile() {
  return (
    <div className='ProfileContainer'>
      <Navbar/>
      <div className='subProfileContainer'>
        <ProfileLeftbar/>
        <ProfileMainPost/>
        <ProfileRightbar/>
      </div>
    </div>
  )
}
