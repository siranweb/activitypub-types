# ActivityPub Types
TypeScript typings for ActivityPub

## Installation
```bash
npm i activitypub-types
# or
yarn add activitypub-types
```

## How to use
Implemented and documented every structure from [specification](https://www.w3.org/TR/activitystreams-vocabulary).
You can use interfaces and extend them by yourself, or you can use specified fields types.

To specify object use correct type:
```ts
import { APAdd } from 'activitypub-types';
const addActivity: APAdd = {
    type: 'Add',
    actor: 'https://actor.example.org',
    // ...
}
```
Fields in types are pretty flexible, so you can pass different variations:
```ts
import { APAdd, APActor } from 'activitypub-types';

const actor1 = 'https://actor.example.org';

const actor2: APActor = {
    type: 'Person',
    id: 'https://actor2.example.org',
    summary: 'Another actor',
    inbox: 'https://actor2.example.org/inbox',
    outbox: 'https://actor2.example.org/outbox',
};

const addActivity: APAdd = {
    type: 'Add',
    actor: [actor1, actor2],
    // ...
};
```

To provide `@context` field use `APRoot`:
```typescript
import { APAdd, APRoot } from 'activitypub-types';

const addActivity: APRoot<APAdd> = {
    '@context': 'https://www.w3.org/ns/activitystreams',
    type: 'Add',
    // ...
}
```

If you need field types themselves, you can import as well:
```typescript
import { TypeField, NameField } from 'activitypub-types';

interface APExample {
    type: TypeField;
    name?: NameField;
    // ...
}
```

## Changelog
### v1.1.0
- Update activities and documents types ([#3](https://github.com/siranweb/activitypub-types/pull/3), by [@Saiv46](https://github.com/Saiv46))
- Add `APRoot` type and removed `@context` from `APObject` ([#5](https://github.com/siranweb/activitypub-types/pull/5))
- Improve AP documentation ([#3](https://github.com/siranweb/activitypub-types/pull/3), by [@Saiv46](https://github.com/Saiv46))
- Update README docs
- Refactor ([#3](https://github.com/siranweb/activitypub-types/pull/3), by [@Saiv46](https://github.com/Saiv46))

### v1.0.3
- Use `orderedItems` instead of `items` in `OrderedCollection` ([#1](https://github.com/siranweb/activitypub-types/pull/1), by [@RangerMauve](https://github.com/RangerMauve))

## License
[MIT](LICENSE)
