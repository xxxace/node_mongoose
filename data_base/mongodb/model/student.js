const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const student = {
    name: 'student',
    model: {
        stu_id: {
            type: String,
            // 必填
            require: true,
            // 唯一
            unique: true,
        },
        name: {
            type: String,
            require: true
        },
        age: {
            type: Number,
            require: true
        },
        sex: {
            type: String,
            require: true
        },
        hobby: [String],
        info: {
            // 接受所有类型
            type: Schema.Types.Mixed
        },
        date: {
            type: Date,
            default: Date.now()
        },
        enable_flag: {
            type: Number,
            default: 1
        }
    }
}

module.exports = student