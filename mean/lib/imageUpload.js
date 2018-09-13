// Let's start with our s3 connection and uuid which will make a random file name for our image.
const s3 = require('./s3');
const uuid = require('uuid');

function imageUpload(req, res, next){
// If we don't fine a base64 property on req.body we can leave this piece of middleware.
  if(!req.body.base64) return next();

  const base64Data = req.body.base64.match(/base64,(.*)$/)[1];
  const mimeType = req.body.base64.match(/^data:(.*);/)[1];

  const extension = mimeType.replace('image/', '');
  const filename = `${uuid.v4()}.${extension}`;

  // Now we can upload the image to AWS:
  s3.upload({
    Key: filename,
    Body: new Buffer(base64Data, 'base64'),
    // We're converting the base64 string back into an image with the Buffer constructor.
    ContentType: mimeType
  }, (err) => {
    if(err) return next(err);

    req.file = { filename, mimeType };

    next();
  });
}

module.exports = imageUpload;
