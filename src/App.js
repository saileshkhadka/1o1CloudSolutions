import React from 'react';
import Header from './components/header';
import Card from './components/card';
import './App.css';

import cloudInfra from './images/cloudinfra.jpg';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="image-section">
          <img src={cloudInfra} alt="Cloud" />
        </section>
      <main className="main-content">
        <section id="about">
          <Card title="About 1o1Cloud">
            <p>1o1Cloud is a leading cloud-based company specializing in cloud consultation and infrastructure management services.</p>
            <p>Our mission is to help businesses harness the power of cloud computing to optimize their operations, reduce costs, and drive innovation.</p>
            <p>With a team of experienced cloud architects and consultants, we provide personalized solutions tailored to meet the unique needs of each client.</p>
            <p>Whether you're looking to migrate to the cloud, optimize your existing infrastructure, or implement cloud-native solutions, 1o1Cloud has the expertise to guide you every step of the way.</p>
          </Card>
        </section>
        <section id="services">
          <Card title="Our Services">
            <ul>
              <li>Cloud Consultation and Strategy</li>
              <li>Cloud Migration and Deployment</li>
              <li>Infrastructure Management</li>
              <li>Cost Optimization</li>
              <li>Cloud Security and Compliance</li>
            </ul>
          </Card>
        </section>
        <section id="contact">
          <Card title="Contact Us">
            <p>If you have any questions or inquiries, please don't hesitate to contact us:</p>
            <p>Email: info@1o1cloud.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Cloud Avenue, Cloud City, CLOUD123</p>
          </Card>
        </section>
      </main>
    </div>
  );
}

export default App;
