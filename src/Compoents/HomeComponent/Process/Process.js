import React from "react";
import "./Process.css";

const Process = ({threeStepProcess}) => {
  // console.log("threeStepProcess in process: ", threeStepProcess);
  return (
    <div className="container process-container ">
      <div className="row justify-content-center text-center">
        <div className="d-inline-flex justify-content-center col-lg-8 col-md-10 col-12 ">
        <h1 className="process-h1">{threeStepProcess?.title}</h1>
        </div>
        <div className="col-lg-8 col-md-10 col-12">
          <h2 className="process-h2">
            {threeStepProcess?.heading}
          </h2>
          <p className="process-p">
            {threeStepProcess?.para}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
