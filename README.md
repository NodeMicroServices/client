# next-query-boilerplate

[![Dependency Status](https://david-dm.org/madame-organic/next-query-boilerplate.svg)](https://david-dm.org/madame-organic/next-query-boilerplate)
[![devDependency Status](https://david-dm.org/madame-organic/next-query-boilerplate/dev-status.svg)](https://david-dm.org/madame-organic/next-query-boilerplate?type=dev)
[![Github issues](https://img.shields.io/github/issues/madame-organic/next-query-boilerplate.svg)](https://github.com/madame-organic/next-query-boilerplate/issues)
[![Github Discussions](https://img.shields.io/badge/Github%20Discussions%20%26%20Support-Chat%20now!-blue)](https://github.com/madame-organic/next-query-boilerplate/discussions)
___

##### Next.js Boilerplate

[![TypeScript](./.github/typescript.svg)](https://www.typescriptlang.org/)
[![Next.js](./.github/nextjs.svg)](https://github.com/vercel/next.js/)
[![react-query](./.github/react-query.svg)](https://github.com/tannerlinsley/react-query)

## Libraries
This boilerplate uses the following libraries and tools:

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

#### ToDos
- [x] i18n
- [x] Sentry
- [x] Analytics
- [ ] Typestyle / styled-component
- [ ] Docker
- [ ] Github actions

## Directory Structure
```bash
.
├── build                       # Built, ready to serve app.
├── config                      # Root folder for configurations.
│   └── main.local.js           # Local App configurations.
├── node_modules                # Node Packages.
├── public                      # Root folder public files like favicon.
│   └── favico.ico              # Fav Icon
├── src                         # Source code.
│   ├── components              # Unconnected Components.
│   ├── styles                  # Style for the Components.
│   └── pages                   # Page Components which will also be route.
├── translations                # For json translations.
├── .dockerignore               # Tells docker which files to ignore.
├── .gitignore                  # Tells git which files to ignore.
├── Dockerfile                  # Dockerfile.
├── LICENSE                     # License file
├── package.json                # Package configuration.
├── yarn.lock                   # Package lock
├── README.md                   # This file
├── styleguide.config.js        # Config for doc
└── tsconfig.json               # TypeScript transpiler configuration.
```

## Installation

You can clone from this repository and use master

```bash
$ git clone https://github.com/madame-organic/next-query-boilerplate
$ cd next-query-boilerplate
$ yarn install
```

Or you can use this template to create your project by clicking [here](https://github.com/madame-organic/next-query-boilerplate/generate). 

## Usage

All commands defaults to development environment. You can set `NODE_ENV` to `production` or use the shortcuts below.

```bash
# Running

$ yarn dev # This starts the app in development mode

# Starting it with the production build (todo)
$ NODE_ENV=production npm start # or
$ yarn start

# Building (todo)
$ yarn build # This builds the app in development mode

# Commands below builds the production build (todo)
$ NODE_ENV=production yarn build # or
$ yarn build:prod

# Testing (todo)
$ yarn test

# Too see doc, run this command, and go to localhost:6060. Any component that has .md file with the same name will be
# doc-generated. (todo)
$ yarn doc
```

For Windows users, we recommend using the shortcuts instead of setting environment variables because they work a little
different on Windows.

## License

This boilerplate is released under the [MIT license](https://opensource.org/licenses/MIT).

___

## [Madame Organic](https://www.madameorganic.co.th/en/)

Madame Organic manufactures beauty products like soap, makeup, etc.

You can contact us at [developer@bchurunway.com](mailto:developer@bchurunway.com)
