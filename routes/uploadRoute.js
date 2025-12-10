const express = require("express");
const router = express.Router();
const document = require("../models/documentModel");
const userModel = require("../models/userModel");
const multer = require("multer");
const { route } = require("./updateRoute");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/home", async (req, res) => {
  const userFiles = await document.find({
    user: req.user.userID,
  });
  // console.log(userFiles.filename)
  res.render("home", {
    files: userFiles,
  });
});

router.post("/home", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    const doc = await document.create({
      user: req.user.userID,
      filename: file.originalname,
      fileType: file.mimetype,
      fileData: file.buffer,
    });
    // res.alert("File uploaded");
    res.redirect("/home");
    // res.json(doc);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

//-------------------------------------------DELETE------------------------------
router.get("/home/delete/:id", async (req, res) => {
  try {
    const file = await document.findOne({
      _id: req.params.id,
      user: req.user.userID,
    });

    if (!file) {
      return res.send(`
        <script>
          alert("Unauthorized or file not found");
          window.location.href = "/home";
        </script>
      `);
    }

    const deletedfile = await document.findByIdAndDelete(req.params.id);

    if (!deletedfile) {
      return res.send(` <script>
        alert("file not found, cannot delete");
        window.location.href = "/home";
      </script>`);
    }

    res.send(` <script>
        alert("File deleted successfully!");
        window.location.href = "/home";
      </script>`);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

//---------------------------------------------VIEW-----------------------------------
router.get("/view/:id", async (req, res) => {
  try {
    const file = await document.findOne({
      _id: req.params.id,
      user: req.user.userID,
    });

    if (!file) {
      return res.status(401).json({ message: "unauthorized" });
    }

    res.set({
      "Content-Type": file.fileType,
      "Content-Disposition": `inline; filename="${file.filename}"`,
    });

    res.send(file.fileData);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//---------------------------------------------DOWNLOAD-------------------------------
router.get("/download/:id", async (req, res) => {
  try {
    const file = await document.findOne({
      _id: req.params.id,
      user: req.user.userID,
    });

    if (!file) {
      return res.status(401).json({ message: "unauthorized" });
    }

    res.set({
      "Content-Type": file.fileType,
      "Content-Disposition": `attachment; filename="${file.filename}"`,
    });

    res.send(file.fileData); // send file buffer
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
