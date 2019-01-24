console.log("destructuring");

//Object Destructuring

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = "Self-Published"} = book.publisher;

console.log(publisherName);

// //Array Destructring

// const menu = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

// const [product, , medium] = menu;

// console.log(`A medium ${product} costs ${medium}`);