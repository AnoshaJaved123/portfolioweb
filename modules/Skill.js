import mongoose from 'mongoose';
const { Schema } = mongoose;

const SkillSchema = new Schema({
  name:  {type:String, required:true},
  img:  {type:String, required:true},
 

}, {timestamps:true} );
mongoose.models ={}
export default mongoose.model("Skill", SkillSchema);