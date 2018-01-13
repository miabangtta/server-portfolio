const http = require('request');

const apiOptions = {
  server: "http://localhost:3000"
}

module.exports.getBlogPage = (req, res) => {
  const pathAPI = '/api/blog';
  const requestOptions = {
    url: apiOptions.server + pathAPI,
    method: 'GET'
  };
  let sendObj = {
    title: 'My Blog'
  };
  http(requestOptions, function (error, response, body) {
    res.render('pages/blog', Object.assign(sendObj, JSON.parse(body)));
  })
}