import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
const AddBlog = () => {
  const [name, setName] = useState('')
  const [desc, setdesc] = useState('')


  const [file, setFile] = useState()


  const router = useRouter()


  const submit = async event => {
    event.preventDefault()

    const formData = new FormData();
    formData.append("image", file)
    formData.append("name", name)
    formData.append("desc", desc)




    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/blog`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
    const response2 = await res.json()
    console.log(response2)

    if (response2.success) {

      toast.success('New Blog added', {
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
    setdesc('')

  }



  const fileSelected = event => {
    const file = event.target.files[0]
    setFile(file)
  }

  return (
    <div className='h-screen'>
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
          <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" placeholder="Blog Title" />
        </div>
        {/* Name input */}
        <div className="mb-6">
          <input value={desc} onChange={e => setdesc(e.target.value)} type="text" name="desc" className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" placeholder="Description" />
        </div>




        <div className="mb-6">
          {/* <input   onChange={fileSelected} type="file" accept="image"  className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"/> */}
          <label>
            <input onChange={fileSelected} type="file" accept="image" className="text-sm text-grey-500
                      file:mr-3 file:py-1 file:px-4
                      file:rounded-none file:border-0
                      file:text-lg file:font-normal  file:text-white
                      file:bg-gradient-to-r file:from-blue-600 file:to-amber-600
                      hover:file:cursor-pointer hover:file:opacity-80
                       " />
          </label>
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

export default AddBlog
