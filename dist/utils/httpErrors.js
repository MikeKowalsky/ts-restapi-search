"use strict";
// formats the message which can be digested by built-in Error object
Object.defineProperty(exports, "__esModule", { value: true });
class HTTPClientError extends Error {
    constructor(message) {
        if (message instanceof Object) {
            super(JSON.stringify(message));
        }
        else {
            super(message);
        }
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.HTTPClientError = HTTPClientError;
class HTTP400Error extends HTTPClientError {
    constructor(message = "Bad Request") {
        super(message);
        this.statusCode = 400;
    }
}
exports.HTTP400Error = HTTP400Error;
class HTTP404Error extends HTTPClientError {
    constructor(message = "Not found") {
        super(message);
        this.statusCode = 404;
    }
}
exports.HTTP404Error = HTTP404Error;
// throw new HTTP400Error({message: 'password is too short'})
// throw new HTTP400Error()
//# sourceMappingURL=httpErrors.js.map