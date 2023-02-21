import { CiSearch } from "react-icons/ci";
import { AiFillHome,AiOutlineHeart} from "react-icons/ai";
import {MdOutlineExplore} from "react-icons/md"
import {BsCollectionPlay} from "react-icons/bs"
import {RiMessengerLine} from "react-icons/ri"
import {TbSquarePlus} from "react-icons/tb"
import {VscCircleLargeOutline} from "react-icons/vsc"
import {RxHamburgerMenu} from "react-icons/rx"
const Sidebar = () => {
  return (
    <div className=" h-[100vh] w-[36vb] ml-5 pt-3 border-r-[1px] border-[#262626] ">
      <div >
        <img  className="w-[110px] h-[85px]" src="./img/insta-name.png" alt="" />
      </div>
      <div className="flex items-center gap-4 mt-5">
        <AiFillHome size={28} className=" text-white "/><span className="text-white font-bold">Home</span>
      </div>
      <div className="flex items-center gap-4 mt-7">
        <CiSearch size={28} className=" text-white "/><span className="text-white">Search</span>
      </div>
      <div className="flex items-center gap-4 mt-7">
        <MdOutlineExplore size={28} className=" text-white "/><span className="text-white">Explore</span>
      </div>
      <div className="flex items-center gap-4 mt-7">
        <BsCollectionPlay size={26} className=" text-white "/><span className="text-white">Reels</span>
      </div>
      <div className="flex items-center gap-4 mt-7">
        <RiMessengerLine size={28} className=" text-white "/><span className="text-white">Messages</span>
      </div>
      <div className="flex items-center gap-4 mt-7">
        <AiOutlineHeart size={28} className=" text-white "/><span className="text-white">Notifications</span>
      </div>
      <div className="flex items-center gap-4 mt-7">
        <TbSquarePlus size={28} className=" text-white "/><span className="text-white">Create</span>
      </div>
      <div className="flex items-center gap-4 mt-7">
        <VscCircleLargeOutline size={28} className=" text-white "/><span className="text-white">Profile</span>
      </div>
      <div className="flex items-center gap-4 mt-7">
        <RxHamburgerMenu size={28} className=" text-white "/><span className="text-white">More</span>
      </div>
    </div>
  );
};

export default Sidebar;