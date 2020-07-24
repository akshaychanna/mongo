// how to use forEach:

const data_cursor = db.tv_shows.find()

data_cursor.forEach(element => {
    printjson(element)    
});