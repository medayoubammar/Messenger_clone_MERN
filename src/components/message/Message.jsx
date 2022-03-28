import './message.css';
import {format} from 'timeago.js'
function Message({message , own}) {
    console.log(message)
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img className="msgImg"
                 src="https://www.pngall.com/wp-content/uploads/5/Facebook-Messenger-Logo-PNG-High-Quality-Image.png" alt="" />
                <p className='msgTxt'>
                    {message ? message.text : "no msg here" }
                </p>
            </div>
            <div className="messageBottom">
            {message ? format(message.createdAt) : " delivred "}
            </div>
        </div>
    );
}

export default Message;