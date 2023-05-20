import nc from 'next-connect'
import ConnectDB from '../../../backend/db'
import { CreateRoom, allRooms } from '../../../backend/controllers/rooms'
const handler = nc()
ConnectDB()
handler.get(allRooms)
handler.post(CreateRoom)
// handler.get(getUserById);

export default handler