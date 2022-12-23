# apollopractice

Tutorial from grpahql associate certfication on apollo odyessy course
Have added functionality around queries, mutations and deprecating fields in certain operations.]
Comments throughout codebase to aid understanding and show evidence of increasing competency.

## Deployment links

### client

https://apollopractice-production-36ee.up.railway.app/

### backend

https://apollopractice-production.up.railway.app/

# Package list

## Server

apollo-datasource-rest@3.7.0
│ ├─┬ @apollo/utils.keyvaluecache@1.0.2
│ │ ├── @apollo/utils.logger@1.0.1
│ │ └── lru-cache@7.13.1
│ ├─┬ apollo-datasource@3.3.2
│ │ ├── @apollo/utils.keyvaluecache@1.0.2 deduped
│ │ └── apollo-server-env@4.2.1 deduped
│ ├─┬ apollo-server-env@4.2.1
│ │ └─┬ node-fetch@2.6.7
│ │ └─┬ whatwg-url@5.0.0
│ │ ├── tr46@0.0.3
│ │ └── webidl-conversions@3.0.1
│ ├── apollo-server-errors@3.3.1
│ └── http-cache-semantics@4.1.0
├─┬ apollo-server@3.11.1
│ ├─┬ @types/express@4.17.14
│ │ ├─┬ @types/body-parser@1.19.2
│ │ │ ├─┬ @types/connect@3.4.35
│ │ │ │ └── @types/node@18.11.17 deduped
│ │ │ └── @types/node@18.11.17
│ │ ├─┬ @types/express-serve-static-core@4.17.31
│ │ │ ├── @types/node@18.11.17 deduped
│ │ │ ├── @types/qs@6.9.7 deduped
│ │ │ └── @types/range-parser@1.2.4
│ │ ├── @types/qs@6.9.7
│ │ └─┬ @types/serve-static@1.15.0
│ │ ├── @types/mime@3.0.1
│ │ └── @types/node@18.11.17 deduped
│ ├─┬ apollo-server-core@3.11.1
│ │ ├── @apollo/utils.keyvaluecache@1.0.2 deduped
│ │ ├── @apollo/utils.logger@1.0.1 deduped
│ │ ├─┬ @apollo/utils.usagereporting@1.0.1
│ │ │ ├─┬ @apollo/usage-reporting-protobuf@4.0.2
│ │ │ │ └─┬ @apollo/protobufjs@1.2.7
│ │ │ │ ├── @protobufjs/aspromise@1.1.2 deduped
│ │ │ │ ├── @protobufjs/base64@1.1.2 deduped
│ │ │ │ ├── @protobufjs/codegen@2.0.4 deduped
│ │ │ │ ├── @protobufjs/eventemitter@1.1.0 deduped
│ │ │ │ ├── @protobufjs/fetch@1.1.0 deduped
│ │ │ │ ├── @protobufjs/float@1.0.2 deduped
│ │ │ │ ├── @protobufjs/inquire@1.1.0 deduped
│ │ │ │ ├── @protobufjs/path@1.1.2 deduped
│ │ │ │ ├── @protobufjs/pool@1.1.0 deduped
│ │ │ │ ├── @protobufjs/utf8@1.1.0 deduped
│ │ │ │ ├── @types/long@4.0.2 deduped
│ │ │ │ └── long@4.0.0 deduped
│ │ │ ├── @apollo/utils.dropunuseddefinitions@1.1.0
│ │ │ ├── @apollo/utils.printwithreducedwhitespace@1.1.0
│ │ │ ├── @apollo/utils.removealiases@1.0.0
│ │ │ ├─┬ @apollo/utils.sortast@1.1.0
│ │ │ │ └── lodash.sortby@4.7.0
│ │ │ └── @apollo/utils.stripsensitiveliterals@1.2.0
│ │ ├── @apollographql/apollo-tools@0.5.4
│ │ ├─┬ @apollographql/graphql-playground-html@1.6.29
│ │ │ └─┬ xss@1.0.14
│ │ │ ├── commander@2.20.3
│ │ │ └── cssfilter@0.0.10
│ │ ├─┬ @graphql-tools/mock@8.7.14
│ │ │ ├─┬ @graphql-tools/schema@9.0.12
│ │ │ │ ├─┬ @graphql-tools/merge@8.3.14
│ │ │ │ │ ├── @graphql-tools/utils@9.1.3 deduped
│ │ │ │ │ └── tslib@2.4.1 deduped
│ │ │ │ ├── @graphql-tools/utils@9.1.3 deduped
│ │ │ │ ├── tslib@2.4.1 deduped
│ │ │ │ └── value-or-promise@1.0.11 deduped
│ │ │ ├─┬ @graphql-tools/utils@9.1.3
│ │ │ │ └── tslib@2.4.1 deduped
│ │ │ ├── fast-json-stable-stringify@2.1.0 deduped
│ │ │ └── tslib@2.4.1
│ │ ├─┬ @graphql-tools/schema@8.5.1
│ │ │ ├─┬ @graphql-tools/merge@8.3.1
│ │ │ │ ├── @graphql-tools/utils@8.9.0 deduped
│ │ │ │ └── tslib@2.4.1 deduped
│ │ │ ├─┬ @graphql-tools/utils@8.9.0
│ │ │ │ └── tslib@2.4.1 deduped
│ │ │ ├── tslib@2.4.1 deduped
│ │ │ └── value-or-promise@1.0.11
│ │ ├── @josephg/resolvable@1.0.1
│ │ ├── apollo-datasource@3.3.2 deduped
│ │ ├─┬ apollo-reporting-protobuf@3.3.3
│ │ │ └─┬ @apollo/protobufjs@1.2.6
│ │ │ ├── @protobufjs/aspromise@1.1.2
│ │ │ ├── @protobufjs/base64@1.1.2
│ │ │ ├── @protobufjs/codegen@2.0.4
│ │ │ ├── @protobufjs/eventemitter@1.1.0
│ │ │ ├─┬ @protobufjs/fetch@1.1.0
│ │ │ │ ├── @protobufjs/aspromise@1.1.2 deduped
│ │ │ │ └── @protobufjs/inquire@1.1.0 deduped
│ │ │ ├── @protobufjs/float@1.0.2
│ │ │ ├── @protobufjs/inquire@1.1.0
│ │ │ ├── @protobufjs/path@1.1.2
│ │ │ ├── @protobufjs/pool@1.1.0
│ │ │ ├── @protobufjs/utf8@1.1.0
│ │ │ ├── @types/long@4.0.2
│ │ │ ├── @types/node@10.17.60
│ │ │ └── long@4.0.0
│ │ ├── apollo-server-env@4.2.1 deduped
│ │ ├── apollo-server-errors@3.3.1 deduped
│ │ ├─┬ apollo-server-plugin-base@3.7.1
│ │ │ └─┬ apollo-server-types@3.7.1
│ │ │ ├── @apollo/utils.keyvaluecache@1.0.2 deduped
│ │ │ ├── @apollo/utils.logger@1.0.1 deduped
│ │ │ ├── apollo-reporting-protobuf@3.3.3 deduped
│ │ │ └── apollo-server-env@4.2.1 deduped
│ │ ├─┬ apollo-server-types@3.7.1
│ │ │ ├── @apollo/utils.keyvaluecache@1.0.2 deduped
│ │ │ ├── @apollo/utils.logger@1.0.1 deduped
│ │ │ ├── apollo-reporting-protobuf@3.3.3 deduped
│ │ │ └── apollo-server-env@4.2.1 deduped
│ │ ├─┬ async-retry@1.3.3
│ │ │ └── retry@0.13.1
│ │ ├── fast-json-stable-stringify@2.1.0
│ │ ├─┬ graphql-tag@2.12.6
│ │ │ └── tslib@2.4.1 deduped
│ │ ├── loglevel@1.8.1
│ │ ├─┬ lru-cache@6.0.0
│ │ │ └── yallist@4.0.0
│ │ ├── node-abort-controller@3.0.1
│ │ ├─┬ sha.js@2.4.11
│ │ │ ├── inherits@2.0.4
│ │ │ └── safe-buffer@5.2.1 deduped
│ │ ├── uuid@9.0.0
│ │ └── whatwg-mimetype@3.0.0
│ ├─┬ apollo-server-express@3.11.1
│ │ ├─┬ @types/accepts@1.3.5
│ │ │ └── @types/node@18.11.17 deduped
│ │ ├── @types/body-parser@1.19.2 deduped
│ │ ├── @types/cors@2.8.12
│ │ ├── @types/express@4.17.14 deduped
│ │ ├── @types/express-serve-static-core@4.17.31 deduped
│ │ ├─┬ accepts@1.3.8
│ │ │ ├─┬ mime-types@2.1.35
│ │ │ │ └── mime-db@1.52.0
│ │ │ └── negotiator@0.6.3
│ │ ├─┬ apollo-server-core@3.11.1
│ │ │ ├── @apollo/utils.keyvaluecache@1.0.2 deduped
│ │ │ ├── @apollo/utils.logger@1.0.1 deduped
│ │ │ ├── @apollo/utils.usagereporting@1.0.1 deduped
│ │ │ ├── @apollographql/apollo-tools@0.5.4 deduped
│ │ │ ├── @apollographql/graphql-playground-html@1.6.29 deduped
│ │ │ ├── @graphql-tools/mock@8.7.14 deduped
│ │ │ ├── @graphql-tools/schema@8.5.1 deduped
│ │ │ ├── @josephg/resolvable@1.0.1 deduped
│ │ │ ├── apollo-datasource@3.3.2 deduped
│ │ │ ├── apollo-reporting-protobuf@3.3.3 deduped
│ │ │ ├── apollo-server-env@4.2.1 deduped
│ │ │ ├── apollo-server-errors@3.3.1 deduped
│ │ │ ├── apollo-server-plugin-base@3.7.1 deduped
│ │ │ ├── apollo-server-types@3.7.1 deduped
│ │ │ ├── async-retry@1.3.3 deduped
│ │ │ ├── fast-json-stable-stringify@2.1.0 deduped
│ │ │ ├── graphql-tag@2.12.6 deduped
│ │ │ ├── loglevel@1.8.1 deduped
│ │ │ ├─┬ lru-cache@6.0.0
│ │ │ │ └── yallist@4.0.0 deduped
│ │ │ ├── node-abort-controller@3.0.1 deduped
│ │ │ ├── sha.js@2.4.11 deduped
│ │ │ ├── uuid@9.0.0 deduped
│ │ │ └── whatwg-mimetype@3.0.0 deduped
│ │ ├─┬ apollo-server-types@3.7.1
│ │ │ ├── @apollo/utils.keyvaluecache@1.0.2 deduped
│ │ │ ├── @apollo/utils.logger@1.0.1 deduped
│ │ │ ├── apollo-reporting-protobuf@3.3.3 deduped
│ │ │ └── apollo-server-env@4.2.1 deduped
│ │ ├─┬ body-parser@1.20.1
│ │ │ ├── bytes@3.1.2
│ │ │ ├── content-type@1.0.4 deduped
│ │ │ ├── debug@2.6.9 deduped
│ │ │ ├── depd@2.0.0 deduped
│ │ │ ├── destroy@1.2.0
│ │ │ ├── http-errors@2.0.0 deduped
│ │ │ ├─┬ iconv-lite@0.4.24
│ │ │ │ └── safer-buffer@2.1.2
│ │ │ ├── on-finished@2.4.1 deduped
│ │ │ ├── qs@6.11.0 deduped
│ │ │ ├─┬ raw-body@2.5.1
│ │ │ │ ├── bytes@3.1.2 deduped
│ │ │ │ ├── http-errors@2.0.0 deduped
│ │ │ │ ├── iconv-lite@0.4.24 deduped
│ │ │ │ └── unpipe@1.0.0 deduped
│ │ │ ├── type-is@1.6.18 deduped
│ │ │ └── unpipe@1.0.0
│ │ ├─┬ cors@2.8.5
│ │ │ ├── object-assign@4.1.1
│ │ │ └── vary@1.1.2 deduped
│ │ └── parseurl@1.3.3
│ └─┬ express@4.18.2
│ ├── accepts@1.3.8 deduped
│ ├── array-flatten@1.1.1
│ ├── body-parser@1.20.1 deduped
│ ├─┬ content-disposition@0.5.4
│ │ └── safe-buffer@5.2.1 deduped
│ ├── content-type@1.0.4
│ ├── cookie@0.5.0
│ ├── cookie-signature@1.0.6
│ ├─┬ debug@2.6.9
│ │ └── ms@2.0.0
│ ├── depd@2.0.0
│ ├── encodeurl@1.0.2
│ ├── escape-html@1.0.3
│ ├── etag@1.8.1
│ ├─┬ finalhandler@1.2.0
│ │ ├── debug@2.6.9 deduped
│ │ ├── encodeurl@1.0.2 deduped
│ │ ├── escape-html@1.0.3 deduped
│ │ ├── on-finished@2.4.1 deduped
│ │ ├── parseurl@1.3.3 deduped
│ │ ├── statuses@2.0.1 deduped
│ │ └── unpipe@1.0.0 deduped
│ ├── fresh@0.5.2
│ ├─┬ http-errors@2.0.0
│ │ ├── depd@2.0.0 deduped
│ │ ├── inherits@2.0.4 deduped
│ │ ├── setprototypeof@1.2.0 deduped
│ │ ├── statuses@2.0.1 deduped
│ │ └── toidentifier@1.0.1
│ ├── merge-descriptors@1.0.1
│ ├── methods@1.1.2
│ ├─┬ on-finished@2.4.1
│ │ └── ee-first@1.1.1
│ ├── parseurl@1.3.3 deduped
│ ├── path-to-regexp@0.1.7
│ ├─┬ proxy-addr@2.0.7
│ │ ├── forwarded@0.2.0
│ │ └── ipaddr.js@1.9.1
│ ├─┬ qs@6.11.0
│ │ └─┬ side-channel@1.0.4
│ │ ├─┬ call-bind@1.0.2
│ │ │ ├── function-bind@1.1.1
│ │ │ └── get-intrinsic@1.1.3 deduped
│ │ ├─┬ get-intrinsic@1.1.3
│ │ │ ├── function-bind@1.1.1 deduped
│ │ │ ├─┬ has@1.0.3
│ │ │ │ └── function-bind@1.1.1 deduped
│ │ │ └── has-symbols@1.0.3
│ │ └── object-inspect@1.12.2
│ ├── range-parser@1.2.1
│ ├── safe-buffer@5.2.1
│ ├─┬ send@0.18.0
│ │ ├── debug@2.6.9 deduped
│ │ ├── depd@2.0.0 deduped
│ │ ├── destroy@1.2.0 deduped
│ │ ├── encodeurl@1.0.2 deduped
│ │ ├── escape-html@1.0.3 deduped
│ │ ├── etag@1.8.1 deduped
│ │ ├── fresh@0.5.2 deduped
│ │ ├── http-errors@2.0.0 deduped
│ │ ├── mime@1.6.0
│ │ ├── ms@2.1.3
│ │ ├── on-finished@2.4.1 deduped
│ │ ├── range-parser@1.2.1 deduped
│ │ └── statuses@2.0.1 deduped
│ ├─┬ serve-static@1.15.0
│ │ ├── encodeurl@1.0.2 deduped
│ │ ├── escape-html@1.0.3 deduped
│ │ ├── parseurl@1.3.3 deduped
│ │ └── send@0.18.0 deduped
│ ├── setprototypeof@1.2.0
│ ├── statuses@2.0.1
│ ├─┬ type-is@1.6.18
│ │ ├── media-typer@0.3.0
│ │ └── mime-types@2.1.35 deduped
│ ├── utils-merge@1.0.1
│ └── vary@1.1.2
├── dotenv@8.6.0
├── graphql@16.6.0
└─┬ nodemon@2.0.20
├─┬ chokidar@3.5.3
│ ├─┬ anymatch@3.1.3
│ │ ├── normalize-path@3.0.0 deduped
│ │ └── picomatch@2.3.1
│ ├─┬ braces@3.0.2
│ │ └─┬ fill-range@7.0.1
│ │ └─┬ to-regex-range@5.0.1
│ │ └── is-number@7.0.0
│ ├── fsevents@2.3.2
│ ├─┬ glob-parent@5.1.2
│ │ └── is-glob@4.0.3 deduped
│ ├─┬ is-binary-path@2.1.0
│ │ └── binary-extensions@2.2.0
│ ├─┬ is-glob@4.0.3
│ │ └── is-extglob@2.1.1
│ ├── normalize-path@3.0.0
│ └─┬ readdirp@3.6.0
│ └── picomatch@2.3.1 deduped
├─┬ debug@3.2.7
│ └── ms@2.1.3
├── ignore-by-default@1.0.1
├─┬ minimatch@3.1.2
│ └─┬ brace-expansion@1.1.11
│ ├── balanced-match@1.0.2
│ └── concat-map@0.0.1
├── pstree.remy@1.1.8
├── semver@5.7.1
├─┬ simple-update-notifier@1.1.0
│ └── semver@7.0.0
├─┬ supports-color@5.5.0
│ └── has-flag@3.0.0
├─┬ touch@3.1.0
│ └─┬ nopt@1.0.10
│ └── abbrev@1.1.1
└── undefsafe@2.0.5

