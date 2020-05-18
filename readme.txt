i folder Route alla routes finns 

glöm inte exportera

i Controller kommer och functioner finnas som är kopplat till alla routes


i app/server.js först hämtas rute från routes folder och sen mounter man 
det 


const bootcamps = require('./routes/bootcamps');
app.use('/api/v1/bootcamps', bootcamps);