const Router = require('koa-router');
const axios = require('axios');
const querystring = require("querystring");

const router = new Router({
    prefix: "/api/v1"
});

router.get('/getPrompt', async (ctx) => {

    const response = await axios.get('https://test-use-langchai2.dev.fc.chj.cloud/prompt?q=where%20are%20you%20from?');
    ctx.body = response.data;
    // console.log(response.data);
});

router.post('/chat', async (ctx) => {
        const form = {
            "messages": [
                {
                    "role": "user",
                    "content": "妈的，你这个模型为什么这么卡"
                }
            ],
            "model": "GPT-4"
        };
        let chatURL = global.config.chatURL;

        chatURL = chatURL + '/chat'
        console.log("url:", chatURL);
        const resp = await axios.post(chatURL, form, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("resp:", resp.data)

        const contents = resp.data.choices[0].content
        // 创建一个新的响应对象，并设定code和content属性
    // 将新的响应对象发送给客户端
        ctx.body = {
            "code": 200,
            "content": contents
        };
    }
)
module.exports = router;
