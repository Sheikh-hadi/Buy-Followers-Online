import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      number: '2.',
      title: '24/7 Support',
      description: 'Support 24 hours a day, seven days a week: Our expert team is here to answer your questions and fix any problems as soon as possible. At any time, we promise to give our customers the best services. Contacting us has several ways, so your questions will be answered quickly.'
    },
    {
      number: '3.',
      title: 'Competitive Prices',
      description: "Don't waste time and money on marketing plans that don't work immediately. We help you save both time and money. Our prices are low enough that you can spend a small amount and focus on your main business to get the best results."
    },
    {
      number: '4.',
      title: 'Satisfaction Guarantee',
      description: "We promise to give you accurate services for Instagram and Facebook with real interaction. Customer happiness is our moral goal. If you give us a chance, you'll become one of our happy customers. Our satisfaction promise means that if your order doesn't work out for any reason, you can get your money back in full."
    },
    {
      number: '5.',
      title: 'Reliability',
      description: 'At Buy Followers Australia, we use safe and natural methods to get more people to follow you on Instagram. We promise to give you honest, active followers who will respond to and connect with your posts, not bots or fake followers.'
    },
    {
      number: '6.',
      title: 'Customer Privacy',
      description: "We never ask customers for their passwords because we value their privacy. We only need to ensure that your account's privacy settings are not turned off. We also don't give your information to anyone else, so you can be sure it is entirely private and safe."
    }
  ];

  return (
    <div className="container features-container">
      <div className="row">
        {features.map((feature, index) => (
          <div key={index} className="col-lg-6 col-md-6 col-12 mb-4">
            <div className="feature-item">
              <span className="feature-number">{feature.number}</span>
              <div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
