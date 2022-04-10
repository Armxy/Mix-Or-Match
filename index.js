import Express from "express";

const app = Express();
const port = process.env.PORT || 3000;
const setting = process.env.SETTING || 'default';
//const setting = 'gas';
let settings = {};

switch(setting){
    case 'subquery':
        settings.setting = setting;
        settings.title = 'SubQuery Match Game';
        settings.back = 'back-subquery.png';
        settings.front_tmpl = 'front-subquery-%s.png';
        break;
    case 'gas':
        settings.setting = setting;
        settings.title = 'GAS GANG<br/>MATCH GAME';
        settings.back = 'back-gas.gif';
        settings.front_tmpl = 'front-gas-%s.gif';
        break;
    default:
        settings.setting = setting;
        settings.title = 'Mix-Or-Match';
        settings.back = 'back-default.png';
        settings.front_tmpl = 'front-default-%s.png';
        break;
}

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Express.static('public'));

app.set('views', 'views');
app.set('view engine', 'pug');

app.get("/", (req, res) => {
    //res.sendFile('index.html', {root: 'public'});
    res.render('index', settings);
});

app.listen(port, () => console.log('listening on port ' + port));