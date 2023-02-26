import { NextApiHandler } from "next";
import { Users } from "./users";

//Getting all users
const handlerGet: NextApiHandler = async ({req, res}: any) => {
     res.json(Users);
}

//Inserting new user
const handlerPost: NextApiHandler = async ({req, res}: any) => {
     res.json({status: true});
}

const handler: NextApiHandler = async ({req, res}: any) => {
     switch (req.method) {
          case 'GET':
               handlerGet(req, res)
               break
          case 'POST':
               handlerPost(req, res)
               break
     }
}

export default handler;