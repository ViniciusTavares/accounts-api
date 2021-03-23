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
Object.defineProperty(exports, "__esModule", { value: true });
class AccountController {
    constructor(accountService) {
        this.accountService = accountService;
    }
    fetchAccounts(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = ctx.query.filter
                ? JSON.parse(ctx.query.filter)
                : {};
            const sort = ctx.query.sort
                ? JSON.parse(ctx.query.sort)
                : {};
            const page = ctx.query.page;
            const result = yield this.accountService.fetchAccounts(filter, sort, page);
            ctx.response.status = 200;
            ctx.response.body = result;
        });
    }
}
exports.default = AccountController;
//# sourceMappingURL=AccountController.js.map