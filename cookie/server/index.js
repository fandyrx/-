const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();

const testRouter = new Router();
//token 更加常用，cookie 浏览器后端设置
//登录接口
testRouter.get("/test", (ctx, next) => {
	ctx.cookies.set("name", "mememe", {
    maxAge: 50 * 1000, // 过期的秒钟 60*60*24*365  一年
    //expires://过期具体时间，Date.toUTCString() 
    

	});

	ctx.body = "test";
});

testRouter.get("/demo", (ctx, next) => {
	//读取cookie
	const value = ctx.cookies.get("name");
	ctx.body = `你的cookie是${value} `;
});

app.use(testRouter.routes());
app.use(testRouter.allowedMethods());

app.listen(8080, () => {
	console.log("8080端口服务器监听中");
});
