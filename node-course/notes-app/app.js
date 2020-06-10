const yargs = require('yargs');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        console.log(`Title: ${argv.title}`);
        console.log(`Body: ${argv.body}`);
    },
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler() {
        console.log('Remove a note');
    },
});

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        console.log('List notes');
    },
});

yargs.command({
    command: 'read',
    describe: 'Read notes',
    handler() {
        console.log('Read notes');
    },
});


yargs.parse();
