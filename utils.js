const fs = require('fs');

const readNotes = function (title) {
    try {
        const notes = JSON.parse(fs.readFileSync('./notes.json'));
        notes.forEach(e => {
            if (e.title === title) {
                return `Title: ${e.title}, Content: ${e.content}`;
            }
        });
    } catch (e) {
        console.log('erro!');
    }
}

const addNotes = function (title, content) {
    try {
        let notes = loadNotes();
        notes.push({
            title: title,
            content: content
        });
        fs.writeFileSync('./notes.json', JSON.stringify(notes));
        return true;
    } catch (e) {
        return false;
    }
}

const removeNotes = function (title) {
    try {
        let notes = loadNotes();
        notes.forEach(e => {
            if (e.title === title) {
                notes.delete(e);
            }
        });
        return true;
    } catch (e) {
        return false;
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
    readNotes: readNotes,
    removeNotes: removeNotes
}