import React, { useState } from 'react';
import { Col, Collapse, Row, Space } from 'antd';
import './Accordian.css';

const { Panel } = Collapse;

const Accordian = (props) => {
    const { accordianModelLeft, accordianModelRight } = props.accordian;
    const [activeKeyLeft, setActiveKeyLeft] = useState([]);
    const [activeKeyRight, setActiveKeyRight] = useState([]);

    const onChangeLeft = (key) => {
        setActiveKeyLeft(key);
    };

    const onChangeRight = (key) => {
        setActiveKeyRight(key);
    };

    return (
        <div className='container '>
            <div className=' main'>
            <Row gutter={50}>
                <Col xs={24} md={12}>
                    <Space direction="vertical" style={{ width: '100%' }}>
                        {accordianModelLeft.map((li, index) => (
                            <Collapse
                                className="full-width-collapse"
                                key={`left-${index}`}
                                activeKey={activeKeyLeft}
                                onChange={onChangeLeft}
                            >
                                <Panel
                                    header={li.title}
                                    key={index}
                                    className={activeKeyLeft.includes(index.toString()) ? 'open-panel-header' : ''}
                                >
                                    <p className='faq-para'>{li.text}</p>
                                </Panel>
                            </Collapse>
                        ))}
                    </Space>
                </Col>
                <Col xs={24} md={12}>
                    <Space direction="vertical" style={{ width: '100%' }}>
                        {accordianModelRight.map((li, index) => (
                            <Collapse
                                className="full-width-collapse"
                                key={`right-${index}`}
                                activeKey={activeKeyRight}
                                onChange={onChangeRight}
                            >
                                <Panel
                                    header={li.title}
                                    key={index}
                                    className={activeKeyRight.includes(index.toString()) ? 'open-panel-header' : ''}
                                >
                                    <p>{li.text}</p>
                                </Panel>
                            </Collapse>
                        ))}
                    </Space>
                </Col>
            </Row>

            </div>
        </div>
    );
}

export default Accordian;