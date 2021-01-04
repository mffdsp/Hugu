const {Router} = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
var storage = require('./fileRouter');

const uploadFile = multer({storage: storage});


songRouter = Router();
songRouter.use(bodyParser.json());

const SongController = require('../controllers/SongController');


songRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get(SongController.readAll)
.post(uploadFile.single('mfile'), SongController.create)
.put((req, res, next) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on ${req.baseUrl}${req.url}`);
});

songRouter.route('/:songId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get(SongController.readOne)
.post((req, res, next) => {
    res.end(`POST operation not supported on ${req.baseUrl}${req.url}`);
})
.put(SongController.update);


module.exports = songRouter;