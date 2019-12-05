import React, { Component } from "react";
import VideoPlayer from "../../components/VideoPlayer";
import Layout from "../../components/Layout";
import axios from "axios";
import { video_endPoint } from "../../utils/constants";

class Player extends Component {
  state = {
    videoName: this.props.videoName,
    videoJsOptions: {
      autoplay: true,
      controls: true,
      sources: [
        {
          src: this.props.videoUrl,
          type: "video/mp4"
        }
      ]
    }
  };
  static async getInitialProps(context) {
    const { data } = await axios.get(
      video_endPoint + "/" + context.query.videoId
    );

    return {
      videoUrl: data.data.eduVideo.videoUrl,
      videoName: data.data.eduVideo.title
    };
  }
  render() {
    return (
      <Layout>
        <div>
          <h1>{this.state.videoName}</h1>
          <VideoPlayer {...this.state.videoJsOptions} />
        </div>
      </Layout>
    );
  }
}

export default Player;
