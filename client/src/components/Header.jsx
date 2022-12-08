import React from "react";
import { AssignmentTurnedInOutlinedIcon, CloseIcon, NotificationsOutlinedIcon, FeaturedPlayListOutlinedIcon,PeopleAltOutlinedIcon, SearchIcon, HomeIcon, ExpandMoreIcon } from '@mui/icons-material/';

import { Avatar, Button } from '@mui/material';

const Header = () => {
  return (
    <div className="flex items-center bg-white sticky z-50 shadow-sm top-0 justify-center p-[3px]">
      <div className="flex">
          <span className="text-orange-500 text-lg font-semibold mr-5">5DayMernApp</span>
      </div>
      <div>
        Icons
      </div>
      <div>
        Avatar & Button
      </div>
    </div>
  )
};

export default Header;