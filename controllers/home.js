// exports an object
// getIndex is a method (because it's tied to a function)
// responds by rendering index.ejs (which is in views)
module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
};
