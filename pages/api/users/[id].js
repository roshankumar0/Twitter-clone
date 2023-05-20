import nc from 'next-connect'
import { allRooms } from '../../../backend/controllers/rooms'
const handler = nc()
    .get((req, res) => {
        const { id } = req.body
        const user = allRooms.find((user) => user._id == id)
        res.send(user)
    })

export default handler