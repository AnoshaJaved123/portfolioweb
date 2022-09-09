import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import mongoose from 'mongoose'
import Skill from '../modules/Skill'

const ShowSkill = ({skills}) => {
  const [s, setskill] = useState(skills)
 
  
  console.log(s,skills)
  return (
    <div className="text-gray-600 body-font bg-gray-50">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-7">
            <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Who am I?
            </h2>
            <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              I am , a Web Developer (Full Stack)        </h4>
            <p className="pt-6 font-body leading-relaxed text-grey-20">
              I had done my graduation from Government College University, Lahore, Pakistan. I had worked in Lahore Garrison Education System as IT Coordinator and Computer Science Teacher.I have experience in developing and designing, Web Applications. I have 3+ years of experience in Full-Stack Web development and optimization. I can create a professional website and web app from scratch by using React js, Node js, express js, and MongoDB/Mysql/Sanity.


            </p>

            <h4 className="pt-3 font-header text-xl font-medium text-gray-500 sm:text-1xl lg:text-2xl">
              I have following Skills
            </h4>
          </div>
          <div  className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-1 -mx-2">
      {s.map((k)=>{return( <div key={k._id} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-3 h-full items-center">
                <div className="text-grey-500 w-6 h-6 flex-shrink-0 mr-4">
                  
            <Image className="border-8 border-primary h-52 rounded-full sm:h-56" alt="hero" width={50} height={50} src={k.img} />
      
                </div>
                <span className="title-font font-medium">{k.name}</span>
              </div>
            </div>
         
      )})}
          </div>
         
        </div>
      </div>

  )
}
export const getServerSideProps = async () => {
  mongoose.connect(process.env.MONGO_URL)
  // let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/fetchallSkills`, {
  // })
  // const skills = await res.json()
let skills = await Skill.find()
  return {
      props: { skills: JSON.parse(JSON.stringify(skills))}
  };
  // try-catch removed for simplification
};
export default ShowSkill
