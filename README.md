# envoydemo

A very simple Cloudant Envoy demo.

Run this web app with an `ENVOY_URL` environment variable that defines which Cloudant Envoy instance to use.

e.g.

```sh
export ENVOY_URL=https://myenvoy.mybluemix.net
node index.js
```

or 

```sh
export ENVOY_URL=http://localhost:8000
node index.js
```

It can also deploy to Bluemix.