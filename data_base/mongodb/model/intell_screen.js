const intell_screen = {
    name: 'intell_screen',
    model: {
        title: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        img_src: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now()
        },
        group: {
            id: String,
            name: String
        },
        enable_flag: {
            type: Number,
            default: 1
        }
    }
}

module.exports = intell_screen
