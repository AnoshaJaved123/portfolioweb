import Link from 'next/link'
import React from 'react';
import Image from 'next/image'
export default function Home() {

  return (
    <div className=''>
      <div className=" bg-cover bg-center bg-no-repeat py-8" style={{ backgroundImage: "url(/s3.jpg)" }}>
        <div className="backdrop-opacity-10 backdrop-invert bg-zinc-500/50   container mx-auto flex flex-col px-5 py-24 justify-center items-center">

          <Image className="border border-solid border-white border-spacing-7  h-52 rounded-full  sm:h-56" alt="hero" width={250} height={280} src={'/newpicanosha.jpeg'} />


          <div className="flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Anosha Javed!</h1>
            <p className="text-white  font-semibold text-lg uppercase">Full Stack Web Developer</p>
            <p className="mb-8 leading-relaxed text-white">I am a Full Stack Web Developer with experience building websites and web applications along with the 6+-year experience as IT Specialist at LGES.

Specializes in Web Applications Development and I have professional experience working with different, frameworks & CMS.

My Skill set contains React JS, NEXT JS, MERN, Node JS, Java Script, Cloud Services, Tailwind, Bootstrap, Wordpress, API Integration, Payment Gateway Integration and Database.

I always obtain a challenging position as a developer that will enable me to utilize my experience and strong organizational and interpersonal skills.
            </p>
            <div className="flex justify-center">
              <div className=''>
                <button className='w-32 bg-zinc-900 text-center items-center my-1 mx-1 hover:bg-stone-700 text-white font-semibold hover:text-white py-1 px-1 border border-stone-700 hover:border-white'>Blogs</button>
                <button className='w-32 bg-zinc-900 text-center items-center my-1 mx-1 hover:bg-stone-700 text-white font-semibold hover:text-white py-1 px-1 border border-stone-700 hover:border-white'>Projects</button>
              </div>
            </div>

          </div>
        </div>

      </div>
   
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Here is what I am good at
          </h2>
          <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            These are the services I offer
          </h3>

          <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div className="group rounded px-8 py-12 shadow hover:bg-purple-100">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  {/* <img src="/assets/img/icon-development-white.svg" alt="development icon" /> */}
                  <Image src="/assets/img/icon-development-white.svg" alt="hero" width={100} height={100}></Image>

                </div>
                <div className="block group-hover:hidden">
                  {/* <img src="/assets/img/icon-development-black.svg" alt="development icon" /> */}
                  <Image src="/assets/img/icon-development-black.svg" alt="development icon" width={100} height={100}></Image>

                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  WEB DEVELOPMENT
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-grey-500 md:text-base">
                  Full Mern Stack Web Application
                </p>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-purple-100">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  {/* <img src="/assets/img/icon-content-white.svg" alt="content marketing icon" /> */}
                  <Image src="/assets/img/icon-content-white.svg" alt="content marketing icon" width={100} height={100}></Image>

                </div>
                <div className="block group-hover:hidden">
                  {/* <img src="/assets/img/icon-content-black.svg" alt="content marketing icon" /> */}
                  <Image src="/assets/img/icon-content-black.svg" alt="content marketing icon" width={100} height={100}></Image>
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  BACK END MANAGEMENT
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-grey-500 md:text-base">
                  Node js,
                  Express js,
                  JWT,
                  MongoDB,
                  MYSQL and
                  Firebase
                </p>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-purple-100">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  {/* <img src="/assets/img/icon-mobile-white.svg" alt="Mobile Application icon" /> */}
                  <Image src="/assets/img/icon-mobile-white.svg" alt="Mobile Application icon" width={100} height={100}></Image>
                </div>
                <div className="block group-hover:hidden">
                  {/* <img src="/assets/img/icon-mobile-black.svg" alt="Mobile Application icon" /> */}
                  <Image src="/assets/img/icon-mobile-black.svg" alt="Mobile Application icon" width={100} height={100}></Image>
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  Payment Gateway Integration
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-grey-500 md:text-base">
                  Stripe Integration,
                  Payoneer Integration

                </p>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-purple-100">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  {/* <img src="/assets/img/icon-email-white.svg" alt="Email Marketing icon" /> */}
                  <Image src="/assets/img/icon-email-white.svg" alt="Email Marketing icon" width={100} height={100}></Image>
                </div>
                <div className="block group-hover:hidden">
                  {/* <img src="/assets/img/icon-email-black.svg" alt="Email Marketing icon" /> */}
                  <Image src="/assets/img/icon-email-black.svg" alt="Email Marketing icon" width={100} height={100}></Image>

                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  Email Integration
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-grey-500 md:text-base">
                  Integration of Email Service Provider
                </p>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-purple-100">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  {/* <img src="/assets/img/icon-design-white.svg" alt="Theme Design icon" /> */}
                  <Image src="/assets/img/icon-design-white.svg" alt="Theme Design icon" width={100} height={100}></Image>

                </div>
                <div className="block group-hover:hidden">
                  {/* <img src="/assets/img/icon-design-black.svg" alt="Theme Design icon" /> */}
                  <Image src="/assets/img/icon-design-black.svg" alt="Theme Design icon" width={100} height={100}></Image>

                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  FRONT END (Mobile Responsive)
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-grey-500 md:text-base">
                  React Redux,
                  Tailwind CSS,
                  Bootstrap and
                  Material UI
                </p>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-purple-100">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  {/* <img src="/assets/img/icon-graphics-white.svg" alt="Graphic Design icon" /> */}
                  <Image src="/assets/img/icon-graphics-white.svg" alt="Graphic Design icon" width={100} height={100}></Image>
                </div>
                <div className="block group-hover:hidden">
                  {/* <img src="/assets/img/icon-graphics-black.svg" alt="Graphic Design icon" /> */}
                  <Image src="/assets/img/icon-graphics-black.svg" alt="Graphic Design icon" width={100} height={100}></Image>

                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  Sanity io And Shopify
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-grey-500 md:text-base">
                  Provide  Structured Content
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <section className="text-black body-font">

        <div className="container px-5 py-16 mx-auto flex flex-wrap">
          <div className="container mx-auto px-4">

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
                      <h1 className="tracking-wider text-3xl font-semibold text-black">For Rent</h1>
                      <p className="mx-5 text-gray-800 text-lg">Find resonable properties according to your requirement for rent.</p>
                      <Link href={'/rent'}><a> <button className="text-white mt-6 bg-stone-700 border-0 py-1 px-8 focus:outline-none hover:bg-stone-00  text-lg">Find</button></a></Link>
                    </div>
                    <div className="relative">
                      <div className=" flex flex-wrap content-center">
                        <Image className="rounded shadow-md" src={'/b5.jpg'} width={768} height={400} alt='any' />

                      </div>
                    </div>

                  </div>
                  <div className="relative md:w-1/2 px-4 mb-8 md:mb-6">
                    <div className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300">
                      <h1 className="tracking-wider text-3xl font-semibold text-black">Buy Property</h1>
                      <p className="mx-5 text-gray-800 text-lg">Find resonable properties according to your requirement.</p>
                      <Link href={'/buy'}><a> <button className="text-white mt-6 bg-stone-700 border-0 py-1 px-8 focus:outline-none hover:bg-stone-00  text-lg">Find</button></a></Link>
                    </div>
                    <div className="relative">
                      <div className=" flex flex-wrap content-center">
                        <Image className="rounded shadow-md" src={'/b5.jpg'} width={768} height={400} alt='any' />

                      </div>
                    </div>

                  </div>
                  <div className="relative md:w-1/2 px-4 mb-8 md:mb-0">
                    <div className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300">
                      <h1 className="tracking-wider text-3xl font-semibold text-black">Services</h1>
                      <p className="mx-5 text-gray-800 text-lg">We provide you services according to your project requirement.</p>
                      <Link href={'/services'}><a> <button className="text-white mt-6 bg-stone-700 border-0 py-1 px-8 focus:outline-none hover:bg-stone-00  text-lg">Find</button></a></Link>
                    </div>
                    <div className="relative">
                      <div className=" flex flex-wrap content-center">
                        <Image className="rounded shadow-md" src={'/new.jpg'} width={768} height={400} alt='any' />

                      </div>
                    </div>

                  </div>
                  <div className="relative md:w-1/2 px-4 mb-8 md:mb-0">
                    <div className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300">
                      <h1 className="tracking-wider text-3xl font-semibold text-black">Find Agent</h1>
                      <p className="mx-5 text-gray-800 text-lg">Contact with our agents.</p>
                      <Link href={'/agents'}><a> <button className="text-white mt-6 bg-stone-700 border-0 py-1 px-8 focus:outline-none hover:bg-stone-00  text-lg">Find</button></a></Link>
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

          </div>

        </div>
      </section>
      <div className="text-gray-600 body-font bg-white">

        <div className=" bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
          style={{ "backgroundImage": "url(/assets/img/experience-figure.png)" }} id="statistics">
          <div className="">
            <div className="mx-auto w-5/6 bg-purple-100 py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
              <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
                <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                  <div>
                    {/* <img src="/assets/img/icon-project.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon project" /> */}
                    <Image src="/assets/img/icon-project.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon project" width={60} height={60}></Image>

                  </div>
                  <div className="pt-5 md:pl-5 md:pt-0">
                    <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                      8
                    </h1>
                    <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                      Finished Projects
                    </h4>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                  <div>
                    {/* <img src="/assets/img/icon-award.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon award" /> */}
                    <Image src="/assets/img/icon-award.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon award" width={60} height={60}></Image>
                  </div>
                  <div className="pt-5 md:pl-5 md:pt-0">
                    <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                      4
                    </h1>
                    <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                      Awards Won
                    </h4>
                  </div>
                </div>

                <div
                  className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                  <div>
                    {/* <img src="/assets/img/icon-happy.svg" className="mx-auto h-12 w-auto md:h-20"
            alt="icon happy clients" /> */}
                    <Image src="/assets/img/icon-happy.svg" className="mx-auto h-12 w-auto md:h-20"
                      alt="icon happy clients" width={60} height={60}></Image>
                  </div>
                  <div className="pt-5 md:pl-5 md:pt-0">
                    <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                      4
                    </h1>
                    <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                      Happy Clients
                    </h4>
                  </div>
                </div>

                <div
                  className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                  <div>
                    {/* <img src="/assets/img/icon-puzzle.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon puzzle" /> */}
                    <Image src="/assets/img/icon-puzzle.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon puzzle" width={60} height={60} />
                  </div>
                  <div className="pt-5 md:pl-5 md:pt-0">
                    <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                      67
                    </h1>
                    <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                      Bugs Fixed
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-gray-600 body-font bg-white mt-10 mb-10">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here is a contact form
        </h2>
        <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Have Any Questions?
        </h4>
        <div className="text-gray-600 body-font relative">
          <div className="container px-5 py-12 mx-auto">

            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Send</button>
                </div>

              </div>

            </div>
          </div>


          <div className="flex flex-col pt-16 lg:flex-row">
            <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
              <div className="flex items-center">
                <i className="bx bx-phone text-2xl text-grey-40"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  My Phone
                </p>
              </div>
              <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                (+092) 321 4920 880
              </p>
            </div>
            <div
              className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
              <div className="flex items-center">
                <i className="bx bx-envelope text-2xl text-grey-40"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  My Email
                </p>
              </div>
              <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                anoshajaved@yahoo.com
              </p>
            </div>
            <div
              className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
              <div className="flex items-center">
                <i className="bx bx-map text-2xl text-grey-40"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  My Address
                </p>
              </div>
              <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                Lahore, Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

