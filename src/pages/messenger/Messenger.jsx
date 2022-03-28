import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import Conversation from "../../components/Conversations/Conversation";
import Message from "../../components/message/Message";
import Topbar from "../../components/topbar/Topbar";
import { AuthContext } from "../../context/AuthContext";
import "./messenger.css";


function Messenger(props) {
  const [conversations,setConversations] = useState([]);
  const [currentChat,setCurrentChat] = useState(null);
  const [messages,setMessages] = useState([]);

  const {user} = useContext(AuthContext);
  // console.log(user)
  useEffect(() => {

const getConversations = async () =>{
try {
  const res = await axios.get('/conversations/'+user._id)
  // console.log(res)
  setConversations(res.data);
} catch (error) {
  console.log(error)
}
}
getConversations();

  },[user._id])


useEffect(()=>{
  const getMessages = async () => {
   try {
    const res = await axios.get("/messages/" + currentChat?._id); 
    setMessages(res.data)
   } catch (error) {
     console.log(error)
   }
  };
  getMessages()
},[currentChat])
// console.log(messages)

  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuwrapper">
          <input type="text"
           placeholder="Search for friends"
            className="chatMenuInput" />
            
              {/* console.log("conv " ,conversations) */}
            
            {conversations && conversations.map( c => 
            <div key={c._id} onClick={()=>setCurrentChat(c)}>
            <Conversation  conversation={c} currentUser={user} />
            </div>
            )
            
            }
            {/* <Conversation />
            <Conversation />
            <Conversation />
            <Conversation /> */}
          </div>
        
        </div>
        <div className="chatBox">
          <div className="chatBoxwrapper">
            {currentChat ? 
            <>
              <div className="chatBoxTop">
                {  messages.map( (m) => (
                  
                     <Message  key={m._id} message={m} own={m.sender === user._id} />
                ))}
             

              </div>
              <div className="chatBoxBottom">
                <textarea className="chatMsgInput" name="" placeholder="write sthg ..">
                </textarea>
                <button className="chatSubmitButton">Send</button>
              </div> </>
               : <span className="NoConversationText"> open conversation to start chat  ..</span>}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlinewrapper">
             <ChatOnline />
             <ChatOnline />
             <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
