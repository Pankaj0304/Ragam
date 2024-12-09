import React, { useState } from "react";
import Card from "./Card";
import images from "./assets/image-jeremy.png";
import data from "./assets/data.json";

function App() {
  const [newData, setNewData] = useState(
    data.map((item) => ({
      title: item.title,
      timeframes: { time: item.timeframes.daily },
    }))
  );

  const [selectedTimeframe, setSelectedTimeframe] = useState("daily");

  const updateTimeframe = (timeframe) => {
    setNewData(
      data.map((item) => ({
        title: item.title,
        timeframes: { time: item.timeframes[timeframe] },
      }))
    );
    setSelectedTimeframe(timeframe);
  };

  return (
    <div id="myDashboard">
      <div className="empt"></div>
      <div id="myProfile">
        <div id="actualdiv">
          <div id="profilePic">
            <img src={images} id="myImage" alt="Profile Picture" />
            <br />
            <div id="textc">
              <div id="report">Report for</div>
              <div id="name">Jeremy Robson</div>
            </div>
            <br />
          </div>
          <div id="choice">
            <br />
            <div
              id="daily"
              onClick={() => updateTimeframe("daily")}
              className={`timeframe-option ${
                selectedTimeframe === "daily" ? "selected" : ""
              }`}
            >
              Daily
            </div>
            <br />
            <div
              id="weekly"
              onClick={() => updateTimeframe("weekly")}
              className={`timeframe-option ${
                selectedTimeframe === "weekly" ? "selected" : ""
              }`}
            >
              Weekly
            </div>
            <br />
            <div
              id="monthly"
              onClick={() => updateTimeframe("monthly")}
              className={`timeframe-option ${
                selectedTimeframe === "monthly" ? "selected" : ""
              }`}
            >
              Monthly
            </div>
            <br />
          </div>
        </div>
      </div>
      <div id="myBlock1">
        <Card idname="Work" bgcol="#ff8c66" data={newData} index={0} />
        <Card idname="Exercise" bgcol="#4acf81" data={newData} index={3} />
      </div>
      <div id="myBlock2">
        <Card idname="Play" bgcol="hsl(195, 74%, 62%)" data={newData} index={1} />
        <Card idname="Social" bgcol="hsl(264, 64%, 52%)" data={newData} index={4} />
      </div>
      <div id="myBlock3">
        <Card idname="Study" bgcol="hsl(348, 100%, 68%)" data={newData} index={2} />
        <Card idname="SelfCare" bgcol="hsl(43, 84%, 65%)" data={newData} index={5} />
      </div>
      <div className="empty"></div>
    </div>
  );
}

export default App;
