const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('view engine',hbs)

app.get('/apple', (req, res) => {
    res.render('myModel.hbs', { fruit: "apple", imgLink: "https://sc01.alicdn.com/kf/ULB8FQKdLODEXKJk43Oqq6Az3XXas/china-fresh-sweet-delicious-red-fruit-apples.jpg_350x350.jpg"})
})

app.get('/lemon', (req, res) => {
    res.render('myModel.hbs', { fruit: "lemon", imgLink: "https://cdn.shopify.com/s/files/1/2336/3219/products/shutterstock_77846398eureka2_x850.jpg?v=1554665666"})
})

app.get('/grapes', (req, res) => {
    res.render('myModel.hbs', { fruit: "grapes", imgLink: "https://s7d6.scene7.com/is/image/bjs/6191?$bjs-Zoom$"})
})

app.get('/papaya', (req, res) => {
    res.render('myModel.hbs', { fruit: "papaya", imgLink: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/papaya-benefits-1296x728-feature.jpg?w=1155&h=1528"})
})

app.get('/', (req, res) => {
    res.send('Sweet home alabama')
});

app.listen(3000, err => err ? console.log('server err: '+err) : console.log('server running on port 3000'));