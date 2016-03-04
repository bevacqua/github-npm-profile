const npmFromGitHub = require('find-npm-by-github');
const npmUser = require('npm-user');
const token = 'af9cf3b2d742e7ade074ac310acd30484d5f1980';

module.exports = (github) => {
  return new Promise((resolve, reject) => {
    npmFromGitHub(token, github, (err, npm) => {
      if (err) { reject(err); }
      else if (!npm) { reject(new Error('npm username not found.')); }
      else { resolve(npm); }
    });
  }).then(npmUser);
};
