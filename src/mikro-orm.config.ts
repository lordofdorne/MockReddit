import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { defineConfig } from '@mikro-orm/postgresql';
import path from "path";
export default defineConfig ({
    allowGlobalContext: true,
    migrations: {
        path: path.join(__dirname, './migrations'), // path to the folder with migrations 
        glob: '!(*.d).{js,ts}',
    },
    entities: [Post],
    dbName: 'newreddit',
    debug: !__prod__,
    // type: 'postgresql',
    // user: '',
    // password: ''
}); 
