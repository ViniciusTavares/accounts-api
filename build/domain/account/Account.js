"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor({ firstName, lastName, country, email, dob, mfa, amt, createdDate, referredBy, }) {
        Object.assign(this, {
            firstName,
            lastName,
            country,
            email,
            dob,
            mfa,
            amt,
            createdDate,
            referredBy,
        });
    }
}
exports.default = Account;
//# sourceMappingURL=Account.js.map