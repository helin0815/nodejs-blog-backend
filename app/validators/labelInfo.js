const {
    Rule, LinValidator
} = require('@core/lin-validator-v2')

class LabelInfoValidator extends LinValidator {
    constructor() {
        super();
        this.name = [new Rule("isLength", "标签 name 名字不能为空哈", {min: 1})]
    }
}

class PositiveIdParamsValidator extends LinValidator {
    constructor() {
        super();
        this.id = [
            new Rule('isInt', '标签ID需要正整数', {min: 1})
        ]
    }
}

module.exports = {
    LabelInfoValidator,
    PositiveIdParamsValidator
}
