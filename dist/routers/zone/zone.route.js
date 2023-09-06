"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zone_controller_1 = __importDefault(require("./zone.controller"));
const auth_middleware_1 = __importDefault(require("../../middlewares/auth.middleware"));
class AuthRoute {
    constructor() {
        this.path = '/zone';
        this.router = (0, express_1.Router)();
        this.controller = new zone_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}/zone-detail/:zoneId`, auth_middleware_1.default, this.controller.getZoneDetail);
        this.router.get(`${this.path}/participated-zone`, auth_middleware_1.default, this.controller.getParticipatedZone);
        this.router.post(`${this.path}/participated-zone`, auth_middleware_1.default, this.controller.participate);
        this.router.put(`${this.path}/participated-zone/left/:zoneId`, auth_middleware_1.default, this.controller.leftZone);
    }
}
exports.default = AuthRoute;
