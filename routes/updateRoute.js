const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

//----------------------------------------UPDATE----------------------------
router.get("/update/:id", (req, res) => {
  //  console.log("auth user:", req.user);
  res.render("updateUser", { userID: req.user.userID });
});

router.post("/update/:id", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const id = req.params.id; 
    const userExists = await userModel.findById(id);

    const updateData = { username, email };
    if (password) {
      const hashed = await bcrypt.hash(password, 10);
      updateData.password = hashed;
    }

    const updatedUser = await userModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // res.status(200).send('user updated');
    return res.send(`
  <script>
    alert("User updated successfully!");
    window.location.href = "/home";
  </script>
`);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
