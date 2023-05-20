import UserModel from "../../../models/user"
import { ConnectBD } from "../../../utils"
export default async function handler(req, res) {
    await ConnectBD()
    const products = await UserModel.find({})
    res.status(200).json({  products })

}