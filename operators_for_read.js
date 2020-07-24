query ==> method() ==> filter

operators
comparision opertor $gt $lt $in
logical operators $and $not $nor $or
Elements operators $exists $type
$type  selects documents if field is of specified type.
Evaluation operator. $expr $jsonSchema $regex $mod $text  $where
Array operators $all $elemMatch $size

.sort() method : to sord the elemets based on query
example: 
db.tv_shows.find().sort({"rating.average":1(asc) or -1(desc) })

examples
db.tv_shows.find({
    $or: [
        {
            "rating.average": { $gt: 9.3 }
        },
        {
            "rating.average": { $lt: 5 }
        }
    ]
})
$and:
db.tv_shows.find({
    "rating.average": { $gt: 9.3 },
    "rating.average": { $lt: 5 }
})
$and is required when you filtering with same key multiple times:
db.tv_shows.find({
    $and: [
        {
            "genres": "Drama"
        },
        {
            "genres": "Horror"
        }
    ]
})


$exists
db.tv_shows.find({
    "rating.average": {
        $exists: true
    }
}).count()

db.tv_shows.find({
    "rating.average": {
        $exists: true,
        $ne: null
    }
}).count()

$type
db.tv_shows.find({
    "rating.average":{
        $type:"number"
    }
})

db.tv_shows.find({
    "rating.average":{
        $type: ["number", "string"]
    }
})

Array operators:
$expr
db.sales.find({$expr:{$gt:["volume","target"]}})  returns docs with volume greater than EventTarget

$size : check for array size and returns documents
db.users.find({
    "hobby":{
        $size:3
    }
})

$all: does not bother about order of array elements.

db.movies.find({
    "genre" : {
        $all: ["action","thriller"]
    }
})
it will returnd docs who has genre : ["action","thriller"] and genre : ["thriller","action"] simply dont check order with $all

