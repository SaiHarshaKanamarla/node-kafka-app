const { Kafka } = require('kafkajs');
const readline = require('readline');

// Initialize Kafka
const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
});

const producer = kafka.producer();

const sendMessage = async (message) => {
    await producer.send({
        topic: 'test-topic',
        messages: [
            { key: 'key1', value: message },
        ],
    });
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const run = async () => {
    await producer.connect();
    console.log('Producer connected. Type your messages and press Enter to send. Type "exit" to quit.');

    rl.on('line', async (input) => {
        if (input.toLowerCase() === 'exit') {
            rl.close();
            await producer.disconnect();
            console.log('Producer disconnected. Exiting...');
            process.exit(0);
        } else {
            await sendMessage(input);
            console.log(`Message sent: ${input}`);
        }
    });
};

run().catch(console.error);


// const { Kafka } = require('kafkajs');

// const kafka = new Kafka({
//   clientId: 'my-app',
//   brokers: ['localhost:9092']
// });

// const producer = kafka.producer();

// const run = async () => {
//   await producer.connect();
//   await producer.send({
//     topic: 'test-topic',
//     messages: [
//       { key: 'key1', value: 'Hello KafkaJS user!' },
//     ],
//   });

//   await producer.disconnect();
// }

// run().catch(console.error);
