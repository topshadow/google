import {task, watch} from 'gulp';
import * as path from 'path';

import {DIST_ROOT, SOURCE_ROOT} from '../constants';
import {buildAppTask} from '../task_helpers';

const appDir = path.join(SOURCE_ROOT,'demo-app');
const outDir = DIST_ROOT;



task('build:devapp',buildAppTask('devApp'));

task('serve:devapp',['build:devapp']);
