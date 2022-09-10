import React from 'react'
import { useState } from 'react';
import mongoose from 'mongoose'
import Project from '../modules/Project'
import Image from 'next/image'
const Projects = ({pro}) => {
  const [p, setP] = useState(pro)

 
  return (
    <div>
      <div className="container my-24 px-6 mx-auto">

        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          These are my Projects
        </h2>

        <section className="mb-20 text-gray-800">
          {p.map((item)=>{return(<div key={item._id}>
            <div className="flex justify-center items-center h-full">
            <div className="px-6 py-12 md:px-12 text-slate-800 text-center">
              <h3 className="text-2xl uppercase font-bold mb-6">
               {item.name}
              </h3>
              <p className='text-slate-600'>
             {item.desc}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 md:px-6">
              <div className="flex mb-6">
                <div className="shrink-0">
                  <div className="">
                  <Image src={'/check-mark.png'} alt="Picture of the author" width={30} height={30}></Image>
                  </div>
                </div>
                <div className="grow ml-4">
                  <p className="font-bold mb-1">{item.service1}</p>
              
                </div>
              </div>
              <div className="flex mb-6">
                <div className="shrink-0">
                <div className="">
                  <Image src={'/check-mark.png'} alt="Picture of the author" width={30} height={30}></Image>
                  </div>
                </div>
                <div className="grow ml-4">
                  <p className="font-bold mb-1">{item.service2}</p>
              
                </div>
              </div>
              <div className="flex mb-6">
                <div className="shrink-0">
                <div className="">
                  <Image src={'/check-mark.png'} alt="Picture of the author" width={30} height={30}></Image>
                  </div>
                </div>
                <div className="grow ml-4">
                  <p className="font-bold mb-1">{item.service3}</p>
              
                </div>
              </div>
              <div className="flex mb-6">
                <div className="shrink-0">
                <div className="">
                  <Image src={'/check-mark.png'} alt="Picture of the author" width={30} height={30}></Image>
                  </div>
                </div>
                <div className="grow ml-4">
                  <p className="font-bold mb-1">{item.service4}</p>
              
                </div>
              </div>
              <div className="flex mb-6">
                <div className="shrink-0">
                <div className="">
                  <Image src={'/check-mark.png'} alt="Picture of the author" width={30} height={30}></Image>
                  </div>
                </div>
                <div className="grow ml-4">
                  <p className="font-bold mb-1">{item.service5}</p>
              
                </div>
              </div>
              <div className="flex mb-6">
                <div className="shrink-0">
                <div className="">
                  <Image src={'/check-mark.png'} alt="Picture of the author" width={30} height={30}></Image>
                  </div>
                </div>
                <div className="grow ml-4">
                  <p className="font-bold mb-1">{item.service6}</p>
              
                </div>
              </div>
              <div className="flex mb-6">
                <div className="shrink-0">
                <div className="">
                  <Image src={'/check-mark.png'} alt="Picture of the author" width={30} height={30}></Image>
                  </div>
                </div>
                <div className="grow ml-4">
                  <p className="font-bold mb-1">{item.service7}</p>
              
                </div>
              </div>
              <div className="flex mb-6">
                <div className="shrink-0">
                <div className="">
                  <Image src={'/check-mark.png'} alt="Picture of the author" width={30} height={30}></Image>
                  </div>
                </div>
                <div className="grow ml-4">
                  <p className="font-bold mb-1">{item.service8}</p>
              
                </div>
              </div>
              <div className="flex mb-6">
                <div className="shrink-0">
                <div className="">
                  <Image src={'/check-mark.png'} alt="Picture of the author" width={30} height={30}></Image>
                  </div>
                </div>
                <div className="grow ml-4">
                  <p className="font-bold mb-1">{item.service9}</p>
              
                </div>
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 md:px-6">

              <Image src={item.img} alt="Picture of the author" width={500} height={200}></Image>
              <Image src={item.img2} alt="Picture of the author" width={500} height={200}></Image>
              <Image src={item.img3} alt="Picture of the author" width={500} height={200}></Image>


            </div>
          </div>
          </div>)})}
       
        </section>

      </div>

    </div>
  )
}
export const getServerSideProps = async () => {
  mongoose.connect(process.env.MONGO_URL)
  // let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/fetchallSkills`, {
  // })
  // const skills = await res.json()
let pro = await Project.find()
  return {
      props: { pro: JSON.parse(JSON.stringify(pro))}
  };
  // try-catch removed for simplification
};
export default Projects
