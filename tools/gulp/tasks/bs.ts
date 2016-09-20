import { task, watch } from 'gulp';
import * as path from 'path';

import { SOURCE_ROOT, PROJECT_ROOT, DIST_ROOT } from '../constants';
import {
    buildAppTask, vendorTask, tsBuildTask, sassBuildTask,
    copyTask, sequenceTask, serverTask
} from '../task_helpers';

const appDir = path.join(SOURCE_ROOT, 'bs-app');
const outDir = DIST_ROOT;
// const PROTRACTOR_CONFIG_PATH = path.join(PROJECT_ROOT, 'test/protractor.conf.js');


task(':watch:bsapp', () => {
    watch(path.join(appDir, '**/*.ts'), [':build:bsapp:ts']);
    watch(path.join(appDir, '**/*.scss'), [':build:bsapp:scss']);
    watch(path.join(appDir, '**/*.html'), [':build:bsapp:assets']);
});

task(':build:bsapp:vendor', vendorTask());
task(':build:bsapp:ts', [':build:components:ts'], tsBuildTask(appDir));
task(':build:bsapp:scss', [':build:components:scss'], sassBuildTask(outDir, appDir, []));
task(':build:bsapp:assets', [':build:components:assets'], copyTask(appDir, outDir));

task('build:bsapp', buildAppTask('bsapp'));


let stopBsServer: () => void = null;
task(':serve:bsapp', serverTask(false, (stream) => { stopBsServer = () => stream.emit('kill'); }));

task('serve:bsapp', ['build:bsapp'], sequenceTask([
    ':inline-resources',
    ':serve:bsapp',
    ':watch:components',
    ':watch:bsapp'
]));

