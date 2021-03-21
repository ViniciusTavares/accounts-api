"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const env_var_1 = __importDefault(require("env-var"));
const koa_1 = __importDefault(require("koa"));
const account_1 = __importDefault(require("./routers/account"));
const healthcheck_1 = __importDefault(require("./routers/healthcheck"));
const request_logger_1 = __importDefault(require("./middlewares/request-logger"));
const app = new koa_1.default();
app.use(request_logger_1.default());
app.use(koa_bodyparser_1.default());
app.use(healthcheck_1.default.routes());
app.use(account_1.default.routes());
const PORT = env_var_1.default.get('PORT').required().asInt();
app.listen(PORT);
//# sourceMappingURL=index.js.map