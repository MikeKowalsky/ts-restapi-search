"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMiddleware = (middleware, router) => {
    for (const wrapper of middleware) {
        wrapper(router);
    }
};
exports.applyRoutes = (routes, router) => {
    for (const route of routes) {
        const { method, path, handler } = route;
        //router.get('/', () => {})
        router[method](path, handler);
    }
};
//# sourceMappingURL=index.js.map