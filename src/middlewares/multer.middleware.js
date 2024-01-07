import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cv) {
        cb(null, "./public/temp")
    },
    filename: function(req, file, cv) {
        cb(null, file.originalname)
    }
})

export const upload = multer({
    storage,
})