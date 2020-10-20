const http = require('http');
const https = require('https');
const cheerio = require('cheerio');
let url = 'https://movie.douban.com/';

// function filterDom(html) {
//     let $ = cheerio.load(html);
//     let listBody = $('.billboard-bd');
//     // console.log(listBody['0'].children)
//     let listData = [];
//     [listBody].each(function(index, value) {
//         console.log(index, value)
//     })
// }

// function get(url) {
//     https.get(url, function(res) {
//         let html = ''
//         res.on('data', function(data) {
//             html += data
//         })

//         res.on('end', function() {
//             console.log(filterDom(html))
//         })

//         res.on('error', function(err) {
//             console.log(err)
//         })
//     })
// }

// get(url)
let options = {
    hostname: 'api.douban.com',
    port: 443,
    path: '/v2/movie/top250',
    method: 'GET'
}

let request = http.request('http://musicapi.leanapp.cn/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA', (res) => {
    // console.log('xxxx', res)
    let data = ''
    res.setEncoding('utf-8')
    res.on('data', (chunk) => {
        data += chunk
    })
    res.on('end', () => {
        JSON.parse(data).result.songs.forEach((song, index) => {
            console.log(`No.${index+1} ${song.name}`)
        })
    })
})

request.on('error', (error) => {
    console.log(error)
})

request.end();

db.board_list.insertMany([{
        "id": 1,
        "title": "开发办进度看板",
        "url": "http://183.237.213.140:9080/KF/#/",
        "imgSrc": "src/assets/images/boardCover/devprocess.png",
        "isDefault": 1,
        "categoryId": 1
    },
    {
        "id": 2,
        "title": "智益生产看板",
        "url": "http://183.237.213.140:9080/SC/#/",
        "imgSrc": "src/assets/images/boardCover/proprocessd.png",
        "isDefault": 0,
        "categoryId": 1
    },
    {
        "id": 3,
        "title": "工序汇报看板",
        "url": "http://183.237.213.140:9802/realTimeProduction",
        "imgSrc": "src/assets/images/boardCover/real_time_report.png",
        "isDefault": 0,
        "categoryId": 1
    },
    {
        "id": 4,
        "title": "工序汇总看板",
        "url": "http://188.188.2.112:9802/realTimeProTotal",
        "imgSrc": "src/assets/images/boardCover/real_time_total.png",
        "isDefault": 0,
        "categoryId": 1
    },
    {
        "id": 16,
        "title": "工序转移看板",
        "url": "http://188.188.2.112:9802/realTimeTransform",
        "imgSrc": "src/assets/images/boardCover/process_transform.png",
        "isDefault": 0,
        "categoryId": 1
    },
    {
        "id": 17,
        "title": "织机采集看板",
        "url": "http://188.188.2.7:81/p_daping.html",
        "imgSrc": "src/assets/images/boardCover/weaving-factory-collect.png",
        "isDefault": 0,
        "categoryId": 1
    },
    {
        "id": 5,
        "title": "MES大屏",
        "url": "http://183.63.216.195:8081/bigScreen/#/",
        "imgSrc": "src/assets/images/boardCover/meslist.png",
        "isDefault": 0,
        "categoryId": "2"
    },
    {
        "id": 6,
        "title": "生产进度监控平台",
        "url": "http://183.63.216.195:5001/fabricProduction/#/",
        "imgSrc": "src/assets/images/boardCover/process_monitoring.png",
        "isDefault": 0,
        "categoryId": 2
    },
    {
        "id": 7,
        "title": "智益纺织能耗大屏系统",
        "url": "http://183.63.216.195:8085/energy/#/",
        "imgSrc": "src/assets/images/boardCover/energy.png",
        "isDefault": 0,
        "categoryId": 2
    },
    {
        "id": 8,
        "title": "定型大屏",
        "url": "http://183.63.216.195:5011/stereotypeScreen/#/",
        "imgSrc": "src/assets/images/boardCover/stereotype_screen.png",
        "isDefault": 0,
        "categoryId": 2
    },
    {
        "id": 9,
        "title": "排缸大屏(无轮播)",
        "url": "http://188.188.2.13:5004/cylinderTableScreen/#/",
        "imgSrc": "src/assets/images/boardCover/cylinder_table_screen.png",
        "isDefault": 0,
        "categoryId": 2
    },
    {
        "id": 10,
        "title": "排缸表",
        "url": "http://188.188.2.13:5005/cylinderTableScreenCarousel/#/",
        "imgSrc": "src/assets/images/boardCover/cylinder_table_screen_carousel.png",
        "isDefault": 0,
        "categoryId": 2
    },
    {
        "id": 11,
        "title": "智益四合一",
        "url": "http://183.63.216.195:8081/bigScreen/#/sp/005",
        "imgSrc": "src/assets/images/boardCover/big_screen.png",
        "isDefault": 0,
        "categoryId": 3
    },
    {
        "id": 12,
        "title": "智益大屏一",
        "url": "http://183.63.216.195:8081/bigScreen/#/st/001",
        "imgSrc": "src/assets/images/boardCover/bigscreen1.png",
        "isDefault": 0,
        "categoryId": 3
    },
    {
        "id": 13,
        "title": "智益大屏二",
        "url": "http://183.63.216.195:8081/bigScreen/#/st/002",
        "imgSrc": "src/assets/images/boardCover/bigscreen2.png",
        "isDefault": 0,
        "categoryId": 3
    },
    {
        "id": 14,
        "title": "智益大屏三",
        "url": "http://183.63.216.195:8081/bigScreen/#/st/003",
        "imgSrc": "src/assets/images/boardCover/bigscreen3.png",
        "isDefault": 0,
        "categoryId": 3
    },
    {
        "id": 15,
        "title": "智益大屏四",
        "url": "http://183.63.216.195:8081/bigScreen/#/st/004",
        "imgSrc": "src/assets/images/boardCover/bigscreen4.png",
        "isDefault": 0,
        "categoryId": 3
    }
])