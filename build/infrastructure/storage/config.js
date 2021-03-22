"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_var_1 = __importDefault(require("env-var"));
const exceptForTests = process.env.NODE_ENV !== 'test';
const db = Object.freeze({
    connection: {
        url: env_var_1.default.get('DB_URL').required(exceptForTests).asString(),
        user: env_var_1.default.get('DB_USER').required(exceptForTests).asString(),
        password: env_var_1.default.get('DB_PASSWORD').required(exceptForTests).asString(),
        database: env_var_1.default.get('DB_DATABASE').required(exceptForTests).asString()
    },
    collections: {
        accounts: 'accounts',
    },
});
exports.default = db;
//# sourceMappingURL=config.js.map