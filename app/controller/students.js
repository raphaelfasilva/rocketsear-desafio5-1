const { date } = require('../lib/util')

module.exports = {
    index(req, res) {
        return res.render("students/index")
    },
    post(req, res) {
        const keys = Object.keys(req.body)
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("por favor validar todos os campos")
            }
        }
        return
    },
    show(req, res) {
        const { id } = req.params
        return
    },
    edit(req, res) {
        const { id } = req.params
        return
    },
    put(req, res) {
        const { id } = req.body
        let index = 0
        return
    },
    delete(req, res) {
        const { id } = req.body
        return
    }
}