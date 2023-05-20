// import User from "../models/rooms"
// const allRooms = (async (req, res) => {
//     const datas = [{ name: "rosa", age: 34 }]
//     const Product = await User.find({})
//     res.status(200).json({ message: "success", data: "All Data found", datas, Product })
// })

// const CreateRoom = (async (req, res) => {
//     try {
//         const rooms = await User.create(req.body)
//         res.status(201).json({ success: true, rooms })
//     } catch (error) {
//         console.log(error)
//     }
// })

// export { allRooms, CreateRoom}

    import User from '../models/rooms'
    const allRooms = (async (req, res) => {
        const Product = await User.find({})
        res.status(200).send(Product)
    })
    const CreateRoom = (async (req, res) => {
        try {
            const rooms = await User.create(req.body)
            res.status(201).send(rooms)
        } catch (error) {
            console.log(error)
        }
    })
    export { allRooms, CreateRoom}