## Client

    │ │ │ │ └── pretty-format@27.5.1 deduped

│ │ │ ├── jest-message-util@27.5.1 deduped
│ │ │ ├── jest-util@27.5.1 deduped
│ │ │ ├── natural-compare@1.4.0 deduped
│ │ │ ├── pretty-format@27.5.1 deduped
│ │ │ └── semver@7.3.8 deduped
│ │ ├── jest-util@27.5.1 deduped
│ │ ├── jest-validate@27.5.1 deduped
│ │ ├─┬ jest-watcher@27.5.1
│ │ │ ├── @jest/test-result@27.5.1 deduped
│ │ │ ├── @jest/types@27.5.1 deduped
│ │ │ ├── @types/node@18.11.17 deduped
│ │ │ ├── ansi-escapes@4.3.2 deduped
│ │ │ ├─┬ chalk@4.1.2
│ │ │ │ ├─┬ ansi-styles@4.3.0
│ │ │ │ │ └─┬ color-convert@2.0.1
│ │ │ │ │ └── color-name@1.1.4
│ │ │ │ └─┬ supports-color@7.2.0
│ │ │ │ └── has-flag@4.0.0
│ │ │ ├── jest-util@27.5.1 deduped
│ │ │ └── string-length@4.0.2 deduped
│ │ ├── micromatch@4.0.5 deduped
│ │ ├── rimraf@3.0.2 deduped
│ │ ├── slash@3.0.0 deduped
│ │ └── strip-ansi@6.0.1 deduped
│ ├─┬ import-local@3.1.0
│ │ ├── pkg-dir@4.2.0 deduped
│ │ └─┬ resolve-cwd@3.0.0
│ │ └── resolve-from@5.0.0
│ └─┬ jest-cli@27.5.1
│ ├── @jest/core@27.5.1 deduped
│ ├── @jest/test-result@27.5.1 deduped
│ ├── @jest/types@27.5.1 deduped
│ ├─┬ chalk@4.1.2
│ │ ├─┬ ansi-styles@4.3.0
│ │ │ └─┬ color-convert@2.0.1
│ │ │ └── color-name@1.1.4
│ │ └─┬ supports-color@7.2.0
│ │ └── has-flag@4.0.0
│ ├── exit@0.1.2 deduped
│ ├── graceful-fs@4.2.10 deduped
│ ├── import-local@3.1.0 deduped
│ ├── jest-config@27.5.1 deduped
│ ├── jest-util@27.5.1 deduped
│ ├── jest-validate@27.5.1 deduped
│ ├── prompts@2.4.2 deduped
│ └─┬ yargs@16.2.0
│ ├─┬ cliui@7.0.4
│ │ ├── string-width@4.2.3 deduped
│ │ ├── strip-ansi@6.0.1 deduped
│ │ └─┬ wrap-ansi@7.0.0
│ │ ├─┬ ansi-styles@4.3.0
│ │ │ └─┬ color-convert@2.0.1
│ │ │ └── color-name@1.1.4
│ │ ├── string-width@4.2.3 deduped
│ │ └── strip-ansi@6.0.1 deduped
│ ├── escalade@3.1.1 deduped
│ ├── get-caller-file@2.0.5
│ ├── require-directory@2.1.1
│ ├─┬ string-width@4.2.3
│ │ ├── emoji-regex@8.0.0
│ │ ├── is-fullwidth-code-point@3.0.0
│ │ └── strip-ansi@6.0.1 deduped
│ ├── y18n@5.0.8
│ └── yargs-parser@20.2.9
├─┬ jest-resolve@27.5.1
│ ├── @jest/types@27.5.1 deduped
│ ├─┬ chalk@4.1.2
│ │ ├─┬ ansi-styles@4.3.0
│ │ │ └─┬ color-convert@2.0.1
│ │ │ └── color-name@1.1.4
│ │ └─┬ supports-color@7.2.0
│ │ └── has-flag@4.0.0
│ ├── graceful-fs@4.2.10 deduped
│ ├─┬ jest-haste-map@27.5.1
│ │ ├── @jest/types@27.5.1 deduped
│ │ ├─┬ @types/graceful-fs@4.1.5
│ │ │ └── @types/node@18.11.17 deduped
│ │ ├── @types/node@18.11.17 deduped
│ │ ├─┬ anymatch@3.1.3
│ │ │ ├── normalize-path@3.0.0 deduped
│ │ │ └── picomatch@2.3.1 deduped
│ │ ├─┬ fb-watchman@2.0.2
│ │ │ └─┬ bser@2.1.1
│ │ │ └── node-int64@0.4.0
│ │ ├── fsevents@2.3.2 deduped
│ │ ├── graceful-fs@4.2.10 deduped
│ │ ├── jest-regex-util@27.5.1 deduped
│ │ ├─┬ jest-serializer@27.5.1
│ │ │ ├── @types/node@18.11.17 deduped
│ │ │ └── graceful-fs@4.2.10 deduped
│ │ ├── jest-util@27.5.1 deduped
│ │ ├── jest-worker@27.5.1 deduped
│ │ ├── micromatch@4.0.5 deduped
│ │ └─┬ walker@1.0.8
│ │ └─┬ makeerror@1.0.12
│ │ └── tmpl@1.0.5
│ ├── jest-pnp-resolver@1.2.3
│ ├─┬ jest-util@27.5.1
│ │ ├── @jest/types@27.5.1 deduped
│ │ ├── @types/node@18.11.17 deduped
│ │ ├─┬ chalk@4.1.2
│ │ │ ├─┬ ansi-styles@4.3.0
│ │ │ │ └─┬ color-convert@2.0.1
│ │ │ │ └── color-name@1.1.4
│ │ │ └─┬ supports-color@7.2.0
│ │ │ └── has-flag@4.0.0
│ │ ├── ci-info@3.7.0
│ │ ├── graceful-fs@4.2.10 deduped
│ │ └── picomatch@2.3.1 deduped
│ ├─┬ jest-validate@27.5.1
│ │ ├── @jest/types@27.5.1 deduped
│ │ ├── camelcase@6.3.0 deduped
│ │ ├─┬ chalk@4.1.2
│ │ │ ├─┬ ansi-styles@4.3.0
│ │ │ │ └─┬ color-convert@2.0.1
│ │ │ │ └── color-name@1.1.4
│ │ │ └─┬ supports-color@7.2.0
│ │ │ └── has-flag@4.0.0
│ │ ├── jest-get-type@27.5.1
│ │ ├── leven@3.1.0
│ │ └─┬ pretty-format@27.5.1
│ │ ├── ansi-regex@5.0.1 deduped
│ │ ├── ansi-styles@5.2.0
│ │ └── react-is@17.0.2
│ ├── resolve@1.22.1 deduped
│ ├── resolve.exports@1.1.0
│ └── slash@3.0.0 deduped
├─┬ jest-watch-typeahead@1.1.0
│ ├─┬ ansi-escapes@4.3.2
│ │ └── type-fest@0.21.3
│ ├─┬ chalk@4.1.2
│ │ ├─┬ ansi-styles@4.3.0
│ │ │ └─┬ color-convert@2.0.1
│ │ │ └── color-name@1.1.4
│ │ └─┬ supports-color@7.2.0
│ │ └── has-flag@4.0.0
│ ├── jest-regex-util@28.0.2
│ ├─┬ jest-watcher@28.1.3
│ │ ├─┬ @jest/test-result@28.1.3
│ │ │ ├─┬ @jest/console@28.1.3
│ │ │ │ ├── @jest/types@28.1.3 deduped
│ │ │ │ ├── @types/node@18.11.17 deduped
│ │ │ │ ├── chalk@4.1.2 deduped
│ │ │ │ ├─┬ jest-message-util@28.1.3
│ │ │ │ │ ├── @babel/code-frame@7.18.6 deduped
│ │ │ │ │ ├── @jest/types@28.1.3 deduped
│ │ │ │ │ ├── @types/stack-utils@2.0.1 deduped
│ │ │ │ │ ├── chalk@4.1.2 deduped
│ │ │ │ │ ├── graceful-fs@4.2.10 deduped
│ │ │ │ │ ├── micromatch@4.0.5 deduped
│ │ │ │ │ ├─┬ pretty-format@28.1.3
│ │ │ │ │ │ ├── @jest/schemas@28.1.3 deduped
│ │ │ │ │ │ ├── ansi-regex@5.0.1 deduped
│ │ │ │ │ │ ├── ansi-styles@5.2.0
│ │ │ │ │ │ └── react-is@18.2.0
│ │ │ │ │ ├── slash@3.0.0
│ │ │ │ │ └── stack-utils@2.0.6 deduped
│ │ │ │ ├── jest-util@28.1.3 deduped
│ │ │ │ └── slash@3.0.0
│ │ │ ├── @jest/types@28.1.3 deduped
│ │ │ ├── @types/istanbul-lib-coverage@2.0.4 deduped
│ │ │ └── collect-v8-coverage@1.0.1 deduped
│ │ ├─┬ @jest/types@28.1.3
│ │ │ ├─┬ @jest/schemas@28.1.3
│ │ │ │ └── @sinclair/typebox@0.24.51
│ │ │ ├── @types/istanbul-lib-coverage@2.0.4 deduped
│ │ │ ├── @types/istanbul-reports@3.0.1 deduped
│ │ │ ├── @types/node@18.11.17 deduped
│ │ │ ├─┬ @types/yargs@17.0.17
│ │ │ │ └── @types/yargs-parser@21.0.0 deduped
│ │ │ └── chalk@4.1.2 deduped
│ │ ├── @types/node@18.11.17 deduped
│ │ ├── ansi-escapes@4.3.2 deduped
│ │ ├── chalk@4.1.2 deduped
│ │ ├── emittery@0.10.2
│ │ ├─┬ jest-util@28.1.3
│ │ │ ├── @jest/types@28.1.3 deduped
│ │ │ ├── @types/node@18.11.17 deduped
│ │ │ ├── chalk@4.1.2 deduped
│ │ │ ├── ci-info@3.7.0 deduped
│ │ │ ├── graceful-fs@4.2.10 deduped
│ │ │ └── picomatch@2.3.1 deduped
│ │ └─┬ string-length@4.0.2
│ │ ├── char-regex@1.0.2
│ │ └─┬ strip-ansi@6.0.1
│ │ └── ansi-regex@5.0.1 deduped
│ ├── slash@4.0.0
│ ├─┬ string-length@5.0.1
│ │ ├── char-regex@2.0.1
│ │ └── strip-ansi@7.0.1 deduped
│ └─┬ strip-ansi@7.0.1
│ └── ansi-regex@6.0.1
├─┬ mini-css-extract-plugin@2.7.2
│ └─┬ schema-utils@4.0.0
│ ├── @types/json-schema@7.0.11 deduped
│ ├─┬ ajv@8.11.2
│ │ ├── fast-deep-equal@3.1.3 deduped
│ │ ├── json-schema-traverse@1.0.0
│ │ ├── require-from-string@2.0.2 deduped
│ │ └── uri-js@4.4.1 deduped
│ ├── ajv-formats@2.1.1 deduped
│ └─┬ ajv-keywords@5.1.0
│ └── fast-deep-equal@3.1.3 deduped
├─┬ postcss@8.4.20
│ ├── nanoid@3.3.4
│ ├── picocolors@1.0.0
│ └── source-map-js@1.0.2
├── postcss-flexbugs-fixes@5.0.2
├─┬ postcss-loader@6.2.1
│ ├─┬ cosmiconfig@7.1.0
│ │ ├── @types/parse-json@4.0.0
│ │ ├── import-fresh@3.3.0 deduped
│ │ ├─┬ parse-json@5.2.0
│ │ │ ├── @babel/code-frame@7.18.6 deduped
│ │ │ ├─┬ error-ex@1.3.2
│ │ │ │ └── is-arrayish@0.2.1
│ │ │ ├── json-parse-even-better-errors@2.3.1 deduped
│ │ │ └── lines-and-columns@1.2.4
│ │ ├── path-type@4.0.0
│ │ └── yaml@1.10.2 deduped
│ ├── klona@2.0.5
│ └── semver@7.3.8 deduped
├─┬ postcss-normalize@10.0.1
│ ├── @csstools/normalize.css@12.0.0
│ ├── postcss-browser-comments@4.0.0
│ └── sanitize.css@13.0.0
├─┬ postcss-preset-env@7.8.3
│ ├─┬ @csstools/postcss-cascade-layers@1.1.1
│ │ ├── @csstools/selector-specificity@2.0.2
│ │ └── postcss-selector-parser@6.0.11 deduped
│ ├─┬ @csstools/postcss-color-function@1.1.1
│ │ ├── @csstools/postcss-progressive-custom-properties@1.3.0 deduped
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├─┬ @csstools/postcss-font-format-keywords@1.0.1
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├─┬ @csstools/postcss-hwb-function@1.0.2
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├─┬ @csstools/postcss-ic-unit@1.0.1
│ │ ├── @csstools/postcss-progressive-custom-properties@1.3.0 deduped
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├─┬ @csstools/postcss-is-pseudo-class@2.0.7
│ │ ├── @csstools/selector-specificity@2.0.2 deduped
│ │ └── postcss-selector-parser@6.0.11 deduped
│ ├─┬ @csstools/postcss-nested-calc@1.0.0
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├─┬ @csstools/postcss-normalize-display-values@1.0.1
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├─┬ @csstools/postcss-oklab-function@1.1.1
│ │ ├── @csstools/postcss-progressive-custom-properties@1.3.0 deduped
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├─┬ @csstools/postcss-progressive-custom-properties@1.3.0
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├─┬ @csstools/postcss-stepped-value-functions@1.0.1
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├─┬ @csstools/postcss-text-decoration-shorthand@1.0.0
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├─┬ @csstools/postcss-trigonometric-functions@1.0.2
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├── @csstools/postcss-unset-value@1.0.2
│ ├─┬ autoprefixer@10.4.13
│ │ ├── browserslist@4.21.4 deduped
│ │ ├── caniuse-lite@1.0.30001441 deduped
│ │ ├── fraction.js@4.2.0
│ │ ├── normalize-range@0.1.2
│ │ ├── picocolors@1.0.0 deduped
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├── browserslist@4.21.4 deduped
│ ├─┬ css-blank-pseudo@3.0.3
│ │ └── postcss-selector-parser@6.0.11 deduped
│ ├─┬ css-has-pseudo@3.0.4
│ │ └── postcss-selector-parser@6.0.11 deduped
│ ├── css-prefers-color-scheme@6.0.3
│ ├── cssdb@7.2.0
│ ├─┬ postcss-attribute-case-insensitive@5.0.2
│ │ └── postcss-selector-parser@6.0.11 deduped
│ ├─┬ postcss-clamp@4.1.0
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├─┬ postcss-color-functional-notation@4.2.4
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├─┬ postcss-color-hex-alpha@8.0.4
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├─┬ postcss-color-rebeccapurple@7.1.1
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├─┬ postcss-custom-media@8.0.2
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├─┬ postcss-custom-properties@12.1.11
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├─┬ postcss-custom-selectors@6.0.3
│ │ └── postcss-selector-parser@6.0.11 deduped
│ ├─┬ postcss-dir-pseudo-class@6.0.5
│ │ └── postcss-selector-parser@6.0.11 deduped
│ ├─┬ postcss-double-position-gradients@3.1.2
│ │ ├── @csstools/postcss-progressive-custom-properties@1.3.0 deduped
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├─┬ postcss-env-function@4.0.6
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├─┬ postcss-focus-visible@6.0.4
│ │ └── postcss-selector-parser@6.0.11 deduped
│ ├─┬ postcss-focus-within@5.0.4
│ │ └── postcss-selector-parser@6.0.11 deduped
│ ├── postcss-font-variant@5.0.0
│ ├── postcss-gap-properties@3.0.5
│ ├─┬ postcss-image-set-function@4.0.7
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├── postcss-initial@4.0.1
│ ├─┬ postcss-lab-function@4.2.1
│ │ ├── @csstools/postcss-progressive-custom-properties@1.3.0 deduped
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├── postcss-logical@5.0.4
│ ├── postcss-media-minmax@5.0.0
│ ├─┬ postcss-nesting@10.2.0
│ │ ├── @csstools/selector-specificity@2.0.2 deduped
│ │ └── postcss-selector-parser@6.0.11 deduped
│ ├── postcss-opacity-percentage@1.1.3
│ ├─┬ postcss-overflow-shorthand@3.0.4
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├── postcss-page-break@3.0.4
│ ├─┬ postcss-place@7.0.5
│ │ └── postcss-value-parser@4.2.0 deduped
│ ├─┬ postcss-pseudo-class-any-link@7.1.6
│ │ └── postcss-selector-parser@6.0.11 deduped
│ ├── postcss-replace-overflow-wrap@4.0.0
│ ├─┬ postcss-selector-not@6.0.1
│ │ └── postcss-selector-parser@6.0.11 deduped
│ └── postcss-value-parser@4.2.0 deduped
├─┬ prompts@2.4.2
│ ├── kleur@3.0.3
│ └── sisteransi@1.0.5
├─┬ react-app-polyfill@3.0.0
│ ├── core-js@3.26.1
│ ├── object-assign@4.1.1 deduped
│ ├─┬ promise@8.3.0
│ │ └── asap@2.0.6
│ ├─┬ raf@3.4.1
│ │ └── performance-now@2.1.0
│ ├── regenerator-runtime@0.13.11 deduped
│ └── whatwg-fetch@3.6.2
├─┬ react-dev-utils@12.0.1
│ ├── @babel/code-frame@7.18.6 deduped
│ ├── address@1.2.2
│ ├── browserslist@4.21.4 deduped
│ ├─┬ chalk@4.1.2
│ │ ├─┬ ansi-styles@4.3.0
│ │ │ └─┬ color-convert@2.0.1
│ │ │ └── color-name@1.1.4
│ │ └─┬ supports-color@7.2.0
│ │ └── has-flag@4.0.0
│ ├── cross-spawn@7.0.3 deduped
│ ├─┬ detect-port-alt@1.1.6
│ │ ├── address@1.2.2 deduped
│ │ └─┬ debug@2.6.9
│ │ └── ms@2.0.0
│ ├── escape-string-regexp@4.0.0
│ ├── filesize@8.0.7
│ ├── find-up@5.0.0 deduped
│ ├─┬ fork-ts-checker-webpack-plugin@6.5.2
│ │ ├── @babel/code-frame@7.18.6 deduped
│ │ ├── @types/json-schema@7.0.11 deduped
│ │ ├─┬ chalk@4.1.2
│ │ │ ├─┬ ansi-styles@4.3.0
│ │ │ │ └─┬ color-convert@2.0.1
│ │ │ │ └── color-name@1.1.4
│ │ │ └─┬ supports-color@7.2.0
│ │ │ └── has-flag@4.0.0
│ │ ├── chokidar@3.5.3 deduped
│ │ ├─┬ cosmiconfig@6.0.0
│ │ │ ├── @types/parse-json@4.0.0 deduped
│ │ │ ├── import-fresh@3.3.0 deduped
│ │ │ ├── parse-json@5.2.0 deduped
│ │ │ ├── path-type@4.0.0 deduped
│ │ │ └── yaml@1.10.2 deduped
│ │ ├── deepmerge@4.2.2 deduped
│ │ ├─┬ fs-extra@9.1.0
│ │ │ ├── at-least-node@1.0.0
│ │ │ ├── graceful-fs@4.2.10 deduped
│ │ │ ├── jsonfile@6.1.0 deduped
│ │ │ └── universalify@2.0.0 deduped
│ │ ├─┬ glob@7.2.3
│ │ │ ├── fs.realpath@1.0.0
│ │ │ ├─┬ inflight@1.0.6
│ │ │ │ ├── once@1.4.0 deduped
│ │ │ │ └── wrappy@1.0.2
│ │ │ ├── inherits@2.0.4 deduped
│ │ │ ├── minimatch@3.1.2 deduped
│ │ │ ├─┬ once@1.4.0
│ │ │ │ └── wrappy@1.0.2 deduped
│ │ │ └── path-is-absolute@1.0.1
│ │ ├─┬ memfs@3.4.12
│ │ │ └── fs-monkey@1.0.3
│ │ ├── minimatch@3.1.2 deduped
│ │ ├─┬ schema-utils@2.7.0
│ │ │ ├── @types/json-schema@7.0.11 deduped
│ │ │ ├── ajv@6.12.6 deduped
│ │ │ └── ajv-keywords@3.5.2 deduped
│ │ ├── semver@7.3.8 deduped
│ │ └── tapable@1.1.3
│ ├─┬ global-modules@2.0.0
│ │ └─┬ global-prefix@3.0.0
│ │ ├── ini@1.3.8
│ │ ├── kind-of@6.0.3
│ │ └─┬ which@1.3.1
│ │ └── isexe@2.0.0 deduped
│ ├─┬ globby@11.1.0
│ │ ├── array-union@2.1.0
│ │ ├─┬ dir-glob@3.0.1
│ │ │ └── path-type@4.0.0 deduped
│ │ ├── fast-glob@3.2.12 deduped
│ │ ├── ignore@5.2.4 deduped
│ │ ├── merge2@1.4.1
│ │ └── slash@3.0.0 deduped
│ ├─┬ gzip-size@6.0.0
│ │ └── duplexer@0.1.2
│ ├── immer@9.0.16
│ ├── is-root@2.1.0
│ ├── loader-utils@3.2.1
│ ├─┬ open@8.4.0
│ │ ├── define-lazy-prop@2.0.0
│ │ ├── is-docker@2.2.1
│ │ └─┬ is-wsl@2.2.0
│ │ └── is-docker@2.2.1 deduped
│ ├─┬ pkg-up@3.1.0
│ │ └─┬ find-up@3.0.0
│ │ └─┬ locate-path@3.0.0
│ │ ├─┬ p-locate@3.0.0
│ │ │ └─┬ p-limit@2.3.0
│ │ │ └── p-try@2.2.0
│ │ └── path-exists@3.0.0
│ ├── prompts@2.4.2 deduped
│ ├── react-error-overlay@6.0.11
│ ├─┬ recursive-readdir@2.2.3
│ │ └── minimatch@3.1.2 deduped
│ ├── shell-quote@1.7.4
│ ├── strip-ansi@6.0.1 deduped
│ ├── text-table@0.2.0 deduped
│ └── UNMET PEER DEPENDENCY typescript@>= 2.7
├── react-refresh@0.11.0
├─┬ resolve@1.22.1
│ ├─┬ is-core-module@2.11.0
│ │ └── has@1.0.3 deduped
│ ├── path-parse@1.0.7
│ └── supports-preserve-symlinks-flag@1.0.0
├─┬ resolve-url-loader@4.0.0
│ ├─┬ adjust-sourcemap-loader@4.0.0
│ │ ├── loader-utils@2.0.4 deduped
│ │ └── regex-parser@2.2.11
│ ├── convert-source-map@1.9.0 deduped
│ ├── loader-utils@2.0.4 deduped
│ ├─┬ postcss@7.0.39
│ │ ├── picocolors@0.2.1
│ │ └── source-map@0.6.1 deduped
│ └── source-map@0.6.1
├─┬ sass-loader@12.6.0
│ ├── klona@2.0.5 deduped
│ └── neo-async@2.6.2
├─┬ semver@7.3.8
│ └─┬ lru-cache@6.0.0
│ └── yallist@4.0.0
├─┬ source-map-loader@3.0.2
│ ├── abab@2.0.6
│ ├─┬ iconv-lite@0.6.3
│ │ └── safer-buffer@2.1.2
│ └── source-map-js@1.0.2 deduped
├── style-loader@3.3.1
├─┬ tailwindcss@3.2.4
│ ├── arg@5.0.2
│ ├─┬ chokidar@3.5.3
│ │ ├── anymatch@3.1.3 deduped
│ │ ├── braces@3.0.2 deduped
│ │ ├── fsevents@2.3.2 deduped
│ │ ├─┬ glob-parent@5.1.2
│ │ │ └── is-glob@4.0.3 deduped
│ │ ├─┬ is-binary-path@2.1.0
│ │ │ └── binary-extensions@2.2.0
│ │ ├── is-glob@4.0.3 deduped
│ │ ├── normalize-path@3.0.0 deduped
│ │ └─┬ readdirp@3.6.0
│ │ └── picomatch@2.3.1 deduped
│ ├── color-name@1.1.4
│ ├─┬ detective@5.2.1
│ │ ├─┬ acorn-node@1.8.2
│ │ │ ├── acorn@7.4.1
│ │ │ ├── acorn-walk@7.2.0
│ │ │ └── xtend@4.0.2 deduped
│ │ ├── defined@1.0.1
│ │ └── minimist@1.2.7
│ ├── didyoumean@1.2.2
│ ├── dlv@1.1.3
│ ├─┬ fast-glob@3.2.12
│ │ ├── @nodelib/fs.stat@2.0.5
│ │ ├── @nodelib/fs.walk@1.2.8 deduped
│ │ ├─┬ glob-parent@5.1.2
│ │ │ └── is-glob@4.0.3 deduped
│ │ ├── merge2@1.4.1 deduped
│ │ └── micromatch@4.0.5 deduped
│ ├── glob-parent@6.0.2 deduped
│ ├── is-glob@4.0.3 deduped
│ ├── lilconfig@2.0.6
│ ├── micromatch@4.0.5 deduped
│ ├── normalize-path@3.0.0 deduped
│ ├── object-hash@3.0.0
│ ├── picocolors@1.0.0 deduped
│ ├── postcss@8.4.20 deduped
│ ├─┬ postcss-import@14.1.0
│ │ ├── postcss-value-parser@4.2.0 deduped
│ │ ├─┬ read-cache@1.0.0
│ │ │ └── pify@2.3.0
│ │ └── resolve@1.22.1 deduped
│ ├─┬ postcss-js@4.0.0
│ │ └── camelcase-css@2.0.1
│ ├─┬ postcss-load-config@3.1.4
│ │ ├── lilconfig@2.0.6 deduped
│ │ └── yaml@1.10.2 deduped
│ ├─┬ postcss-nested@6.0.0
│ │ └── postcss-selector-parser@6.0.11 deduped
│ ├─┬ postcss-selector-parser@6.0.11
│ │ ├── cssesc@3.0.0
│ │ └── util-deprecate@1.0.2
│ ├── postcss-value-parser@4.2.0 deduped
│ ├── quick-lru@5.1.1
│ └── resolve@1.22.1 deduped
├─┬ terser-webpack-plugin@5.3.6
│ ├─┬ @jridgewell/trace-mapping@0.3.17
│ │ ├── @jridgewell/resolve-uri@3.1.0
│ │ └── @jridgewell/sourcemap-codec@1.4.14
│ ├── jest-worker@27.5.1 deduped
│ ├── schema-utils@3.1.1 deduped
│ ├── serialize-javascript@6.0.0 deduped
│ └─┬ terser@5.16.1
│ ├─┬ @jridgewell/source-map@0.3.2
│ │ ├─┬ @jridgewell/gen-mapping@0.3.2
│ │ │ ├── @jridgewell/set-array@1.1.2 deduped
│ │ │ ├── @jridgewell/sourcemap-codec@1.4.14 deduped
│ │ │ └── @jridgewell/trace-mapping@0.3.17 deduped
│ │ └── @jridgewell/trace-mapping@0.3.17 deduped
│ ├── acorn@8.8.1 deduped
│ ├── commander@2.20.3
│ └─┬ source-map-support@0.5.21
│ ├── buffer-from@1.1.2
│ └── source-map@0.6.1
├─┬ webpack@5.75.0
│ ├─┬ @types/eslint-scope@3.7.4
│ │ ├── @types/eslint@8.4.10 deduped
│ │ └── @types/estree@1.0.0 deduped
│ ├── @types/estree@0.0.51
│ ├─┬ @webassemblyjs/ast@1.11.1
│ │ ├─┬ @webassemblyjs/helper-numbers@1.11.1
│ │ │ ├── @webassemblyjs/floating-point-hex-parser@1.11.1
│ │ │ ├── @webassemblyjs/helper-api-error@1.11.1 deduped
│ │ │ └── @xtuc/long@4.2.2
│ │ └── @webassemblyjs/helper-wasm-bytecode@1.11.1
│ ├─┬ @webassemblyjs/wasm-edit@1.11.1
│ │ ├── @webassemblyjs/ast@1.11.1 deduped
│ │ ├── @webassemblyjs/helper-buffer@1.11.1
│ │ ├── @webassemblyjs/helper-wasm-bytecode@1.11.1 deduped
│ │ ├─┬ @webassemblyjs/helper-wasm-section@1.11.1
│ │ │ ├── @webassemblyjs/ast@1.11.1 deduped
│ │ │ ├── @webassemblyjs/helper-buffer@1.11.1 deduped
│ │ │ ├── @webassemblyjs/helper-wasm-bytecode@1.11.1 deduped
│ │ │ └── @webassemblyjs/wasm-gen@1.11.1 deduped
│ │ ├─┬ @webassemblyjs/wasm-gen@1.11.1
│ │ │ ├── @webassemblyjs/ast@1.11.1 deduped
│ │ │ ├── @webassemblyjs/helper-wasm-bytecode@1.11.1 deduped
│ │ │ ├── @webassemblyjs/ieee754@1.11.1 deduped
│ │ │ ├── @webassemblyjs/leb128@1.11.1 deduped
│ │ │ └── @webassemblyjs/utf8@1.11.1 deduped
│ │ ├─┬ @webassemblyjs/wasm-opt@1.11.1
│ │ │ ├── @webassemblyjs/ast@1.11.1 deduped
│ │ │ ├── @webassemblyjs/helper-buffer@1.11.1 deduped
│ │ │ ├── @webassemblyjs/wasm-gen@1.11.1 deduped
│ │ │ └── @webassemblyjs/wasm-parser@1.11.1 deduped
│ │ ├── @webassemblyjs/wasm-parser@1.11.1 deduped
│ │ └─┬ @webassemblyjs/wast-printer@1.11.1
│ │ ├── @webassemblyjs/ast@1.11.1 deduped
│ │ └── @xtuc/long@4.2.2 deduped
│ ├─┬ @webassemblyjs/wasm-parser@1.11.1
│ │ ├── @webassemblyjs/ast@1.11.1 deduped
│ │ ├── @webassemblyjs/helper-api-error@1.11.1
│ │ ├── @webassemblyjs/helper-wasm-bytecode@1.11.1 deduped
│ │ ├─┬ @webassemblyjs/ieee754@1.11.1
│ │ │ └── @xtuc/ieee754@1.2.0
│ │ ├─┬ @webassemblyjs/leb128@1.11.1
│ │ │ └── @xtuc/long@4.2.2 deduped
│ │ └── @webassemblyjs/utf8@1.11.1
│ ├── acorn@8.8.1
│ ├── acorn-import-assertions@1.8.0
│ ├── browserslist@4.21.4 deduped
│ ├── chrome-trace-event@1.0.3
│ ├─┬ enhanced-resolve@5.12.0
│ │ ├── graceful-fs@4.2.10 deduped
│ │ └── tapable@2.2.1 deduped
│ ├── es-module-lexer@0.9.3
│ ├─┬ eslint-scope@5.1.1
│ │ ├── esrecurse@4.3.0 deduped
│ │ └── estraverse@4.3.0
│ ├── events@3.3.0
│ ├── glob-to-regexp@0.4.1
│ ├── graceful-fs@4.2.10 deduped
│ ├── json-parse-even-better-errors@2.3.1
│ ├── loader-runner@4.3.0
│ ├─┬ mime-types@2.1.35
│ │ └── mime-db@1.52.0
│ ├── neo-async@2.6.2 deduped
│ ├── schema-utils@3.1.1 deduped
│ ├── tapable@2.2.1 deduped
│ ├── terser-webpack-plugin@5.3.6 deduped
│ ├─┬ watchpack@2.4.0
│ │ ├── glob-to-regexp@0.4.1 deduped
│ │ └── graceful-fs@4.2.10 deduped
│ └── webpack-sources@3.2.3
├─┬ webpack-dev-server@4.11.1
│ ├─┬ @types/bonjour@3.5.10
│ │ └── @types/node@18.11.17 deduped
│ ├─┬ @types/connect-history-api-fallback@1.3.5
│ │ ├─┬ @types/express-serve-static-core@4.17.31
│ │ │ ├── @types/node@18.11.17 deduped
│ │ │ ├── @types/qs@6.9.7 deduped
│ │ │ └── @types/range-parser@1.2.4
│ │ └── @types/node@18.11.17 deduped
│ ├─┬ @types/express@4.17.15
│ │ ├─┬ @types/body-parser@1.19.2
│ │ │ ├─┬ @types/connect@3.4.35
│ │ │ │ └── @types/node@18.11.17 deduped
│ │ │ └── @types/node@18.11.17 deduped
│ │ ├── @types/express-serve-static-core@4.17.31 deduped
│ │ ├── @types/qs@6.9.7
│ │ └── @types/serve-static@1.15.0 deduped
│ ├─┬ @types/serve-index@1.9.1
│ │ └── @types/express@4.17.15 deduped
│ ├─┬ @types/serve-static@1.15.0
│ │ ├── @types/mime@3.0.1
│ │ └── @types/node@18.11.17 deduped
│ ├─┬ @types/sockjs@0.3.33
│ │ └── @types/node@18.11.17 deduped
│ ├─┬ @types/ws@8.5.3
│ │ └── @types/node@18.11.17 deduped
│ ├── ansi-html-community@0.0.8 deduped
│ ├─┬ bonjour-service@1.0.14
│ │ ├── array-flatten@2.1.2
│ │ ├── dns-equal@1.0.0
│ │ ├── fast-deep-equal@3.1.3 deduped
│ │ └─┬ multicast-dns@7.2.5
│ │ ├─┬ dns-packet@5.4.0
│ │ │ └── @leichtgewicht/ip-codec@2.0.4
│ │ └── thunky@1.1.0
│ ├── chokidar@3.5.3 deduped
│ ├── colorette@2.0.19
│ ├─┬ compression@1.7.4
│ │ ├─┬ accepts@1.3.8
│ │ │ ├── mime-types@2.1.35 deduped
│ │ │ └── negotiator@0.6.3
│ │ ├── bytes@3.0.0
│ │ ├─┬ compressible@2.0.18
│ │ │ └── mime-db@1.52.0 deduped
│ │ ├─┬ debug@2.6.9
│ │ │ └── ms@2.0.0
│ │ ├── on-headers@1.0.2
│ │ ├── safe-buffer@5.1.2
│ │ └── vary@1.1.2
│ ├── connect-history-api-fallback@2.0.0
│ ├─┬ default-gateway@6.0.3
│ │ └─┬ execa@5.1.1
│ │ ├── cross-spawn@7.0.3 deduped
│ │ ├── get-stream@6.0.1
│ │ ├── human-signals@2.1.0
│ │ ├── is-stream@2.0.1
│ │ ├── merge-stream@2.0.0 deduped
│ │ ├─┬ npm-run-path@4.0.1
│ │ │ └── path-key@3.1.1 deduped
│ │ ├─┬ onetime@5.1.2
│ │ │ └── mimic-fn@2.1.0
│ │ ├── signal-exit@3.0.7 deduped
│ │ └── strip-final-newline@2.0.0
│ ├─┬ express@4.18.2
│ │ ├── accepts@1.3.8 deduped
│ │ ├── array-flatten@1.1.1
│ │ ├─┬ body-parser@1.20.1
│ │ │ ├── bytes@3.1.2
│ │ │ ├── content-type@1.0.4 deduped
│ │ │ ├─┬ debug@2.6.9
│ │ │ │ └── ms@2.0.0
│ │ │ ├── depd@2.0.0 deduped
│ │ │ ├── destroy@1.2.0
│ │ │ ├── http-errors@2.0.0 deduped
│ │ │ ├─┬ iconv-lite@0.4.24
│ │ │ │ └── safer-buffer@2.1.2 deduped
│ │ │ ├── on-finished@2.4.1 deduped
│ │ │ ├── qs@6.11.0 deduped
│ │ │ ├─┬ raw-body@2.5.1
│ │ │ │ ├── bytes@3.1.2
│ │ │ │ ├── http-errors@2.0.0 deduped
│ │ │ │ ├── iconv-lite@0.4.24 deduped
│ │ │ │ └── unpipe@1.0.0 deduped
│ │ │ ├── type-is@1.6.18 deduped
│ │ │ └── unpipe@1.0.0
│ │ ├─┬ content-disposition@0.5.4
│ │ │ └── safe-buffer@5.2.1 deduped
│ │ ├── content-type@1.0.4
│ │ ├── cookie@0.5.0
│ │ ├── cookie-signature@1.0.6
│ │ ├─┬ debug@2.6.9
│ │ │ └── ms@2.0.0
│ │ ├── depd@2.0.0
│ │ ├── encodeurl@1.0.2
│ │ ├── escape-html@1.0.3
│ │ ├── etag@1.8.1
│ │ ├─┬ finalhandler@1.2.0
│ │ │ ├─┬ debug@2.6.9
│ │ │ │ └── ms@2.0.0
│ │ │ ├── encodeurl@1.0.2 deduped
│ │ │ ├── escape-html@1.0.3 deduped
│ │ │ ├── on-finished@2.4.1 deduped
│ │ │ ├── parseurl@1.3.3 deduped
│ │ │ ├── statuses@2.0.1 deduped
│ │ │ └── unpipe@1.0.0 deduped
│ │ ├── fresh@0.5.2
│ │ ├─┬ http-errors@2.0.0
│ │ │ ├── depd@2.0.0 deduped
│ │ │ ├── inherits@2.0.4 deduped
│ │ │ ├── setprototypeof@1.2.0 deduped
│ │ │ ├── statuses@2.0.1 deduped
│ │ │ └── toidentifier@1.0.1
│ │ ├── merge-descriptors@1.0.1
│ │ ├── methods@1.1.2
│ │ ├─┬ on-finished@2.4.1
│ │ │ └── ee-first@1.1.1
│ │ ├── parseurl@1.3.3
│ │ ├── path-to-regexp@0.1.7
│ │ ├─┬ proxy-addr@2.0.7
│ │ │ ├── forwarded@0.2.0
│ │ │ └── ipaddr.js@1.9.1
│ │ ├─┬ qs@6.11.0
│ │ │ └── side-channel@1.0.4 deduped
│ │ ├── range-parser@1.2.1
│ │ ├── safe-buffer@5.2.1
│ │ ├─┬ send@0.18.0
│ │ │ ├─┬ debug@2.6.9
│ │ │ │ └── ms@2.0.0
│ │ │ ├── depd@2.0.0 deduped
│ │ │ ├── destroy@1.2.0 deduped
│ │ │ ├── encodeurl@1.0.2 deduped
│ │ │ ├── escape-html@1.0.3 deduped
│ │ │ ├── etag@1.8.1 deduped
│ │ │ ├── fresh@0.5.2 deduped
│ │ │ ├── http-errors@2.0.0 deduped
│ │ │ ├── mime@1.6.0
│ │ │ ├── ms@2.1.3
│ │ │ ├── on-finished@2.4.1 deduped
│ │ │ ├── range-parser@1.2.1 deduped
│ │ │ └── statuses@2.0.1 deduped
│ │ ├─┬ serve-static@1.15.0
│ │ │ ├── encodeurl@1.0.2 deduped
│ │ │ ├── escape-html@1.0.3 deduped
│ │ │ ├── parseurl@1.3.3 deduped
│ │ │ └── send@0.18.0 deduped
│ │ ├── setprototypeof@1.2.0
│ │ ├── statuses@2.0.1
│ │ ├─┬ type-is@1.6.18
│ │ │ ├── media-typer@0.3.0
│ │ │ └── mime-types@2.1.35 deduped
│ │ ├── utils-merge@1.0.1
│ │ └── vary@1.1.2 deduped
│ ├── graceful-fs@4.2.10 deduped
│ ├── html-entities@2.3.3 deduped
│ ├─┬ http-proxy-middleware@2.0.6
│ │ ├─┬ @types/http-proxy@1.17.9
│ │ │ └── @types/node@18.11.17 deduped
│ │ ├─┬ http-proxy@1.18.1
│ │ │ ├── eventemitter3@4.0.7
│ │ │ ├── follow-redirects@1.15.2
│ │ │ └── requires-port@1.0.0
│ │ ├── is-glob@4.0.3 deduped
│ │ ├── is-plain-obj@3.0.0
│ │ └── micromatch@4.0.5 deduped
│ ├── ipaddr.js@2.0.1
│ ├── open@8.4.0 deduped
│ ├─┬ p-retry@4.6.2
│ │ ├── @types/retry@0.12.0
│ │ └── retry@0.13.1
│ ├─┬ rimraf@3.0.2
│ │ └── glob@7.2.3 deduped
│ ├─┬ schema-utils@4.0.0
│ │ ├── @types/json-schema@7.0.11 deduped
│ │ ├─┬ ajv@8.11.2
│ │ │ ├── fast-deep-equal@3.1.3 deduped
│ │ │ ├── json-schema-traverse@1.0.0
│ │ │ ├── require-from-string@2.0.2 deduped
│ │ │ └── uri-js@4.4.1 deduped
│ │ ├── ajv-formats@2.1.1 deduped
│ │ └─┬ ajv-keywords@5.1.0
│ │ └── fast-deep-equal@3.1.3 deduped
│ ├─┬ selfsigned@2.1.1
│ │ └── node-forge@1.3.1
│ ├─┬ serve-index@1.9.1
│ │ ├── accepts@1.3.8 deduped
│ │ ├── batch@0.6.1
│ │ ├─┬ debug@2.6.9
│ │ │ └── ms@2.0.0
│ │ ├── escape-html@1.0.3 deduped
│ │ ├─┬ http-errors@1.6.3
│ │ │ ├── depd@1.1.2
│ │ │ ├── inherits@2.0.3
│ │ │ ├── setprototypeof@1.1.0
│ │ │ └── statuses@1.5.0
│ │ ├── mime-types@2.1.35 deduped
│ │ └── parseurl@1.3.3 deduped
│ ├─┬ sockjs@0.3.24
│ │ ├─┬ faye-websocket@0.11.4
│ │ │ └── websocket-driver@0.7.4 deduped
│ │ ├── uuid@8.3.2
│ │ └─┬ websocket-driver@0.7.4
│ │ ├── http-parser-js@0.5.8
│ │ ├── safe-buffer@5.2.1 deduped
│ │ └── websocket-extensions@0.1.4
│ ├─┬ spdy@4.0.2
│ │ ├── debug@4.3.4 deduped
│ │ ├── handle-thing@2.0.1
│ │ ├── http-deceiver@1.2.7
│ │ ├── select-hose@2.0.0
│ │ └─┬ spdy-transport@3.0.0
│ │ ├── debug@4.3.4 deduped
│ │ ├── detect-node@2.1.0
│ │ ├─┬ hpack.js@2.1.6
│ │ │ ├── inherits@2.0.4 deduped
│ │ │ ├── obuf@1.1.2 deduped
│ │ │ ├─┬ readable-stream@2.3.7
│ │ │ │ ├── core-util-is@1.0.3
│ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ ├── isarray@1.0.0
│ │ │ │ ├── process-nextick-args@2.0.1
│ │ │ │ ├── safe-buffer@5.1.2
│ │ │ │ ├── string_decoder@1.1.1 deduped
│ │ │ │ └── util-deprecate@1.0.2 deduped
│ │ │ └── wbuf@1.7.3 deduped
│ │ ├── obuf@1.1.2
│ │ ├─┬ readable-stream@3.6.0
│ │ │ ├── inherits@2.0.4 deduped
│ │ │ ├─┬ string_decoder@1.1.1
│ │ │ │ └── safe-buffer@5.1.2
│ │ │ └── util-deprecate@1.0.2 deduped
│ │ └─┬ wbuf@1.7.3
│ │ └── minimalistic-assert@1.0.1
│ ├─┬ webpack-dev-middleware@5.3.3
│ │ ├── colorette@2.0.19 deduped
│ │ ├── memfs@3.4.12 deduped
│ │ ├── mime-types@2.1.35 deduped
│ │ ├── range-parser@1.2.1 deduped
│ │ └─┬ schema-utils@4.0.0
│ │ ├── @types/json-schema@7.0.11 deduped
│ │ ├─┬ ajv@8.11.2
│ │ │ ├── fast-deep-equal@3.1.3 deduped
│ │ │ ├── json-schema-traverse@1.0.0
│ │ │ ├── require-from-string@2.0.2 deduped
│ │ │ └── uri-js@4.4.1 deduped
│ │ ├── ajv-formats@2.1.1 deduped
│ │ └─┬ ajv-keywords@5.1.0
│ │ └── fast-deep-equal@3.1.3 deduped
│ └── ws@8.11.0
├─┬ webpack-manifest-plugin@4.1.1
│ ├── tapable@2.2.1 deduped
│ └─┬ webpack-sources@2.3.1
│ ├── source-list-map@2.0.1
│ └── source-map@0.6.1
└─┬ workbox-webpack-plugin@6.5.4
├── fast-json-stable-stringify@2.1.0
├── pretty-bytes@5.6.0
├── upath@1.2.0
├─┬ webpack-sources@1.4.3
│ ├── source-list-map@2.0.1 deduped
│ └── source-map@0.6.1
└─┬ workbox-build@6.5.4
├─┬ @apideck/better-ajv-errors@0.3.6
│ ├── json-schema@0.4.0
│ ├── jsonpointer@5.0.1
│ └── leven@3.1.0 deduped
├── @babel/core@7.20.7 deduped
├── @babel/preset-env@7.20.2 deduped
├── @babel/runtime@7.20.7 deduped
├─┬ @rollup/plugin-babel@5.3.1
│ ├── @babel/helper-module-imports@7.18.6 deduped
│ └─┬ @rollup/pluginutils@3.1.0
│ ├── @types/estree@0.0.39
│ ├── estree-walker@1.0.1
│ └── picomatch@2.3.1 deduped
├─┬ @rollup/plugin-node-resolve@11.2.1
│ ├── @rollup/pluginutils@3.1.0 deduped
│ ├─┬ @types/resolve@1.17.1
│ │ └── @types/node@18.11.17 deduped
│ ├── builtin-modules@3.3.0
│ ├── deepmerge@4.2.2 deduped
│ ├── is-module@1.0.0
│ └── resolve@1.22.1 deduped
├─┬ @rollup/plugin-replace@2.4.2
│ ├── @rollup/pluginutils@3.1.0 deduped
│ └─┬ magic-string@0.25.9
│ └── sourcemap-codec@1.4.8
├─┬ @surma/rollup-plugin-off-main-thread@2.2.3
│ ├─┬ ejs@3.1.8
│ │ └─┬ jake@10.8.5
│ │ ├── async@3.2.4
│ │ ├─┬ chalk@4.1.2
│ │ │ ├─┬ ansi-styles@4.3.0
│ │ │ │ └─┬ color-convert@2.0.1
│ │ │ │ └── color-name@1.1.4
│ │ │ └─┬ supports-color@7.2.0
│ │ │ └── has-flag@4.0.0
│ │ ├─┬ filelist@1.0.4
│ │ │ └─┬ minimatch@5.1.2
│ │ │ └─┬ brace-expansion@2.0.1
│ │ │ └── balanced-match@1.0.2 deduped
│ │ └── minimatch@3.1.2 deduped
│ ├── json5@2.2.2 deduped
│ ├── magic-string@0.25.9 deduped
│ └── string.prototype.matchall@4.0.8 deduped
├─┬ UNMET PEER DEPENDENCY ajv@8.11.2
│ ├── fast-deep-equal@3.1.3 deduped
│ ├── json-schema-traverse@1.0.0
│ ├── require-from-string@2.0.2 deduped
│ └── uri-js@4.4.1 deduped
├── common-tags@1.8.2
├── fast-json-stable-stringify@2.1.0 deduped
├─┬ fs-extra@9.1.0
│ ├── at-least-node@1.0.0 deduped
│ ├── graceful-fs@4.2.10 deduped
│ ├── jsonfile@6.1.0 deduped
│ └── universalify@2.0.0 deduped
├── glob@7.2.3 deduped
├── lodash@4.17.21 deduped
├── pretty-bytes@5.6.0 deduped
├─┬ rollup@2.79.1
│ └── fsevents@2.3.2 deduped
├─┬ rollup-plugin-terser@7.0.2
│ ├── @babel/code-frame@7.18.6 deduped
│ ├─┬ jest-worker@26.6.2
│ │ ├── @types/node@18.11.17 deduped
│ │ ├── merge-stream@2.0.0 deduped
│ │ └─┬ supports-color@7.2.0
│ │ └── has-flag@4.0.0
│ ├─┬ serialize-javascript@4.0.0
│ │ └── randombytes@2.1.0 deduped
│ └── terser@5.16.1 deduped
├─┬ source-map@0.8.0-beta.0
│ └─┬ whatwg-url@7.1.0
│ ├── lodash.sortby@4.7.0
│ ├─┬ tr46@1.0.1
│ │ └── punycode@2.1.1 deduped
│ └── webidl-conversions@4.0.2
├─┬ stringify-object@3.3.0
│ ├── get-own-enumerable-property-symbols@3.0.2
│ ├── is-obj@1.0.1
│ └── is-regexp@1.0.0
├── strip-comments@2.0.1
├─┬ tempy@0.6.0
│ ├── is-stream@2.0.1 deduped
│ ├── temp-dir@2.0.0
│ ├── type-fest@0.16.0
│ └─┬ unique-string@2.0.0
│ └── crypto-random-string@2.0.0
├── upath@1.2.0 deduped
├─┬ workbox-background-sync@6.5.4
│ ├── idb@7.1.1
│ └── workbox-core@6.5.4 deduped
├─┬ workbox-broadcast-update@6.5.4
│ └── workbox-core@6.5.4 deduped
├─┬ workbox-cacheable-response@6.5.4
│ └── workbox-core@6.5.4 deduped
├── workbox-core@6.5.4
├─┬ workbox-expiration@6.5.4
│ ├── idb@7.1.1 deduped
│ └── workbox-core@6.5.4 deduped
├─┬ workbox-google-analytics@6.5.4
│ ├── workbox-background-sync@6.5.4 deduped
│ ├── workbox-core@6.5.4 deduped
│ ├── workbox-routing@6.5.4 deduped
│ └── workbox-strategies@6.5.4 deduped
├─┬ workbox-navigation-preload@6.5.4
│ └── workbox-core@6.5.4 deduped
├─┬ workbox-precaching@6.5.4
│ ├── workbox-core@6.5.4 deduped
│ ├── workbox-routing@6.5.4 deduped
│ └── workbox-strategies@6.5.4 deduped
├─┬ workbox-range-requests@6.5.4
│ └── workbox-core@6.5.4 deduped
├─┬ workbox-recipes@6.5.4
│ ├── workbox-cacheable-response@6.5.4 deduped
│ ├── workbox-core@6.5.4 deduped
│ ├── workbox-expiration@6.5.4 deduped
│ ├── workbox-precaching@6.5.4 deduped
│ ├── workbox-routing@6.5.4 deduped
│ └── workbox-strategies@6.5.4 deduped
├─┬ workbox-routing@6.5.4
│ └── workbox-core@6.5.4 deduped
├─┬ workbox-strategies@6.5.4
│ └── workbox-core@6.5.4 deduped
├─┬ workbox-streams@6.5.4
│ ├── workbox-core@6.5.4 deduped
│ └── workbox-routing@6.5.4 deduped
├── workbox-sw@6.5.4
└─┬ workbox-window@6.5.4
├── @types/trusted-types@2.0.2
└── workbox-core@6.5.4 deduped
