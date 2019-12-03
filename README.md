This app demonstrates an issue with ember-engines and ember-asset-loader which is that duplicate <meta> tags are generated with the same name ('repro-loader-app/config/asset-manifest'). The issue is likely caused by the fact that both ember-engines and the in-repo addon extend from manifest generator which makes a call to `contentFor`.

This is a simple repro app for a larger issue which is that external addons may need to extend from the manifest-generator so that they can produce their own manifest in the case that a host app does not. However, if both the host app and the external addon are generating manifests, there will be two issues:

1. Duplicate, identical <meta> tags (see above)
2. The engine will throw an error, citing that a manifest with the key (engine-name/config/asset-manifest) was not created.

**Repro steps:**
1. ember serve
2. Visit http://localhost:4200/demo-engine
3. Verify duplicate meta tags for asset-manifest
