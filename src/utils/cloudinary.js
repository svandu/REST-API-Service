// take files from local sever and uload it on cloudinary
// Now delete the file from local sever 
 
const cloudinary = require("cloudinary").v2
const fs = require("fs")
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (LocalFilePath) => {
    try {
        if(!LocalFilePath) return null
        // upload on cloudinary

        const response = await cloudinary.uploader.upload(LocalFilePath, {
            resource_type: "auto"
        })

        //file has been uploaded successfully 
        console.log("File has been uploaded sucessfully on cloudinary", response.url);

        return response;
    } catch (error) {
        fs.unlinkSync(LocalFilePath) // remove the locally saved temproray file as the operation get failed 
        return null;
    }
}

module.exports = uploadOnCloudinary