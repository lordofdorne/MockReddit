"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const postgresql_1 = require("@mikro-orm/postgresql");
const path_1 = __importDefault(require("path"));
exports.default = (0, postgresql_1.defineConfig)({
    allowGlobalContext: true,
    migrations: {
        path: path_1.default.join(__dirname, './migrations'),
        glob: '!(*.d).{js,ts}',
    },
    entities: [Post_1.Post],
    dbName: 'newreddit',
    debug: !constants_1.__prod__,
});
//# sourceMappingURL=mikro-orm.config.js.map