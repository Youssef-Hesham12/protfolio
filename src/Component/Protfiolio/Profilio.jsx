import React, { useState } from 'react'
import img1 from "../../assets/poert1.png"
import img2 from "../../assets/port2.png"
import img3 from "../../assets/port3.png"

export default function Profilio() {
    let [show,setshow]=useState("d-none")
    let [currimge,setcurrent]=useState(null)

let allImgs=[img1,img2,img1,img3,img3,img2];


  return (

    <>


    <div className=' container position-relative '>
        <div className='row g-3'>
        {allImgs.map((item)=>{
        return     <div className='col-md-4'>
            <div className=' position-relative item'>
            <img src={item} className='w-100' alt="img" />
            <div className='layer d-flex justify-content-center align-items-center'>
            <i onClick={()=>{
                setcurrent(item)
                setshow("d-block")}} class="fa-solid fa-plus "></i>
            </div>

            </div>
        
    
    </div>
     
  

    })}




        </div>
           
    <div onClick={()=>{ setshow("d-none")}} className={`bg-black bg-opacity-75 w-100 ${show}   d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 right-0 left-0`} >
                <img src={currimge} className='w-25' alt="" />
            </div>


    </div>
 


  



    
    
    
    
    
    </>
  )
}
