import React from 'react';
import './ImageContentBlock.css';

const ImageContentBlock = (props) => {
    const blockList = props.block;
    console.log("cardList: ", blockList);

    return (
        <div className="container mt-4 mb-4">
            <div className='row' >
                {blockList.map((block, index) => {

                    return (
                        <div key={index} className='row g-3  mb-3' >
                            {(block.id % 2 === 0) ?
                                <>
                                    <div className='col-4'>
                                        <img src={block.image} alt='Packages at Low Prices' style={{margin: "-48px  30px ", height: "250px", alignContent: "center" }} />
                                    </div>
                                    <div className='col-8'>
                                        <h1 className='heading'>{block.title}</h1>
                                        <p className='para'>{block.description}</p>
                                    </div>
                                </>
                                :
                                <>
                                    <div className='col-8'>
                                        <h1 className='heading'>{block.title}</h1>
                                        <p className='para'>{block.description}</p>
                                    </div>
                                    <div className='col-4'>
                                        <img src={block.image} alt='Packages at Low Prices' style={{margin: "-48px  1px ",height: "240px", alignContent: "center" }} />
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
