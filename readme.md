Initialze an empty node.js repo

Then create the docker-compose.yml.

This has few 2 services
- zookeeper
- kafka

For these, we use the docker images from docker repository via 
bitnami/zookeeper and bitnamiu/kafka:latest (getting the latest version)

Once we have the docker-compose...execute this using

"""docker-compose up"""

This will get our docker containers up. You should see 2 containers. One for zookeeper and one the kafka cluster.

Once we have the kafka message queue up and running, we need to create a topic where we can push our messages to.

TO create a topic, execute the """create-new-topic.sh"""

This script creates a topic with the name test. We can change this if needed.

Once topic is created, we can push our messages via producer to this topic. Inside producer/index.js, we have the code to push to topic. Execute this in one terminal.


In the other terminal, we need to create a consumer that can consume from this queue-> topic. Execute/Run this consumer/index.js.

In producer/index.js, we have 2 different methods. Either we can push the message into queue and exit or we have an interactive shell we can use to keep pushing messages onto the queue and exit by typing exit. Utilize whatever is suitable to use.