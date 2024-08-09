import React from 'react';
import './ImageContentBlock.css';

const ImageContentBlock = (props) => {
    const blockList = props.block;
    console.log("cardList: ", blockList);

    return (
        <div className="container mt-4 mb-4">
            <div className='row' style={{border:"2px solid black"}} >
                {blockList.map((block, index) => {

                    return (
                        <div key={index} className='row  mb-3' style={{ border: "2px solid black" }}>
                            {(block.id % 2 === 0) ?
                                <>
                                    <div className='col-4 img' style={{ border: "2px solid black" }}>
                                        <img src={block.image} alt='Packages at Low Prices' style={{height: "200px", alignContent: "center" }} />
                                    </div>
                                    <div className='col-8' style={{ border: "2px solid black" }}>
                                        <h1 className='heading'>{block.title}</h1>
                                        <p className='para'>{block.description}</p>
                                    </div>
                                </>
                                :
                                <>
                                    <div className='col-8' style={{ border: "2px solid black" }}>
                                        <h1 className='heading'>{block.title}</h1>
                                        <p className='para'>{block.description}</p>
                                    </div>
                                    <div className='col-4' style={{ border: "2px solid black" }}>
                                        <img src={block.image} alt='Packages at Low Prices' style={{height: "200px", alignContent: "center" }} />
                                    </div>
                                </>
                            }

                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ImageContentBlock;