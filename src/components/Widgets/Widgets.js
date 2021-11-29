import React from "react";
import "./Widgets.css";
import {
  TwitterShareButton,
  TwitterTweetEmbed,
  TwitterFollowButton,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect, useState } from "react";

function Widgets() {
  const [showTweet, setShowTweet] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setShowTweet(true);
    }, 2000);
  }, []);

  return (
    <div className="widgets">
      <div className="widgets__search">
        <SearchIcon />
        <input placeholder="Search SpeakUp" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <div className="widgets__h2">
          <h2>What’s happening</h2>
        </div>
        <div className="widgets__tweetEmbed">
          <TwitterTweetEmbed
            options={{ theme: "dark" }}
            tweetId={"894542815939"}
          />
        </div>
        {/* <div className="widgets__tweetShare">
          <TwitterShareButton
            url={"http://localhost:3000/"} // after host we will add url here 
            options={{
              text: "This #Twitter Clone is amazing, just looks like the real Twitter website!!",
              via: "Ansh Bajaj",
            }}
          />
        </div> */}
        <div className="widgets__folllowButton">
          <TwitterFollowButton screenName={"Ansh Bajaj"} />
        </div>
      </div>
    </div>
  );
}

export default Widgets;
