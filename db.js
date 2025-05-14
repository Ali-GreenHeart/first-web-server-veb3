import mongoose from 'mongoose';

const connection_string = "mongodb+srv://elinemetisiyev:alion@cluster0.hwz4h3r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(connection_string, {
    dbName: "veb-3-first"
}).then(() => {
    const catSchema = new mongoose.Schema({
        name: String,
        age: Number,
        color: String,
    });

    const Cat = mongoose.model('Cat', catSchema);

    Cat.insertOne({ name: 'Zildjian', age: 2, color: 'black' })
        .then(() => {
            console.log('Cat inserted');
        })
});
