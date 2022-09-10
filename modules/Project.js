import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProjectSchema = new Schema({
  name:  {type:String, required:true},
  desc:  {type:String, required:true},
  service1:  {type:String},
  service2:  {type:String},
  service3:  {type:String},
  service4:  {type:String},
  service5:  {type:String},
  service6:  {type:String},
  service7:  {type:String},
  service8:  {type:String},
  service9:  {type:String},



  img:  {type:String, required:true},
  img2:  {type:String, required:true},
  img3:  {type:String, required:true},

 

}, {timestamps:true} );
mongoose.models ={}
export default mongoose.model("Project", ProjectSchema);