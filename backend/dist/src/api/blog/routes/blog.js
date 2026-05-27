"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: "GET",
            path: "/blogs",
            handler: "blog.find",
            config: {
                auth: false
            }
        }
    ]
};
