import React from "react";
import "./Process.css";
import EditableHeading from "../../../CommonComponent/Editable/EditableHeading";
import EditablePara from "../../../CommonComponent/Editable/EditablePara";

const Process = (props) => {
  const { threeStepProcess, user } = props.threeStepProcess;
  // console.log("threeStepProcess: ", threeStepProcess);
  // console.log("user: ", user);
  // console.log("threeStepProcess in process: ", threeStepProcess);
  return (
    <div className="container process-container ">
      <div className="row justify-content-center text-center">
        <div className="d-inline-flex justify-content-center col-lg-8 col-md-10 col-12 ">
          {user ? (
            <EditableHeading
              text={{
                content: threeStepProcess?.title,
                title: "title",
                path: "http://localhost:8000/api/home",
              }}
            />
          ) : (
            <h1 className="process-h1">{threeStepProcess?.title}</h1>
          )}
        </div>
        <div className="col-lg-8 col-md-10 col-12">
          {user ? (
            <EditableHeading
              text={{
                content: threeStepProcess?.heading,
                title: "heading",
                path: "http://localhost:8000/api/home",
              }}
            />
          ) : (
            <h2 className="process-h2">{threeStepProcess?.heading}</h2>
          )}
          {user ? (
            <EditablePara
              text={{
                content: threeStepProcess?.para,
                title: "para",
                path: "http://localhost:8000/api/home",
              }}
            />
          ) : (
            <p className="process-p">{threeStepProcess?.para}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Process;
