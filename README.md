# API GraphQG

### GraphQL-YOGA

# CRD - PRISMA
 - prisma deploy
 - prisma generate (``` npm i prisma-client-lib ``` )
 - docker: docker-compose up -d --build --no-deps api

 ||

 - prisma local start
 - prisma local stop

### Para todas as instâncias
docker stop $(docker ps -a -q)

### Remove todas as instâncias
docker rm $(docker ps -a -q)

### Para todas as imagens
docker image rm $(docker image ls -a -q)

### Para todos os volumes
docker volume prune
