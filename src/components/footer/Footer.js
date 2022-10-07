import React from "react";
import { IoMdMail } from 'react-icons/io';
import { MdHeadsetMic } from 'react-icons/md';
import PreFooter from "./PreFooter";

const Footer = () => {
    return (
        <div>
            <PreFooter />
            <footer className="footer-container">
                <div className="footer-row">
                    <div className="col text-white footer-location">
                        <div className="footer-title">
                            <h2>Ubicación</h2>
                        </div>
                        <div>
                            <p className="footer-label">
                                Avenida Andrômeda, 2000. Bloco 6 e 8
                            </p>
                            <p className="footer-label">
                                Alphavile SP
                            </p>
                            <p className="footer-label">
                                brasil@corebiz.ag
                            </p>
                            <p className="footer-label">
                                +55 11 3090 1039
                            </p>
                        </div>
                    </div>
                    <div className="col footer-buttons-col">
                        <button className="footer-button"> <IoMdMail className="footer-icon" /> <p className="footer-button-label">CONTACTANOS</p></button>
                        <button className="footer-button"> <MdHeadsetMic className="footer-icon" /><p className="footer-button-label">HABLA CON UN CONSULTOR</p></button>
                    </div>
                    <div className="col text-white footer-div-icons">
                        <div className="row footer-corevtex-icons">
                            <div className="col">
                                <p className="footer-icons-label">Desarrollado por</p>
                                <img src="https://via.placeholder.com/100x40" alt="" />
                            </div>
                            <div className="col">
                                <p className="footer-icons-label">Powered by</p>
                                <img src="https://via.placeholder.com/100x40" alt="" />
                            </div>
                        </div>
                    </div>
                </div>


            </footer>
        </div>
    )
}

export default Footer;