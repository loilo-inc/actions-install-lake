main: lib/index.js
lib/index.js: src/index.ts src/install.ts
	yarn ncc build src/index.ts -o lib
