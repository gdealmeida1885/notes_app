const fs = require('fs');

const readNotes = function (title) {
    try {
        const notes = JSON.parse(fs.readFileSync('./notes.json'));
        notes.forEach(e => {
            if (e.title === title) {
                console.log(`Title: ${e.title}, Content: ${e.content}`);
            }
        });
    } catch (e) {
        console.log('erro!');
    }
}

const addNotes = function (title, content) {
    try {
        const notes = loadNotes();
        notes.push({
            title: title,
            content: content
        });
        fs.writeFileSync('./notes.json', JSON.stringify(notes));
    } catch (e) {
        console.log(e);
    }
}

const loadNotes = function () {
    try {
        return JSON.parse(fs.readFileSync('./notes.json'));
    } catch (e) {
        return [];
    }
}
module.exports = {
    addNotes: addNotes,
    readNotes: readNotes
}