# muscle-track-mfe-login

Micro frontend login component to be used with the main [container](https://github.com/michaelpmcmillan/muscle-track-mfe-container).

## Run in Development

```bash
yarn start:dev
```

## Notes

- Uses gotrue-js for auth
- Uses react-helmet to inject html headers, such as css cdn links. This keeps the micro-front-end self contained.
- Uses react-bootstrap and the bootstrap cdn.

## How was this app started?

```bash
npm install --global create-single-spa
npx create-single-spa
.
single-spa application / parcel
react
yarn
y (typescript)
michaelpmcmillan
muscle-track-mfe-login
```
