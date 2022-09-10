import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
const AddProject = () => {
  const [name, setName] = useState('')
  const [desc, setdesc] = useState('')
  const [service1, setService1] = useState('')
  const [service2, setService2] = useState('')
  const [service3, setService3] = useState('')
  const [service4, setService4] = useState('')
  const [service5, setService5] = useState('')
  const [service6, setService6] = useState('')
  const [service7, setService7] = useState('')
  const [service8, setService8] = useState('')
  const [service9, setService9] = useState('')



  const [file, setFile] = useState()
  const [file2, setFile2] = useState()
  const [file3, setFile3] = useState()



  const router = useRouter()


  const submit = async event => {
    event.preventDefault()

    const formData = new FormData();
    formData.append("image", file)
    formData.append("image2", file2)
    formData.append("image3", file3)


    formData.append("name", name)
    formData.append("desc", desc)
    formData.append("service1", service1)
    formData.append("service2", service2)
    formData.append("service3", service3)
    formData.append("service4", service4)
    formData.append("service5", service5)
    formData.append("service6", service6)
    formData.append("service7", service7)
    formData.append("service8", service8)
    formData.append("service9", service9)



    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addProjects`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
    const response2 = await res.json()
    console.log(response2)

    if (response2.success) {

      toast.success('New Project added', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }
    else {
      toast.error('Something went wrong', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setFile()
    setName('')

  }



  const fileSelected = event => {
    const file = event.target.files[0]
    setFile(file)
  }
  const fileSelected2 = event => {
    const file2 = event.target.files[0]
    setFile2(file2)

  }
  const fileSelected3 = event => {
    const file3 = event.target.files[0]
    setFile3(file3)

  }

  return (
    <div className=''>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={submit} action="/posts" method="POST" encType="multipart/form-data" >
        <h1 className="text-center text-3xl font-semibold mb-5">Add Skills</h1>
        {/* Name input */}
        <div className="mb-6">
          <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" placeholder="Project Title" />
        </div>

        <div className="mb-6">
          <input value={desc} onChange={e => setdesc(e.target.value)} type="text" name="desc" className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" placeholder="Description" />
        </div>

        <div className="mb-6 flex">
          <input value={service1} onChange={e => setService1(e.target.value)} type="text" name="service1" className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" placeholder="Service 1" />
          <input value={service2} onChange={e => setService2(e.target.value)} type="text" name="service2" className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" placeholder="Service 2" />
          <input value={service3} onChange={e => setService3(e.target.value)} type="text" name="service3" className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" placeholder="Service 3" />
          <input value={service4} onChange={e => setService4(e.target.value)} type="text" name="service4" className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" placeholder="Service 4" />
          <input value={service5} onChange={e => setService5(e.target.value)} type="text" name="service5" className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" placeholder="Service 5" />
          <input value={service6} onChange={e => setService6(e.target.value)} type="text" name="service6" className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" placeholder="Service 6" />
          <input value={service7} onChange={e => setService7(e.target.value)} type="text" name="service7" className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" placeholder="Service 7" />
          <input value={service8} onChange={e => setService8(e.target.value)} type="text" name="service8" className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" placeholder="Service 8" />
          <input value={service9} onChange={e => setService9(e.target.value)} type="text" name="service9" className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" placeholder="Service 9" />

        </div>

        <div className="mb-6">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Upload Image</label>
              <div className='flex mb-2'>
                <p>1.
                  <label>
                    <input onChange={fileSelected} type="file" name='image' accept="image" className="mx-2 text-sm text-grey-500
                      file:mr-3 file:py-1 file:px-4
                      file:rounded-none file:border-0
                      file:text-lg file:font-normal  file:text-white
                      file:bg-gradient-to-r file:from-blue-600 file:to-amber-600
                      hover:file:cursor-pointer hover:file:opacity-80
                       " />
                  </label>

                </p></div>
              <div className='flex mb-2'>
                <p>2.
                  <label>
                    <input onChange={fileSelected2} type="file" name='image2' accept="image" className="mx-2 text-sm text-grey-500
                      file:mr-3 file:py-1 file:px-4
                      file:rounded-none file:border-0
                      file:text-lg file:font-normal  file:text-white
                      file:bg-gradient-to-r file:from-blue-600 file:to-amber-600
                      hover:file:cursor-pointer hover:file:opacity-80
                       " />
                  </label>
                </p></div>
              <div className='flex'>
                <p>3.
                  <label>
                    <input onChange={fileSelected3} type="file" name='image3' accept="image" className="mx-2 text-sm text-grey-500
                      file:mr-3 file:py-1 file:px-4
                      file:rounded-none file:border-0
                      file:text-lg file:font-normal  file:text-white
                      file:bg-gradient-to-r file:from-blue-600 file:to-amber-600
                      hover:file:cursor-pointer hover:file:opacity-80
                       " />
                  </label>
                </p></div>
            </div>
          </div>
        </div>

        <div className="p-2 w-full">
          {name.length === 0 ? <><button disabled={true} className="disabled:bg-stone-100 flex mx-auto bg-transparent text-lg my-2 hover:bg-stone-500 text-stone-700 font-semibold hover:text-stone-500 py-1 px-4 border border-stone-500 hover:border-transparent">Submit</button>
            <div className="text-red-500 text-sm mt-3 text-center">
              All Feilds Require

            </div>
          </>
            :
            <button className=" flex mx-auto bg-transparent disabled:bg-stone-300 text-lg my-2 hover:bg-stone-500 text-stone-700 font-semibold hover:text-white py-1 px-4 border border-stone-500 hover:border-transparent">Submit</button>}

        </div>
      </form>
    </div>
  )
}

export default AddProject
