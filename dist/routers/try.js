"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crypto_1 = require("crypto");
/** @router : Use for test only */
class AuthRoute {
    constructor() {
        this.path = '/try';
        this.router = (0, express_1.Router)();
        this.items = [
            { _id: (0, crypto_1.randomUUID)(), name: "Vat pham 1", desc: "String 01" },
            { _id: (0, crypto_1.randomUUID)(), name: "Vat pham 2", desc: "String 02" },
        ];
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}/items`, (req, res) => {
            res.status(200).json(this.items);
        });
        this.router.delete(`${this.path}/items/:id`, (req, res) => {
            const { id } = req.params;
            const newItems = this.items.filter(i => i._id !== id);
            this.items = newItems;
            res.status(200).json("OK");
        });
        this.router.post(`${this.path}/items`, (req, res) => {
            const { name, desc } = req.body;
            const _id = (0, crypto_1.randomUUID)();
            this.items.push({ _id, name, desc });
            res.status(200).json("OK");
        });
    }
}
exports.default = AuthRoute;
