"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = void 0;
function isString(target, key) {
    let val = target[key];
    const getter = function () {
        console.log(`Getting value: ${val}`);
        return val;
    };
    const setter = function (newValue) {
        console.log(`Setting value: ${newValue}`);
        if (typeof newValue !== "string") {
            throw new Error('Invalid value!');
        }
        val = newValue;
    };
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
    });
}
exports.isString = isString;
