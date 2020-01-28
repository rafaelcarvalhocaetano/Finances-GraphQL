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


#### FOI
 - http://i.imgur.com/fOke4rG.png

### - Model Signup
{
  "data": {
    "signup": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjazV5ZnE0NDMwMDBkMDg4MGowamtoc2l4IiwiaWF0IjoxNTgwMjQ5NDU2LCJleHAiOjE1ODAyNTY2NTZ9._Mj6Iu6bPDWeiKcfy2AgFY-aHH-0L3nYfoCZTpnzIzg",
      "user": {
        "id": "ck5yfq443000d0880j0jkhsix",
        "name": "Rafael",
        "email": "rafael@gmail.com"
      }
    }
  }
}
