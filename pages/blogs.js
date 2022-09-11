import React from 'react'
import { useEffect,useState } from 'react';
import Link from 'next/link'
import mongoose from 'mongoose'
import Blog from '../modules/Blog'

const Blogs = ({blogs}) => {
  const [b, setskill] = useState(blogs)

      
      useEffect(() => {
        console.log("thsnks") 
        
      }, [])
  return (
    <div>
         <div className="bg-grey-50 my-12" id="blog">
        <div className="container mx-auto py-16 md:py-20">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            I also like to write
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Check out my latest posts!
          </h4>
          <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">

            {b.map((item) => { 
              return <Link key={item._id} href={"/blog/" + item._id} className="shadow">
              <div><div style={{"backgroundImage": `url(${item.img})`}}
                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 bg-stone-700 border-stone-700 px-6 py-2 text-center font-body text-sm font-bold uppercase text-stone-200 md:text-base cursor-pointer">Read
                  More</span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8 cursor-pointer">
                <span className="block font-body text-lg font-semibold text-black"> {item.name}</span>
                {/* <span className="block pt-2 font-body text-grey-20">{item.desc}</span> */}
              </div></div>
            </Link>
             })}
            
          </div>
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
let blogs = await Blog.find()
  return {
      props: { blogs: JSON.parse(JSON.stringify(blogs))}
  };
  // try-catch removed for simplification
};
export default Blogs


  