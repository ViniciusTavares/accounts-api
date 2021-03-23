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
const limit = 20;
class AccountRepository {
    constructor(db) {
        this.db = db;
    }
    fetch(filter, sort, page = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = page > 1
                ? limit * page
                : 0;
            return this.db
                .find(filter)
                .sort(sort)
                .skip(skip)
                .limit(20)
                .toArray();
        });
    }
}
exports.default = AccountRepository;
//# sourceMappingURL=AccountRepository.js.map