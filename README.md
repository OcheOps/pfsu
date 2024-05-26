<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


# Project: Query Utility for Pagination, Filtering, and Sorting

This project is a utility module for a Nest.js TypeORM-based application that supports pagination, filtering, and sorting of database queries. This utility is reusable across different entities in an application.

## Overview

The utility module includes functions for applying pagination, filtering, and sorting to TypeORM query builders. A sample entity and repository are defined to demonstrate the utility functions. A base service is implemented that uses the utility module.

## Implementation

The utility module is implemented in TypeScript and includes the following functions:

- `applyPagination(queryBuilder, page, limit)`: Applies pagination to the query builder.
- `applyFilters(queryBuilder, filters)`: Applies filters to the query builder.
- `applySorting(queryBuilder, sort)`: Applies sorting to the query builder.

The utility functions are used in a base service that handles common CRUD operations. The service uses the utility functions to apply pagination, filtering, and sorting to the queries.

## Usage

To use the utility functions, import the utility module and call the functions with the appropriate parameters.

For example, to apply pagination to a query:

```typescript
import { applyPagination } from './utility';

// ...

const queryBuilder = repository.createQueryBuilder();
applyPagination(queryBuilder, page, limit);
```

## Testing

The utility functions are tested with a series of GET requests to the `/api/rooms` endpoint. The tests verify that the utility functions correctly apply pagination, filtering, and sorting to the queries.

## Deployment

The server is deployed on Render and the database is Postgres.

## Evaluation

The project is evaluated based on the following criteria:

- Code Quality: The code is clean, well-documented, and maintainable.
- Functionality: The utility functions correctly implement pagination, filtering, and sorting.
- Documentation: The documentation is clear and concise, explaining the utility functions and their usage.
- Testing: The utility functions are adequately tested to ensure functionality and reliability.

## Conclusion

This project demonstrates how to create a utility module for a Nest.js TypeORM-based application that supports pagination, filtering, and sorting of database queries. The utility is reusable across different entities in an application, making it a versatile tool for any Nest.js TypeORM-based application.