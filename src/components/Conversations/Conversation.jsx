import axios from 'axios';
import { useEffect, useState } from 'react';
import './Conversation.css';

function Conversation({conversation , currentUser}) {
    const [user,setUser] = useState(null);

    useEffect(()=>{
    const friendId = conversation.members.
    find( m => m !== currentUser._id)
    const getUser = async () => {
try {
    const res = await axios.get("/users?userId="+friendId)
    // console.log("res data : ",res.data)
    setUser(res.data)
} catch (error) {
    console.log(error)
}
    };

getUser();
    },[currentUser,conversation])
    return (
        <div className='conversation'>
            <img src={user && user.profilePicture !== '' ? user.profilePicture : "https://www.pngall.com/wp-content/uploads/5/Facebook-Messenger-Logo-PNG-High-Quality-Image.png"} className='conversationImg' alt="" />
            <span className='conversationName'>{ user && user.username }</span>
        </div>
    );
}

export default Conversation;