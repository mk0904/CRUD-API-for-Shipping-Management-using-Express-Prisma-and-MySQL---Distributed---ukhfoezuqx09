module.exports = (req, res, next) => {
  const defauthkey = process.env.SHIPPING_SECRET_KEY;
  const headerauthkey = req.header('SHIPPING_SECRET_KEY')
//   console.log(defauthkey, headerauthkey);

  if (!headerauthkey) {
    return res
      .status(403)
      .json({ error: "SHIPPING_SECRET_KEY is missing or invalid" });
  }
  if (defauthkey !== headerauthkey) {
    return res.status(403).json({
      error: "Failed to authenticate SHIPPING_SECRET_KEY",
    });
  }
  next();
};
