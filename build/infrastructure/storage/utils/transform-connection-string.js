"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (connection) => {
    const connectionString = connection.url;
    const isSrvHost = (connectionString || '').slice(0, 11) === 'mongodb+srv';
    if (isSrvHost) {
        const host = connectionString.slice(14);
        const { user, password } = connection;
        return `mongodb+srv://${user}:${password}@${host}`;
    }
    return connectionString;
};
//# sourceMappingURL=transform-connection-string.js.map