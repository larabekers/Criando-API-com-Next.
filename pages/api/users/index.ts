import { NextApiHandler } from "next";
import { Users } from "../../../utils/users";
import prisma from "@/libs/prisma";

//Getting all users
const handlerGet: NextApiHandler = async (req, res) => {
     const users = await prisma?.user?.findMany(
      )
     res.json({status: true, users})
}

//inserting new user
const handlerPost: NextApiHandler = async (req, res) => {
     const {name, email} = req.body
    
     const newUser = await prisma?.user?.create({
          data: {name: name, email: email}
     })
     res.status(201).json({status: true, user: newUser})
}

const handler: NextApiHandler = async (req, res) => {
     switch(req.method) {
          case 'GET':
               handlerGet(req, res)
               break
          case 'POST':
               handlerPost(req, res)
               break
     }
}
export default handler




