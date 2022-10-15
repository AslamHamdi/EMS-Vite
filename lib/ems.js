const fs = require('fs');
const path = require('path');

class Ems {
    static saveImage(image, savePath) {
        if (!fs.existsSync(savePath)) {
            fs.mkdirSync(savePath, { recursive: true });
        }
        fs.readdir(savePath, function (err, files) {
            if (err) {
                console.log("ERROR: ", err)
                throw err;
            } else {
                if (!files.length) {
                    // directory appears to be empty 
                } else {
                    for (const file of files) {
                        fs.unlink(path.join(savePath, file), (err) => {
                            if (err) throw err;
                        });
                    }
                }
            }
        });

        image.mv(savePath + image.name, function (err) {
            if (err) {
                console.log("FILE FAILED UPLOADED: ", err)
                throw err;
            } else {
                console.log("FILE UPLOADED")
            }
        })
    }

    static deleteImage(deletePath) {

    }
}

module.exports = Ems