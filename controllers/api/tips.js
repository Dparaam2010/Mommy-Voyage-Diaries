const Tip = require('../../models/tips');

module.exports = {
  index,
  create,
  update,
  delete: deleteTips,
  edit,
};

async function index(req, res) {
  try{
  const tips = await Tip.find({});
  res.json(tips);
} catch (err){
  console.log(err)
  res.status(400).json(err)
}
}


async function create(req, res) {
  try{
    req.body.user=req.user._id
  const tip = await Tip.create(req.body);
  res.json('')
} catch (err){
  console.log(err)
  res.status(400).json(err)
}
}

async function edit(req, res) {
  try{
  const tip = await Tip.findById(req.params.id);
  console.log(tip)
  res.json(tip);
} catch (err){
  console.log(err)
  res.status(400).json(err)
}
}

async function deleteTips(req, res) {
  try{ 
    console.log(req.params)
  const deleteTip = await Tip.findOneAndDelete({"_id": req.params.id});
  res.json(deleteTip);
} catch (err){
  console.log(err)
  res.status(400).json(err)
}
}

async function update(req, res) {
  try {
    console.log(req.body)
  const updatedTips = await Tip.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.json(updatedTips);
} catch (err){
  console.log(err)
  res.status(400).json(err)
}
}
