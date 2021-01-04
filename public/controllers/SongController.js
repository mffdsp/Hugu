const Songs = require('../model/Song');
const fs = require("fs");
const path = require("path");


//Create (Criação), Read (Consulta), Update (Atualização) e Delete (Destruição)
module.exports = {
    async create(req, res){
        
        console.log('add a new Song');
        newSong = await Songs.create({
            title: req.body.title, 
            level: req.body.level,
            description: req.body.description,
            mfile: req.file.path,
        }
            );
        return res.json(newSong);
    },
    async readAll(req, res){

        console.log('return all Songs');
        Songs.find({})
        .then(songs => {
            res.statusCode = 200;
            res.json(songs);
            res.end();
        })
        .catch(err => {
            res.statusCode = 404;
            console.error(err);
            res.end()
        });
    },
    async readOne(req, res){
        
        console.log("return a single product")
        Songs.findById(req.params.songId)
        .then(song =>{
            if(!song){
                res.statusCode = 400;
                res.end("Invalid Id");
            }
            res.statusCode = 200;
            res.json(song);
        })
        .catch(err => {
            console.log("Invalid Id")
            res.end("Invalid Id");
        });
    },
    async update(req, res){

        console.log("update a Song");
        Songs.findByIdAndUpdate(req.params.songId,{
            $set: req.body,
        }, {new: true})
        .then(song =>{
            res.json(song);
        })
        .catch(err =>{
            console.error(err);
        })
    },
    async deleteOne(req, res){
        
    },
    async deleteAll(req, res){

    },
}