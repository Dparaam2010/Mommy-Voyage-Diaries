const tips = require('../../models/tips');

module.exports = {
  index,
  addTips,
  updateTips,
  deleteTips,
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


async function addTips(req, res) {
  try{
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
  res.render('tips/edit', { tip });
} catch (err){
  console.log(err)
  res.status(400).json(err)
}
}

async function deleteTips(req, res) {
  try{
  const deleteTip = await Tip.findByIdAndDelete(req.params.id);
  res.json(deleteTip);
} catch (err){
  console.log(err)
  res.status(400).json(err)
}
}

async function updateTips(req, res) {
  try {
  const updatedTips = await Tips.findByIdAndUpdate(req.body.tipId, req.body.newTipInfo, {new: true});
  res.json(updatedTips);
} catch (err){
  console.log(err)
  res.status(400).json(err)
}
}
