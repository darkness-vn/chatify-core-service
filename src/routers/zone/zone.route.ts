import { Router } from "express"
import Routes from "../../types/routes"
import ZoneController from "./zone.controller"
import AuthMiddleware from "../../middlewares/auth.middleware";

export default class AuthRoute implements Routes {
    public path = '/zone';
    public router = Router();
    public controller = new ZoneController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/zone-detail/:zoneId`, AuthMiddleware, this.controller.getZoneDetail)
        this.router.get(`${this.path}/participated-zone`, AuthMiddleware, this.controller.getParticipatedZone);
        this.router.post(`${this.path}/participated-zone`, AuthMiddleware, this.controller.participate)
        this.router.put(`${this.path}/participated-zone/left/:zoneId`, AuthMiddleware, this.controller.leftZone)
    }
}