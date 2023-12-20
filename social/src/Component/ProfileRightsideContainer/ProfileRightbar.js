import React from 'react'
import "./profilerightbar.css"
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";

import addFriends from "../Images/add-user.png"
//import { useSelector } from 'react-redux';
//import { useLocation } from 'react-router-dom';
export default function ProfileRightbar() {
  /*const userDetails = useSelector((state)=>state.user);
  let user = userDetails.user
  let location = useLocation();
  let id = location.pathname.split("/")[2];
  let idforSuggest = user?.other?._id
  const [Followinguser , setFollowinguser] = useState([]);
  useEffect(() => {
    const getFollowing = async()=>{
      try {
        const res = await axios.get(`http://139.144.12.15:80/api/post/followers/${id}`);
        setFollowinguser(res.data);
      } catch (error) {
        console.log("Error")
      }
    }
    getFollowing();
  }, [])

  console.log(Followinguser)

  const [users , setUsers] = useState([]);
  useEffect(() => {
    const getuser = async()=>{
      try {
        const res  = await axios.get(`http://localhost:5000/api/user/all/user/${idforSuggest}`)
        setUsers(res.data);
      } catch (error) {
        console.log("Some error occured")
      }
    }
    getuser();
  }, [])
  console.log(users)*/
  
  return (
    
        <div className='Profilerightbar'>
          <div className='profilerightcontainer'>
            <h3>Friend Requests</h3>
             <div>
                <div style={{display:"flex" ,alignItems:"center" , marginLeft:10 }}>
                    <img src={`${image1}`} className='Friendsimage' alt=''/>
                    <p style={{textAlign:"start" , marginLeft:"10px"}}>mano wnat to make you friend</p>
                </div>
                <div style={{display:"flex" , justifyContent:'space-around'}}>
                    <button style={{paddingLeft:"30px" , paddingRight:"30px" , paddingTop:5 , paddingBlock:5, border: 'none' , backgroundColor:'black' , color:'white' , borderRadius:"10px"}}>Accept</button>
                    <button style={{paddingLeft:"30px" , paddingRight:"30px" , paddingTop:5 , paddingBlock:5, border: 'none' , backgroundColor:'black' , color:'white' , borderRadius:"10px"}}>Deny</button>
                </div>
                <div style={{display:"flex" ,alignItems:"center" , marginLeft:10 }}>
                    <img src={`${image5}`} className='Friendsimage' alt=''/>
                    <p style={{textAlign:"start" , marginLeft:"10px"}}>mano wnat to make you friend</p>
                </div>
                <div style={{display:"flex" , justifyContent:'space-around'}}>
                    <button style={{paddingLeft:"30px" , paddingRight:"30px" , paddingTop:5 , paddingBlock:5, border: 'none' , backgroundColor:'black' , color:'white' , borderRadius:"10px"}}>Accept</button>
                    <button style={{paddingLeft:"30px" , paddingRight:"30px" , paddingTop:5 , paddingBlock:5, border: 'none' , backgroundColor:'black' , color:'white' , borderRadius:"10px"}}>Deny</button>
                </div>
                <div style={{display:"flex" ,alignItems:"center" , marginLeft:10 }}>
                    <img src={`${image3}`} className='Friendsimage' alt=''/>
                    <p style={{textAlign:"start" , marginLeft:"10px"}}>mano wnat to make you friend</p>
                </div>
                <div style={{display:"flex" , justifyContent:'space-around'}}>
                    <button style={{paddingLeft:"30px" , paddingRight:"30px" , paddingTop:5 , paddingBlock:5, border: 'none' , backgroundColor:'black' , color:'white' , borderRadius:"10px"}}>Accept</button>
                    <button style={{paddingLeft:"30px" , paddingRight:"30px" , paddingTop:5 , paddingBlock:5, border: 'none' , backgroundColor:'black' , color:'white' , borderRadius:"10px"}}>Deny</button>
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
   