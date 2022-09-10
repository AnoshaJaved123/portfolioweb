import { useRouter } from 'next/router'
import Blog from '../../modules/Blog'
import mongoose from 'mongoose'
import Image from 'next/image'
const Post = ({ blog }) => {

  const router = useRouter()
  const { slug } = router.query

  return <><>
      <div>
      <div className="container py-6 md:py-10 mx-2">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center pt-5 md:pt-10">
            <h1
              className="pt-5 text-center font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
             {blog.name}
            </h1>
           
          </div>
          <div className="prose max-w-none pt-8 mx-8">
       {blog.desc}

          </div>
          <Image 
            width={500}
            height={500}
            src={blog.img}
            alt='...'
          />
         
        </div>
      </div>
    </div>

  

  </> </>
}
export const getServerSideProps = async (context) => {
  let error = null;

  mongoose.connect(process.env.MONGO_URL)
  let blog = await Blog.findOne({ _id: context.query.slug })
  if (blog == null) {
    return {
      props: { error: 404 }

    }
  }

  return {
    props: { error: error, blog: JSON.parse(JSON.stringify(blog)) }
  };
  // try-catch removed for simplification
};

export default Post

