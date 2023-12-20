import React from 'react'
import "./contentpost.css";
import imageIcon from "../Images/gallery.png"
import emojiIcon from "../Images/cat-face.png"
import VideoIcon from "../Images/video.png"
import profileimage from "../Images/Profile.png"
//import { useSelector } from 'react-redux';
//import { useState } from 'react';
//import app from '../../firebase';
//import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
export default function ContentPost() {
  /*const userDetails = useSelector((state)=>state.user);
  let user = userDetails?.user;
  console.log(user);
  let id = user?.other?._id;
  const [file , setFile] = useState(null);
  const [file2 , setFile2] = useState(null);
  const [title , setTile] = useState('');
  const [imagePre , setImagePre] = useState(null);
  const [VideoPre , setVideoPre] = useState(null);
  const accessToken = user.accessToken;
  console.log(file?.name)

  const handlePost = (e)=>{
    e.preventDefault();
    if(file !== null){
    const fileName = new Date().getTime() + file?.name;
    const storage = getStorage(app);
    const StorageRef = ref(storage , fileName);
    
    const uploadTask = uploadBytesResumable(StorageRef, file);
    uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      fetch(`http://139.144.12.15:80/api/post/user/post` , {method:"POST" , headers:{'Content-Type':"application/JSON", token : accessToken} , body:JSON.stringify({title:title , image:downloadURL , video:''})}).then((data)=>{
        alert("Your Post was upload successfully");
        window.location.reload(true)
      })
    });
  }
);}else if(file2 !== null){
    const fileName = new Date().getTime() + file2?.name;
    const storage = getStorage(app);
    const StorageRef = ref(storage , fileName);
    
    const uploadTask = uploadBytesResumable(StorageRef, file2);
    uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      fetch(`http://139.144.12.15:80/api/post/user/post` , {method:"POST" , headers:{'Content-Type':"application/JSON", token : accessToken} , body:JSON.stringify({title:title , video:downloadURL , image:''})}).then((data)=>{
        alert("Your Post was upload successfully");
        window.location.reload(true)
      })
    });
  }
);
}else{
  fetch(`http://139.144.12.15:80/api/post/user/post` , {method:"POST" , headers:{'Content-Type':"application/JSON", token : accessToken} , body:JSON.stringify({title:title , video:'' , image:''})}).then((data)=>{
    alert("Your Post was upload successfully");
    window.location.reload(true)
  })
}


  }*/
  return (
    <div>
      <div className='ContentUploadContainer'>
        <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
          <img src={`${profileimage}`} className="profileimage" alt="" />
          <input type="text" className='contentWritingpart' placeholder='Write your real thought.....'  />
        </div>
        <div style={{ display:"flex" , marginLeft: "10px"}}>
          <div> 
            <img src={`${imageIcon}`} className="Icons" alt=""/>
            <img src={`${emojiIcon}`} className="Icons" alt=""/>
            <img src={`${VideoIcon}`} className="Icons" alt=""/>
            <button style={{marginLeft:"350px" , paddingLeft:"20px",paddingRight:"20px" , paddingTop:6 , paddingBottom:6 , border:"none" , backgroundColor:"black", color:"white" , borderRadius:"5px" , cursor: "pointer"}}>Post</button>
        </div>
      </div>
    </div>
    </div>
  )
}