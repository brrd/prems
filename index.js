"use strict";

const path = require("path");
const fs = require("fs");

module.exports = (paths, filename) => {
    return new Promise ((resolve, reject) => {
        const next = () => {
            let thisPath = paths.shift();
            let filepath = path.join(thisPath, filename);
            fs.access(filepath, fs.F_OK, function(err) {
                if (!err) {
                    resolve(filepath);
                } else {
                    if (paths.length > 0) {
                        next();
                    } else {
                        resolve(null);
                    }
                }
            });
        };
        next();
    });
};
