var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    article1:{
        title:'RCWEB|1',
        date:'22AUG',
        heading:'RC1',
        content:`<p>
                WELCOME TO MY FIRST WEBAPP, ThANKS FOR VISITING. 
                 WELCOME TO MY FIRST WEBAPP, ThANKS FOR VISITING.
                  WELCOME TO MY FIRST WEBAPP, ThANKS FOR VISITING.
                 </p>`
    },
    article2:{
        title:'RCWEB|2',
        date:'22AUG',
        heading:'RC2',
        content:`<p>
                WELCOME TO MY second WEBAPP, ThANKS FOR VISITING. 
                 WELCOME TO MY FIRST WEBAPP, ThANKS FOR VISITING.
                  WELCOME TO MY FIRST WEBAPP, ThANKS FOR VISITING.
                 </p>`
    },
    article3:{
        title:'RCWEB|3',
        date:'22AUG',
        heading:'RC3',
        content:`<p>
                WELCOME TO MY 3rd WEBAPP, ThANKS FOR VISITING. 
                 WELCOME TO MY FIRST WEBAPP, ThANKS FOR VISITING.
                  WELCOME TO MY FIRST WEBAPP, ThANKS FOR VISITING.
                 </p>`
    }
};
function createmp(data){
    var title = data.title;
    var date = data.date;
    var heading= data.heading;
    var content= data.content;
    var htmlTemp=`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initail scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="rav">
        <div>
            <a href="/">HOME</a>
        </div>
        <h2>
            ${heading}
        </h2>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>`;
return htmlTemp;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
//app.get('/:articleName', function (req, res) {
  //  var articleName= req.params.articleName;
  //res.send(createmp(articles[articleName]));
//});
app.get('/article_2', function (req, res) {
 res.send(createmp(articlet));
});
app.get('/article_3', function (req, res) {
  res.send(createmp(articleth));
});
app.get('/ui/style.css', function (req, res) {
  res.send(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.send(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
