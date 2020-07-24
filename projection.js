projection:- shape the data.

find(filter , projection)

PROJECTION :- with projection you can select or ignore fields. value 1 or 0.
example :  
            db.seed_target.find({}, {name: 1 , age: 0, _id: 0})
            it will display all docs but only name as we given value 0 tp id and age.
    
            db.seed_target.find({state:"MH"},{name:1,_id:0}).pretty()
            it will first filter the docs with state and then display selected docs with name only.

projection with array: 
        $ is used. in below example we set .$:1 ,eans only 1 element will be displayed from array
db.tv_shows.find(
        {"genres":"Drama"},
        {"genres.$":1}
)
output: 
{ "_id" : ObjectId("5f19c69f1fc462fbfb30ad6d"), "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5f19c69f1fc462fbfb30ad6e"), "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5f19c69f1fc462fbfb30ad70"), "genres" : [ "Drama" ] }
{ "_id" : ObjectId("5f19c69f1fc462fbfb30ad71"), "genres" : [ "Drama" ] }

