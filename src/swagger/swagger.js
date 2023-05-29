const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const options = {
  info: {
    title: 'LMS API Document',
    description: "LMS 시스템의 OpenAPI 3.0에 기반한 api 문서입니다.\n github repo : [https://github.com/mochangil/LMS](https://github.com/mochangil/LMS)",
  },
  servers: [
    {
      url: 'http://localhost:3000',
    },
  ],
  schemes: ['http'],
  securityDefinitions: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      in: 'header',
      bearerFormat: 'JWT',
    },
  },
};

const outputFile = './src/swagger/swagger-output.json';
const endpointsFiles = ['./src/routes/index.js'];
swaggerAutogen(outputFile, endpointsFiles, options);