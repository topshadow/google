'use strict';

/**
 * 加载TypeScript 编译器,然后加载TypeScript的gulpfile文件,该文件里面会加载所有的任务
 * 所有的任务实际上是在 tools/gulp/tasks
 */

const path = require('path');

// 注册ts 编译器 
require('ts-node').register({
    project:path.join(__dirname,'tools/gulp')
});

require('./tools/gulp/gulpfile');