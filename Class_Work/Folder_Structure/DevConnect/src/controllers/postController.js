const getpostlist = (req, res) => {
  res.send("ye le saare blogs ki list");
};
const addNewPost = (req, res) => {
  res.send("Kar diya");
};
const sendPostById = (req, res) => {
  res.send("ye lo  ye walla");
};
const getById = (req, res) => {
  res.send("Done Get by id");
}
const update = (req, res) => {
  res.send("Update");
}
const change = (req,res) => {
  res.send("Change full");
}
const deletepost = (req, res) => {
  res.send("Deleted");
}
module.exports = { getpostlist, addNewPost, sendPostById,getById,update,change,deletepost};