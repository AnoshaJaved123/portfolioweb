import connectDb from "../../middleware/mongoose"
import Skill from "../../modules/Skill";



const handler = async (req, res) => {


    
    let skills = await Skill.find()
    res.json(skills)
    console.json('skills',skills)
 
  }



export default connectDb(handler);