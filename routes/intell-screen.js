const express = require('express');
const router = express.Router();
const { mongodb, Model } = require('../data_base/mongodb/index');
const intell_screen = require('../data_base/mongodb/model/intell_screen');
const intellScreenModel = new Model(intell_screen.name, intell_screen.model);
// mongodb connection
mongodb.then(res => {
    console.log('mongodb连接成功！')
}).catch(err => {
    console.log(`mongodb连接失败：${err}`)
});


router.get('/', (req, res, next) => {
    res.send('SUCCESS GET /scm');
})

// 获取看板信息列表
router.get('/list', (req, res, next) => {
    let { title } = req.query
    console.log(req.query, title, new RegExp(`${title}`));
    intellScreenModel.find({ title: new RegExp(`${title}`) }).then((data) => {
        console.log(data);
        res.send(data);
    })
})

// 看板信息新增
router.post('/add', (req, res, next) => {
    intellScreenModel.create({
        title: '202010201058',
        url: 'http://www.mongoosejs.net/docs/schematypes.html',
        is_default: 1,
        category: {
            id: '2020102017',
            name: '生产'
        }
    }).then(data => {
        res.send(data);
    }).catch((err) => {
        console.log(`新增数据失败${err}`)
        res.send(`新增数据失败${err}`);
    })
})
module.exports = router