import React, { useEffect } from "react";
import PageBase from "./PageBase";
import Pane from "../components/Pane";
import { UserInterface } from "../types/userInterface";
import { getSetting } from "../utils/settings";

function Home() {
  const [userData, setUserData] = React.useState<UserInterface | null>(null);

  useEffect(() => {
    getSetting("credentials").then(setUserData);
  }, []);

  return (
    <PageBase>
      <div style={{ textAlign: "center", marginTop: "10vh" }}>
        <video
          autoPlay
          loop
          muted
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", marginTop: "2.5vh" }}
        >
          <source src="../static/images/home-bg.webm" type="video/webm" />
        </video>
        <Pane dark>
          <div className="text-center pt-5 pb-5">
            <h1>Welcome, {userData?.name}</h1>
            <h1>To ATLAS Client!</h1>
          </div>
        </Pane>
      </div>

      <div className="d-flex">
        <div className="flex-fill">
          <Pane>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h3 style={{ textAlign: "center" }}>News</h3>
              <p style={{ textAlign: "center" }}>This is the content of the first paragraph.</p>
              <p style={{ textAlign: "center" }}>This is the content of the second paragraph.</p>
            </div>
          </Pane>
        </div>
        <div className="flex-fill">
          <Pane>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h3 style={{ textAlign: "center" }}>PatchNotes</h3>
              <p style={{ textAlign: "center" }}>V1.0 |CLIENT| PATCH INFO</p>
              <p style={{ textAlign: "center" }}>V1.9 |Factions| PATCH INFO</p>
            </div>
          </Pane>
        </div>
      </div>
    </PageBase>
  );
}

export default Home;