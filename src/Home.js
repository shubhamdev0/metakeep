import React from "react";
const Home = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        {/*<img*/}
        {/*  className={Style.fullscreenVideo}*/}
        {/*  src={require("./assets/backgroundImage.png").default}*/}
        {/*  alt="metaKeep_background"*/}
        {/*/>*/}
        <video style={{ width: "100%" }} autoPlay="autoplay" muted loop>
          <source src={require("./assets/video_pop.mp4").default} />
        </video>
      </div>
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "35%",
          // background: "black",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "50px",
          // height: "100vh",
        }}
      >
        <span>
          Welcome To &nbsp;
          <span
            style={{
              color: "#dec5f0",
            }}
          >
            MetaKeep!!
          </span>
        </span>
      </div>
    </>
  );
};

export default Home;
