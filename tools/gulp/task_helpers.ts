import * as child_process from 'child_process';
import * as fs from 'fs';
import * as gulp from 'gulp';
import * as gulpTs from 'gulp-typescript';
import * as path from 'path';

import {NPM_VENDOR_FILES, PROJECT_ROOT, DIST_ROOT} from './constants';
const gulpClean = require('gulp-clean');
const gulpRunSequence = require('run-sequence');

/** 删除文件 */
export function cleanTask(glob:string){
    return ()=>gulp.src(glob,{read:false}).pipe(gulpClean(null));
};

/**
构建任务依赖所有应用的构建任务
*/
export function buildAppTask(appName:string){
  const buildTasks = ['vendor', 'ts', 'scss', 'assets']
      .map(taskName => `:build:${appName}:${taskName}`);

    return (done: () => void) => {
      gulpRunSequence(
        'clean',
        ['build:components', ...buildTasks],
        done
      );
    };
}
