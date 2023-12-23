import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Slider from 'react-slick';
import img from "../img/github.png"
import img2 from "../img/Live.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Reactproject = ({item}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };
   const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
      <div>
                
        <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden">
        <AutoplaySlider
        play={true}
        interval={1000}
        cancelOnInteraction={true}
        bullets={false}
        >
        {
        item.img.map(x=>
        <div data-src={x.url} />
        )
        }

        </AutoplaySlider>
        <div className="card-body">
            <h2 className="card-title">
            <div className="badge bg-blue-600 text-white border-none">{item.name}</div>
            </h2>
            <p>{item.title.length>=40?item.title.slice(0,40)+`...`:item.title} {item.title.length!==50&&<label htmlFor={`modelreact-${item.id}`} className="text-sm text-blue-500 cursor-pointer font-semibold">See more</label>}</p>
            <div className="card-actions justify-end">
                {
                    item.link.map(link=>
                        <a href={link.url} target="_blank"><div className="tooltip p-2" data-tip={link.name} ><div className="flex gap-1 justify-center items-center">
                           {link.name!=="Live Link"?<img src={img} alt="" className="w-5"></img>:<img src={img2} alt="" className="w-5"></img>}  <spam className="text-sm font-semibold">Link</spam></div></div> </a>
                        )
                }
            </div>
        </div>
        </div> 
        <input type="checkbox" id={`modelreact-${item.id}`} className="modal-toggle" />
        <div className="modal z-50">
        <div className="modal-box relative">
        <div className="w-full">
        <Slider {...settings}>
          {
            item.img.map(x =>
               <div>
                <img src={x.url} alt="" className="w-full"></img>
               </div> 
                )
          }
          
        </Slider>
       
        </div>
        <div className="badge bg-blue-600 text-white border-none mt-10 mb-4 ">{item.name}</div>
            <p>{item.title}</p>
            <div className="card-actions justify-end mt-5">
                {
                    item.link.map(link=>
                        <a href={link.url} target="_blank"><div className="tooltip p-2" data-tip={link.name} ><div className="flex gap-1 justify-center items-center">
                           {link.name!=="Live Link"?<img src={img} alt="" className="w-5"></img>:<img src={img2} alt="" className="w-5"></img>}  <spam className="text-sm font-semibold">Link</spam></div></div> </a>
                        )
                }
            </div>
            <div className="modal-action">
            <label htmlFor={`modelreact-${item.id}`} className="btn">Back!</label>
            </div>
        </div>
        </div>        
        </div>
    );
};

export default Reactproject;