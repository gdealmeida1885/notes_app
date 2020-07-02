const chalk = require('chalk');
const yargs = require('yargs');
const fs = require('fs');
const { readNotes, addNotes } = require('./utils.js');


yargs.command({
  command: 'add',
  description: 'Add a new note on the notes file',
  builder: {
    title: {
      describe: 'Title of the note',
      demandOption: true,
      type: 'string'
    },
    content: {
      describe: 'Body of the note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    console.log(chalk.green(`Your note ${argv.title} has been added successfully`));
    addNotes(argv.title, argv.content);
  }
});

yargs.command({
  command: 'remove',
  description: 'Remove a note from the notes file',
  builder: {
    title: {
      description: 'title of the note to be removed',
      demandOption: true,
      type: 'string'
    }
  },
  handler: () => {
    console.log(`Removing your note...`);
  }
});

yargs.command({
  command: 'list',
  description: 'List all notes from the file',
  handler: () => {
    console.log(`Listing all notes...`);
  }
});

yargs.command({
  command: 'read',
  description: 'Read a note from the notes file',
  builder: {
    title: {
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    readNotes(argv.title);
  }
});

yargs.parse();