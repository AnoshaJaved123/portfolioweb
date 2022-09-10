import nextConnect from "next-connect";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import { S3Client, PutObjectCommand,GetObjectCommand } from "@aws-sdk/client-s3";
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from 'dotenv'
dotenv.config()
import Skill from "../../modules/Skill"
import connectDb from "../../middleware/mongoose"
// import AWS from 'aws-sdk'
const cors = require("cors"); //this is a library to config easily cors


const bucketName = process.env.NEXT_PUBLIC_AWS_BUCKET
const region = process.env.NEXT_PUBLIC_AWS_Region
const accessKeyId = process.env.NEXT_PUBLIC_AWS_Access_key_ID
const secretAccessKey = process.env.NEXT_PUBLIC_AWS_Secret_access_key
 



const s3 = new S3Client({
    region:region,
    credentials: {
      accessKeyId:accessKeyId,
      secretAccessKey:secretAccessKey
    }
  })


  
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

 
const handler = nextConnect();

handler.use(upload.single('image')); // attribute name you are sending the file by 

handler.use(cors({ origin: true })); // enable origin cors


handler.post(async (req, res) => {
    let url = "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-11.jpg"

    let filename = uuidv4() + "-" + new Date().getTime();

    // console.log('req.body',req.body)
    // console.log('req.file',req.file)
    if (req.file) {

        const params = {
            Bucket: bucketName,
            // Body: req.files.image.buffer,
            Body:req.file.image.buffer,
            Key: filename,
            ContentType: req.file.image.mimetype
        }

        const command = new PutObjectCommand(params)
        await s3.send(command)
        //GET OBJECT FROM AWS   
        const getObjectParams = {
            Bucket: bucketName,
            Key: filename,
        }
        const cmd = new GetObjectCommand(getObjectParams);
        // const url = await getSignedUrl(s3, cmd);


        url = `https://${bucketName}.s3.${region}.amazonaws.com/${filesname}`
    }




            console.log("url generated",url)
            let a = new Skill({
                name:req.body.name,
                img:url,
         })
        await a.save()
        res.send({ success: true })

});

// export default handler;
export default connectDb(handler);

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};