const testdata = {
  name: "ng-firebase-testing",
  dependencies: [
    {
      name: "@angular/animations",
      dependencies: [
        {
          name: "tslib",
          dependencies: [],
          level: 2,
        },
      ],
      level: 1,
    },
    {
      name: "@angular/common",
      dependencies: [
        {
          name: "tslib",
          dependencies: [],
        },
      ],
      level: 1,
    },
    {
      name: "@angular/compiler",
      dependencies: [
        {
          name: "tslib",
          dependencies: [],
        },
      ],
      level: 1,
    },
    {
      name: "@angular/core",
      dependencies: [
        {
          name: "tslib",
          dependencies: [],
        },
      ],
      level: 1,
    },
    {
      name: "@angular/fire",
      dependencies: [
        {
          name: "@angular-devkit/schematics",
          dependencies: [
            {
              name: "@angular-devkit/core",
              dependencies: [
                {
                  name: "ajv",
                  dependencies: [
                    {
                      name: "fast-deep-equal",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "json-schema-traverse",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "require-from-string",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "uri-js",
                      dependencies: [
                        {
                          name: "punycode",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
                {
                  name: "ajv-formats",
                  dependencies: [
                    {
                      name: "ajv",
                      dependencies: [
                        {
                          name: "fast-deep-equal",
                          dependencies: [],
                          level: 5,
                        },
                        {
                          name: "json-schema-traverse",
                          dependencies: [],
                          level: 5,
                        },
                        {
                          name: "require-from-string",
                          dependencies: [],
                          level: 5,
                        },
                        {
                          name: "uri-js",
                          dependencies: [
                            {
                              name: "punycode",
                              dependencies: [],
                              level: 6,
                            },
                          ],
                          level: 5,
                        },
                      ],
                    },
                  ],
                  level: 4,
                },
                {
                  name: "fast-json-stable-stringify",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "magic-string",
                  dependencies: [
                    {
                      name: "sourcemap-codec",
                      dependencies: [],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
                {
                  name: "rxjs",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 4,
                },
                {
                  name: "source-map",
                  dependencies: [],
                  level: 4,
                },
              ],
              level: 3,
            },
            {
              name: "ora",
              dependencies: [
                {
                  name: "bl",
                  dependencies: [
                    {
                      name: "buffer",
                      dependencies: [
                        {
                          name: "base64-js",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "ieee754",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "inherits",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "readable-stream",
                      dependencies: [
                        {
                          name: "inherits",
                          dependencies: [],
                        },
                        {
                          name: "string_decoder",
                          dependencies: [
                            {
                              name: "safe-buffer",
                              dependencies: [],
                              level: 7,
                            },
                          ],
                          level: 6,
                        },
                        {
                          name: "util-deprecate",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
                {
                  name: "chalk",
                  dependencies: [
                    {
                      name: "ansi-styles",
                      dependencies: [
                        {
                          name: "color-convert",
                          dependencies: [
                            {
                              name: "color-name",
                              dependencies: [],
                              level: 7,
                            },
                          ],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "escape-string-regexp",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "supports-color",
                      dependencies: [
                        {
                          name: "has-flag",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
                {
                  name: "cli-cursor",
                  dependencies: [
                    {
                      name: "restore-cursor",
                      dependencies: [
                        {
                          name: "onetime",
                          dependencies: [
                            {
                              name: "mimic-fn",
                              dependencies: [],
                              level: 7,
                            },
                          ],
                          level: 6,
                        },
                        {
                          name: "signal-exit",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
                {
                  name: "cli-spinners",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "is-interactive",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "is-unicode-supported",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "log-symbols",
                  dependencies: [
                    {
                      name: "chalk",
                      dependencies: [
                        {
                          name: "ansi-styles",
                          dependencies: [
                            {
                              name: "color-convert",
                              dependencies: [
                                {
                                  name: "color-name",
                                  dependencies: [],
                                  level: 7,
                                },
                              ],
                              level: 6,
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "escape-string-regexp",
                          dependencies: [],
                          level: 5,
                        },
                        {
                          name: "supports-color",
                          dependencies: [
                            {
                              name: "has-flag",
                              dependencies: [],
                              level: 6,
                            },
                          ],
                          level: 5,
                        },
                      ],
                    },
                    {
                      name: "is-unicode-supported",
                      dependencies: [],
                    },
                  ],
                  level: 4,
                },
                {
                  name: "strip-ansi",
                  dependencies: [
                    {
                      name: "ansi-regex",
                      dependencies: [],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
                {
                  name: "wcwidth",
                  dependencies: [
                    {
                      name: "defaults",
                      dependencies: [
                        {
                          name: "clone",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
              ],
              level: 3,
            },
            {
              name: "rxjs",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
          ],
          level: 2,
        },
        {
          name: "@schematics/angular",
          dependencies: [
            {
              name: "@angular-devkit/core",
              dependencies: [
                {
                  name: "ajv",
                  dependencies: [
                    {
                      name: "fast-deep-equal",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "json-schema-traverse",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "require-from-string",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "uri-js",
                      dependencies: [
                        {
                          name: "punycode",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
                {
                  name: "ajv-formats",
                  dependencies: [
                    {
                      name: "ajv",
                      dependencies: [
                        {
                          name: "fast-deep-equal",
                          dependencies: [],
                          level: 5,
                        },
                        {
                          name: "json-schema-traverse",
                          dependencies: [],
                          level: 5,
                        },
                        {
                          name: "require-from-string",
                          dependencies: [],
                          level: 5,
                        },
                        {
                          name: "uri-js",
                          dependencies: [
                            {
                              name: "punycode",
                              dependencies: [],
                              level: 6,
                            },
                          ],
                          level: 5,
                        },
                      ],
                    },
                  ],
                  level: 4,
                },
                {
                  name: "fast-json-stable-stringify",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "magic-string",
                  dependencies: [
                    {
                      name: "sourcemap-codec",
                      dependencies: [],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
                {
                  name: "rxjs",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 4,
                },
                {
                  name: "source-map",
                  dependencies: [],
                  level: 4,
                },
              ],
            },
            {
              name: "@angular-devkit/schematics",
              dependencies: [
                {
                  name: "@angular-devkit/core",
                  dependencies: [
                    {
                      name: "ajv",
                      dependencies: [
                        {
                          name: "fast-deep-equal",
                          dependencies: [],
                          level: 5,
                        },
                        {
                          name: "json-schema-traverse",
                          dependencies: [],
                          level: 5,
                        },
                        {
                          name: "require-from-string",
                          dependencies: [],
                          level: 5,
                        },
                        {
                          name: "uri-js",
                          dependencies: [
                            {
                              name: "punycode",
                              dependencies: [],
                              level: 6,
                            },
                          ],
                          level: 5,
                        },
                      ],
                      level: 4,
                    },
                    {
                      name: "ajv-formats",
                      dependencies: [
                        {
                          name: "ajv",
                          dependencies: [
                            {
                              name: "fast-deep-equal",
                              dependencies: [],
                              level: 5,
                            },
                            {
                              name: "json-schema-traverse",
                              dependencies: [],
                              level: 5,
                            },
                            {
                              name: "require-from-string",
                              dependencies: [],
                              level: 5,
                            },
                            {
                              name: "uri-js",
                              dependencies: [
                                {
                                  name: "punycode",
                                  dependencies: [],
                                  level: 6,
                                },
                              ],
                              level: 5,
                            },
                          ],
                        },
                      ],
                      level: 4,
                    },
                    {
                      name: "fast-json-stable-stringify",
                      dependencies: [],
                      level: 4,
                    },
                    {
                      name: "magic-string",
                      dependencies: [
                        {
                          name: "sourcemap-codec",
                          dependencies: [],
                          level: 5,
                        },
                      ],
                      level: 4,
                    },
                    {
                      name: "rxjs",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 4,
                    },
                    {
                      name: "source-map",
                      dependencies: [],
                      level: 4,
                    },
                  ],
                  level: 3,
                },
                {
                  name: "ora",
                  dependencies: [
                    {
                      name: "bl",
                      dependencies: [
                        {
                          name: "buffer",
                          dependencies: [
                            {
                              name: "base64-js",
                              dependencies: [],
                              level: 6,
                            },
                            {
                              name: "ieee754",
                              dependencies: [],
                              level: 6,
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "inherits",
                          dependencies: [],
                          level: 5,
                        },
                        {
                          name: "readable-stream",
                          dependencies: [
                            {
                              name: "inherits",
                              dependencies: [],
                            },
                            {
                              name: "string_decoder",
                              dependencies: [
                                {
                                  name: "safe-buffer",
                                  dependencies: [],
                                  level: 7,
                                },
                              ],
                              level: 6,
                            },
                            {
                              name: "util-deprecate",
                              dependencies: [],
                              level: 6,
                            },
                          ],
                          level: 5,
                        },
                      ],
                      level: 4,
                    },
                    {
                      name: "chalk",
                      dependencies: [
                        {
                          name: "ansi-styles",
                          dependencies: [
                            {
                              name: "color-convert",
                              dependencies: [
                                {
                                  name: "color-name",
                                  dependencies: [],
                                  level: 7,
                                },
                              ],
                              level: 6,
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "escape-string-regexp",
                          dependencies: [],
                          level: 5,
                        },
                        {
                          name: "supports-color",
                          dependencies: [
                            {
                              name: "has-flag",
                              dependencies: [],
                              level: 6,
                            },
                          ],
                          level: 5,
                        },
                      ],
                      level: 4,
                    },
                    {
                      name: "cli-cursor",
                      dependencies: [
                        {
                          name: "restore-cursor",
                          dependencies: [
                            {
                              name: "onetime",
                              dependencies: [
                                {
                                  name: "mimic-fn",
                                  dependencies: [],
                                  level: 7,
                                },
                              ],
                              level: 6,
                            },
                            {
                              name: "signal-exit",
                              dependencies: [],
                              level: 6,
                            },
                          ],
                          level: 5,
                        },
                      ],
                      level: 4,
                    },
                    {
                      name: "cli-spinners",
                      dependencies: [],
                      level: 4,
                    },
                    {
                      name: "is-interactive",
                      dependencies: [],
                      level: 4,
                    },
                    {
                      name: "is-unicode-supported",
                      dependencies: [],
                      level: 4,
                    },
                    {
                      name: "log-symbols",
                      dependencies: [
                        {
                          name: "chalk",
                          dependencies: [
                            {
                              name: "ansi-styles",
                              dependencies: [
                                {
                                  name: "color-convert",
                                  dependencies: [
                                    {
                                      name: "color-name",
                                      dependencies: [],
                                      level: 7,
                                    },
                                  ],
                                  level: 6,
                                },
                              ],
                              level: 5,
                            },
                            {
                              name: "escape-string-regexp",
                              dependencies: [],
                              level: 5,
                            },
                            {
                              name: "supports-color",
                              dependencies: [
                                {
                                  name: "has-flag",
                                  dependencies: [],
                                  level: 6,
                                },
                              ],
                              level: 5,
                            },
                          ],
                        },
                        {
                          name: "is-unicode-supported",
                          dependencies: [],
                        },
                      ],
                      level: 4,
                    },
                    {
                      name: "strip-ansi",
                      dependencies: [
                        {
                          name: "ansi-regex",
                          dependencies: [],
                          level: 5,
                        },
                      ],
                      level: 4,
                    },
                    {
                      name: "wcwidth",
                      dependencies: [
                        {
                          name: "defaults",
                          dependencies: [
                            {
                              name: "clone",
                              dependencies: [],
                              level: 6,
                            },
                          ],
                          level: 5,
                        },
                      ],
                      level: 4,
                    },
                  ],
                  level: 3,
                },
                {
                  name: "rxjs",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
              ],
            },
            {
              name: "jsonc-parser",
              dependencies: [],
              level: 3,
            },
          ],
          level: 2,
        },
        {
          name: "file-loader",
          dependencies: [
            {
              name: "loader-utils",
              dependencies: [
                {
                  name: "big.js",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "emojis-list",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "json5",
                  dependencies: [],
                  level: 4,
                },
              ],
              level: 3,
            },
            {
              name: "schema-utils",
              dependencies: [
                {
                  name: "@types/json-schema",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "ajv",
                  dependencies: [
                    {
                      name: "fast-deep-equal",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "json-schema-traverse",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "require-from-string",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "uri-js",
                      dependencies: [
                        {
                          name: "punycode",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                },
                {
                  name: "ajv-keywords",
                  dependencies: [],
                  level: 4,
                },
              ],
              level: 3,
            },
          ],
          level: 2,
        },
        {
          name: "firebase",
          dependencies: [
            {
              name: "@firebase/analytics",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 4,
                },
                {
                  name: "@firebase/installations",
                  dependencies: [
                    {
                      name: "@firebase/component",
                      dependencies: [
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "idb",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 4,
                },
                {
                  name: "@firebase/logger",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 4,
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/analytics-compat",
              dependencies: [
                {
                  name: "@firebase/analytics",
                  dependencies: [
                    {
                      name: "@firebase/component",
                      dependencies: [
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 4,
                    },
                    {
                      name: "@firebase/installations",
                      dependencies: [
                        {
                          name: "@firebase/component",
                          dependencies: [
                            {
                              name: "@firebase/util",
                              dependencies: [
                                {
                                  name: "tslib",
                                  dependencies: [],
                                },
                              ],
                              level: 5,
                            },
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                        },
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                        },
                        {
                          name: "idb",
                          dependencies: [],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 4,
                    },
                    {
                      name: "@firebase/logger",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 4,
                    },
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/analytics-types",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/app",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/logger",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "idb",
                  dependencies: [],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/app-check",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/logger",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/app-check-compat",
              dependencies: [
                {
                  name: "@firebase/app-check",
                  dependencies: [
                    {
                      name: "@firebase/component",
                      dependencies: [
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/logger",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/app-check-types",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/logger",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/app-compat",
              dependencies: [
                {
                  name: "@firebase/app",
                  dependencies: [
                    {
                      name: "@firebase/component",
                      dependencies: [
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/logger",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "idb",
                      dependencies: [],
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/logger",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/app-types",
              dependencies: [],
              level: 3,
            },
            {
              name: "@firebase/auth",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/logger",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "node-fetch",
                  dependencies: [
                    {
                      name: "whatwg-url",
                      dependencies: [
                        {
                          name: "lodash",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "tr46",
                          dependencies: [
                            {
                              name: "punycode",
                              dependencies: [],
                            },
                          ],
                          level: 6,
                        },
                        {
                          name: "webidl-conversions",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
                {
                  name: "selenium-webdriver",
                  dependencies: [
                    {
                      name: "jszip",
                      dependencies: [
                        {
                          name: "lie",
                          dependencies: [
                            {
                              name: "immediate",
                              dependencies: [],
                              level: 7,
                            },
                          ],
                          level: 6,
                        },
                        {
                          name: "pako",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "readable-stream",
                          dependencies: [
                            {
                              name: "inherits",
                              dependencies: [],
                            },
                            {
                              name: "string_decoder",
                              dependencies: [
                                {
                                  name: "safe-buffer",
                                  dependencies: [],
                                  level: 7,
                                },
                              ],
                              level: 6,
                            },
                            {
                              name: "util-deprecate",
                              dependencies: [],
                              level: 6,
                            },
                          ],
                        },
                        {
                          name: "setimmediate",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tmp",
                      dependencies: [
                        {
                          name: "os-tmpdir",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "ws",
                      dependencies: [],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/auth-compat",
              dependencies: [
                {
                  name: "@firebase/auth",
                  dependencies: [
                    {
                      name: "@firebase/component",
                      dependencies: [
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/logger",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "node-fetch",
                      dependencies: [
                        {
                          name: "whatwg-url",
                          dependencies: [
                            {
                              name: "lodash",
                              dependencies: [],
                              level: 6,
                            },
                            {
                              name: "tr46",
                              dependencies: [
                                {
                                  name: "punycode",
                                  dependencies: [],
                                },
                              ],
                              level: 6,
                            },
                            {
                              name: "webidl-conversions",
                              dependencies: [],
                              level: 6,
                            },
                          ],
                          level: 5,
                        },
                      ],
                      level: 4,
                    },
                    {
                      name: "selenium-webdriver",
                      dependencies: [
                        {
                          name: "jszip",
                          dependencies: [
                            {
                              name: "lie",
                              dependencies: [
                                {
                                  name: "immediate",
                                  dependencies: [],
                                  level: 7,
                                },
                              ],
                              level: 6,
                            },
                            {
                              name: "pako",
                              dependencies: [],
                              level: 6,
                            },
                            {
                              name: "readable-stream",
                              dependencies: [
                                {
                                  name: "inherits",
                                  dependencies: [],
                                },
                                {
                                  name: "string_decoder",
                                  dependencies: [
                                    {
                                      name: "safe-buffer",
                                      dependencies: [],
                                      level: 7,
                                    },
                                  ],
                                  level: 6,
                                },
                                {
                                  name: "util-deprecate",
                                  dependencies: [],
                                  level: 6,
                                },
                              ],
                            },
                            {
                              name: "setimmediate",
                              dependencies: [],
                              level: 6,
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "tmp",
                          dependencies: [
                            {
                              name: "os-tmpdir",
                              dependencies: [],
                              level: 6,
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "ws",
                          dependencies: [],
                          level: 5,
                        },
                      ],
                      level: 4,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/auth-types",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "node-fetch",
                  dependencies: [
                    {
                      name: "whatwg-url",
                      dependencies: [
                        {
                          name: "lodash",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "tr46",
                          dependencies: [
                            {
                              name: "punycode",
                              dependencies: [],
                            },
                          ],
                          level: 6,
                        },
                        {
                          name: "webidl-conversions",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                },
                {
                  name: "selenium-webdriver",
                  dependencies: [
                    {
                      name: "jszip",
                      dependencies: [
                        {
                          name: "lie",
                          dependencies: [
                            {
                              name: "immediate",
                              dependencies: [],
                              level: 7,
                            },
                          ],
                          level: 6,
                        },
                        {
                          name: "pako",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "readable-stream",
                          dependencies: [
                            {
                              name: "inherits",
                              dependencies: [],
                            },
                            {
                              name: "string_decoder",
                              dependencies: [
                                {
                                  name: "safe-buffer",
                                  dependencies: [],
                                  level: 7,
                                },
                              ],
                              level: 6,
                            },
                            {
                              name: "util-deprecate",
                              dependencies: [],
                              level: 6,
                            },
                          ],
                        },
                        {
                          name: "setimmediate",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tmp",
                      dependencies: [
                        {
                          name: "os-tmpdir",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "ws",
                      dependencies: [],
                      level: 5,
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/database",
              dependencies: [
                {
                  name: "@firebase/auth-interop-types",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/logger",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "faye-websocket",
                  dependencies: [
                    {
                      name: "websocket-driver",
                      dependencies: [
                        {
                          name: "http-parser-js",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "safe-buffer",
                          dependencies: [],
                        },
                        {
                          name: "websocket-extensions",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/database-compat",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/database",
                  dependencies: [
                    {
                      name: "@firebase/auth-interop-types",
                      dependencies: [],
                      level: 4,
                    },
                    {
                      name: "@firebase/component",
                      dependencies: [
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/logger",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "faye-websocket",
                      dependencies: [
                        {
                          name: "websocket-driver",
                          dependencies: [
                            {
                              name: "http-parser-js",
                              dependencies: [],
                              level: 6,
                            },
                            {
                              name: "safe-buffer",
                              dependencies: [],
                            },
                            {
                              name: "websocket-extensions",
                              dependencies: [],
                              level: 6,
                            },
                          ],
                          level: 5,
                        },
                      ],
                      level: 4,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/database-types",
                  dependencies: [
                    {
                      name: "@firebase/app-types",
                      dependencies: [],
                    },
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                  ],
                  level: 4,
                },
                {
                  name: "@firebase/logger",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/firestore",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/logger",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/webchannel-wrapper",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "@grpc/grpc-js",
                  dependencies: [
                    {
                      name: "@grpc/proto-loader",
                      dependencies: [
                        {
                          name: "@types/long",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "lodash.camelcase",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "long",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "protobufjs",
                          dependencies: [
                            {
                              name: "@protobufjs/aspromise",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/base64",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/codegen",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/eventemitter",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/fetch",
                              dependencies: [
                                {
                                  name: "@protobufjs/aspromise",
                                  dependencies: [],
                                },
                                {
                                  name: "@protobufjs/inquire",
                                  dependencies: [],
                                  level: 8,
                                },
                              ],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/float",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/inquire",
                              dependencies: [],
                            },
                            {
                              name: "@protobufjs/path",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/pool",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/utf8",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@types/long",
                              dependencies: [],
                            },
                            {
                              name: "@types/node",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "long",
                              dependencies: [],
                            },
                          ],
                          level: 6,
                        },
                        {
                          name: "yargs",
                          dependencies: [
                            {
                              name: "cliui",
                              dependencies: [
                                {
                                  name: "string-width",
                                  dependencies: [
                                    {
                                      name: "emoji-regex",
                                      dependencies: [],
                                      level: 9,
                                    },
                                    {
                                      name: "is-fullwidth-code-point",
                                      dependencies: [],
                                      level: 9,
                                    },
                                    {
                                      name: "strip-ansi",
                                      dependencies: [
                                        {
                                          name: "ansi-regex",
                                          dependencies: [],
                                          level: 5,
                                        },
                                      ],
                                    },
                                  ],
                                  level: 8,
                                },
                                {
                                  name: "strip-ansi",
                                  dependencies: [
                                    {
                                      name: "ansi-regex",
                                      dependencies: [],
                                      level: 5,
                                    },
                                  ],
                                },
                                {
                                  name: "wrap-ansi",
                                  dependencies: [
                                    {
                                      name: "ansi-styles",
                                      dependencies: [
                                        {
                                          name: "color-convert",
                                          dependencies: [
                                            {
                                              name: "color-name",
                                              dependencies: [],
                                              level: 7,
                                            },
                                          ],
                                          level: 6,
                                        },
                                      ],
                                    },
                                    {
                                      name: "string-width",
                                      dependencies: [
                                        {
                                          name: "emoji-regex",
                                          dependencies: [],
                                          level: 9,
                                        },
                                        {
                                          name: "is-fullwidth-code-point",
                                          dependencies: [],
                                          level: 9,
                                        },
                                        {
                                          name: "strip-ansi",
                                          dependencies: [
                                            {
                                              name: "ansi-regex",
                                              dependencies: [],
                                              level: 5,
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      name: "strip-ansi",
                                      dependencies: [
                                        {
                                          name: "ansi-regex",
                                          dependencies: [],
                                          level: 5,
                                        },
                                      ],
                                    },
                                  ],
                                  level: 8,
                                },
                              ],
                              level: 7,
                            },
                            {
                              name: "escalade",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "get-caller-file",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "require-directory",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "string-width",
                              dependencies: [
                                {
                                  name: "emoji-regex",
                                  dependencies: [],
                                  level: 9,
                                },
                                {
                                  name: "is-fullwidth-code-point",
                                  dependencies: [],
                                  level: 9,
                                },
                                {
                                  name: "strip-ansi",
                                  dependencies: [
                                    {
                                      name: "ansi-regex",
                                      dependencies: [],
                                      level: 5,
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: "y18n",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "yargs-parser",
                              dependencies: [],
                              level: 7,
                            },
                          ],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "@types/node",
                      dependencies: [],
                    },
                  ],
                  level: 4,
                },
                {
                  name: "@grpc/proto-loader",
                  dependencies: [
                    {
                      name: "@types/long",
                      dependencies: [],
                      level: 6,
                    },
                    {
                      name: "lodash.camelcase",
                      dependencies: [],
                      level: 6,
                    },
                    {
                      name: "long",
                      dependencies: [],
                      level: 6,
                    },
                    {
                      name: "protobufjs",
                      dependencies: [
                        {
                          name: "@protobufjs/aspromise",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/base64",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/codegen",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/eventemitter",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/fetch",
                          dependencies: [
                            {
                              name: "@protobufjs/aspromise",
                              dependencies: [],
                            },
                            {
                              name: "@protobufjs/inquire",
                              dependencies: [],
                              level: 8,
                            },
                          ],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/float",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/inquire",
                          dependencies: [],
                        },
                        {
                          name: "@protobufjs/path",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/pool",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/utf8",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@types/long",
                          dependencies: [],
                        },
                        {
                          name: "@types/node",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "long",
                          dependencies: [],
                        },
                      ],
                      level: 6,
                    },
                    {
                      name: "yargs",
                      dependencies: [
                        {
                          name: "cliui",
                          dependencies: [
                            {
                              name: "string-width",
                              dependencies: [
                                {
                                  name: "emoji-regex",
                                  dependencies: [],
                                  level: 9,
                                },
                                {
                                  name: "is-fullwidth-code-point",
                                  dependencies: [],
                                  level: 9,
                                },
                                {
                                  name: "strip-ansi",
                                  dependencies: [
                                    {
                                      name: "ansi-regex",
                                      dependencies: [],
                                      level: 5,
                                    },
                                  ],
                                },
                              ],
                              level: 8,
                            },
                            {
                              name: "strip-ansi",
                              dependencies: [
                                {
                                  name: "ansi-regex",
                                  dependencies: [],
                                  level: 5,
                                },
                              ],
                            },
                            {
                              name: "wrap-ansi",
                              dependencies: [
                                {
                                  name: "ansi-styles",
                                  dependencies: [
                                    {
                                      name: "color-convert",
                                      dependencies: [
                                        {
                                          name: "color-name",
                                          dependencies: [],
                                          level: 7,
                                        },
                                      ],
                                      level: 6,
                                    },
                                  ],
                                },
                                {
                                  name: "string-width",
                                  dependencies: [
                                    {
                                      name: "emoji-regex",
                                      dependencies: [],
                                      level: 9,
                                    },
                                    {
                                      name: "is-fullwidth-code-point",
                                      dependencies: [],
                                      level: 9,
                                    },
                                    {
                                      name: "strip-ansi",
                                      dependencies: [
                                        {
                                          name: "ansi-regex",
                                          dependencies: [],
                                          level: 5,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  name: "strip-ansi",
                                  dependencies: [
                                    {
                                      name: "ansi-regex",
                                      dependencies: [],
                                      level: 5,
                                    },
                                  ],
                                },
                              ],
                              level: 8,
                            },
                          ],
                          level: 7,
                        },
                        {
                          name: "escalade",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "get-caller-file",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "require-directory",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "string-width",
                          dependencies: [
                            {
                              name: "emoji-regex",
                              dependencies: [],
                              level: 9,
                            },
                            {
                              name: "is-fullwidth-code-point",
                              dependencies: [],
                              level: 9,
                            },
                            {
                              name: "strip-ansi",
                              dependencies: [
                                {
                                  name: "ansi-regex",
                                  dependencies: [],
                                  level: 5,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "y18n",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "yargs-parser",
                          dependencies: [],
                          level: 7,
                        },
                      ],
                      level: 6,
                    },
                  ],
                },
                {
                  name: "node-fetch",
                  dependencies: [
                    {
                      name: "whatwg-url",
                      dependencies: [
                        {
                          name: "lodash",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "tr46",
                          dependencies: [
                            {
                              name: "punycode",
                              dependencies: [],
                            },
                          ],
                          level: 6,
                        },
                        {
                          name: "webidl-conversions",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/firestore-compat",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/firestore",
                  dependencies: [
                    {
                      name: "@firebase/component",
                      dependencies: [
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/logger",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/webchannel-wrapper",
                      dependencies: [],
                      level: 4,
                    },
                    {
                      name: "@grpc/grpc-js",
                      dependencies: [
                        {
                          name: "@grpc/proto-loader",
                          dependencies: [
                            {
                              name: "@types/long",
                              dependencies: [],
                              level: 6,
                            },
                            {
                              name: "lodash.camelcase",
                              dependencies: [],
                              level: 6,
                            },
                            {
                              name: "long",
                              dependencies: [],
                              level: 6,
                            },
                            {
                              name: "protobufjs",
                              dependencies: [
                                {
                                  name: "@protobufjs/aspromise",
                                  dependencies: [],
                                  level: 7,
                                },
                                {
                                  name: "@protobufjs/base64",
                                  dependencies: [],
                                  level: 7,
                                },
                                {
                                  name: "@protobufjs/codegen",
                                  dependencies: [],
                                  level: 7,
                                },
                                {
                                  name: "@protobufjs/eventemitter",
                                  dependencies: [],
                                  level: 7,
                                },
                                {
                                  name: "@protobufjs/fetch",
                                  dependencies: [
                                    {
                                      name: "@protobufjs/aspromise",
                                      dependencies: [],
                                    },
                                    {
                                      name: "@protobufjs/inquire",
                                      dependencies: [],
                                      level: 8,
                                    },
                                  ],
                                  level: 7,
                                },
                                {
                                  name: "@protobufjs/float",
                                  dependencies: [],
                                  level: 7,
                                },
                                {
                                  name: "@protobufjs/inquire",
                                  dependencies: [],
                                },
                                {
                                  name: "@protobufjs/path",
                                  dependencies: [],
                                  level: 7,
                                },
                                {
                                  name: "@protobufjs/pool",
                                  dependencies: [],
                                  level: 7,
                                },
                                {
                                  name: "@protobufjs/utf8",
                                  dependencies: [],
                                  level: 7,
                                },
                                {
                                  name: "@types/long",
                                  dependencies: [],
                                },
                                {
                                  name: "@types/node",
                                  dependencies: [],
                                  level: 7,
                                },
                                {
                                  name: "long",
                                  dependencies: [],
                                },
                              ],
                              level: 6,
                            },
                            {
                              name: "yargs",
                              dependencies: [
                                {
                                  name: "cliui",
                                  dependencies: [
                                    {
                                      name: "string-width",
                                      dependencies: [
                                        {
                                          name: "emoji-regex",
                                          dependencies: [],
                                          level: 9,
                                        },
                                        {
                                          name: "is-fullwidth-code-point",
                                          dependencies: [],
                                          level: 9,
                                        },
                                        {
                                          name: "strip-ansi",
                                          dependencies: [
                                            {
                                              name: "ansi-regex",
                                              dependencies: [],
                                              level: 5,
                                            },
                                          ],
                                        },
                                      ],
                                      level: 8,
                                    },
                                    {
                                      name: "strip-ansi",
                                      dependencies: [
                                        {
                                          name: "ansi-regex",
                                          dependencies: [],
                                          level: 5,
                                        },
                                      ],
                                    },
                                    {
                                      name: "wrap-ansi",
                                      dependencies: [
                                        {
                                          name: "ansi-styles",
                                          dependencies: [
                                            {
                                              name: "color-convert",
                                              dependencies: [
                                                {
                                                  name: "color-name",
                                                  dependencies: [],
                                                  level: 7,
                                                },
                                              ],
                                              level: 6,
                                            },
                                          ],
                                        },
                                        {
                                          name: "string-width",
                                          dependencies: [
                                            {
                                              name: "emoji-regex",
                                              dependencies: [],
                                              level: 9,
                                            },
                                            {
                                              name: "is-fullwidth-code-point",
                                              dependencies: [],
                                              level: 9,
                                            },
                                            {
                                              name: "strip-ansi",
                                              dependencies: [
                                                {
                                                  name: "ansi-regex",
                                                  dependencies: [],
                                                  level: 5,
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          name: "strip-ansi",
                                          dependencies: [
                                            {
                                              name: "ansi-regex",
                                              dependencies: [],
                                              level: 5,
                                            },
                                          ],
                                        },
                                      ],
                                      level: 8,
                                    },
                                  ],
                                  level: 7,
                                },
                                {
                                  name: "escalade",
                                  dependencies: [],
                                  level: 7,
                                },
                                {
                                  name: "get-caller-file",
                                  dependencies: [],
                                  level: 7,
                                },
                                {
                                  name: "require-directory",
                                  dependencies: [],
                                  level: 7,
                                },
                                {
                                  name: "string-width",
                                  dependencies: [
                                    {
                                      name: "emoji-regex",
                                      dependencies: [],
                                      level: 9,
                                    },
                                    {
                                      name: "is-fullwidth-code-point",
                                      dependencies: [],
                                      level: 9,
                                    },
                                    {
                                      name: "strip-ansi",
                                      dependencies: [
                                        {
                                          name: "ansi-regex",
                                          dependencies: [],
                                          level: 5,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  name: "y18n",
                                  dependencies: [],
                                  level: 7,
                                },
                                {
                                  name: "yargs-parser",
                                  dependencies: [],
                                  level: 7,
                                },
                              ],
                              level: 6,
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "@types/node",
                          dependencies: [],
                        },
                      ],
                      level: 4,
                    },
                    {
                      name: "@grpc/proto-loader",
                      dependencies: [
                        {
                          name: "@types/long",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "lodash.camelcase",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "long",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "protobufjs",
                          dependencies: [
                            {
                              name: "@protobufjs/aspromise",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/base64",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/codegen",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/eventemitter",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/fetch",
                              dependencies: [
                                {
                                  name: "@protobufjs/aspromise",
                                  dependencies: [],
                                },
                                {
                                  name: "@protobufjs/inquire",
                                  dependencies: [],
                                  level: 8,
                                },
                              ],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/float",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/inquire",
                              dependencies: [],
                            },
                            {
                              name: "@protobufjs/path",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/pool",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/utf8",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@types/long",
                              dependencies: [],
                            },
                            {
                              name: "@types/node",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "long",
                              dependencies: [],
                            },
                          ],
                          level: 6,
                        },
                        {
                          name: "yargs",
                          dependencies: [
                            {
                              name: "cliui",
                              dependencies: [
                                {
                                  name: "string-width",
                                  dependencies: [
                                    {
                                      name: "emoji-regex",
                                      dependencies: [],
                                      level: 9,
                                    },
                                    {
                                      name: "is-fullwidth-code-point",
                                      dependencies: [],
                                      level: 9,
                                    },
                                    {
                                      name: "strip-ansi",
                                      dependencies: [
                                        {
                                          name: "ansi-regex",
                                          dependencies: [],
                                          level: 5,
                                        },
                                      ],
                                    },
                                  ],
                                  level: 8,
                                },
                                {
                                  name: "strip-ansi",
                                  dependencies: [
                                    {
                                      name: "ansi-regex",
                                      dependencies: [],
                                      level: 5,
                                    },
                                  ],
                                },
                                {
                                  name: "wrap-ansi",
                                  dependencies: [
                                    {
                                      name: "ansi-styles",
                                      dependencies: [
                                        {
                                          name: "color-convert",
                                          dependencies: [
                                            {
                                              name: "color-name",
                                              dependencies: [],
                                              level: 7,
                                            },
                                          ],
                                          level: 6,
                                        },
                                      ],
                                    },
                                    {
                                      name: "string-width",
                                      dependencies: [
                                        {
                                          name: "emoji-regex",
                                          dependencies: [],
                                          level: 9,
                                        },
                                        {
                                          name: "is-fullwidth-code-point",
                                          dependencies: [],
                                          level: 9,
                                        },
                                        {
                                          name: "strip-ansi",
                                          dependencies: [
                                            {
                                              name: "ansi-regex",
                                              dependencies: [],
                                              level: 5,
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      name: "strip-ansi",
                                      dependencies: [
                                        {
                                          name: "ansi-regex",
                                          dependencies: [],
                                          level: 5,
                                        },
                                      ],
                                    },
                                  ],
                                  level: 8,
                                },
                              ],
                              level: 7,
                            },
                            {
                              name: "escalade",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "get-caller-file",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "require-directory",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "string-width",
                              dependencies: [
                                {
                                  name: "emoji-regex",
                                  dependencies: [],
                                  level: 9,
                                },
                                {
                                  name: "is-fullwidth-code-point",
                                  dependencies: [],
                                  level: 9,
                                },
                                {
                                  name: "strip-ansi",
                                  dependencies: [
                                    {
                                      name: "ansi-regex",
                                      dependencies: [],
                                      level: 5,
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: "y18n",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "yargs-parser",
                              dependencies: [],
                              level: 7,
                            },
                          ],
                          level: 6,
                        },
                      ],
                    },
                    {
                      name: "node-fetch",
                      dependencies: [
                        {
                          name: "whatwg-url",
                          dependencies: [
                            {
                              name: "lodash",
                              dependencies: [],
                              level: 6,
                            },
                            {
                              name: "tr46",
                              dependencies: [
                                {
                                  name: "punycode",
                                  dependencies: [],
                                },
                              ],
                              level: 6,
                            },
                            {
                              name: "webidl-conversions",
                              dependencies: [],
                              level: 6,
                            },
                          ],
                          level: 5,
                        },
                      ],
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/firestore-types",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/functions",
              dependencies: [
                {
                  name: "@firebase/app-check-interop-types",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "@firebase/auth-interop-types",
                  dependencies: [],
                },
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/messaging-interop-types",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "node-fetch",
                  dependencies: [
                    {
                      name: "whatwg-url",
                      dependencies: [
                        {
                          name: "lodash",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "tr46",
                          dependencies: [
                            {
                              name: "punycode",
                              dependencies: [],
                            },
                          ],
                          level: 6,
                        },
                        {
                          name: "webidl-conversions",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/functions-compat",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/functions",
                  dependencies: [
                    {
                      name: "@firebase/app-check-interop-types",
                      dependencies: [],
                      level: 4,
                    },
                    {
                      name: "@firebase/auth-interop-types",
                      dependencies: [],
                    },
                    {
                      name: "@firebase/component",
                      dependencies: [
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/messaging-interop-types",
                      dependencies: [],
                      level: 4,
                    },
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "node-fetch",
                      dependencies: [
                        {
                          name: "whatwg-url",
                          dependencies: [
                            {
                              name: "lodash",
                              dependencies: [],
                              level: 6,
                            },
                            {
                              name: "tr46",
                              dependencies: [
                                {
                                  name: "punycode",
                                  dependencies: [],
                                },
                              ],
                              level: 6,
                            },
                            {
                              name: "webidl-conversions",
                              dependencies: [],
                              level: 6,
                            },
                          ],
                          level: 5,
                        },
                      ],
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/functions-types",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/installations",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "idb",
                  dependencies: [],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/messaging",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/installations",
                  dependencies: [
                    {
                      name: "@firebase/component",
                      dependencies: [
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "idb",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/messaging-interop-types",
                  dependencies: [],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "idb",
                  dependencies: [],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/messaging-compat",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/messaging",
                  dependencies: [
                    {
                      name: "@firebase/component",
                      dependencies: [
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/installations",
                      dependencies: [
                        {
                          name: "@firebase/component",
                          dependencies: [
                            {
                              name: "@firebase/util",
                              dependencies: [
                                {
                                  name: "tslib",
                                  dependencies: [],
                                },
                              ],
                              level: 5,
                            },
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                        },
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                        },
                        {
                          name: "idb",
                          dependencies: [],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/messaging-interop-types",
                      dependencies: [],
                    },
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "idb",
                      dependencies: [],
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/performance",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/installations",
                  dependencies: [
                    {
                      name: "@firebase/component",
                      dependencies: [
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "idb",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/logger",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/performance-compat",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/logger",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/performance",
                  dependencies: [
                    {
                      name: "@firebase/component",
                      dependencies: [
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/installations",
                      dependencies: [
                        {
                          name: "@firebase/component",
                          dependencies: [
                            {
                              name: "@firebase/util",
                              dependencies: [
                                {
                                  name: "tslib",
                                  dependencies: [],
                                },
                              ],
                              level: 5,
                            },
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                        },
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                        },
                        {
                          name: "idb",
                          dependencies: [],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/logger",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/performance-types",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/polyfill",
              dependencies: [
                {
                  name: "core-js",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "promise-polyfill",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "whatwg-fetch",
                  dependencies: [],
                  level: 4,
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/remote-config",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/installations",
                  dependencies: [
                    {
                      name: "@firebase/component",
                      dependencies: [
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "idb",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/logger",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/remote-config-compat",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/logger",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/remote-config",
                  dependencies: [
                    {
                      name: "@firebase/component",
                      dependencies: [
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/installations",
                      dependencies: [
                        {
                          name: "@firebase/component",
                          dependencies: [
                            {
                              name: "@firebase/util",
                              dependencies: [
                                {
                                  name: "tslib",
                                  dependencies: [],
                                },
                              ],
                              level: 5,
                            },
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                        },
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                        },
                        {
                          name: "idb",
                          dependencies: [],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/logger",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/remote-config-types",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/storage",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "node-fetch",
                  dependencies: [
                    {
                      name: "whatwg-url",
                      dependencies: [
                        {
                          name: "lodash",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "tr46",
                          dependencies: [
                            {
                              name: "punycode",
                              dependencies: [],
                            },
                          ],
                          level: 6,
                        },
                        {
                          name: "webidl-conversions",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/storage-compat",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/storage",
                  dependencies: [
                    {
                      name: "@firebase/component",
                      dependencies: [
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "node-fetch",
                      dependencies: [
                        {
                          name: "whatwg-url",
                          dependencies: [
                            {
                              name: "lodash",
                              dependencies: [],
                              level: 6,
                            },
                            {
                              name: "tr46",
                              dependencies: [
                                {
                                  name: "punycode",
                                  dependencies: [],
                                },
                              ],
                              level: 6,
                            },
                            {
                              name: "webidl-conversions",
                              dependencies: [],
                              level: 6,
                            },
                          ],
                          level: 5,
                        },
                      ],
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/storage-types",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
          ],
          level: 2,
        },
        {
          name: "fs-extra",
          dependencies: [
            {
              name: "graceful-fs",
              dependencies: [],
              level: 3,
            },
            {
              name: "jsonfile",
              dependencies: [
                {
                  name: "graceful-fs",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "universalify",
              dependencies: [],
              level: 3,
            },
          ],
          level: 2,
        },
        {
          name: "fuzzy",
          dependencies: [],
          level: 2,
        },
        {
          name: "inquirer",
          dependencies: [
            {
              name: "ansi-escapes",
              dependencies: [
                {
                  name: "type-fest",
                  dependencies: [],
                  level: 4,
                },
              ],
              level: 3,
            },
            {
              name: "chalk",
              dependencies: [
                {
                  name: "ansi-styles",
                  dependencies: [
                    {
                      name: "color-convert",
                      dependencies: [
                        {
                          name: "color-name",
                          dependencies: [],
                          level: 7,
                        },
                      ],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
                {
                  name: "escape-string-regexp",
                  dependencies: [],
                  level: 5,
                },
                {
                  name: "supports-color",
                  dependencies: [
                    {
                      name: "has-flag",
                      dependencies: [],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
              ],
            },
            {
              name: "cli-cursor",
              dependencies: [
                {
                  name: "restore-cursor",
                  dependencies: [
                    {
                      name: "onetime",
                      dependencies: [
                        {
                          name: "mimic-fn",
                          dependencies: [],
                          level: 7,
                        },
                      ],
                      level: 6,
                    },
                    {
                      name: "signal-exit",
                      dependencies: [],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
              ],
            },
            {
              name: "cli-width",
              dependencies: [],
              level: 3,
            },
            {
              name: "external-editor",
              dependencies: [
                {
                  name: "chardet",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "iconv-lite",
                  dependencies: [
                    {
                      name: "safer-buffer",
                      dependencies: [],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
                {
                  name: "tmp",
                  dependencies: [
                    {
                      name: "os-tmpdir",
                      dependencies: [],
                      level: 6,
                    },
                  ],
                },
              ],
              level: 3,
            },
            {
              name: "figures",
              dependencies: [
                {
                  name: "escape-string-regexp",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "lodash",
              dependencies: [],
            },
            {
              name: "mute-stream",
              dependencies: [],
              level: 3,
            },
            {
              name: "ora",
              dependencies: [
                {
                  name: "bl",
                  dependencies: [
                    {
                      name: "buffer",
                      dependencies: [
                        {
                          name: "base64-js",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "ieee754",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "inherits",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "readable-stream",
                      dependencies: [
                        {
                          name: "inherits",
                          dependencies: [],
                        },
                        {
                          name: "string_decoder",
                          dependencies: [
                            {
                              name: "safe-buffer",
                              dependencies: [],
                              level: 7,
                            },
                          ],
                          level: 6,
                        },
                        {
                          name: "util-deprecate",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
                {
                  name: "chalk",
                  dependencies: [
                    {
                      name: "ansi-styles",
                      dependencies: [
                        {
                          name: "color-convert",
                          dependencies: [
                            {
                              name: "color-name",
                              dependencies: [],
                              level: 7,
                            },
                          ],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "escape-string-regexp",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "supports-color",
                      dependencies: [
                        {
                          name: "has-flag",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
                {
                  name: "cli-cursor",
                  dependencies: [
                    {
                      name: "restore-cursor",
                      dependencies: [
                        {
                          name: "onetime",
                          dependencies: [
                            {
                              name: "mimic-fn",
                              dependencies: [],
                              level: 7,
                            },
                          ],
                          level: 6,
                        },
                        {
                          name: "signal-exit",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
                {
                  name: "cli-spinners",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "is-interactive",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "is-unicode-supported",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "log-symbols",
                  dependencies: [
                    {
                      name: "chalk",
                      dependencies: [
                        {
                          name: "ansi-styles",
                          dependencies: [
                            {
                              name: "color-convert",
                              dependencies: [
                                {
                                  name: "color-name",
                                  dependencies: [],
                                  level: 7,
                                },
                              ],
                              level: 6,
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "escape-string-regexp",
                          dependencies: [],
                          level: 5,
                        },
                        {
                          name: "supports-color",
                          dependencies: [
                            {
                              name: "has-flag",
                              dependencies: [],
                              level: 6,
                            },
                          ],
                          level: 5,
                        },
                      ],
                    },
                    {
                      name: "is-unicode-supported",
                      dependencies: [],
                    },
                  ],
                  level: 4,
                },
                {
                  name: "strip-ansi",
                  dependencies: [
                    {
                      name: "ansi-regex",
                      dependencies: [],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
                {
                  name: "wcwidth",
                  dependencies: [
                    {
                      name: "defaults",
                      dependencies: [
                        {
                          name: "clone",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
              ],
            },
            {
              name: "run-async",
              dependencies: [],
              level: 3,
            },
            {
              name: "rxjs",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "string-width",
              dependencies: [
                {
                  name: "emoji-regex",
                  dependencies: [],
                  level: 9,
                },
                {
                  name: "is-fullwidth-code-point",
                  dependencies: [],
                  level: 9,
                },
                {
                  name: "strip-ansi",
                  dependencies: [
                    {
                      name: "ansi-regex",
                      dependencies: [],
                      level: 5,
                    },
                  ],
                },
              ],
            },
            {
              name: "strip-ansi",
              dependencies: [
                {
                  name: "ansi-regex",
                  dependencies: [],
                  level: 5,
                },
              ],
            },
            {
              name: "through",
              dependencies: [],
              level: 3,
            },
          ],
          level: 2,
        },
        {
          name: "inquirer-autocomplete-prompt",
          dependencies: [
            {
              name: "ansi-escapes",
              dependencies: [
                {
                  name: "type-fest",
                  dependencies: [],
                  level: 4,
                },
              ],
            },
            {
              name: "chalk",
              dependencies: [
                {
                  name: "ansi-styles",
                  dependencies: [
                    {
                      name: "color-convert",
                      dependencies: [
                        {
                          name: "color-name",
                          dependencies: [],
                          level: 7,
                        },
                      ],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
                {
                  name: "escape-string-regexp",
                  dependencies: [],
                  level: 5,
                },
                {
                  name: "supports-color",
                  dependencies: [
                    {
                      name: "has-flag",
                      dependencies: [],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
              ],
            },
            {
              name: "figures",
              dependencies: [
                {
                  name: "escape-string-regexp",
                  dependencies: [],
                },
              ],
            },
            {
              name: "run-async",
              dependencies: [],
            },
            {
              name: "rxjs",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
          ],
          level: 2,
        },
        {
          name: "jsonc-parser",
          dependencies: [],
        },
        {
          name: "node-fetch",
          dependencies: [
            {
              name: "whatwg-url",
              dependencies: [
                {
                  name: "lodash",
                  dependencies: [],
                  level: 6,
                },
                {
                  name: "tr46",
                  dependencies: [
                    {
                      name: "punycode",
                      dependencies: [],
                    },
                  ],
                  level: 6,
                },
                {
                  name: "webidl-conversions",
                  dependencies: [],
                  level: 6,
                },
              ],
              level: 5,
            },
          ],
        },
        {
          name: "open",
          dependencies: [
            {
              name: "define-lazy-prop",
              dependencies: [],
              level: 3,
            },
            {
              name: "is-docker",
              dependencies: [],
              level: 3,
            },
            {
              name: "is-wsl",
              dependencies: [
                {
                  name: "is-docker",
                  dependencies: [],
                },
              ],
              level: 3,
            },
          ],
          level: 2,
        },
        {
          name: "ora",
          dependencies: [
            {
              name: "bl",
              dependencies: [
                {
                  name: "buffer",
                  dependencies: [
                    {
                      name: "base64-js",
                      dependencies: [],
                      level: 6,
                    },
                    {
                      name: "ieee754",
                      dependencies: [],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
                {
                  name: "inherits",
                  dependencies: [],
                  level: 5,
                },
                {
                  name: "readable-stream",
                  dependencies: [
                    {
                      name: "inherits",
                      dependencies: [],
                    },
                    {
                      name: "string_decoder",
                      dependencies: [
                        {
                          name: "safe-buffer",
                          dependencies: [],
                          level: 7,
                        },
                      ],
                      level: 6,
                    },
                    {
                      name: "util-deprecate",
                      dependencies: [],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
              ],
              level: 4,
            },
            {
              name: "chalk",
              dependencies: [
                {
                  name: "ansi-styles",
                  dependencies: [
                    {
                      name: "color-convert",
                      dependencies: [
                        {
                          name: "color-name",
                          dependencies: [],
                          level: 7,
                        },
                      ],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
                {
                  name: "escape-string-regexp",
                  dependencies: [],
                  level: 5,
                },
                {
                  name: "supports-color",
                  dependencies: [
                    {
                      name: "has-flag",
                      dependencies: [],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
              ],
              level: 4,
            },
            {
              name: "cli-cursor",
              dependencies: [
                {
                  name: "restore-cursor",
                  dependencies: [
                    {
                      name: "onetime",
                      dependencies: [
                        {
                          name: "mimic-fn",
                          dependencies: [],
                          level: 7,
                        },
                      ],
                      level: 6,
                    },
                    {
                      name: "signal-exit",
                      dependencies: [],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
              ],
              level: 4,
            },
            {
              name: "cli-spinners",
              dependencies: [],
              level: 4,
            },
            {
              name: "is-interactive",
              dependencies: [],
              level: 4,
            },
            {
              name: "is-unicode-supported",
              dependencies: [],
              level: 4,
            },
            {
              name: "log-symbols",
              dependencies: [
                {
                  name: "chalk",
                  dependencies: [
                    {
                      name: "ansi-styles",
                      dependencies: [
                        {
                          name: "color-convert",
                          dependencies: [
                            {
                              name: "color-name",
                              dependencies: [],
                              level: 7,
                            },
                          ],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "escape-string-regexp",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "supports-color",
                      dependencies: [
                        {
                          name: "has-flag",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                },
                {
                  name: "is-unicode-supported",
                  dependencies: [],
                },
              ],
              level: 4,
            },
            {
              name: "strip-ansi",
              dependencies: [
                {
                  name: "ansi-regex",
                  dependencies: [],
                  level: 5,
                },
              ],
              level: 4,
            },
            {
              name: "wcwidth",
              dependencies: [
                {
                  name: "defaults",
                  dependencies: [
                    {
                      name: "clone",
                      dependencies: [],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
              ],
              level: 4,
            },
          ],
        },
        {
          name: "rxfire",
          dependencies: [
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 2,
        },
        {
          name: "semver",
          dependencies: [
            {
              name: "lru-cache",
              dependencies: [
                {
                  name: "yallist",
                  dependencies: [],
                  level: 4,
                },
              ],
              level: 3,
            },
          ],
          level: 2,
        },
        {
          name: "triple-beam",
          dependencies: [],
          level: 2,
        },
        {
          name: "tslib",
          dependencies: [],
        },
        {
          name: "winston",
          dependencies: [
            {
              name: "@dabh/diagnostics",
              dependencies: [
                {
                  name: "colorspace",
                  dependencies: [
                    {
                      name: "color",
                      dependencies: [
                        {
                          name: "color-convert",
                          dependencies: [
                            {
                              name: "color-name",
                              dependencies: [],
                              level: 7,
                            },
                          ],
                        },
                        {
                          name: "color-string",
                          dependencies: [
                            {
                              name: "color-name",
                              dependencies: [],
                            },
                            {
                              name: "simple-swizzle",
                              dependencies: [
                                {
                                  name: "is-arrayish",
                                  dependencies: [],
                                  level: 8,
                                },
                              ],
                              level: 7,
                            },
                          ],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "text-hex",
                      dependencies: [],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
                {
                  name: "enabled",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "kuler",
                  dependencies: [],
                  level: 4,
                },
              ],
              level: 3,
            },
            {
              name: "async",
              dependencies: [
                {
                  name: "lodash",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "is-stream",
              dependencies: [],
              level: 3,
            },
            {
              name: "logform",
              dependencies: [
                {
                  name: "@colors/colors",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "fecha",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "ms",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "safe-stable-stringify",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "triple-beam",
                  dependencies: [],
                },
              ],
              level: 3,
            },
            {
              name: "one-time",
              dependencies: [
                {
                  name: "fn.name",
                  dependencies: [],
                  level: 4,
                },
              ],
              level: 3,
            },
            {
              name: "readable-stream",
              dependencies: [
                {
                  name: "inherits",
                  dependencies: [],
                },
                {
                  name: "string_decoder",
                  dependencies: [
                    {
                      name: "safe-buffer",
                      dependencies: [],
                      level: 7,
                    },
                  ],
                  level: 6,
                },
                {
                  name: "util-deprecate",
                  dependencies: [],
                  level: 6,
                },
              ],
            },
            {
              name: "safe-stable-stringify",
              dependencies: [],
            },
            {
              name: "stack-trace",
              dependencies: [],
              level: 3,
            },
            {
              name: "triple-beam",
              dependencies: [],
            },
            {
              name: "winston-transport",
              dependencies: [
                {
                  name: "logform",
                  dependencies: [
                    {
                      name: "@colors/colors",
                      dependencies: [],
                      level: 4,
                    },
                    {
                      name: "fecha",
                      dependencies: [],
                      level: 4,
                    },
                    {
                      name: "ms",
                      dependencies: [],
                      level: 4,
                    },
                    {
                      name: "safe-stable-stringify",
                      dependencies: [],
                      level: 4,
                    },
                    {
                      name: "triple-beam",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "readable-stream",
                  dependencies: [
                    {
                      name: "inherits",
                      dependencies: [],
                    },
                    {
                      name: "string_decoder",
                      dependencies: [
                        {
                          name: "safe-buffer",
                          dependencies: [],
                          level: 7,
                        },
                      ],
                      level: 6,
                    },
                    {
                      name: "util-deprecate",
                      dependencies: [],
                      level: 6,
                    },
                  ],
                },
                {
                  name: "triple-beam",
                  dependencies: [],
                },
              ],
              level: 3,
            },
          ],
          level: 2,
        },
      ],
      level: 1,
    },
    {
      name: "@angular/forms",
      dependencies: [
        {
          name: "tslib",
          dependencies: [],
        },
      ],
      level: 1,
    },
    {
      name: "@angular/platform-browser",
      dependencies: [
        {
          name: "tslib",
          dependencies: [],
        },
      ],
      level: 1,
    },
    {
      name: "@angular/platform-browser-dynamic",
      dependencies: [
        {
          name: "tslib",
          dependencies: [],
        },
      ],
      level: 1,
    },
    {
      name: "@angular/router",
      dependencies: [
        {
          name: "tslib",
          dependencies: [],
        },
      ],
      level: 1,
    },
    {
      name: "rxjs",
      dependencies: [
        {
          name: "tslib",
          dependencies: [],
        },
      ],
    },
    {
      name: "tslib",
      dependencies: [],
    },
    {
      name: "zone.js",
      dependencies: [
        {
          name: "tslib",
          dependencies: [],
        },
      ],
      level: 1,
    },
    {
      name: "firebase",
      dependencies: [
        {
          name: "@firebase/analytics",
          dependencies: [
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 4,
            },
            {
              name: "@firebase/installations",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "idb",
                  dependencies: [],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 4,
            },
            {
              name: "@firebase/logger",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
              level: 4,
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/analytics-compat",
          dependencies: [
            {
              name: "@firebase/analytics",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 4,
                },
                {
                  name: "@firebase/installations",
                  dependencies: [
                    {
                      name: "@firebase/component",
                      dependencies: [
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "idb",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 4,
                },
                {
                  name: "@firebase/logger",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 4,
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/analytics-types",
              dependencies: [],
              level: 4,
            },
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/app",
          dependencies: [
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/logger",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "idb",
              dependencies: [],
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/app-check",
          dependencies: [
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/logger",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/app-check-compat",
          dependencies: [
            {
              name: "@firebase/app-check",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/logger",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/app-check-types",
              dependencies: [],
              level: 4,
            },
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/logger",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/app-compat",
          dependencies: [
            {
              name: "@firebase/app",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/logger",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "idb",
                  dependencies: [],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/logger",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/app-types",
          dependencies: [],
          level: 3,
        },
        {
          name: "@firebase/auth",
          dependencies: [
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/logger",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "node-fetch",
              dependencies: [
                {
                  name: "whatwg-url",
                  dependencies: [
                    {
                      name: "lodash",
                      dependencies: [],
                      level: 6,
                    },
                    {
                      name: "tr46",
                      dependencies: [
                        {
                          name: "punycode",
                          dependencies: [],
                        },
                      ],
                      level: 6,
                    },
                    {
                      name: "webidl-conversions",
                      dependencies: [],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
              ],
              level: 4,
            },
            {
              name: "selenium-webdriver",
              dependencies: [
                {
                  name: "jszip",
                  dependencies: [
                    {
                      name: "lie",
                      dependencies: [
                        {
                          name: "immediate",
                          dependencies: [],
                          level: 7,
                        },
                      ],
                      level: 6,
                    },
                    {
                      name: "pako",
                      dependencies: [],
                      level: 6,
                    },
                    {
                      name: "readable-stream",
                      dependencies: [
                        {
                          name: "inherits",
                          dependencies: [],
                        },
                        {
                          name: "string_decoder",
                          dependencies: [
                            {
                              name: "safe-buffer",
                              dependencies: [],
                              level: 7,
                            },
                          ],
                          level: 6,
                        },
                        {
                          name: "util-deprecate",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                    },
                    {
                      name: "setimmediate",
                      dependencies: [],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tmp",
                  dependencies: [
                    {
                      name: "os-tmpdir",
                      dependencies: [],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
                {
                  name: "ws",
                  dependencies: [],
                  level: 5,
                },
              ],
              level: 4,
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/auth-compat",
          dependencies: [
            {
              name: "@firebase/auth",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/logger",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "node-fetch",
                  dependencies: [
                    {
                      name: "whatwg-url",
                      dependencies: [
                        {
                          name: "lodash",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "tr46",
                          dependencies: [
                            {
                              name: "punycode",
                              dependencies: [],
                            },
                          ],
                          level: 6,
                        },
                        {
                          name: "webidl-conversions",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
                {
                  name: "selenium-webdriver",
                  dependencies: [
                    {
                      name: "jszip",
                      dependencies: [
                        {
                          name: "lie",
                          dependencies: [
                            {
                              name: "immediate",
                              dependencies: [],
                              level: 7,
                            },
                          ],
                          level: 6,
                        },
                        {
                          name: "pako",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "readable-stream",
                          dependencies: [
                            {
                              name: "inherits",
                              dependencies: [],
                            },
                            {
                              name: "string_decoder",
                              dependencies: [
                                {
                                  name: "safe-buffer",
                                  dependencies: [],
                                  level: 7,
                                },
                              ],
                              level: 6,
                            },
                            {
                              name: "util-deprecate",
                              dependencies: [],
                              level: 6,
                            },
                          ],
                        },
                        {
                          name: "setimmediate",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tmp",
                      dependencies: [
                        {
                          name: "os-tmpdir",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "ws",
                      dependencies: [],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/auth-types",
              dependencies: [],
              level: 4,
            },
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "node-fetch",
              dependencies: [
                {
                  name: "whatwg-url",
                  dependencies: [
                    {
                      name: "lodash",
                      dependencies: [],
                      level: 6,
                    },
                    {
                      name: "tr46",
                      dependencies: [
                        {
                          name: "punycode",
                          dependencies: [],
                        },
                      ],
                      level: 6,
                    },
                    {
                      name: "webidl-conversions",
                      dependencies: [],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
              ],
            },
            {
              name: "selenium-webdriver",
              dependencies: [
                {
                  name: "jszip",
                  dependencies: [
                    {
                      name: "lie",
                      dependencies: [
                        {
                          name: "immediate",
                          dependencies: [],
                          level: 7,
                        },
                      ],
                      level: 6,
                    },
                    {
                      name: "pako",
                      dependencies: [],
                      level: 6,
                    },
                    {
                      name: "readable-stream",
                      dependencies: [
                        {
                          name: "inherits",
                          dependencies: [],
                        },
                        {
                          name: "string_decoder",
                          dependencies: [
                            {
                              name: "safe-buffer",
                              dependencies: [],
                              level: 7,
                            },
                          ],
                          level: 6,
                        },
                        {
                          name: "util-deprecate",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                    },
                    {
                      name: "setimmediate",
                      dependencies: [],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tmp",
                  dependencies: [
                    {
                      name: "os-tmpdir",
                      dependencies: [],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
                {
                  name: "ws",
                  dependencies: [],
                  level: 5,
                },
              ],
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/database",
          dependencies: [
            {
              name: "@firebase/auth-interop-types",
              dependencies: [],
              level: 4,
            },
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/logger",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "faye-websocket",
              dependencies: [
                {
                  name: "websocket-driver",
                  dependencies: [
                    {
                      name: "http-parser-js",
                      dependencies: [],
                      level: 6,
                    },
                    {
                      name: "safe-buffer",
                      dependencies: [],
                    },
                    {
                      name: "websocket-extensions",
                      dependencies: [],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
              ],
              level: 4,
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/database-compat",
          dependencies: [
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/database",
              dependencies: [
                {
                  name: "@firebase/auth-interop-types",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/logger",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "faye-websocket",
                  dependencies: [
                    {
                      name: "websocket-driver",
                      dependencies: [
                        {
                          name: "http-parser-js",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "safe-buffer",
                          dependencies: [],
                        },
                        {
                          name: "websocket-extensions",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                  level: 4,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/database-types",
              dependencies: [
                {
                  name: "@firebase/app-types",
                  dependencies: [],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
              ],
              level: 4,
            },
            {
              name: "@firebase/logger",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/firestore",
          dependencies: [
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/logger",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/webchannel-wrapper",
              dependencies: [],
              level: 4,
            },
            {
              name: "@grpc/grpc-js",
              dependencies: [
                {
                  name: "@grpc/proto-loader",
                  dependencies: [
                    {
                      name: "@types/long",
                      dependencies: [],
                      level: 6,
                    },
                    {
                      name: "lodash.camelcase",
                      dependencies: [],
                      level: 6,
                    },
                    {
                      name: "long",
                      dependencies: [],
                      level: 6,
                    },
                    {
                      name: "protobufjs",
                      dependencies: [
                        {
                          name: "@protobufjs/aspromise",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/base64",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/codegen",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/eventemitter",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/fetch",
                          dependencies: [
                            {
                              name: "@protobufjs/aspromise",
                              dependencies: [],
                            },
                            {
                              name: "@protobufjs/inquire",
                              dependencies: [],
                              level: 8,
                            },
                          ],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/float",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/inquire",
                          dependencies: [],
                        },
                        {
                          name: "@protobufjs/path",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/pool",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/utf8",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@types/long",
                          dependencies: [],
                        },
                        {
                          name: "@types/node",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "long",
                          dependencies: [],
                        },
                      ],
                      level: 6,
                    },
                    {
                      name: "yargs",
                      dependencies: [
                        {
                          name: "cliui",
                          dependencies: [
                            {
                              name: "string-width",
                              dependencies: [
                                {
                                  name: "emoji-regex",
                                  dependencies: [],
                                  level: 9,
                                },
                                {
                                  name: "is-fullwidth-code-point",
                                  dependencies: [],
                                  level: 9,
                                },
                                {
                                  name: "strip-ansi",
                                  dependencies: [
                                    {
                                      name: "ansi-regex",
                                      dependencies: [],
                                      level: 5,
                                    },
                                  ],
                                },
                              ],
                              level: 8,
                            },
                            {
                              name: "strip-ansi",
                              dependencies: [
                                {
                                  name: "ansi-regex",
                                  dependencies: [],
                                  level: 5,
                                },
                              ],
                            },
                            {
                              name: "wrap-ansi",
                              dependencies: [
                                {
                                  name: "ansi-styles",
                                  dependencies: [
                                    {
                                      name: "color-convert",
                                      dependencies: [
                                        {
                                          name: "color-name",
                                          dependencies: [],
                                          level: 7,
                                        },
                                      ],
                                      level: 6,
                                    },
                                  ],
                                },
                                {
                                  name: "string-width",
                                  dependencies: [
                                    {
                                      name: "emoji-regex",
                                      dependencies: [],
                                      level: 9,
                                    },
                                    {
                                      name: "is-fullwidth-code-point",
                                      dependencies: [],
                                      level: 9,
                                    },
                                    {
                                      name: "strip-ansi",
                                      dependencies: [
                                        {
                                          name: "ansi-regex",
                                          dependencies: [],
                                          level: 5,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  name: "strip-ansi",
                                  dependencies: [
                                    {
                                      name: "ansi-regex",
                                      dependencies: [],
                                      level: 5,
                                    },
                                  ],
                                },
                              ],
                              level: 8,
                            },
                          ],
                          level: 7,
                        },
                        {
                          name: "escalade",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "get-caller-file",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "require-directory",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "string-width",
                          dependencies: [
                            {
                              name: "emoji-regex",
                              dependencies: [],
                              level: 9,
                            },
                            {
                              name: "is-fullwidth-code-point",
                              dependencies: [],
                              level: 9,
                            },
                            {
                              name: "strip-ansi",
                              dependencies: [
                                {
                                  name: "ansi-regex",
                                  dependencies: [],
                                  level: 5,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "y18n",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "yargs-parser",
                          dependencies: [],
                          level: 7,
                        },
                      ],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
                {
                  name: "@types/node",
                  dependencies: [],
                },
              ],
              level: 4,
            },
            {
              name: "@grpc/proto-loader",
              dependencies: [
                {
                  name: "@types/long",
                  dependencies: [],
                  level: 6,
                },
                {
                  name: "lodash.camelcase",
                  dependencies: [],
                  level: 6,
                },
                {
                  name: "long",
                  dependencies: [],
                  level: 6,
                },
                {
                  name: "protobufjs",
                  dependencies: [
                    {
                      name: "@protobufjs/aspromise",
                      dependencies: [],
                      level: 7,
                    },
                    {
                      name: "@protobufjs/base64",
                      dependencies: [],
                      level: 7,
                    },
                    {
                      name: "@protobufjs/codegen",
                      dependencies: [],
                      level: 7,
                    },
                    {
                      name: "@protobufjs/eventemitter",
                      dependencies: [],
                      level: 7,
                    },
                    {
                      name: "@protobufjs/fetch",
                      dependencies: [
                        {
                          name: "@protobufjs/aspromise",
                          dependencies: [],
                        },
                        {
                          name: "@protobufjs/inquire",
                          dependencies: [],
                          level: 8,
                        },
                      ],
                      level: 7,
                    },
                    {
                      name: "@protobufjs/float",
                      dependencies: [],
                      level: 7,
                    },
                    {
                      name: "@protobufjs/inquire",
                      dependencies: [],
                    },
                    {
                      name: "@protobufjs/path",
                      dependencies: [],
                      level: 7,
                    },
                    {
                      name: "@protobufjs/pool",
                      dependencies: [],
                      level: 7,
                    },
                    {
                      name: "@protobufjs/utf8",
                      dependencies: [],
                      level: 7,
                    },
                    {
                      name: "@types/long",
                      dependencies: [],
                    },
                    {
                      name: "@types/node",
                      dependencies: [],
                      level: 7,
                    },
                    {
                      name: "long",
                      dependencies: [],
                    },
                  ],
                  level: 6,
                },
                {
                  name: "yargs",
                  dependencies: [
                    {
                      name: "cliui",
                      dependencies: [
                        {
                          name: "string-width",
                          dependencies: [
                            {
                              name: "emoji-regex",
                              dependencies: [],
                              level: 9,
                            },
                            {
                              name: "is-fullwidth-code-point",
                              dependencies: [],
                              level: 9,
                            },
                            {
                              name: "strip-ansi",
                              dependencies: [
                                {
                                  name: "ansi-regex",
                                  dependencies: [],
                                  level: 5,
                                },
                              ],
                            },
                          ],
                          level: 8,
                        },
                        {
                          name: "strip-ansi",
                          dependencies: [
                            {
                              name: "ansi-regex",
                              dependencies: [],
                              level: 5,
                            },
                          ],
                        },
                        {
                          name: "wrap-ansi",
                          dependencies: [
                            {
                              name: "ansi-styles",
                              dependencies: [
                                {
                                  name: "color-convert",
                                  dependencies: [
                                    {
                                      name: "color-name",
                                      dependencies: [],
                                      level: 7,
                                    },
                                  ],
                                  level: 6,
                                },
                              ],
                            },
                            {
                              name: "string-width",
                              dependencies: [
                                {
                                  name: "emoji-regex",
                                  dependencies: [],
                                  level: 9,
                                },
                                {
                                  name: "is-fullwidth-code-point",
                                  dependencies: [],
                                  level: 9,
                                },
                                {
                                  name: "strip-ansi",
                                  dependencies: [
                                    {
                                      name: "ansi-regex",
                                      dependencies: [],
                                      level: 5,
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: "strip-ansi",
                              dependencies: [
                                {
                                  name: "ansi-regex",
                                  dependencies: [],
                                  level: 5,
                                },
                              ],
                            },
                          ],
                          level: 8,
                        },
                      ],
                      level: 7,
                    },
                    {
                      name: "escalade",
                      dependencies: [],
                      level: 7,
                    },
                    {
                      name: "get-caller-file",
                      dependencies: [],
                      level: 7,
                    },
                    {
                      name: "require-directory",
                      dependencies: [],
                      level: 7,
                    },
                    {
                      name: "string-width",
                      dependencies: [
                        {
                          name: "emoji-regex",
                          dependencies: [],
                          level: 9,
                        },
                        {
                          name: "is-fullwidth-code-point",
                          dependencies: [],
                          level: 9,
                        },
                        {
                          name: "strip-ansi",
                          dependencies: [
                            {
                              name: "ansi-regex",
                              dependencies: [],
                              level: 5,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: "y18n",
                      dependencies: [],
                      level: 7,
                    },
                    {
                      name: "yargs-parser",
                      dependencies: [],
                      level: 7,
                    },
                  ],
                  level: 6,
                },
              ],
            },
            {
              name: "node-fetch",
              dependencies: [
                {
                  name: "whatwg-url",
                  dependencies: [
                    {
                      name: "lodash",
                      dependencies: [],
                      level: 6,
                    },
                    {
                      name: "tr46",
                      dependencies: [
                        {
                          name: "punycode",
                          dependencies: [],
                        },
                      ],
                      level: 6,
                    },
                    {
                      name: "webidl-conversions",
                      dependencies: [],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
              ],
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/firestore-compat",
          dependencies: [
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/firestore",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/logger",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/webchannel-wrapper",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "@grpc/grpc-js",
                  dependencies: [
                    {
                      name: "@grpc/proto-loader",
                      dependencies: [
                        {
                          name: "@types/long",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "lodash.camelcase",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "long",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "protobufjs",
                          dependencies: [
                            {
                              name: "@protobufjs/aspromise",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/base64",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/codegen",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/eventemitter",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/fetch",
                              dependencies: [
                                {
                                  name: "@protobufjs/aspromise",
                                  dependencies: [],
                                },
                                {
                                  name: "@protobufjs/inquire",
                                  dependencies: [],
                                  level: 8,
                                },
                              ],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/float",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/inquire",
                              dependencies: [],
                            },
                            {
                              name: "@protobufjs/path",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/pool",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@protobufjs/utf8",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "@types/long",
                              dependencies: [],
                            },
                            {
                              name: "@types/node",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "long",
                              dependencies: [],
                            },
                          ],
                          level: 6,
                        },
                        {
                          name: "yargs",
                          dependencies: [
                            {
                              name: "cliui",
                              dependencies: [
                                {
                                  name: "string-width",
                                  dependencies: [
                                    {
                                      name: "emoji-regex",
                                      dependencies: [],
                                      level: 9,
                                    },
                                    {
                                      name: "is-fullwidth-code-point",
                                      dependencies: [],
                                      level: 9,
                                    },
                                    {
                                      name: "strip-ansi",
                                      dependencies: [
                                        {
                                          name: "ansi-regex",
                                          dependencies: [],
                                          level: 5,
                                        },
                                      ],
                                    },
                                  ],
                                  level: 8,
                                },
                                {
                                  name: "strip-ansi",
                                  dependencies: [
                                    {
                                      name: "ansi-regex",
                                      dependencies: [],
                                      level: 5,
                                    },
                                  ],
                                },
                                {
                                  name: "wrap-ansi",
                                  dependencies: [
                                    {
                                      name: "ansi-styles",
                                      dependencies: [
                                        {
                                          name: "color-convert",
                                          dependencies: [
                                            {
                                              name: "color-name",
                                              dependencies: [],
                                              level: 7,
                                            },
                                          ],
                                          level: 6,
                                        },
                                      ],
                                    },
                                    {
                                      name: "string-width",
                                      dependencies: [
                                        {
                                          name: "emoji-regex",
                                          dependencies: [],
                                          level: 9,
                                        },
                                        {
                                          name: "is-fullwidth-code-point",
                                          dependencies: [],
                                          level: 9,
                                        },
                                        {
                                          name: "strip-ansi",
                                          dependencies: [
                                            {
                                              name: "ansi-regex",
                                              dependencies: [],
                                              level: 5,
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      name: "strip-ansi",
                                      dependencies: [
                                        {
                                          name: "ansi-regex",
                                          dependencies: [],
                                          level: 5,
                                        },
                                      ],
                                    },
                                  ],
                                  level: 8,
                                },
                              ],
                              level: 7,
                            },
                            {
                              name: "escalade",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "get-caller-file",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "require-directory",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "string-width",
                              dependencies: [
                                {
                                  name: "emoji-regex",
                                  dependencies: [],
                                  level: 9,
                                },
                                {
                                  name: "is-fullwidth-code-point",
                                  dependencies: [],
                                  level: 9,
                                },
                                {
                                  name: "strip-ansi",
                                  dependencies: [
                                    {
                                      name: "ansi-regex",
                                      dependencies: [],
                                      level: 5,
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: "y18n",
                              dependencies: [],
                              level: 7,
                            },
                            {
                              name: "yargs-parser",
                              dependencies: [],
                              level: 7,
                            },
                          ],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "@types/node",
                      dependencies: [],
                    },
                  ],
                  level: 4,
                },
                {
                  name: "@grpc/proto-loader",
                  dependencies: [
                    {
                      name: "@types/long",
                      dependencies: [],
                      level: 6,
                    },
                    {
                      name: "lodash.camelcase",
                      dependencies: [],
                      level: 6,
                    },
                    {
                      name: "long",
                      dependencies: [],
                      level: 6,
                    },
                    {
                      name: "protobufjs",
                      dependencies: [
                        {
                          name: "@protobufjs/aspromise",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/base64",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/codegen",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/eventemitter",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/fetch",
                          dependencies: [
                            {
                              name: "@protobufjs/aspromise",
                              dependencies: [],
                            },
                            {
                              name: "@protobufjs/inquire",
                              dependencies: [],
                              level: 8,
                            },
                          ],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/float",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/inquire",
                          dependencies: [],
                        },
                        {
                          name: "@protobufjs/path",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/pool",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@protobufjs/utf8",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "@types/long",
                          dependencies: [],
                        },
                        {
                          name: "@types/node",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "long",
                          dependencies: [],
                        },
                      ],
                      level: 6,
                    },
                    {
                      name: "yargs",
                      dependencies: [
                        {
                          name: "cliui",
                          dependencies: [
                            {
                              name: "string-width",
                              dependencies: [
                                {
                                  name: "emoji-regex",
                                  dependencies: [],
                                  level: 9,
                                },
                                {
                                  name: "is-fullwidth-code-point",
                                  dependencies: [],
                                  level: 9,
                                },
                                {
                                  name: "strip-ansi",
                                  dependencies: [
                                    {
                                      name: "ansi-regex",
                                      dependencies: [],
                                      level: 5,
                                    },
                                  ],
                                },
                              ],
                              level: 8,
                            },
                            {
                              name: "strip-ansi",
                              dependencies: [
                                {
                                  name: "ansi-regex",
                                  dependencies: [],
                                  level: 5,
                                },
                              ],
                            },
                            {
                              name: "wrap-ansi",
                              dependencies: [
                                {
                                  name: "ansi-styles",
                                  dependencies: [
                                    {
                                      name: "color-convert",
                                      dependencies: [
                                        {
                                          name: "color-name",
                                          dependencies: [],
                                          level: 7,
                                        },
                                      ],
                                      level: 6,
                                    },
                                  ],
                                },
                                {
                                  name: "string-width",
                                  dependencies: [
                                    {
                                      name: "emoji-regex",
                                      dependencies: [],
                                      level: 9,
                                    },
                                    {
                                      name: "is-fullwidth-code-point",
                                      dependencies: [],
                                      level: 9,
                                    },
                                    {
                                      name: "strip-ansi",
                                      dependencies: [
                                        {
                                          name: "ansi-regex",
                                          dependencies: [],
                                          level: 5,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  name: "strip-ansi",
                                  dependencies: [
                                    {
                                      name: "ansi-regex",
                                      dependencies: [],
                                      level: 5,
                                    },
                                  ],
                                },
                              ],
                              level: 8,
                            },
                          ],
                          level: 7,
                        },
                        {
                          name: "escalade",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "get-caller-file",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "require-directory",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "string-width",
                          dependencies: [
                            {
                              name: "emoji-regex",
                              dependencies: [],
                              level: 9,
                            },
                            {
                              name: "is-fullwidth-code-point",
                              dependencies: [],
                              level: 9,
                            },
                            {
                              name: "strip-ansi",
                              dependencies: [
                                {
                                  name: "ansi-regex",
                                  dependencies: [],
                                  level: 5,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "y18n",
                          dependencies: [],
                          level: 7,
                        },
                        {
                          name: "yargs-parser",
                          dependencies: [],
                          level: 7,
                        },
                      ],
                      level: 6,
                    },
                  ],
                },
                {
                  name: "node-fetch",
                  dependencies: [
                    {
                      name: "whatwg-url",
                      dependencies: [
                        {
                          name: "lodash",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "tr46",
                          dependencies: [
                            {
                              name: "punycode",
                              dependencies: [],
                            },
                          ],
                          level: 6,
                        },
                        {
                          name: "webidl-conversions",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/firestore-types",
              dependencies: [],
              level: 4,
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/functions",
          dependencies: [
            {
              name: "@firebase/app-check-interop-types",
              dependencies: [],
              level: 4,
            },
            {
              name: "@firebase/auth-interop-types",
              dependencies: [],
            },
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/messaging-interop-types",
              dependencies: [],
              level: 4,
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "node-fetch",
              dependencies: [
                {
                  name: "whatwg-url",
                  dependencies: [
                    {
                      name: "lodash",
                      dependencies: [],
                      level: 6,
                    },
                    {
                      name: "tr46",
                      dependencies: [
                        {
                          name: "punycode",
                          dependencies: [],
                        },
                      ],
                      level: 6,
                    },
                    {
                      name: "webidl-conversions",
                      dependencies: [],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
              ],
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/functions-compat",
          dependencies: [
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/functions",
              dependencies: [
                {
                  name: "@firebase/app-check-interop-types",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "@firebase/auth-interop-types",
                  dependencies: [],
                },
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/messaging-interop-types",
                  dependencies: [],
                  level: 4,
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "node-fetch",
                  dependencies: [
                    {
                      name: "whatwg-url",
                      dependencies: [
                        {
                          name: "lodash",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "tr46",
                          dependencies: [
                            {
                              name: "punycode",
                              dependencies: [],
                            },
                          ],
                          level: 6,
                        },
                        {
                          name: "webidl-conversions",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/functions-types",
              dependencies: [],
              level: 4,
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/installations",
          dependencies: [
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "idb",
              dependencies: [],
              level: 5,
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
        },
        {
          name: "@firebase/messaging",
          dependencies: [
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/installations",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "idb",
                  dependencies: [],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/messaging-interop-types",
              dependencies: [],
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "idb",
              dependencies: [],
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/messaging-compat",
          dependencies: [
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/messaging",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/installations",
                  dependencies: [
                    {
                      name: "@firebase/component",
                      dependencies: [
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "idb",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/messaging-interop-types",
                  dependencies: [],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "idb",
                  dependencies: [],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/performance",
          dependencies: [
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/installations",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "idb",
                  dependencies: [],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/logger",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/performance-compat",
          dependencies: [
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/logger",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/performance",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/installations",
                  dependencies: [
                    {
                      name: "@firebase/component",
                      dependencies: [
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "idb",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/logger",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/performance-types",
              dependencies: [],
              level: 4,
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/polyfill",
          dependencies: [
            {
              name: "core-js",
              dependencies: [],
              level: 4,
            },
            {
              name: "promise-polyfill",
              dependencies: [],
              level: 4,
            },
            {
              name: "whatwg-fetch",
              dependencies: [],
              level: 4,
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/remote-config",
          dependencies: [
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/installations",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "idb",
                  dependencies: [],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/logger",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/remote-config-compat",
          dependencies: [
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/logger",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/remote-config",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/installations",
                  dependencies: [
                    {
                      name: "@firebase/component",
                      dependencies: [
                        {
                          name: "@firebase/util",
                          dependencies: [
                            {
                              name: "tslib",
                              dependencies: [],
                            },
                          ],
                          level: 5,
                        },
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                    },
                    {
                      name: "idb",
                      dependencies: [],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/logger",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/remote-config-types",
              dependencies: [],
              level: 4,
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/storage",
          dependencies: [
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "node-fetch",
              dependencies: [
                {
                  name: "whatwg-url",
                  dependencies: [
                    {
                      name: "lodash",
                      dependencies: [],
                      level: 6,
                    },
                    {
                      name: "tr46",
                      dependencies: [
                        {
                          name: "punycode",
                          dependencies: [],
                        },
                      ],
                      level: 6,
                    },
                    {
                      name: "webidl-conversions",
                      dependencies: [],
                      level: 6,
                    },
                  ],
                  level: 5,
                },
              ],
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/storage-compat",
          dependencies: [
            {
              name: "@firebase/component",
              dependencies: [
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                  level: 5,
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/storage",
              dependencies: [
                {
                  name: "@firebase/component",
                  dependencies: [
                    {
                      name: "@firebase/util",
                      dependencies: [
                        {
                          name: "tslib",
                          dependencies: [],
                        },
                      ],
                      level: 5,
                    },
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "@firebase/util",
                  dependencies: [
                    {
                      name: "tslib",
                      dependencies: [],
                    },
                  ],
                },
                {
                  name: "node-fetch",
                  dependencies: [
                    {
                      name: "whatwg-url",
                      dependencies: [
                        {
                          name: "lodash",
                          dependencies: [],
                          level: 6,
                        },
                        {
                          name: "tr46",
                          dependencies: [
                            {
                              name: "punycode",
                              dependencies: [],
                            },
                          ],
                          level: 6,
                        },
                        {
                          name: "webidl-conversions",
                          dependencies: [],
                          level: 6,
                        },
                      ],
                      level: 5,
                    },
                  ],
                },
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "@firebase/storage-types",
              dependencies: [],
              level: 4,
            },
            {
              name: "@firebase/util",
              dependencies: [
                {
                  name: "tslib",
                  dependencies: [],
                },
              ],
            },
            {
              name: "tslib",
              dependencies: [],
            },
          ],
          level: 3,
        },
        {
          name: "@firebase/util",
          dependencies: [
            {
              name: "tslib",
              dependencies: [],
            },
          ],
        },
      ],
    },
    {
      name: "rxfire",
      dependencies: [
        {
          name: "tslib",
          dependencies: [],
        },
      ],
    },
  ],
  maxDepth: 9,
  branchTotalAmount: 383,
};

// const fold = (cb) => acc => node => {
//   const recurse = fold(cb)(acc);

//   if (node.dependencies?.length)
// }

const calc = (data, accumulator) => {
  if (!data.dependencies?.length) {
    return accumulator;
  } else {
    return data.dependencies.reduce((acc, cur) => {
      return calc(cur, acc + cur.dependencies.length);
    }, accumulator);
  }
};

console.log("From server", testdata.branchTotalAmount);
console.log("Recalc", calc(testdata, 0));
export default testdata;
