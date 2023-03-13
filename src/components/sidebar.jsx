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
    <div className=" h-[100vh] w-[36vb] ml-4 pt-3 border-r-[1px] border-[#262626] ">
      <div className="ml-1" >
        <img  className="w-[110px] h-[85px]" src="./img/insta-name.png" alt="" />
      </div>
      <div className="w-[34vb] flex items-center gap-4 mt-2 cursor-pointer hover:bg-[#262626] rounded-full pl-1.5 py-2">
        <AiFillHome size={28} className=" text-white "/><span className="text-white font-bold">Home</span>
      </div>
      <div className="w-[34vb] flex items-center gap-4 mt-3 cursor-pointer hover:bg-[#262626] rounded-full pl-1.5 py-2">
        <CiSearch size={28} className=" text-white "/><span className="text-white">Search</span>
      </div>
      <div className="w-[34vb] flex items-center gap-4 mt-3 cursor-pointer hover:bg-[#262626] rounded-full pl-1.5 py-2">
        <MdOutlineExplore size={28} className=" text-white "/><span className="text-white">Explore</span>
      </div>
      <div className="w-[34vb] flex items-center gap-4 mt-3 cursor-pointer hover:bg-[#262626] rounded-full pl-1.5 py-2">
        <BsCollectionPlay size={26} className=" text-white "/><span className="text-white">Reels</span>
      </div>
      <div className="w-[34vb] flex items-center gap-4 mt-3 cursor-pointer hover:bg-[#262626] rounded-full pl-1.5 py-2">
        <RiMessengerLine size={28} className=" text-white "/><span className="text-white">Messages</span>
      </div>
      <div className="w-[34vb] flex items-center gap-4 mt-3 cursor-pointer hover:bg-[#262626] rounded-full pl-1.5 py-2">
        <AiOutlineHeart size={28} className=" text-white "/><span className="text-white">Notifications</span>
      </div>
      <div className="w-[34vb] flex items-center gap-4 mt-3 cursor-pointer hover:bg-[#262626] rounded-full pl-1.5 py-2">
        <TbSquarePlus size={28} className=" text-white "/><span className="text-white">Create</span>
      </div>
      <div className="w-[34vb] flex items-center gap-4 mt-3 cursor-pointer hover:bg-[#262626] rounded-full pl-1.5 py-2">
        <VscCircleLargeOutline size={28} className=" text-white "/><span className="text-white">Profile</span>
      </div>
      <div className="w-[34vb] flex items-center gap-4 mt-3 cursor-pointer hover:bg-[#262626] rounded-full pl-1.5 py-2">
        <RxHamburgerMenu size={28} className=" text-white "/><span className="text-white">More</span>
      </div>
    </div>
  );
};

export default Sidebar;