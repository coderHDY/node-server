const port = 8070;
const app = new require("express")();
const usePlugin = require("./utils/index.js");
const useRouter = require("./routers/v1/index.js");
usePlugin(app);
useRouter(app);

app.listen(port, () => console.log(`欢迎来到小黄的后端程序，正在为您转接端口：${port}`));