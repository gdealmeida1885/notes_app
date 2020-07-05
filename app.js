const chalk = require('chalk');
const yargs = require('yargs');
const fs = require('fs');
const { readNotes, addNotes, removeNotes } = require('./utils.js');


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
    if (addNotes(argv.title, argv.content)) { 
      console.log(chalk.green(`Your note ${argv.title} has been added successfully`));
    } else { 
      console.log(chalk.red.bold('Unable to add your note'));
    }
  }
});

yargs.command({
  command: 'remove',
  description: 'Remove a note from the notes file',
  builder: {
    title: {
      description: 'Title of the note to be removed',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    if (removeNotes(argv.title)){ 
      console.log(chalk.green.bold('Your note has been removed successfully.'));
    } else { 
      console.log(chalk.red.bold('Unable to remove the note'));
    }
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
    console.log(chalk.green.bold(readNotes(argv.title)));
  }
});

yargs.parse();