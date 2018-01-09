## CaseStack Node.js Service

[![](http://dockeri.co/image/casestack/node-service)](https://hub.docker.com/r/casestack/node-service/)

[![](https://images.microbadger.com/badges/image/casestack/node-service.svg)](http://microbadger.com/images/casestack/node-service "Microbadger")

node base image that exposes port `40404`.

## Config
Each object under `dockerfiles` has these keys:
- **tag**: (String, Required). The tag to be used for this dockerfile and image.
- **from**: (String, Required) The Dockerfile that this generated one will be based on.
- **extraInstructions**: (Array of Strings, Optional) Additional lines to be inserted into the generated Dockerfile.

## Generating
Run `npm run build` to generate Dockerfiles based on your config.
