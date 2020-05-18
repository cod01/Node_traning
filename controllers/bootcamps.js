
//Desc        Get all bootcamps
// Route      GET  /api/v1/bootcamps
// access     Public
exports.getBootcamps = (req, res, next) => {
    res
    .status(200)
    .send({success: true, msg: 'show all bootcamp'});
}



//Desc        Get single bootcamps
// Route      GET  /api/v1/bootcamps/:id
// access     Public
exports.getBootcamp = (req, res, next) => {
    res
    .status(200)
    .send({success: true, msg: `get bootcamp ${req.params.id} `});
}



//Desc        Create new bootCamp
// Route      PUT  /api/v1/bootcamps
// access     Private
exports.createBootcamp = (req, res, next) => {
    res
    .status(200)
    .send({success: true, msg: `Create new bootcamp ${req.params.id} `});
}




//Desc        Update bootcamp
// Route      GET  /api/v1/bootcamps/:id
// access     Private
exports.updateBootcamp = (req, res, next) => {
    res
    .status(200)
    .send({success: true, msg: 'Update bootcamp'});
}



//Desc        Delete single bootcamp
// Route      DElete  /api/v1/bootcamps/:id
// access     Private
exports.deleteBootcamp = (req, res, next) => {
    res
    .status(200)
    .send({success: true, msg: 'Update bootcamp'});
}

