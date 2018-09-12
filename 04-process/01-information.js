#!/usr/bin/node
const log=console.log;
log('arch:',process.arch);
log('platform:',process.platform);
log('pid:',process.pid);
log('execPath:',process.execPath);
//process.stdin.resume();
log('version:',process.version);
log('uid:',process.getuid());
log('gid:',process.getgid());
log('path:',process.cwd());
log('rss:',process.memoryUsage().rss);
log('heapTotal:',process.memoryUsage().heapTatal);
log('heapTatal:',process.memoryUsage().heapUsed);
log('headTotal:',process.memoryUsage().external);
log('env:',process.env);
