# Client for MicroService

## Libraries Used
This client project uses the following libraries and tools:

#### Core
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [React-Query](https://react-query.tanstack.com/)

#### Utilities
- [ ] [TypeStyle](https://github.com/typestyle/typestyle) makes css typesafe.

#### Developer Experience
- [x] [ESLint](https://github.com/eslint/eslint) for linting.

#### Testing
- [x] [Jest](https://github.com/facebook/jest) as test runner.
- [x] [TS Jest](https://github.com/kulshekhar/ts-jest) as Jest preprocessor
- [ ] [Enzyme](https://github.com/airbnb/enzyme) for rendering React Components.
- [ ] [Jest Enzyme](https://github.com/blainekasten/enzyme-matchers) for asserting React Components.

#### Doc
- [ ] [Storybook](https://github.com/storybookjs/storybook) - UI component dev & test: React and more.

## Usage

```bash
# Installing Dependencies
$ yarn # or
$ npm i


# This starts the app in development mode
$ yarn dev # or
$ npm run dev

# Starting it with the production build (todo)
$ NODE_ENV=production npm start # or
$ yarn start

# Building
$ yarn build # This builds the app in development mode
$ npm run build

# Testing
$ yarn test # or
$ npm run test

# Too see doc, run this command, and go to localhost:6060. Any component that has .md file with the same name will be
# doc-generated. (todo)
$ yarn doc
```

## License

---
This app is released under the [MIT license](https://opensource.org/licenses/MIT).
