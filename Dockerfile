<<<<<<< HEAD
<<<<<<< HEAD
FROM --platform=linux/amd64 node:16-alpine
 
# 앱 디렉터리 생성
WORKDIR /app
# directly choose
=======
FROM --platform=linux/amd64 node:16-alpine 
=======
FROM amd64/node:16-alpine 
>>>>>>> a08e3f41cadcb8bca2e23aefab61a84fc2a73534

# 앱 디렉터리 생성
WORKDIR /usr/src/app
>>>>>>> main

# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해
# 와일드카드를 사용
COPY package*.json ./
<<<<<<< HEAD
# ./ = app/
=======
>>>>>>> main

RUN npm install
# 프로덕션을 위한 코드를 빌드하는 경우
# RUN npm ci --only=production

# 앱 소스 추가
COPY . .
<<<<<<< HEAD
# first param means local work dir 
#the second one means app/

EXPOSE 4000
CMD ["npm","run","start"]
=======

EXPOSE 3000
<<<<<<< HEAD
CMD [ "npm","run","start"]
>>>>>>> main
=======
CMD [ "npm","run","start" ]
>>>>>>> a08e3f41cadcb8bca2e23aefab61a84fc2a73534
