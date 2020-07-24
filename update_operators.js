// update operators

field update operators :  $currentDate $inc $min $max $mul $rename  $set $setOnInsert $unset

db.tv_shows.updateMany({"rating.average":7},{$set: {"status":"awesome movie"}})