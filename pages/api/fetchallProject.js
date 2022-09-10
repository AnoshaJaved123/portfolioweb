import connectDb from "../../middleware/mongoose"
import Project from "../../modules/Project";



const handler = async (req, res) => {


    
    let project = await Project.find()
    res.json(project)
 
  }



export default connectDb(handler);