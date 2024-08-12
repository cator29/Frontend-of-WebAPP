import Koa from 'koa';
import serve from 'koa-static';
import path from 'path';
import { fileURLToPath } from 'url';

const app = new Koa();

// 获取当前文件的目录名
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 设置静态文件目录
const staticPath = path.join(__dirname, 'dist');

// 使用 koa-static 中间件
app.use(serve(staticPath));

// 启动服务器
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
