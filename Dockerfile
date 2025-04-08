# Build stage
FROM node:20.18.1-alpine AS build-stage

WORKDIR /app

# 复制 package.json 和 pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# 安装 pnpm 并使用它安装依赖
RUN npm install -g pnpm && pnpm i --force

# 复制所有项目文件
COPY . .

# 构建 Next.js standalone 模式
RUN pnpm run build

# Production stage
FROM node:20.18.1-alpine AS production-stage

# 指定工作目录
WORKDIR /app

# 复制 `standalone` 目录
COPY --from=build-stage /app/.next/standalone ./
COPY --from=build-stage /app/.next/static ./.next/static
COPY --from=build-stage /app/public ./public

# 确保 node_modules 仅包含生产环境依赖
# RUN  npm install -g pnpm && npm cache clean --force && npm config set cache /cache

# 暴露端口
EXPOSE 4141

# 运行 standalone 服务器
CMD ["node", "server.js"]
