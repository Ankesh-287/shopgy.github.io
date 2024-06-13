import React, { useState } from 'react'
import "../style/Video.css"

const plybtn = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" /></svg>
const like = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
const videourl = "https://youtu.be/GW4s58u8PZo"


const Video = ({ src, url, title, description }) => {
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
  }
  return (
    <>
      <div className='container'>
        <div className="Videos">
          <img className='img' src={src} alt={title}/>
          <div className="play-container">
            <div className='play'> {plybtn}</div>
          </div>
          <div className="template">
            <a href={url}></a>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="like-container">
            <button onClick={handleLike} className={liked ? 'like red' : 'like'}> {like}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Video;
