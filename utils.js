const fs = require('fs');

const readNotes = function (title) {
    try {
        const notes = loadNotes();
        for (e of notes) {
            if (e.title === title) {
                return `Title: ${e.title}, Content: ${e.content}`;
            }
        }
    } catch (e) {
        console.log(e);
    }
}

const addNotes = function (title, content) {
    try {
        if (searchNote(title)) {
            return false;
        } else {
            let notes = loadNotes();
            notes.push({
                title: title,
                content: content
            });
            saveNote(notes);
            return true;
        }
    } catch (e) {
        console.log(e);
    }
}

const removeNotes = function (title) {
    try {
        if (searchNote(title)) {
            let notes = loadNotes();
            notes = notes.filter(e => e.title !== title);
            saveNote(notes);
            return true;
        }
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

const saveNote = function (object) {
    try {
        fs.writeFileSync('./notes.json', JSON.stringify(object));
        return true;
    } catch (e) {
        console.log('Error while saving the note');
    }
}

const searchNote = function (title) {
    try {
        const notes = loadNotes();
        for (e of notes) {
            if (e.title === title) {
                return true;
            }
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    addNotes: addNotes,
    readNotes: readNotes,
    removeNotes: removeNotes
}