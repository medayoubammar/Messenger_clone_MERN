import './chatOnline.css';

function ChatOnline(props) {
    return (
        <div className='chatOnline'>
            <div className="chatOnlineFriend">

            </div>
            <div className="chatOnlineImgContainer">
                <img  className='chatOnlineImg'
                src="https://www.pngall.com/wp-content/uploads/5/Facebook-Messenger-Logo-PNG-High-Quality-Image.png" alt="" />
                <div className="chatOnlineBadge">
                </div>
                <span className="chatOnlineName">
                    Sofien marrouki
                </span>
            </div>
        </div>
    );
}

export default ChatOnline;