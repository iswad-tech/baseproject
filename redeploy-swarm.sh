#!/bin/sh

source ./utils/shellScripting/constants/constants.sh
source ./utils/shellScripting/constants/versioning.sh
source ./utils/shellScripting/constants/env.sh

export NGINX_REPO=$NGINX_REPO_STAGING
export CLIENT_REPO=$CLIENT_REPO_STAGING
export API_REPO=$API_REPO_STAGING
export NGINX_VERSION="$nginx_ver"
export CLIENT_VERSION="$client_ver"
export API_VERSION="$api_ver"
export CELERY_FLOWER_USER=$CELERY_FLOWER_USER
export CELERY_FLOWER_PASSWORD=$CELERY_FLOWER_PASSWORD
envsubst < docker-swarm.yml > docker-swarm.tmp.yml
docker build -t \$NGINX_REPO:\$NGINX_VERSION -f nginx/Dockerfile.swarm ./nginx && docker push \$NGINX_REPO:\$NGINX_VERSION && docker stack deploy -c docker-swarm.tmp.yml app --with-registry-auth && rm docker-swarm.tmp.yml && docker system prune -a --volumes -f