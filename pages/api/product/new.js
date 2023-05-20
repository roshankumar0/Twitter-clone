import { ConnectBD } from "../../../utils";
import UserModel from '../../../models/user'
export default async (req, res) => {
    if (req.method !== 'POST') {
res.status(404).json({
    success:false,
    message:`No API with ${req.method} method`
})
    }
    else {
        await ConnectBD()
        const { price, categories, name } = req.body
        await UserModel.create({
            name,
            categories,
            price
        })
        res.status(200).json({
            success: true,
            message: "Product created successfully"
        })
    }
}