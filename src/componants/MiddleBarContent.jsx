import { FaRegHeart,FaRegComment,FaShare,FaRegBookmark } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { data } from "../Data1";
export default function MiddleBarContent () {
    return (
        <>
        {data.map((items,index)=>{
          return(
            <div className="post-main-box" key={index}>
          <div className="post-data">
            <img src={items.pImg} alt="" className='author-img' />
            <div className="author-data">
              <h4>{items.userName}</h4>
              <span>{items.title}</span>
            </div>
            <div className='author-icon'><IoMdMore/></div>
          </div>
          <p className='post-text'>{items.description}</p>
            <div className="post-image">
          <img
            src={items.mImg}
            alt=""
            />
          </div>
          <div className="post-icon">
          <div><FaRegHeart/><span>{items.like}</span></div>
          <div><FaRegComment/><span>{items.comment}</span></div>
          <div><FaShare /><span>{items.share}</span></div>
          <div className='post-save-icon'><FaRegBookmark /><span>Save</span></div>
        </div>
        </div>
            )})}
            </>
    )
}