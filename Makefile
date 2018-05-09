SHELL := /bin/bash

build:
	zip legal_tidbits.zip index.js; \
	zip legal_tidbits.zip package.json; \
	zip -g -r9 legal_tidbits.zip node_modules;

clean:
	rm -f legal_tidbits.zip