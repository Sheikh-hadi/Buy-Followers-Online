import React from "react";
import "./Block.css";

export default function Block({ aboutBlock }) {
  return (
    <div>
      <div className="block py-5">
        <div className="inner_block d-flex flex-column flex-md-row justify-content-center align-items-center">
          <img src="./block.png" alt="" className="img1 mb-4 mb-md-0" />
          <p className="inner_block_para">{aboutBlock.description}</p>
        </div>
      </div>
    </div>
  );
}
