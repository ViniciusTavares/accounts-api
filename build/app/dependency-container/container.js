"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MongoProvider_1 = __importDefault(require("../../infrastructure/storage/Providers/MongoProvider"));
const AccountRepository_1 = __importDefault(require("../../infrastructure/repositories/AccountRepository"));
const AccountService_1 = __importDefault(require("../../domain/account/AccountService"));
const AccountController_1 = __importDefault(require("../controllers/AccountController"));
const config_1 = __importDefault(require("../config"));
class DependencyContainer {
    constructor() {
        this.mongoProvider = MongoProvider_1.default.getInstance();
        this.accountRepository = new AccountRepository_1.default(this.mongoProvider.collection(config_1.default.database.collections.accounts));
        this.accountService = new AccountService_1.default({ accountRepository: this.accountRepository });
        this.accountController = new AccountController_1.default(this.accountService);
    }
    static getInstance() {
        if (!DependencyContainer.instance) {
            DependencyContainer.instance = new DependencyContainer();
        }
        return DependencyContainer.instance;
    }
    get(dependency) {
        const requestedDependency = this[dependency];
        if (!requestedDependency) {
            throw new Error('invalid dependency request');
        }
        return requestedDependency;
    }
}
exports.default = DependencyContainer;
//# sourceMappingURL=container.js.map