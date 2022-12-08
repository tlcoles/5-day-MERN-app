import React from "react";
import { 
    TimelineOutlined, 
    LibraryMusicOutlined, 
    BusinessCenterOutlined, 
    OutdoorGrillOutlined,
    ComputerOutlined, 
    SportsBasketballOutlined 
} from '@mui/icons-material';

const SidebarItems = () => {
  return (
    <div className="flex flex-col">
        <div className="sideBarOption">
            <TimelineOutlined className="sidebarIcon"/>
            <p className="sideBarText">History</p>
        </div>
        <div className="sideBarOption">
            <LibraryMusicOutlined className="sidebarIcon"/>
            <p className="sideBarText">Music</p>
        </div>
        <div className="sideBarOption">
            <BusinessCenterOutlined className="sidebarIcon"/>
            <p className="sideBarText">Business</p>
        </div>
        <div className="sideBarOption">
            <OutdoorGrillOutlined className="sidebarIcon"/>
            <p className="sideBarText">Cooking</p>
        </div>
        <div className="sideBarOption">
            <ComputerOutlined className="sidebarIcon"/>
            <p className="sideBarText">Technology</p>
        </div>
        <div className="sideBarOption">
            <SportsBasketballOutlined className="sidebarIcon"/>
            <p className="sideBarText">Sports</p>
        </div>
        <div></div>
    </div>
  )
}

export default SidebarItems;