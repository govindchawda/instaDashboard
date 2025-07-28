import { data2 } from "../DatA2"
export default function RIghtSideBar () {
    return (
        <div className="right-sidebar-content" >
        {data2.map((items,index)=>{
      return(
        <div className='right-side-main-box' key={index}>
          <div className='right-side-data'>
        <img src={items.img} alt="" />
        <div className="rightside-author-data">
          <img src={items.authorImg}alt="" />
          <div className="right-side-text">
          <h4>{items.authorName}</h4>
          <span>{items.authortext}</span>
          </div>
          </div>
        </div>
      </div>
      )
    })}   
        </div> 
    )
}