const express = require("express");
const fs = require("fs");

const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const upload = multer({ dest: "uploads/" });

router.post("/api/avatar", upload.single("avatar"), (req, res) => {
  // We get the name of the file
  const { originalname } = req.file;

  // Get the name of the file
  const { filename } = req.file;

  // Use the rename function of fs to rename the file
  fs.rename(
    `uploads/${filename}`,
    `uploads/${uuidv4()}-${originalname}`,
    (err) => {
      if (err) throw err;
      res.send("File uploaded");
    }
  );
});

module.exports = router;
