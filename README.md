# ActivityPub Types
Extracted types and refactor from [activitypub-models](https://github.com/SiranWeb/activitypub-models) repo.

## Installation
```bash
npm i activitypub-types
# or
yarn add activitypub-types
```

## Available types
Implemented and documented every structure from [specification](https://www.w3.org/TR/activitystreams-vocabulary).
You can use interfaces and extend them by yourself, or you can use specified fields types:
```typescript
// All models interfaces starts with AP
import { APObject, APNote, ContextField, ContentMapField } from 'activitypub-types';
```

## Changelog
### v1.0.3
- Use `orderedItems` instead of `items` in `OrderedCollection` ([#1](https://github.com/siranweb/activitypub-types/pull/1), thanks [@RangerMauve](https://github.com/RangerMauve))

## Contact
You can contact me via [matrix](https://matrix.to/#/@siranweb:matrix.org) or [telegram](https://t.me/siranweb)

## License
[MIT](LICENSE)