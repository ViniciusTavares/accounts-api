"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const container_1 = __importDefault(require("../dependency-container/container"));
const dependency_enum_1 = __importDefault(require("../dependency-container/dependency.enum"));
const controller = container_1.default.get(dependency_enum_1.default.ACCOUNT_CONTROLLER);
const router = new router_1.default({
    prefix: '/product',
});
router.get('/', (...args) => controller.fetchAccounts(...args));
exports.default = router;
//# sourceMappingURL=account.js.map