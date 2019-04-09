"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMiddleware = (middleware, router) => {
    for (const wrapper of middleware) {
        wrapper(router);
    }
};
//# sourceMappingURL=index.js.map