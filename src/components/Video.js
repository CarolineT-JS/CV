import React, { Component } from "react";
import video from "../Asset/Windows.mp4";

class MaVideo extends Component {
    render() {
        return (

            <video src={video}
                   width="2100"
                   height="600"
                   autoPlay="true"
                   loop="true"
                   id="myVideo"
                   muted="true"
            />

        );
    }
}


export default MaVideo;