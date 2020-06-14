const fs = require('fs');
const chalk = require('chalk');

function loadNotes() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

function saveNotes(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

function addNote(title, body) {
    const notes = loadNotes();

    const duplicateNotes = notes.filter((el) => el.title === title);

    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body,
        });
        saveNotes(notes);
        console.log('New note added');
    } else {
        console.log('Duplicated note');
    }
}

function removeNote(title) {
    const notes = loadNotes();

    const notesToKeep = notes.filter((el) => el.title !== title);

    if (notes.length !== notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green(`Removed note ${title}`));
    } else {
        console.log(chalk.red('Note not found'));
    }
}

function readNote(title) {
    const notes = loadNotes();
    const found = notes.find((el) => el.title === title);
    if (found) {
        console.log(`Title: ${found.title}, Body: ${found.body}`);
    } else {
        console.log('Note not found');
    }
}

function listNotes() {
    const notes = loadNotes();
    notes.forEach((element) => {
        console.log(`Title: ${element.title}`);
    });
}


module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote,
};
