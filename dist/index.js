'use strict';

var _templateObject = _taggedTemplateLiteral(['\n  type Query {\n    me: User\n  }\n\n  type User {\n    username: String!\n  }\n'], ['\n  type Query {\n    me: User\n  }\n\n  type User {\n    username: String!\n  }\n']);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var app = (0, _express2.default)();

var schema = (0, _apolloServerExpress.gql)(_templateObject);

var resolvers = {
  Query: {
    me: function me() {
      return {
        username: 'Robin Wieruch'
      };
    }
  }
};

var server = new _apolloServerExpress.ApolloServer({
  typeDefs: schema,
  resolvers: resolvers
});

server.applyMiddleware({ app: app, path: '/graphql' });

app.listen({ port: 9000 }, function () {
  console.log('Apollo Server on http://localhost:8000/graphql');
});