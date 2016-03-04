# github-npm-profile

> Infer a GitHub user's npm profile

# install

```shell
npm i github-npm-profile -S
```

# api

```js
const getProfile = require('github-npm-profile');

getProfile('kittens').then(user => console.log(user));
```

logs:

```json
{
  "name": "Sebastian McKenzie",
  "email": "sebmck@gmail.com",
  "homepage": "http://sebmck.com",
  "github": null,
  "twitter": null,
  "freenode": "sebmck"
}
```

# cli

```shell
github-npm-profile kittens
```

logs:

```js
{ name: 'Sebastian McKenzie',
  email: 'sebmck@gmail.com',
  homepage: 'http://sebmck.com',
  github: null,
  twitter: null,
  freenode: 'sebmck' }
```

# web

```shell
curl https://github-npm-profile.herokuapp.com/kittens
```

response:

```json
{
  "status": 200,
  "body": {
    "name": "Sebastian McKenzie",
    "email": "sebmck@gmail.com",
    "homepage": "http://sebmck.com",
    "github": null,
    "twitter": null,
    "freenode": "sebmck"
  }
}
```

# license

mit
