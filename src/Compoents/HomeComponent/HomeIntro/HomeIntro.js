import React from "react";
import "./HomeIntro.css";
import EditableHeading from "../../../CommonComponent/Editable/EditableHeading";
import EditablePara from "../../../CommonComponent/Editable/EditablePara";

const HomeIntro = (props) => {
  const { intro, user } = props?.intro;
  // console.log("intro: ", intro);

  return (
    <div className="centered-container" key={intro?.id}>
      <div className="row homeintro-main">
        <div className="col-sm-12 col-lg-6">
          {user ? (
            <EditableHeading
              text={{
                content: intro?.introHeeading,
                title: "introHeading",
                path: "http://localhost:8000/api/home",
              }}
            />
          ) : (
            <h1>{intro?.introHeeading}</h1>
          )}
          {user ? (
            <EditablePara
              text={{
                content: intro?.introText,
                title: "introText",
                path: "http://localhost:8000/api/home",
              }} 
            />
          ) : (
            <p>{intro?.introText}</p>
          )}

          <div className="row homeintro-btn-group">
            <div className="col-sm-12 col-lg-4">
              <div className="homeintro-btn">{intro?.introButtonFirst}</div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="homeintro-btn">{intro?.introButtonSecond}</div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="homeintro-btn">{intro?.introButtonThird}</div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6">
          <img src="phone.png" alt="Phone" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
