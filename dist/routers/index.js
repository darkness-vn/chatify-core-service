"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Try = exports.ZoneRoute = exports.AuthRoute = void 0;
var auth_route_1 = require("./auth/auth.route");
Object.defineProperty(exports, "AuthRoute", { enumerable: true, get: function () { return __importDefault(auth_route_1).default; } });
var zone_route_1 = require("./zone/zone.route");
Object.defineProperty(exports, "ZoneRoute", { enumerable: true, get: function () { return __importDefault(zone_route_1).default; } });
var try_1 = require("./try");
Object.defineProperty(exports, "Try", { enumerable: true, get: function () { return __importDefault(try_1).default; } });
