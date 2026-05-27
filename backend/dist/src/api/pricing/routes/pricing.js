"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: "GET",
            path: "/pricings",
            handler: "pricing.find",
            config: {
                auth: false
            }
        }
    ]
};
