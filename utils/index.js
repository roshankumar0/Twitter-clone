import mongoose from "mongoose";
export const ConnectBD = async () => {
    try {
        const { connection } = await mongoose.connect("mongodb+srv://roshankumar0:roshankumar01@cluster0.tevorn7.mongodb.net/NextJs")
        console.log(`Database connected on ${connection.host}`)
    } catch (error) {
        console.log(error)
    }
}