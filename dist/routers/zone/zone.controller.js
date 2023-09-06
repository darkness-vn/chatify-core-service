"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const zone_service_1 = require("./zone.service");
class ZoneController {
    constructor() {
        this.service = typedi_1.Container.get(zone_service_1.ZoneService);
        this.getZoneDetail = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { zoneId } = req.params;
                const detail = yield this.service.getZoneDetail(zoneId);
                return res.status(200).json(detail);
            }
            catch (error) {
                console.log(`getZoneDetail Error:`, error.message);
                next(error);
            }
        });
        this.getParticipatedZone = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const uid = (_a = req.user) === null || _a === void 0 ? void 0 : _a.uid;
                const list = yield this.service.getParticipatedZone(uid);
                return res.status(200).json(list !== null && list !== void 0 ? list : []);
            }
            catch (error) {
                return res.status(404).json("Error 404");
            }
        });
        this.participate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _b;
            try {
                const { zone } = req.body;
                const uid = (_b = req.user) === null || _b === void 0 ? void 0 : _b.uid;
                yield this.service.participate(uid, zone);
                return res.status(200).json({ msg: "OK" });
            }
            catch (error) {
                next();
            }
        });
        this.leftZone = (req, res) => __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = ZoneController;
