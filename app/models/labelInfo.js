const moment = require('moment')
const {sequelize} = require('@core/db')
const {Model, DataTypes} = require('sequelize')

class LabelInfo extends Model {

}

LabelInfo.init({
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: '标签主键ID'
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: "标签名称"
    },
    status: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 1,
        comment: "标签状态,0-隐藏,1-展示"
    },
    sort_order: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true,
        defaultValue: 1,
        comment: '标签编号'
    },
    parent_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true,
        defaultValue: 0,
        comment: "父类别ID,ID=0代表根节点"
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "创建时间",
        get() {
            return moment(this.getDataValue('created_at')).format('YYYY-MM-DD HH:mm:ss')
        }
    }
}, {
    sequelize,
    modelName: "labelInfo",
    tableName: "labelInfo"
})
module.exports = {
    LabelInfo
}
