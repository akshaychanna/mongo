.sort() method: to sord the elemets based on query
example:
db.tv_shows.find().sort({ "rating.average": 1(asc) or - 1(desc) })

.skip() method: will skip the number of documents
example:
db.tv_shows.find("rating.average": 7).skip(2)
will skip first 2 docs with rating.average: 7