"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_pino_logger_1 = __importDefault(require("koa-pino-logger"));
const isDevEnv = process.env.NODE_ENV !== 'production';
const logLevel = 'debug';
function default_1() {
    return koa_pino_logger_1.default({
        prettyPrint: isDevEnv,
        level: logLevel,
    });
}
exports.default = default_1;
//# sourceMappingURL=request-logger.js.map