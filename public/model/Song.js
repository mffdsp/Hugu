const {Schema, model} = require('mongoose');

// nome, preço, descrição e
//imagem de cada um, criando 
const SongSchema = new Schema({  
    title: {
        type: String,
        required: true,
    },
    level:{
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    mfile:{
        type: String,
        required: true,
    }
    }, {
    timestamps: true,
});

module.exports = model('Song', SongSchema);


