const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controller = require('./controller');
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render('index.html');
});

app.post('/add-file-member', function(req, res) {
    const { fileId, targetUser } = {...req.body};
    controller.addFileMember(fileId, targetUser)
    .then(console.log)
    .catch(console.log)
    res.redirect('back')
})

app.listen(8000)

console.log('Server listening on localhost:8000');
