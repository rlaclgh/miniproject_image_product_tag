# 이미지를 빌드할 기반 이미지 선택
FROM node:latest

# 작업 디렉토리 생성 및 설정
WORKDIR /app

# 애플리케이션 종속성 설치
COPY package.json package-lock.json ./
RUN npm install

# 애플리케이션 소스 코드 복사
COPY . .

# 애플리케이션 빌드
RUN npm run build


EXPOSE 3000

# 애플리케이션 실행
CMD ["npm","run","start"]
