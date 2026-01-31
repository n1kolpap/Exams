const http = require('http');
const test = require('ava');
const got = require('got');
const app = require('../index.js');
const {authorsAuthorIdGET} = require('../service/DefaultService.js');

test.before(async (t) => {
	t.context.server = http.createServer(app);
  const server = t.context.server.listen();
  const { port } = server.address();
    t.context.got = got.extend({ responseType: "json", prefixUrl: `http://localhost:${port}` });
  });

test.after.always((t) => {
	t.context.server.close();
});

test("GET authors/{authorId} endpoint returns valid JSON content-type header", async (t) => {
	const { headers, statusCode } = await t.context.got("authors/0");
	t.is(statusCode, 200);                   // The status code should be 200
	t.is(headers["content-type"], "application/json"); // The content-type should be JSON
});