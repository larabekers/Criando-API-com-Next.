import { NextApiHandler } from "next";
import { Users } from "./users";

const handler: NextApiHandler = (req, res) => {
const { id } = req.query;

for(let i in Users) {
    if(Users[i].id.toString() === id) {
        res.json(Users[i])
        return
    }
}
res.json({error: "usuario nao encontrado"})
}

export default handler;