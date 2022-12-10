import React from "react";

const WidgetContent = () => {
  return (
    <div className="flex flex-col cursor-pointer">
        <div className="widgetContent">
            <img src="https://www.8webcom.com/wp-content/uploads/2021/06/webdevlopment.jpg" className="widgetImg" alt="web development tools" />
            <div>
                <h5 className="widgetHeader text-semibold">
                    Web Development
                </h5>
                <p className="widgetSubHeader">
                    Explore the latest technologies in web development and stay in touch with the hottest trends
                </p>
            </div>
        </div>
        <div className="widgetContent">
            <img src="https://media.gettyimages.com/photos/cricket-batsman-hitting-ball-during-cricket-match-in-stadium-picture-id518022060?s=612x612" className="widgetImg" alt="web development tools" />
            <div>
                <h5 className="widgetHeader text-semibold">
                    Cricket
                </h5>
                <p className="widgetSubHeader">
                    Discuss your favorite sports with other passionate fans and cheer for your team
                </p>
            </div>
        </div>
        <div className="widgetContent">
            <img src="https://computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg" className="widgetImg" alt="web development tools" />
            <div>
                <h5 className="widgetHeader text-semibold">
                    Programming
                </h5>
                <p className="widgetSubHeader">
                    Learn the fundamentals of coding and connect with industry experts
                </p>
            </div>
        </div>
    </div>
  )
}

export default WidgetContent;