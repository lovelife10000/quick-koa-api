var express = require('express')
var app = express()
var cors=require('cors');
const json =require('./db.json')
const json2 =require('./db2.json')
const banner =require('./banner.json')

var options={
    origin:['https']
}
app.post('/admin/sys/cfg/dic/type/list', function (req, res) {
    res.send(json)
})

app.post('/admin/sys/cfg/dic/value/list', function (req, res) {
    res.send(json2)
})
app.get('/banner/get', function (req, res) {
    res.send(banner)
})
app.listen(9001)