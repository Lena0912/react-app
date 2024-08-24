import { useState } from 'react';
import './Video.css';

function Video(props) {
        const { title, channelName, img } = props;
       
        const [likesCount, setLikesCount] = useState(0)
        const increaseLikesByOne = () => {
              setLikesCount(likesCount + 1) 
                console.log(title, likesCount);
          
        };
    return (<div className='video'>
            <img className='video-img' src={img} alt="video image" />
            <p>{title}</p>
            <p>{channelName}</p>
            <div className='video-footer'>
              <p>Likes: {likesCount}</p>
              <button className='video-btn' onClick={increaseLikesByOne}>Likes</button>
        </div>
        </div>
        );
}
export default Video;