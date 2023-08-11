const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "upload"));
  },
  filename: (req, file, cb) => {
    cb(null, "avatar-" + req.user.id); // file name - user id
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
  limits: {
    fileSize: 1048576,
  },
});
const multerUpload = multer({ storage });

module.exports = multerUpload;
