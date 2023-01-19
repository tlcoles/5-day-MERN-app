import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { logout, selectUser } from "../features/userSlice";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
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

import { Avatar, Input } from '@mui/material';

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Function to handle add question
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
        <button className="px-2 py-1 rounded-lg ml-1 bg-orange-300 hover:bg-orange-500" onClick={() => setIsModalOpen(true)}>Add Question</button>
      <Modal
        open={isModalOpen}
        closeIcon={<Close/>}
        onClose={() => setIsModalOpen(false)}
        closeOnEsc
        center
        closeOnOverlayClick={false}
        styles={{
          overlay: {
            height: "auto",
            width: "auto",
          },
        }}
      >
        {/* Top */}
        <div className="flex items-center mb-2 border-b-2 border-solid border-gray-800/5 rounded-md">
          <h5 className="text-orange-400 text-lg cursor-pointer font-semibold mr-[30px]">Add Question</h5>
          <h5 className="text-orange-400 text-lg cursor-pointer font-semibold mr-[30px]">Share Link</h5>
        </div>
        {/* Middle */}
        <div className="flex items-center mt-[30px]">
          <Avatar src={user?.photo} className="avatar" />
          <div className="flex items-center text-gray-600 p-1 ml-2 bg-white rounded-3xl cursor-pointer">
            <PeopleAltOutlined />
            <p className="m1-2 text-sm text-gray-700">Public</p>
            <ExpandMore />
          </div>
        </div>
        <div className="flex flex-col mt-[30px]">
          {/* Inputs */}
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Ask your question."
          />
          <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          >
          <Input 
            type="text" 
            value={imageUrl} 
            placeholder="Optional: add image URL." 
            onChange={(e) => setImageUrl(e.target.value)}
          />
          {/* Image preview */}
          {imageUrl !=="" && (
            <img 
              style={{
              height: "40vh",
              objectFit: "contain",
              }}
              src={imageUrl}
              alt="display preview"
            />
          )}
        </div>
        </div>
    {/* Buttons on the modal */}
    <div className="flex flex-col-reverse mt-2 items-center">
        <button className="mt-2 border-none outline-none text-grey-400 text-bold p-2 rounded-3xl cursor-pointer hover:text-red" onClick={() => setIsModalOpen(false)}>
            Cancel
        </button>
        <button onClick={handleAddQuestion} type="submit" className="mt-2 border-none outline-none text-orange-500 text-bold p-2 rounded-3xl cursor-pointer hover:text-orange-800 w-1/2">
            Add Question
        </button>
    </div>
      </Modal>
      </div>
    </div>
  )
};

export default Header;