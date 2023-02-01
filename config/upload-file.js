const multer = require('multer');

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads');
    },
    filename: (req, file, cb) => {
        let math = ["image/png", "image/jpeg", "image/jpg"];
        if (math.indexOf(file.mimetype) === -1) {
            let errorMess = `File <strong>${file.originalname}</strong> is invalid.`;
            return callback(errorMess, null);
        }

        let filename = `${Date.now()}-${file.originalname}`;

        cb(null, filename);
    }
})

const upload = multer({ storage: diskStorage });

module.exports = upload;