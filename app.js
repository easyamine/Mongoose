const mongoose = require('mongoose');

// Conncection URL
mongoose.connect('mongodb://localhost:27017/Person', { useNewUrlParser: true, useUnifiedTopology: true});

// Create New Schema
const personSchema = new mongoose.Schema ({
    name: {String, required: true},
    age: Number,
    favoriteFoods: [String]
});

// Create New Collection
const Person = mongoose.model("Person", personSchema);

// Create New Person
const person = new Person ({
    name: "Amine",
    age: 21,
    favoriteFoods: ["Couscous","Shakshuka",'Chakchouka']
})


// Now save the person into Person Collection into personSchema
    person.save(function(err, data) {
        if (err) {
            console.log(err); {}
        } else {
            console.log("Successfully saved person to personSchema")
        }
    });

// Insert one new Person document
await Person.create([
    {
        name: 'Jean',
        age: 20,
        favoriteFoods: ["Burger","Pizza",'Pasta']
    },
    {
        name: 'Omar',
        age: 29,
        favoriteFoods: ["Soup","Salad",'Rice']
    },
    {
        name: 'Rida',
        age: 26,
        favoriteFoods: ["Eggs","Ramen",'Fries']
    },
]);

// Find all the people having a given name
await Person.find({ [name] });


// Find one person having a favorite food
await Person.findOne({ name: "Jean", favoriteFoods}).exec();


await Person.findOne((function(err, food) {
    if (err) {
        console.log(err); {}
    } else {
        console.log(food)
    }
}))



// Find the only person having a given ID
await Person.findById(id).exec();

await Person.find((function(err, personId) {
    if (err) {
        console.log(err); {}
    } else {
        console.log(personId)
    }
}))





// Perform Classic Update Favorite Food
Person.updateOne({name: "Omar"},{$push: { favoriteFood: [Burger] }}, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully Updated")
    }
})

person.save();


// Perform New Updates on a Document Using
const filter = { name: 'Amine' };
const update = { age: 21 };

await Person.findOneAndUpdate(filter, update, {
    new: true
});


// Delete One Document Using model.findByIdAndRemove

const filter = { id: 'cd042490e199' };
const remove = { age: 21 };

await Person.findOneAndDelete(filter, remove, {
    new: true
});


// Delete Many Documents with model.remove()
await Person.remove({ name: 'John' });

