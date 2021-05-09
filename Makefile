.PHONY: lib/index.js
lib/index.js:
	yarn ncc build src/index.ts -o lib
