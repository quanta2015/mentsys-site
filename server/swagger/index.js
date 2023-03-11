var swaggerUi = require('swagger-ui-express')
var swaggerJSDoc = require('swagger-jsdoc')
var path = require('path')

module.exports.initSwagger = function (app) {  
  const opt = {
    swaggerDefinition: {
      openapi: '3.0.3',
      info: {
        title: '信息学院综合导师课外育人管理系统',
        version: '1.0.0',
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          }
        }
      },
      // security: [{
      //   bearerAuth: []
      // }]
    },
    apis: [ path.join(__dirname, '../routes/*.js') ],
    
  }
  const swaggerSpec = swaggerJSDoc(opt)

  app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}