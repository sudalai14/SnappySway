import React from 'react'
import "./rightbar.css"
import ads from "../Images/ads.jpg";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image1.jpg";
import image5 from "../Images/image2.jpg";
import image6 from "../Images/image3.jpg";

import addFriends from "../Images/add-user.png"
/*import axios from 'axios';
import { useState } from 'react';
import Follow from './Follow';
import { useSelector } from 'react-redux';*/
export default function Rightbar() {
 /* const userDetails = useSelector((state)=>state.user);
  let user = userDetails?.user;
  const id = user?.other?._id;
 const [users , setUsers] = useState([]);
  useEffect(() => {
    const getuser = async()=>{
      try {
        const res  = await axios.get(`http://139.144.12.15:80/api/user/all/user/${id}`)
        setUsers(res.data);
      } catch (error) {
        console.log("Some error occured")
      }
    }
    getuser();
  }, [])
  console.log(users)*/
  return (
    <div className='rightbar'>
      <div className='rightcontainer'>
        <div className='adsContainer'>
          <img src={`${ads}`} className="adsimg" alt="" />
          <div>
            <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>CodeDemy</p>
            <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Buy codedemy course</p>
          </div>
        </div>
        <div className='adsContainer'>
          <img src={`${image1}`} className="adsimg" alt="" />
          <div>
            <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>CodeDemy</p>
            <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Buy codedemy course</p>
          </div>
        </div>
       
       
      </div>

      <div className='rightcontainer2'>
        <h3 style={{textAlign:"start",marginLeft:"10px"}}>Suggested for you</h3>
        <div style={{ marginTop: "-10px" }}></div>
        <div>
          <div style={{ display: 'flex', alignItems: "center", justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image2}`} className="ProfileImage" alt="" />
              <div>
                <p style={{ marginLeft: '10px', textAlign: 'start' }}>Suman</p>
                <p style={{ marginLeft: '10px', textAlign: 'start', marginTop: "-16px", fontSize: "11px", color: "#aaa" }}>Suggested for you</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%" }}>
              <img src={`${addFriends}`} className="addfriend" alt="" />

            </div>
          </div>
        </div>
        <div style={{ marginTop: "-10px" }}></div>
        <div>
          <div style={{ display: 'flex', alignItems: "center", justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image1}`} className="ProfileImage" alt="" />
              <div>
                <p style={{ marginLeft: '10px', textAlign: 'start' }}>Suman</p>
                <p style={{ marginLeft: '10px', textAlign: 'start', marginTop: "-16px", fontSize: "11px", color: "#aaa" }}>Followed by suman</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%" }}>
              <img src={`${addFriends}`} className="addfriend" alt="" />

            </div>
          </div>
        </div>
        <div style={{ marginTop: "-10px" }}></div>
        <div>
          <div style={{ display: 'flex', alignItems: "center", justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image5}`} className="ProfileImage" alt="" />
              <div>
                <p style={{ marginLeft: '10px', textAlign: 'start' }}>Suman</p>
                <p style={{ marginLeft: '10px', textAlign: 'start', marginTop: "-16px", fontSize: "11px", color: "#aaa" }}>Followed by suman</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%" }}>
              <img src={`${addFriends}`} className="addfriend" alt="" />

            </div>
          </div>
        </div>
        <div style={{ marginTop: "-10px" }}></div>
        <div>
          <div style={{ display: 'flex', alignItems: "center", justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image3}`} className="ProfileImage" alt="" />
              <div>
                <p style={{ marginLeft: '10px', textAlign: 'start' }}>Suman</p>
                <p style={{ marginLeft: '10px', textAlign: 'start', marginTop: "-16px", fontSize: "11px", color: "#aaa" }}>Followed by suman</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%" }}>
              <img src={`${addFriends}`} className="addfriend" alt="" />

            </div>
          </div>
        </div>
        <div style={{ marginTop: "-10px" }}></div>
        <div>
          <div style={{ display: 'flex', alignItems: "center", justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image4}`} className="ProfileImage" alt="" />
              <div>
                <p style={{ marginLeft: '10px', textAlign: 'start' }}>Suman</p>
                <p style={{ marginLeft: '10px', textAlign: 'start', marginTop: "-16px", fontSize: "11px", color: "#aaa" }}>Followed by suman</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%" }}>
              <img src={`${addFriends}`} className="addfriend" alt="" />

            </div>
          </div>
        </div>
        <div style={{ marginTop: "-10px" }}></div>
        <div>
          <div style={{ display: 'flex', alignItems: "center", justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image6}`} className="ProfileImage" alt="" />
              <div>
                <p style={{ marginLeft: '10px', textAlign: 'start' }}>Suman</p>
                <p style={{ marginLeft: '10px', textAlign: 'start', marginTop: "-16px", fontSize: "11px", color: "#aaa" }}>Followed by suman</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%" }}>
              <img src={`${addFriends}`} className="addfriend" alt="" />

            </div>
          </div>
        </div>

</div>
    </div>
  )
}