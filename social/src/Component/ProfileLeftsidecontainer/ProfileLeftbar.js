import React from 'react'
import "./profileleftbar.css";

import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg"
import image3 from "../Images/image3.jpg"
import image4 from "../Images/image4.jpg"
import image5 from "../Images/image5.jpg"
import image6 from "../Images/image6.jpg"
//import { useState } from 'react';
//import axios from 'axios';
//import { useSelector } from 'react-redux';
//import { Link, useLocation } from 'react-router-dom';
export default function ProfileLeftbar() {
  /*let location = useLocation();
  let id = location.pathname.split("/")[2];
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails.user;
  const [Follow , setUnFollow] = useState([user.other.Following.includes(id) ? "Unfollow" : "Follow"]);
  const accessToken = user.accessToken;
  console.log(accessToken)
  let username = user?.other?.username;
  
  const [users , setuser] = useState([]);
  useEffect(() => {
    const getuser = async()=>{
      try {
        const res  = await axios.get(`http://139.144.12.15:80/api/user/post/user/details/${id}`)
        setuser(res.data);
      } catch (error) {
        console.log("Some error occured")
      }
    }
    getuser();
  }, [])
  let followersCounter = users?.Followers?.length;
  let followingCounter = users?.Following?.length;

  const [Followinguser , setFollowinguser] = useState([]);
  useEffect(() => {
    const getFollowing = async()=>{
      try {
        const res = await axios.get(`http://localhost:5000/api/post/following/${id}`);
        setFollowinguser(res.data);
      } catch (error) {
        console.log("Error")
      }
    }
    getFollowing();
  }, [])

  const handleFollow = async()=>{
    if(Follow === "Follow"){
      await fetch(`http://139.144.12.15:80/api/user/following/${id}` , {method:'PUT', headers:{'Content-Type':"application/JSON" , token:accessToken} , body:JSON.stringify({user:`${user.other._id}`})})
      setUnFollow("UnFollow")
    }else{
      await fetch(`http://139.144.12.15:80/api/user/following/${id}` , {method:'PUT', headers:{'Content-Type':"application/JSON" , token:accessToken} , body:JSON.stringify({user:`${user.other._id}`})})
      setUnFollow("Follow")
    }
  }

  console.log(Followinguser)*/
  
          return (
                    <div className='ProfileLeftbar'>
                              <div className='NotificationsContainer'>
                                        <img src={`${image2}`} className="ProfilepageCover" alt="" />
                                         <div style={{display:'flex' , alignItems:'center' , marginTop:-30}}>
                                                  <img src={`${image2}`} className="Profilepageimage" alt="" />
                                                  <div>
                                                    <p style={{marginLeft:6 , marginTop:20 , color:"black" , textAlign:'start'}}></p>
                                                    <p style={{marginLeft:6 , marginTop:20 , color:"black" , textAlign:"start"  , fontSize:11}}>Software Developer</p>
                                                  </div>
                                         </div>
                                         <div style={{display:'flex' , justifyContent:'space-between'}}>
                                                  <p style={{color:"black", marginLeft:20 , fontSize:"14px"}}>Followings</p>
                                                  <p style={{color:"black" , marginRight:20 , fontSize:"12px" , marginTop:17}}>1000</p>
                                         </div>

                                         <div style={{display:'flex' , justifyContent:'space-between' , marginTop:-20}}>
                                                  <p style={{color:"black", marginLeft:20 , fontSize:"14px"}}>Followers</p>
                                                  <p style={{color:"black" , marginRight:20 , fontSize:"12px" , marginTop:17}}>5000</p>
                                         </div>
                                         <div style={{marginTop:-20}}>
                                                  <h5 style={{color:"black", marginLeft:10 , fontSize:"14px" , marginRight:30, marginTop:30 , textAlign:"start"}}>User bio</h5>
                                                  <p style={{color:"black"  , fontSize:"12px" , marginTop:-20 , textAlign:"start" , marginLeft:"10px"}}>I would rather be despised of who I am, rather than loved by who I am not.</p>
                                         </div>
                                         <button style={{width:"100%" , paddingTop:7 , paddingBottom:7 , border:"none" , backgroundColor:"grey" , color:"white" , cursor:"pointer"}}>Edit Bio</button>
                                         
                                        
                              </div>

                              <div className='NotificationsContainer'>
                                <h3>Followings</h3>
                                <div style={{display:"flex" , justifyContent:'space-between'}}>
                                        <p style={{marginLeft:10}}>Friends</p>
                                        <p style={{marginRight:10 , color:"#aaa"}}>See all</p>
                                </div>
                                <div style={{display:'flex' , flexWrap:"wrap" , marginLeft:5}}>
                                  <div style={{marginLeft:4 , cursor:"pointer"}}>
                                    <img src={`${image1}`} className='friendimage' alt=''/>
                                    <p style={{marginTop:-2}}>Ancy</p>
                                  </div>
                                  <div style={{marginLeft:4, cursor:"pointer"}}>
                                    <img src={`${image2}`} className='friendimage' alt=''/>
                                    <p style={{marginTop:-2}}>Ancy</p>
                                  </div>
                                  <div style={{marginLeft:4, cursor:"pointer"}}>
                                    <img src={`${image3}`} className='friendimage' alt=''/>
                                    <p style={{marginTop:-2}}>Ancy</p>
                                  </div>
                                  <div style={{marginLeft:4, cursor:"pointer"}}>
                                    <img src={`${image4}`} className='friendimage' alt=''/>
                                    <p style={{marginTop:-2}}>Ancy</p>
                                  </div>
                                  <div style={{marginLeft:4, cursor:"pointer"}}>
                                    <img src={`${image5}`} className='friendimage' alt=''/>
                                    <p style={{marginTop:-2}}>Ancy</p>
                                  </div>
                                  <div style={{marginLeft:4, cursor:"pointer"}}>
                                    <img src={`${image6}`} className='friendimage' alt=''/>
                                    <p style={{marginTop:-2}}>Ancy</p>
                                  </div>
                                        
                                </div>
                              </div>

                    </div>
          )
}