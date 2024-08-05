import React from 'react';
import { Collapse, Space } from 'antd';
import './Accordian.css';

const { Panel } = Collapse;

const Accordian = (props) => {
    const { accordianModelLeft, accordianModelRight } = props.accordian;

    return (
        <div className='mt-4 main'>
            <div className='row g-5'>
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                    <Space direction="vertical" style={{ width: '100%' }}>
                        {accordianModelLeft.map((li, index) => (
                            <Collapse className="full-width-collapse" key={`left-${index}`}>
                                <Panel header={li.title} key={index}>
                                    <p>{li.text}</p>
                                </Panel>
                            </Collapse>
                        ))}
                    </Space>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-4'>
                    <Space direction="vertical" style={{ width: '100%' }}>
                        {accordianModelRight.map((li, index) => (
                            <Collapse className="full-width-collapse" key={`right-${index}`}>
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
