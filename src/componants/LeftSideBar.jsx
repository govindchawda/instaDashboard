import { FaHome, FaInfo } from "react-icons/fa";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
// import { RiLogoutBoxFill } from "react-icons/ri";
import { HiOutlineLogin } from "react-icons/hi";
export default function LeftSideBar() {
    return (
        <div className='letf-sidebar-content'>
      <div className='left-menu'>
        <ul>
          <li><a href=""><FaHome/> <span>Home</span></a></li>
          <li><a href=""><FaInfo/> <span>About</span></a></li>
          <li><a href=""><IoIosNotifications/> <span>Notifications</span></a></li>
          <li><a href=""><FaBasketShopping/> <span>Shop</span></a></li>
          <li><a href=""><MdAccountCircle /><span>My Account</span></a></li>
          <li><a href=""><IoIosSettings /> <span>Setting</span></a></li>
        </ul>  
      </div>  
      <div className='logout'>
        <a href=""><HiOutlineLogin/><span>Logout</span></a>
      </div>     
    </div>
    )
}