# bun build --compile --minify --sourcemap ./site/entrypoints/src/index.ts --outfile ./site/dist/bundle
# TODO fix bundled css
bun build --minify --sourcemap ./site/entrypoints/src/index.ts --outdir ./site/dist --target bun && mv ./site/dist/index.css ./public/styles/bundle.css
