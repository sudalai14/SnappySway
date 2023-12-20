import React, { useState } from 'react'
import "./post.css";
import ProfileImage from "../Images/Profile.png";
import LikeIcon from "../Images/like.png";
import CommentIcon from "../Images/speech-bubble.png";
import Shareicon from "../Images/share.png";
import Moreoption from "../Images/more.png";
import anotherlikeicon from "../Images/setLike.png"
//import { useEffect } from 'react';
//import axios from 'axios';
//import { useSelector } from 'react-redux';
export default function Post() {
 /* const userDetails = useSelector((state)=>state.user);
  let users = userDetails?.user
  const [user , setuser] = useState([]);
  useEffect(() => {
    const getuser = async()=>{
      try {
        const res  = await axios.get(`http://139.144.12.15:80/api/user/post/user/details/${post.user}`)
        setuser(res.data);
      } catch (error) {
        console.log("Some error occured")
      }
    }
    getuser();
  }, [])
  const userId = users.other._id;
  const accessToken = users.accessToken;
  const [Like, setLike] = useState([post.like.includes(userId) ? anotherlikeicon : LikeIcon]);
  const [count, setCount] = useState(post.like.length);
  const [Comments, setComments] = useState(post.comments);
  const [commentwriting, setcommentwriting] = useState('');
  const [show, setshow] = useState(false);
  
  
  const handleLike = async() => {
    if (Like == LikeIcon) {
      await fetch(`http://localhost:5000/api/post/${post._id}/like` , {method:"PUT" , headers:{'Content-Type':"application/Json" , token:accessToken}})
      setLike(anotherlikeicon);
      setCount(count + 1);
    } else {
      await fetch(`http://localhost:5000/api/post/${post._id}/like` , {method:"PUT" , headers:{'Content-Type':"application/Json" , token:accessToken}})
      setLike(LikeIcon)
      setCount(count - 1);
    }
  }

  const addComment = async() => {
    const comment = {
      "postid": `${post._id}`,
      "username": `${users.other.username}`,
      "comment": `${commentwriting}`,
      "profile":`${users.other?.profile}`
    }
    await fetch(`http://localhost:5000/api/post/comment/post` , {method:"PUT" , headers:{'Content-Type':"application/Json" , token:accessToken} , body:JSON.stringify(comment)})
    setComments(Comments.concat(comment));
  }

  const handleComment = () => {
    addComment();
  }

  console.log(Comments)

const handleshow = ()=>{
  if(show === false){
    setshow(true)
  }else{
    setshow(false)
  }
}
console.log(user)*/
const [Like, setLike] = useState(LikeIcon);
const [count, setCount] = useState(0);

const handleLike = () => {
  if (Like === LikeIcon) {
   
    setLike(anotherlikeicon);
    setCount(count + 1);
  } else {
   
    setLike(LikeIcon)
    setCount(count - 1);
  }
}
const [Comments, setComments] = useState([]);
const [commentwriting, setcommentwriting] = useState('');
const addComment =() =>{
  const comment = {
    "id": "johnsm@14",
    "username": "mr_john_sm",
    "title": `${commentwriting}`,
 
  }
  setComments(Comments.concat(comment));
}

const handleComment = () => {
  addComment();
}
console.log(Comments)

const [show, setshow] = useState(false);
const handleshow = ()=>{
  if(show === false){
    setshow(true)
  }else{
    setshow(false)
  }
}


  return (
   
  
    <div className='PostContainer'>
      <div className='SubPostContainer'>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={`${ProfileImage}`} className="PostImage" alt='' />
            <div>
            <p style={{ marginLeft: '5px', textAlign:"start"  }}>suman</p>
            <p style={{fontSize:"11px" , textAlign:"start" , marginLeft:5 , color:"#aaa" , marginTop:-13}}>Following by suman</p>
            </div>
            <img src={`${Moreoption}`} className='moreicons' alt='' />
          </div>
          <p style={{ textAlign: "start", width: "96%", marginLeft: 10, marginTop: 0 }}>Jesus Loves You</p>
          <img src={`${ProfileImage}`} className='PostImages' alt='' />
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", marginLeft: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                <img src={`${Like}`} className='iconsforPost' onClick={handleLike} alt='' />
                <p style={{ marginLeft: "6px" }}>{count}Likes</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginLeft: 20, cursor: "pointer" }}>
                <img src={`${CommentIcon}`} className='iconsforPost' onClick={handleshow} alt='' />
                <p style={{ marginLeft: "6px" }}>100K Comments</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", marginLeft: 200, cursor: "pointer" }}>
              <img src={`${Shareicon}`} className='iconsforPost' alt='' />
              <p style={{ marginLeft: "6px" }}>Share </p>
            </div>
          </div>
          {show === true ?
          <div style={{padding:"10px"}}> 
            <div style={{ display: "flex", alignItems: 'center' }}>
              <img src={`${ProfileImage}`} className="PostImage" alt='' />
              {/* <p style={{marginLeft:'6px'}} >suman</p> */}
              <input type='text' className='commentinput' placeholder='write your thoughts' onChange={(e) => setcommentwriting(e.target.value)} />
              <button className='addCommentbtn' onClick={handleComment}>Post</button>
            </div>
            {Comments.map((item) => (
              <div style={{  alignItems: "center" }}>
                <div style={{display:"flex" , alignItems:"center"}}>
                <img src={`${ProfileImage}`} className="PostImage" alt='' />
                <p style={{ marginLeft: '6px' , fontSize:18,marginTop:6}} >{item.username}</p>
                </div>
                <p style={{ marginLeft: "55px" ,textAlign:"start" , marginTop:-16}}>{item.title}</p>
                <p style={{ marginLeft: "55px" ,textAlign:"start" , marginTop:-10, color:"#aaa" , fontSize:11}}>Reply</p>
              </div>

            ))}
          </div> :""
}
        </div>
      </div>
    </div>
  )
}