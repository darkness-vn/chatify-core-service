import { Router, Request, Response } from "express"
import Routes from "../types/routes";
import { randomUUID } from "crypto"
/** @router : Use for test only */
export default class AuthRoute implements Routes {
    public path = '/try';
    public router = Router();
    public items = [
        {_id: randomUUID(), name: "Vat pham 1", desc: "String 01"},
        {_id: randomUUID(), name: "Vat pham 2", desc: "String 02"},
    ]
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/items`, (req, res) => {
            res.status(200).json(this.items)
        })

        this.router.delete(`${this.path}/items/:id`, (req, res) => {
            const { id } = req.params
            const newItems = this.items.filter(i => i._id !== id)
            this.items = newItems
            res.status(200).json("OK")
        })

        this.router.post(`${this.path}/items`, (req, res) => {
            const { name, desc } = req.body
            const _id = randomUUID()
            this.items.push({_id, name, desc})
            res.status(200).json("OK")
        })
    }
}