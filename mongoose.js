const mongoose = require('mongoose');
const DB_NAME = `demo`
const DB_URL = '188.188.3.19:27017';

let dbConnect = new Promise((resolve, reject) => {
    // 连接数据库
    mongoose.set('useCreateIndex', true);
    mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });

    // 监听回调
    mongoose.connection.on('open', (err) => !err ? resolve() : reject(err));
})

dbConnect.then(() => {
    console.log('数据库连接成功！');

    // 引入约束Schema
    let Schema = mongoose.Schema;

    // 创建一个约束实例对象
    let studentSchema = new Schema({
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
    });

    // 创建模型对象 参数1：指定的集合 | 参数2：指定的约束对象
    let studentModel = mongoose.model('students', studentSchema);

    studentModel.create({
        stu_id: '202010201058',
        name: '阿测帅',
        age: 18,
        sex: '男',
        hobby: ['女', 'js'],
        info: '很帅的男人'
    }).then((err, data) => {
        if (!err) {
            console.log(data);
        }
    })
}).catch(err => {
    console.log('数据库连接失败：' + err);
})