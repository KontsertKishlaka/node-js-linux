import express from 'express';
import { URL } from 'url';

const app = express();
const __dirname = new URL('.', import.meta.url).pathname;
const port = 8787;

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.set('view options', { layout: 'layout' });
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', {
        username: req.query.username === undefined ? 'Никто' : req.query.username
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'О сайте'
    });
});

app.get('/feedback', (req, res) => {
    res.render('feedback', {
        title: 'Обратная связь'
    });
});

app.get('/news', (req, res) => {
    res.render('news', {
        title: 'Новости',
        imagePath: '/images/news-image.jpeg'
    });
});


app.listen(port, () => console.log(`Работает! Порт ${port}`));