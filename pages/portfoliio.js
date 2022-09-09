import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import mongoose from 'mongoose'

const Portfoliio = ({skills}) => {
  const [skill, setskill] = useState(skills)
  return (
    <div>
        <section className="py-8 px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="flex flex-col text-center w-full mb-5">
            <div className="container px-5 py-5 mx-auto">
              <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                Check out my Portfolio
              </h2>
              <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                Here is what I have done with the past
              </h3>
            </div>
          </div>
          <div className="relative md:w-1/2 px-4 mb-8 md:mb-6">
            <div className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300">
              <h1 className="tracking-wider text-3xl font-semibold text-black">Online Grocery Store</h1>
              <p className="mx-5 text-gray-800 text-lg">This is MERN stack web application with admin panel.</p>
              <Link href={'/rent'}><a> <button className="text-white mt-6 bg-stone-700 border-0 py-1 px-8 focus:outline-none hover:bg-stone-00  text-lg">Explore</button></a></Link>
            </div>
            <div className="relative">
              <div className=" flex flex-wrap content-center">
                <Image className="rounded shadow-md" src={'/back.jpg'} width={768} height={400} alt='any' />

              </div>
            </div>

          </div>
          <div className="relative md:w-1/2 px-4 mb-8 md:mb-6">
            <div className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300">
              <h1 className="tracking-wider text-3xl font-semibold text-black">Real Estate Agency</h1>
              <p className="mx-5 text-gray-800 text-lg">A MERN Stack Web App with advance features.</p>
              <Link href={'/buy'}><a> <button className="text-white mt-6 bg-stone-700 border-0 py-1 px-8 focus:outline-none hover:bg-stone-00  text-lg">Explore</button></a></Link>
            </div>
            <div className="relative">
              <div className=" flex flex-wrap content-center">
                <Image className="rounded shadow-md" src={'/b5.jpg'} width={768} height={400} alt='any' />

              </div>
            </div>

          </div>
          <div className="relative md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300">
              <h1 className="tracking-wider text-3xl font-semibold text-black">Online Shopping App</h1>
              <p className="mx-5 text-gray-800 text-lg">A Full Stack Web Application with advance Features</p>
              <Link href={'/services'}><a> <button className="text-white mt-6 bg-stone-700 border-0 py-1 px-8 focus:outline-none hover:bg-stone-00  text-lg">Explore</button></a></Link>
            </div>
            <div className="relative">
              <div className=" flex flex-wrap content-center">
                <Image className="rounded shadow-md" src={'/new.jpg'} width={768} height={400} alt='any' />

              </div>
            </div>

          </div>
          <div className="relative md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300">
              <h1 className="tracking-wider text-3xl font-semibold text-black">Blog</h1>
              <p className="mx-5 text-gray-800 text-lg">Tailwing Front End with Sanity Backend.</p>
              <Link href={'/agents'}><a> <button className="text-white mt-6 bg-stone-700 border-0 py-1 px-8 focus:outline-none hover:bg-stone-00  text-lg">Explore</button></a></Link>
            </div>
            <div className="relative">
              <div className=" flex flex-wrap content-center">
                <Image className="rounded shadow-md" src={'/b5.jpg'} width={768} height={400} alt='any' />

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
export const getServerSideProps = async () => {
  mongoose.connect(process.env.MONGO_URL)
  let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/fetchallSkills`, {
  })
  const skills = await res.json()

  return {
      props: { skills }
  };
  // try-catch removed for simplification
};
export default Portfoliio
