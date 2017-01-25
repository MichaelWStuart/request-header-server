const parser = require('ua-parser-js');
const ipaddr = require('ipaddr.js');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req,res) => {
  const ipaddress = ipaddr.process(req.ip).octets.join('.');
  const language = req.headers['accept-language'].split(',')[0];
  const ua = parser(req.headers['user-agent']);
  const software = `${ua.os.name} ${ua.os.version}`;
  res.send({ipaddress,language,software});
})

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
})
