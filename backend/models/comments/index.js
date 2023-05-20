import mongoose from "mongoose";
const CommentSchema = new mongoose.Schema({
    profile: { type: String, required: true },
    name: { type: String, required: true },
    gmail: { type: String, required: true, unique: true },
})
export default mongoose.models.Comment || mongoose.model("Comment", CommentSchema)