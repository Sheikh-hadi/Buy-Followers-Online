import React from 'react';

const ContactIntro = () => {
  return (
    <div className="container-fluid" style={styles.container}>
      <div className="row" style={styles.header}>
        <div className="col-12 text-center text-white py-3" style={styles.headerText}>
          <h1>CONTACT US</h1>
        </div>
      </div>
      <div className="row my-5" style={styles.content}>
        <div className="col-md-6" style={styles.contentLeft}>
          <h2>How Can I Help You</h2>
          <p>
            Buy Followers Australia team is dedicated to offering great service and
            help. If you've got any questions about any of our SMM services,
            thoughts, or feedback, feel free to reach out. You can get in touch using
            the contact form here. We'll make sure to get back to you quickly.
          </p>
          <a href="/" className="btn btn-danger" style={styles.button}>
            Get In Touch
          </a>
        </div>
        <div className="col-md-6" style={styles.contentRight}>
          <h2>Send Message</h2>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Full Name"
                style={styles.formInput}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your email"
                style={styles.formInput}
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                placeholder="Enter Your Phone Number"
                style={styles.formInput}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter Your Message"
                style={styles.formInput}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-danger" style={styles.button}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#fff',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: '#c00',
    color: '#fff',
  },
  headerText: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  content: {
    padding: '2rem',
  },
  contentLeft: {
    paddingRight: '2rem',
  },
  contentRight: {
    paddingLeft: '2rem',
  },
  formInput: {
    border: '1px solid #ccc',
    borderRadius: '0.25rem',
    padding: '0.5rem',
    fontSize: '1rem',
  },
  button: {
    backgroundColor: '#c00',
    color: '#fff',
    border: 'none',
    borderRadius: '0.25rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default ContactIntro;