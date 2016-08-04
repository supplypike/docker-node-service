FROM node:6.3
ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /opt/cs-service/

EXPOSE 40404

CMD ["npm", "start"]
