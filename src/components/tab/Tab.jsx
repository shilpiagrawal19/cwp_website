import React from 'react'
import { useState, useEffect } from "react";
import Tablist from '../../components/tab/Tablist'
import { tab1, tab2,tab3,tab4,tab5,tab6} from "./Data.js"
import shape from '../../assets/img/tab/shape.png'
import taxi from "../../assets/image/tabicon/taxi.png"
import homeservice from "../../assets/image/tabicon/homeservice.png"
import uber from "../../assets/image/tabicon/uber.png"
import delivery from "../../assets/image/tabicon/delivery.png"
import luggage from "../../assets/image/tabicon/luggage.png"
import userapp from "../../assets/image/tabicon/user-app.png"




function Tab() {
    const [selected,setSelected]=useState("tab");
    const [data,setData]=useState([]);
    const list=[
        {
            id:"tab01",
            title: "Taxi Apps",
            img:taxi,
            color1:"#f5a25a"
        },

        {
            id:"tab02",
            title: "Home Service App",
            img:homeservice,
            color1:"#f5a25a"
        }, 

        {
            id:"tab03",
            title: "Uber -X App",
            img:uber,
            color1:"#f5a25a"
        }, 

        {
            id:"tab04",
            title: "Food Delivery App",
            img:delivery,
        },
        
        {
            id:"tab05",
            title: "On Demand Delivery",
            img:luggage,
        },

        {
            id:"tab06",
            title: "Social App",
            img:userapp,
            }, 
        
]

        useEffect(() => {

            switch(selected){
                case "tab01":
                setData(tab1);
                break;
                case "tab02":
                setData(tab2);
                break;
                case "tab03":
                setData(tab3);
                break;
                case "tab04":
                setData(tab4);
                break;
                case "tab05":
                setData(tab5);
                break;
                case "tab06":
                setData(tab6);
                break;
                default:
                setData(tab1); 
            }

        },[selected])
    return (
        <div className="container">
        <div className="tab-section" id="">
            <div class="section-title mb-5">
                <span>Product</span>
                <h3>Our Outstanding Work</h3>
            </div>

        <div className="container tab boosting-list-tab">
        <div className="">
            <ul className="row tabs">   
            {list.map((item)=>(
                <Tablist 
                title={item.title}
                active={selected=== item.id}
                setSelected={setSelected}
                img={item.img}
                id={item.id}>
                <a style={{ backgroundColor:item.color1}} >
                    <img src={item.img}/>
                    <span>{item.title}</span>
                </a>

                </Tablist>
            ))}  
        </ul>
        </div>
        </div>
       
       

        <div className="container">
            {data.map((d) => (
                <div className="btn1color">
                <div class="tab_content current wow fadeIn ">

                <div class="tabs_item btn_sec1">
                <div class="row align-items-center ">
                    <div class="col-lg-5 tab-content-section">
                        <div class="tab-image">
                            <img src={d.img} alt="taxidude"/>
                        </div>
                    </div>
                
                    <div class="col-lg-7">
                        <div class="content" style={{paddingTop:"50px"}}>
                            <h2 className="whiteclr">{d.h2}</h2>
                            <p className="whiteclr">{d.p}</p>
                            <p className="whiteclr">{d.p2}</p>
                            <p className="whiteclr">{d.p3}</p>
                            <p className="whiteclr">{d.p4}</p>


                            <ul> <h6>{d.features}</h6>
                                <li><img className="Checksquare" src={d.imgicon}/>{d.li1}</li>
                                <li><img className="Checksquare" src={d.imgicon}/>{d.li2}</li>
                                <li><img className="Checksquare" src={d.imgicon}/>{d.li3}</li>
                                <li><img className="Checksquare" src={d.imgicon}/>{d.li4}</li>
                                <li><img className="Checksquare" src={d.imgicon}/>{d.li5}</li>
                                <li><img className="Checksquare" src={d.imgicon}/>{d.li6}</li>                       
                           </ul>
                           <p className="whiteclr">{d.p5}</p>

                           <img class="tab-shape" src={shape} alt="app development"/>
                        </div>                                      
                    </div>
                </div>

               
            </div>
            </div>
         </div>

            ))}
           
        </div>
            
        </div>
        </div>
    )
}

export default Tab
