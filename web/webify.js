const transformTools = require('browserify-transform-tools');
const fs = require('fs');
const path = require('path');

module.exports = transformTools.makeRequireTransform("webify", {jsFilesOnly: true, evaluateArguments: true}, (args, opts, done) => {
  const file = args[0];
  const fileDir = path.dirname(opts.file);
  const webVersionExists = fs.existsSync(path.relative(fileDir, file + '.web.js'));
  
  if (webVersionExists) {
    done(null, "require('" + file + '.web' + "')");
  } else {
    done();
  }
});