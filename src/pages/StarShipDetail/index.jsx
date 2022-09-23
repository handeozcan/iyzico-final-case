import React from 'react';
import { useLocation } from 'react-router-dom';
import { images } from '../../config/imagesConfig';
import Layout from '../../layouts/Layout';
import '../../assets/styles/cardDetails.css';

function StarShipDetail() {
  const location = useLocation();
  const id = location.pathname.slice(11);
  return (
    <Layout>
      <div>
        <a href="#" target="_blank">
          <section>
            <div className="containerMain">
              <div style={{ backgroundImage: `url(${images[id]})` }} className="background-img">
                <div className="box">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div className="content">
                    <h2>My animated Border </h2>
                    <p>
                      <a>
                        All our modules are designed to play nicely with responsive of course. At
                        the end of the day it comes down to the theme you use - our cod get in your
                        way.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </a>
      </div>
    </Layout>
  );
}

export default StarShipDetail;
