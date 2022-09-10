import connectDb from "../../middleware/mongoose"
import Blog from "../../modules/Blog";



const handler = async (req, res) => {


    
    let blog = await Blog.find()
    res.json(blog)
 
  }



export default connectDb(handler);