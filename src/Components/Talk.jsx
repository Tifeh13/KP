import React from 'react';
import './Talk.css';
import { BsTelephoneFill } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';

function Talk() {
  return (
    <div>
      <div className="talk-1">
        <div className="talk-2">
          <div className="talk-3">
            <div className="talk-container">
              <h1>Talk to me</h1>
            </div>
            <div className="con-1">
              <div className="con-2">
                <div className="con-3">
                  <form action="">
                    <input type="text" name="" id="" required placeholder="Name" />
                    <br />
                    <br />
                    <input type="email" name="" id="" required placeholder="Email" />
                    <br />
                    <br />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message" required></textarea>
                    <div className="btn-3">
                      <button>Text Me</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="con-1">
              <div className="con-2">
                <div className="con-4">
                  <div className="last">
                    <a href="tel:+2348156129492">
                      <div className="call-4">
                        <BsTelephoneFill  />
                        <span>+234 815 612 9492</span>
                      </div>
                    </a>
                    <a href="mailto:kolajostephen23@gmail.com">
                      <div className="call-4">
                        <SiGmail  />
                        <span>kolajostephen23@gmail.com</span>
                      </div>
                    </a>
                  </div>
                  <div className="last-2">
                    <a href="https://www.instagram.com/thatboymadeit_/" target="_blank" rel="noopener noreferrer">
                      <div className="call-5">
                        <FiInstagram  style={{ paddingTop: '10px' }} />
                        <span>thatboymadeit_</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talk;
