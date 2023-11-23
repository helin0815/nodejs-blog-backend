const Router = require('koa-router')
const {
    LabelInfoValidator,
    PositiveIdParamsValidator
} = require('@validators/labelInfo');
const {LabelInfoDao} = require('@dao/labelInfo')
const {Auth} = require('@middlewares/auth')
const {Resolve} = require('@lib/helper')
const res = new Resolve()
const AUTH_ADMIN = 16
const router = new Router({
    prefix: "/api/v1"
})

router.post('/labelInfo', new Auth(AUTH_ADMIN).m, async (ctx) => {
    const v = await new LabelInfoValidator().validate(ctx);
    console.log("何林1:", ctx.request)
    const [err, data] = await LabelInfoDao.create({
        name: v.get('body.name'),
        status: v.get('status'),
        sort_order: v.get('sort_order'),
        parent_id: v.get('body.parent_id'),
    });
    if (!err) {
        ctx.response.status = 200;
        ctx.body = res.json(data)
    } else {
        ctx.body = res.fail(err)
    }
})

// 获取标签列表
router.get('/labelInfo', async (ctx) => {
    const [err, data] = await LabelInfoDao.list(ctx.query);
    if (!err) {
        ctx.response.status = 200;
        ctx.body = res.json(data)
    } else {
        ctx.body = res.fail(err)
    }
})

// 获取某一条标签详情
router.get('/labelInfo/:id', new Auth(AUTH_ADMIN).m, async (ctx) => {
    const v = await new PositiveIdParamsValidator.validate(ctx)

    const id = v.get('path_id');
    const [err, data] = await LabelInfoDao.detail(id);
    if (!err) {
        ctx.response.s = 200;
        ctx.body = res.json(data);
    } else {
        ctx.body = res.fail(err)
    }
})
module.exports = router
