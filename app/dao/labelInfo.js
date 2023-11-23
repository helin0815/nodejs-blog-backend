const {Op} = require('sequelize')
const {LabelInfo} = require('@models/labelInfo')

class LabelInfoDao {
    static async create(params = {}) {
        const {
            name,
            sort_order = 1,
            parent_id = 0,
        } = params
        const hasLabelInfo = await LabelInfo.findOne({
            where: {
                name,
                deleted_at: null
            }
        });
        if (hasLabelInfo) {
            throw new global.errs.Existing('标签已存在,不可再次添加');
        }
        const labelInfo = new LabelInfo();
        labelInfo.name = name
        labelInfo.sort_order = sort_order
        labelInfo.parent_id = parent_id

        try {
            const res = await labelInfo.save();
            const data = {
                name: res.name,
                key: res.key,
                parent_id: res.parent_id,
                msg: "创建标签成功"
            }
            return [null, data]
        } catch (err) {
            return [err, null]
        }
    }

    static async list(query = {}) {
        const {status = 1, name, id, page_size = 10, page = 1} = query
        let params = {}
        if (status || status === 0) {
            params.status = status
        }
        if (name) {
            params.name = {
                [Op.like]: `%${name}%`
            };
        }
        if (id) {
            params.id = id
        }
        console.log("helin params:", params)
        try {
            const labelInfo = await LabelInfo.scope('bh').findAndCountAll({
                where: params,
                limit: page_size,
                offset: (page - 1) * page_size,
                order: [
                    ["created_at", "DESC"]
                ]
            });
            const data = {
                data: labelInfo.rows,
                meta: {
                    current_page: parseInt(page),
                    per_page: 10,
                    count: labelInfo.count,
                    total: labelInfo.count,
                    total_pages: Math.ceil(labelInfo.count / 10),
                }
            }
            return [null, data]
        } catch (err) {
            console.log('err:', err)
            return [err, null]
        }
    }
}

module.exports = {
    LabelInfoDao
}
