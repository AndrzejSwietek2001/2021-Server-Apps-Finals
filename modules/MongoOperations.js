module.exports = {

    //insert

    InsertToDatabase: function (collection, data) {
        collection.insert(data, function (err, result) {
            console.log(result)
        });
    },

    //select all - zwraca tablicę pasujących dokumentów

    SelectAllFromDatabase: function (collection) {
        collection.find({}).toArray(function (err, items) {
            console.log(items)
        });
    },

    //select - zwraca tablicę pasujących dokumentów, z ograniczeniem do {login:"test"}

    SelectAndLimit: function (collection, objectToFind, callback) {
        collection.find(objectToFind).toArray(function (err, items) {
            console.log(items)
            if (err) console.log(err)
            //funkcja zwracająca dane na zewnątrz
            else callback(items)
        });
    },
    // SelectAndLimit: function (collection) {
    //     collection.find({login: "test"}).toArray(function (err, items) {
    //         console.log(items)
    //     });
    // },

    //delete - usunięcie poprzez id - uwaga na ObjectID

    DeleteById: function (ObjectID, collection, id) {
        collection.remove({ _id: ObjectID(id) }, function (err, data) {
            console.log(data)
        })
    },

    DeleteAll: function (collection) {
        collection.remove({}, ()=>{
            console.log("Collection Cleared")
        })
    },

    // update - aktualizacja poprzez id - uwaga na ObjectID - to funkcja, a nie string
    // uwaga: bez $set usuwa poprzedni obiekt i wstawia nowy
    // z $set - dokonuje aktualizacji tylko wybranego pola

    UpdateById: function (ObjectID, collection, data){
        collection.updateOne(
            { _id: ObjectID("id_dokumentu_ktory_chcemy_usunac") },
            { $set: { pass: "test" } },
            function (err, data) {
                console.log("update: "+data)
            }
            )
    },

    UpdateHoles: function (collection, board, holes){
        collection.updateOne(
            { board: board },
            { $set: { holes: holes } },
            function (err, data) {
                console.log("update: "+data)
            })
    },

}
