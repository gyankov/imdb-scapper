"use strict";

const mongoose = require("mongoose");

module.exports.getMovies = () => {

    let promise = new Promise((resolve, reject) => {

        mongoose.model("SimpleMovie")
            .where({})
            .select("imdbId")
            .exec((err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
    });
    return promise;
};