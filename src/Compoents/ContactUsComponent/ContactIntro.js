import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import './ContactIntro.css';
import ChatButton from '../../ChatWindow/ChatWindowButton'; // Import the ChatButton component

const { TextArea } = Input;

const ContactIntro = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
    notification.success({
      message: 'Success',
      description: 'Your message has been submitted successfully!',
      placement: 'topRight',
    });

    // Optionally reset the form
    form.resetFields();
  };

  return (
    <div>
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>
      <section className="contact-section container">
        <div className="row">
          <div className="col-md-6 mb-5">
            <button className="btn btn-danger mb-3">Get in Touch</button>
            <h2>How Can I <span className="text-danger">Help</span> You</h2>
            <p>
              BuyFollowersaustralia team is dedicated to offering great service and help.
              If you’ve got any questions about any of our SMM services, thoughts, or feedback,
              feel free to reach out. You can get in touch using the contact form here.
              We’ll make sure to get back to you quickly.
            </p>
            <div className="social-icons">
              <div className="icon-circle"><i className="fab fa-facebook-f"></i></div>
              <div className="icon-circle"><i className="fab fa-twitter"></i></div>
              <div className="icon-circle"><i className="fab fa-tiktok"></i></div>
              <div className="icon-circle"><i className="fab fa-instagram"></i></div>
            </div>
          </div>
          <div className="col-md-6 mt-2 ">
            <div className="contact-form">
              <h3>Send Message</h3>
              <div className='row'>
                <Form
                  form={form}
                  onFinish={onFinish}
                  layout="vertical"
                  style={{ maxWidth: '600px', margin: 'auto' }}
                >
                  <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                  >
                    <Input placeholder="Your Name" style={{ height: '50px' }} />
                  </Form.Item>

                  <div className='row'>
                    <Form.Item
                      name="email"
                      className="col-xs-12 col-sm-12 col-lg-6"
                      rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
                    >
                      <Input placeholder="Your Email" style={{ height: '50px' }} />
                    </Form.Item>

                    <Form.Item
                      name="phone"
                      className="col-xs-12 col-sm-12 col-lg-6"
                      rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                      <Input placeholder="Your Phone" style={{ height: '50px' }} />
                    </Form.Item>
                  </div>

                  <Form.Item
                    name="message"
                    rules={[{ required: true, message: 'Please input your message!' }]}
                  >
                    <TextArea placeholder="How Can we Help You?" rows={4} />
                  </Form.Item>

                  <Form.Item>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Button type="primary" htmlType="submit" className="btn btn-danger">
                        Submit Message
                      </Button>
                    </div>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ChatButton /> {/* Add the chat button here */}
    </div>
  );
};

export default ContactIntro;
