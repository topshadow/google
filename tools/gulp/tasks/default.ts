import {task} from 'gulp';
const gulp = require('gulp');

task('default', ['help']);

task('help', function() {
  const taskList = Object.keys(gulp.tasks)
    .filter(taskName => !taskName.startsWith(':'))
    .filter(taskName => !taskName.startsWith('ci:'))
    .filter(taskName => taskName != 'default')
    .sort();

  console.log(`\n任务列表命令:\n   `, taskList.join('\n    '));
  console.log(`\n推荐选项 "test" or "serve:devapp".\n\n`);
});