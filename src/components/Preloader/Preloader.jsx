import React,{useEffect , useState} from 'react'
import {Modal, Button} from "react-bootstrap";
import popup1 from "../../assets/img/popup/popup1.png"
import popup2 from "../../assets/img/popup/popup2.png"

import cross from "../../assets/img/cross.png";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Preloader() {

    const popup= {
        loop: true,
        nav: true,
        dots: true,
        smartSpeed: 1000,
        // margin: 30,
        active: true,
        autoplayHoverPause: true,
        autoplay: true,
        navText: [
            "<i class='flaticon-left-arrow-1'></i>",
            "<i class='flaticon-right-arrow-1'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            
            768: {
                items: 1
            },
          
        }
    }
    const [modal, setModal] = useState(false);
    
     useEffect(() => {
        AddModal();
     },[])
     const AddModal = () =>{
        //  alert()
        setModal(!modal)
    }

    const closeModal = () =>{
        //  alert()
        setModal(false)
    }

    
    return (      
        // <div className="preloader">
        //     {<div className="loader">
        //         <div className="shadow"></div>
        //         <div className="box"></div>
        //     </div>}
        //  </div>
        <section>
       <Modal show={modal} className="modal-section">
                <div className="form_model welcome-popup">
                <Modal.Body>
                <OwlCarousel className="Popup-owlcrousel" {...popup}>
                      <div className="popup_slider">
                <button type="button" class="close-popup"  onClick={()=>closeModal()}>
                    <img src={cross} alt="cross"/>
                </button>
                <div className="container">
                    <div className="row ">        
                        <div className="col-sm-7 pt-5 pb-2">              
                            <h4>Best Web And Mobile App Development Company</h4>
                                <p className="pt-4">Shake your hand with us today - We can make your digital dreams come true.
                                Tell us about your idea to get a custom quote, 
                                and hire the best web and mobile app developers today.
                                </p>
                            <Button className="custom_btn popup_btn mb-5"  onClick={()=>closeModal()} >
                                <span style={{padding:"0 15px"}}>Get Your Quote</span>
                            </Button>
                         </div>
                        <div className="col-sm-5">
                             <img src={popup1} className="popup-img" alt="image"/>
                        </div>         
                    </div>          
                </div>
                </div>
                      <div className="popup_slider">
                <button type="button" class="close-popup"  onClick={()=>closeModal()}>
                    <img src={cross} alt="cross"/>
                </button>
                <div className="container">
                    <div className="row ">        
                        <div className="col-sm-7 pt-5 pb-2">              
                            <h4>Best Web And Mobile App Development Company</h4>
                                <p className="pt-4">Shake your hand with us today - We can make your digital dreams come true.
                                Tell us about your idea to get a custom quote, 
                                and hire the best web and mobile app developers today.
                                </p>
                            <Button className="custom_btn popup_btn mb-5"  onClick={()=>closeModal()} >
                                <span style={{padding:"0 15px"}}>Get Your Quote</span>
                            </Button>
                         </div>
                        <div className="col-sm-5">
                             <img src={popup2} className="popup-img" alt="image"/>
                        </div>         
                    </div>          
                </div>
                </div>
                </OwlCarousel>
                </Modal.Body>
                </div>
        </Modal>
        
        </section>
   
            
        )
}

export default Preloader
//#a2f0d4
//#6ac0a0