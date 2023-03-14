// console.log("hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World this is supriyo ghosh');
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pseudo selectors & more designing</title>
    <style>
        .container{
            border: 2px solid rgb(232, 125, 241);
            background-color: rgb(129, 212, 166);
            padding: 34px;
            margin: 34px auto;
            width: 666px;
        }
        a{
            text-decoration: none;
            color: black;
        }
        a:hover{
            color: rgb(238, 223, 88);
            background-color: black;
        }
         a:visited{
            background-color:rgb(211, 241, 151) ;
        }

        a:active{
            background-color: rgb(206, 177, 135);
        }
       
        .btn{
            font-family: Georgia, 'Times New Roman', Times, serif;
            font-weight: bold;
            background-color: rgb(255, 89, 89);
            padding: 6px;
            border: none;
            cursor: pointer;
            font-size: 10px;
            border-radius: 4px;

        }
        .btn:hover{
            color:rgb(255, 181, 112);

            background-color: rgb(43, 44, 98);
            border: 2px solid black;
        }
    </style>
</head>
<body>
    <div class="container" id="cont1">
        <h3>This is my heading</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit itaque architecto amet ratione! Perferendis sapiente consequuntur aspernatur, odio sit provident assumenda fugit, temporibus, laborum ipsam ea autem totam eius explicabo voluptatem voluptatibus nesciunt in?</p>
        <a href="https://yahoo.com" class="btn">Read more</a>
        <button class="btn">Contact us</button>
    </div>
</body>
</html>`);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
