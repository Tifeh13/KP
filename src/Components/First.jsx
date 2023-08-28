import React, { useState } from 'react';
import {BsTelephoneFill } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { FiInstagram} from 'react-icons/fi';
import {SiGmail} from 'react-icons/si';
import './First.css';
import './two.css';
import logo from '../assets/Thatboy.png';
import Modal from 'react-modal';

const First = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="nav">
      <div className="nav-1">
        <div className="nav-2">
          <div className="container">
            {/* Nav */}
            <nav>
              <div className="nav-img">
                <img src={logo} alt="" />
              </div>
              <div className="number">
                <div className="call">
                  <BsTelephoneFill/>
                </div>
                <a href="tel:+2348156129492">+234 815 612 9492</a>
              </div>
            </nav>
            
            {/* Content */}
            <div className="video">
              <h1>Videographer and Filmmaker</h1>
              <p>My name is Kolajo Kolapo, I am a videographer and filmmaker, I like to create, document memories for people, and tell stories with visuals.</p>
              <div className="btn">
                <button onClick={toggleModal}>Book Now</button>
              </div>
            </div>

            {/* Modal */}
            <Modal
              isOpen={showModal}
              onRequestClose={toggleModal}
              contentLabel="Booking Modal"
              className="modal"
              overlayClassName="modal-overlay"
            >
              <div className="modal-content">
                <h2>Booking Information</h2>
                <br />
                <div className="number-2">
                  <div className="call-2">
                  <BsWhatsapp  className="whatsapp-icon" />
                  </div>
                  <a href="https://wa.me/+2348156129492">+234 815 612 9492</a>
              </div>
                <div className="number-2">
                  <div className="call-2">
                    <FiInstagram style={{ color: '#000' }}  />
                  </div>
                  <a href="https://www.instagram.com/thatboymadeit_/" target="_blank" rel="noopener noreferrer">thatboymadeit_</a>
              </div>
              <div className="number-2">
                <div className="call-2">
                  <SiGmail />
                </div>
                <a href="mailto:kolajostephen23@gmail.com">kolajostephen23@gmail.com</a>
              </div>
              <br />
                  <button onClick={toggleModal}>Close</button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
