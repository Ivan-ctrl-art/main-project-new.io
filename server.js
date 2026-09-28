import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Конфиренция РФ");
});

app.get('/about', (req, res) => {
    res.send('<h1>O портале</h1><p>Добро пожаловать на наш информационный портал.</p>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Контакты</h1><p>Email:info@example.com | Телефон:+7 (495) 000-00-00</p>');
});

app.get('/help', (req, res) => {
    res.send('<h1>Помощь</h1><p>Раздел находится в разработке</p>');
});

app.get('/rooms', (req, res) => {
    res.send('<h1>Список помещений</h1><ul><li>Конференц-зал <<Альфа>></li><li>Переговорная <<Бета>></li></ul>');
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});