module.exports = [
  {
    path: '/sessions',
    method: 'POST',
    handler: function (request, h) {
      const response = h.response('hello world');
      response.type('text/plain');

      return response;
    }
  }/*,
  {
    path: '/sessions',
    method: 'GET',
    handler: function (request, h) {
      const response = h.response('hello world');
      response.type('text/plain');

      return response;
    }
  }*/
]

