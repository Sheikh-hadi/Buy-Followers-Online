import React from 'react';
import { Collapse, Space } from 'antd';
import './Accordian.css';

const { Panel } = Collapse;

const Accordian = (props) => {
    let AccordianModelLeft = props.accordian.accordianModelLeft;
    let accordianModelRight = props.accordian.accordianModelRight;
    
    return (
        <div className='container mt-4'>
            <div className='row g-3'> 
                <div className='col-6'>
                    <Space direction="vertical">
                        {AccordianModelLeft.map((li, index) => (
                    <Collapse className="full-width-collapse" >
                            <Panel header={li.title} key={index}>
                                <p>{li.text}</p>
                            </Panel>
                    </Collapse>
                        ))}
                    </Space>
                </div>
                <div className='col-6'>
                    <Space direction="vertical">
                        {accordianModelRight.map((li, index) => (
                            <Collapse className="full-width-collapse" >
                                <Panel header={li.title} key={index}>
                                    <p>{li.text}</p>
                                </Panel>
                            </Collapse>
                        ))}
                    </Space>
                </div>
            </div>
        </div>
    );
}

export default Accordian;
