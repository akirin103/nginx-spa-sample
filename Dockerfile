FROM node:12

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

# アプリケーションの依存関係をインストールする
# ワイルドカードを使用して、package.json と package-lock.json の両方が確実にコピーされるようにします。
# 可能であれば (npm@5+)
COPY backend/package*.json ./

RUN npm install

# アプリケーションのソースをバンドルする
COPY backend/ .

EXPOSE 8000

CMD [ "npm", "start" ]
