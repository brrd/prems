"use strict";

const path = require("path");
const fs = require("fs");
const pg = require("polygoat");

module.exports = (paths, filename, callback) => {
    let cb;
    if (callback) {
        cb = (err, value) => callback(value);
    }
    return pg((done) => {
        const next = () => {
            let thisPath = paths.shift();
            let filepath = path.join(thisPath, filename);
            fs.access(filepath, fs.F_OK, function(err) {
                if (!err) {
                    done(null, filepath);
                } else {
                    if (paths.length > 0) {
                        next();
                    } else {
                        done(null, null);
                    }
                }
            });
        };
        next();
    }, cb);
};
