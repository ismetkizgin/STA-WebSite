DOCKER_HOST=ssh://isiksan@isiksan.cbu.edu.tr
CONTAINER_NAME=sta-web-frontend
TARGET_PORT=4200
SOURCE_PORT=80
IMAGE_NAME=$CONTAINER_NAME

docker -H $DOCKER_HOST stop $CONTAINER_NAME
docker -H $DOCKER_HOST rm $CONTAINER_NAME
docker -H $DOCKER_HOST build -t $IMAGE_NAME -f ./Dockerfile .
docker -H $DOCKER_HOST run -e PORT=$TARGET_PORT -d --name=$CONTAINER_NAME --restart=always -p $TARGET_PORT:$SOURCE_PORT -t $IMAGE_NAME