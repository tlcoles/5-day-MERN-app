import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { logout, selectUser } from "../features/userSlice";
import { 
  AssignmentTurnedInOutlined, 
  Close, 
  NotificationsOutlined, 
  FeaturedPlayListOutlined,
  PeopleAltOutlined, 
  Search, 
  Home, 
  ExpandMore 
} from '@mui/icons-material';

import { Avatar } from '@mui/material';

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleAddQuestion = async() => {
    if(description!==""){
      const config = {
        headers:{
          "Content-Type":"application/json"
        },
      };

      const body = {
        description: description,
        imageUrl: imageUrl,
        user:user
      }

      // Make request to backend server
      await axios.post("/api/questions", body, config).then((res) => {
        alert("Question submitted!");
        window.location.href = "/";
      }).catch((e) => {
        alert("Error in adding question");
      })
    }
  }
  
  const handleLogout = () => {
    if(window.confirm("Are you sure you want to logout?")){
      signOut(auth).then(() => {
        dispatch(logout());
        alert("Logged out")
      }).catch(() => {
        alert("Error logging out")
        })
      }
  }
  
  return (
    <div className="flex items-center bg-white sticky z-50 shadow-sm top-0 justify-center p-[3px]">
      <div className="flex">
          <span className="text-orange-500 text-lg font-semibold mr-5">5DayMERNApp</span>
      </div>
      <div className="flex">
        <div className="headerIcon">
          <Home/>
        </div>
        <div className="headerIcon">
          <FeaturedPlayListOutlined/>
        </div>
        <div className="headerIcon">
          <AssignmentTurnedInOutlined/>
        </div>
        <div className="headerIcon">
          <PeopleAltOutlined/>
        </div>
        <div className="headerIcon">
          <NotificationsOutlined/>
        </div>
      </div>
      <div className="hidden md:flex items-center border-2 rounded-lg border-solid border-gray-300 p-[5px] ml-[5px]">
        <Search/>
        <input className="bg-transparent outline-none border-none" type="text" placeholder='Search...'/>
      </div>
      <div className="flex items-center ml-[25px]">
        <span onClick={handleLogout}>
          <Avatar src={user?.photo}/>
        </span>
        <button className="px-2 py-1 rounded-lg ml-1 bg-orange-300 hover:bg-orange-500">Add Question</button>
      </div>
    </div>
  )
};

export default Header;