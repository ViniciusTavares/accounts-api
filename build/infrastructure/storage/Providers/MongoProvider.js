"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const config_1 = __importDefault(require("../config"));
const transform_connection_string_1 = __importDefault(require("../utils/transform-connection-string"));
class MongoConnection {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
    static getInstance() {
        if (!MongoConnection.instance) {
            MongoConnection.instance = new MongoConnection();
        }
        return MongoConnection.instance;
    }
    collection(name) {
        return this.conn.collection(name);
    }
    connection() {
        return this.conn;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = new mongodb_1.MongoClient(transform_connection_string_1.default(config_1.default), {
                useUnifiedTopology: true,
            });
            this.client = client;
            try {
                yield client.connect();
                this.conn = client.db(config_1.default.connection.database);
            }
            catch (e) {
                // logger.error(e.message, dbConfig.connection.url);
                throw e;
            }
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.client.close();
            }
            catch (e) {
                // logger.error(e.message, dbConfig.connection.url);
                throw e;
            }
        });
    }
}
exports.default = MongoConnection;
//# sourceMappingURL=MongoProvider.js.map