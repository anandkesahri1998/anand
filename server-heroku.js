const express  = require('express');

var app = express();
const port = 3000;

const hport = process.env.PORT || 3000;
//using third party library - using middleware i.e, use()
app.use(express.static(__dirname+'/public'));//static() is used to include folder path

app.get('/',(req, res) => {
    res.send({
        name: 'Anik',
        blog: 'blog url',
        likes: ['Eat','Code','sleep']
    });
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/error', (req, res) => {
    res.send({
        errorMsg: 'Unable to find page'
    });
});

app.listen(port, () => {
    console.log(`App listening on port number: ${port}`);
});
