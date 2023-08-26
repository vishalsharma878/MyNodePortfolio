const http = require('http');
const fs = require('fs');
const { message } = require('antd');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body>');
     // Read messages from the file and display them
   const messages = fs.readFileSync('message.txt', 'utf8').split();
   messages.forEach((message) => {
       res.write(`<p>${message}</p>`);
     
   });

    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>'
    );
   res.write('</body>');
   res.write('</html>');
   return res.end();
 }

  if (url === '/message' && method === 'POST') {
    const body = [];
    
    req.on('data', (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });
    
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });

    
   
  }
});

server.listen(3000);
