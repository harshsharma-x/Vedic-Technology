import React from 'react'
import { IoRemoveOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const home2 = () => {
  return (
    <>    
    <div className="bg-gradient-to-r from-blue-200 flex gap-2  to-pink-200 h-screen">
        <div className="w-1/2 h-full  center">
        <div className="w-20 h-20 bg-green-600 absolute mt-[40%] mr-[40%] center text-white text-5xl rounded-full"><FaWhatsapp /></div>
        <div className="ml-[15%] h-[80%] w-[80%] py-20 px-14">
            <p className="text-red-500 font-bold flex "><IoRemoveOutline className='mt-[-22px] text-7xl'/> Beast Web Design & Development Agency</p>
            <h1 className="text-7xl text-blue-950 font-bold mt-4  leading-[75px]">Innovative <br />Website Design & <br />Development</h1>
            <p className="text-blue-900 font-semibold mt-14 text-[18px]">Discover Bespoke Website Design and Development in Bihar.Blending creativity with technology,we craft digital experiences that not only stand out but align with industry standards.Elevate your brand in the virtual realm our tailored web solutions.Ready to redefine your online presence with Bihar's premier web developers?"</p>
        </div>
        </div>

        <div className="w-1/2 h-full center ">
        <div className="  mr-[15%] h-[80%] w-[80%] center py-20 px-14">
          <div className=" w-[400px] h-[450px] rounded-t-full border-4 border-white">
            <img src="https://www.dice.com/binaries/medium/content/gallery/dice/insights/2021/08/shutterstock_722984446.jpg" alt="" className='h-full rounded-t-full' />
          </div>

          {/* <div className="w-32 h-32  absolute mr-[28%] mt-52  center"><img src="images/sound.png" alt="" className='h-52 w-28 ' /></div> */}

          {/* <div className="w-[200px] h-[180px] absolute mt-[30%] mr-[27%] rounded-br-2xl rounded-tl-2xl  ">
            <img src="https://www.propel-together.com/wp-content/uploads/2022/06/shutterstock_760978843.jpg" alt="" className='h-full rounded-br-2xl rounded-tl-2xl border-4 border-white' />
            <div className=" w-[250px] h-[60px] ml-[130%] mt-[-120px]">
            <button className="bg-red-500 py-2 px-6 rounded-xl w-full h-full flex center text-white font-semibold">Get a Quick Estimate<FaArrowRight className='ml-4' /></button>
            </div>
           
            <div className="w-52 h-32 bg-green-200 ml-[260%] "></div>
            <div className="w-60 h-32 absolute ml-[310%] overflow-hidden mt-[-125%]"><img src="https://www.pikpng.com/pngl/b/92-926693_open-triangle-purple-clipart.png" alt="" className='h-full '/></div>
            
          </div> */}
        </div>
        </div>
    </div>

    </>
  )
}

export default home2