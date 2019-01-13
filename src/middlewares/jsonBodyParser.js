const parser = (req, res, next) => {
  let result = '';
  req.on('data', data => {
    result += data.toString();
  });

  req.on('end', () => {
    try {
        req.body = JSON.parse(result);
    } catch (error) {
        req.body = result;
    }
    next();
  })
};

module.exports = parser;
