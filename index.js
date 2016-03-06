const npmFromGitHub = require('find-npm-by-github');
const npmUser = require('npm-user');

module.exports = (github, options) => {
  return new Promise((resolve, reject) => {
    npmFromGitHub(options.gh, github, (err, npm) => {
      if (err) { reject(err); }
      else if (!npm) { reject(new Error('npm username not found.')); }
      else { resolve(npm); }
    });
  }).then(npmUser);
};
