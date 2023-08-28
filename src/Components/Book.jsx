import './Book.css'
import camera1 from '../assets/real.png';
import camera2 from '../assets/real-2.png';
import camera3 from '../assets/real-3.png';
import { BsWhatsapp } from 'react-icons/bs';
import { FiInstagram} from 'react-icons/fi';
import {SiGmail} from 'react-icons/si';
import Modal from 'react-modal';
import React, { useState } from 'react';


function Book() {
    const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

    return (
      <div>
        <div className="book-1">
            <div className="book-2">
                <div className="book-3">
                    <div className="book-container">
                        {/* The first content */}
                        <div className="book-first">
                           <div className="all">
                           <img src={camera1} alt="" />
                           </div>
                            <div className="book-first-cont">
                                <h1>Regular</h1>
                                <div className="border">
                                    <p>#70,000</p>
                                </div>
                                <ul>
                                    <li>Shooting</li>
                                    <li>Editing</li>
                                    <li>2 weeks Delivery</li>
                                    <li style={{ display: '' }}></li>
                                </ul>
                                <div className="btn-2">
                                <button onClick={toggleModal}>Book</button>
                                </div>
                            </div>
                        </div>
                        {/* Second-content */}
                        <div className="book-first">
                            <div className="all">
                              <img src={camera2} alt="" />
                            </div>
                            <div className="book-first-cont">
                                <h1>Premium</h1>
                                <div className="border">
                                    <p>#120,000</p>
                                </div>
                                <ul>
                                    <li>Shooting</li>
                                    <li>Editing</li>
                                    <li>1 weeks Delivery</li>
                                    <li>Consultancy</li>
                                </ul>
                                <div className="btn-2">
                                      <button onClick={toggleModal}>Book</button>
                                </div>
                            </div>
                        </div>
                        {/* Third-content */}
                        <div className="book-first">
                            <div className="all">
                            <img src={camera3} alt="" />
                            </div>
                            <div className="book-first-cont">
                                <h1>VIP</h1>
                                <div className="border">
                                    <p>#200,000</p>
                                </div>
                                <ul>
                                    <li>Shooting</li>
                                    <li>Editing</li>
                                    <li>3 days Delivery</li>
                                    <li>Recce & Consultancy</li>
                                </ul>
                                <div className="btn-2">
                                <button onClick={toggleModal}>Book</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="book-end">
                          <p>*The price varies from time to time.</p>
                    </div>
                </div>
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
                  <BsWhatsapp size={28} className="whatsapp-icon" />
                  </div>
                  <a href="https://wa.me/+2348156129492">+234 815 612 9492</a>
              </div>
                <div className="number-2">
                  <div className="call-2">
                    <FiInstagram size={28} style={{ color: '#000' }}  />
                  </div>
                  <a href="https://www.instagram.com/thatboymadeit_/" target="_blank" rel="noopener noreferrer">thatboymadeit_</a>
              </div>
              <div className="number-2">
                <div className="call-2">
                  <SiGmail size={28}/>
                </div>
                <a href="mailto:kolajostephen23@gmail.com">kolajostephen23@gmail.com</a>
              </div>
              <br />
                  <button onClick={toggleModal}>Close</button>
              </div>
            </Modal>
      </div>
    )
  }
  
  export default Book;