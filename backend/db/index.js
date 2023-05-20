
import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://roshankumar0:wWjxMObNtmTDVG8m@cluster0.tevorn7.mongodb.net/roshan", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        
        })
        console.log('successfully connected')
    } catch (error) {
        console.log(error)
    }
}

export default ConnectDB
