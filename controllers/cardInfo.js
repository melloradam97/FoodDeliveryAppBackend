const CardInfo = require("../models/CardInfo");

exports.postCardInfo = async (req, res, next) => {
  try {
    const data = await CardInfo.create(req.body);
    res.status(201).json({ success: true, data: data });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
