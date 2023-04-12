import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { Article, ArticleList } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import classes from './ArticleListPage.module.scss';

interface ArticleListPageProps {

}

const ArticleListPage = (props: ArticleListPageProps) => {
    const { t } = useTranslation('article');
    const article = {
        id: '1',
        user: {
            id: '1',
            avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
            username: 'admin',
        },
        title: 'React',
        subtitle: 'smth about React',
        img: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        tag: [
            'REACT',
            'IT',
        ],
        views: 1033,
        createdDate: '11.02.2023',
        blocks: [
            {
                id: '1',
                type: 'TEXT',
                title: 'Заголовок этого блока',
                paragraphs: [
                    'Программа, которую по традиции называют «Hello, world!», очень проста. Она '
                        + 'выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    'JavaScript — это язык, программы на котором можно выполнять в разных средах.'
                        + ' В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на'
                        + ' JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в '
                        + 'считанных секундах от своей первой JavaScript-программы.',
                    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на Ja'
                        + 'vaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файло'
                        + 'в с расширением .js, которые подключают к веб-страницам, но программный код можно включать и неп'
                        + 'осредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обн'
                        + 'аруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3'
                        + 'school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-стран'
                        + 'ицей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средс'
                        + 'твами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-н'
                        + 'ибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём '
                        + 'ello.html, и добавим в него следующий код:',
                ],
            },
            {
                id: '4',
                type: 'CODE',
                // eslint-disable-next-line max-len
                code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
            },
            {
                id: '5',
                type: 'TEXT',
                title: 'Заголовок этого блока',
                paragraphs: [
                    'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-л'
                        + 'ибо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном исполь'
                        + 'зовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц.'
                        + ' Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к ве'
                        + 'б-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делае'
                        + 'тся с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности '
                        + 'о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстриру'
                        + 'ющий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно '
                        + 'запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного инач'
                        + 'е. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) н'
                        + 'овый файл, который назовём hello.html, и добавим в него следующий код:',
                ],
            },
            {
                id: '2',
                type: 'IMAGE',
                src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                title: 'Рисунок 1 - скриншот сайта',
            },
            {
                id: '3',
                type: 'CODE',
                code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer."
                      + "router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
            },
            {
                id: '7',
                type: 'TEXT',
                title: 'Заголовок этого блока',
                paragraphs: [
                    'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь'
                        + ' идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода'
                        + ' на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в '
                        + 'считанных секундах от своей первой JavaScript-программы.',
                    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использован'
                        + 'ии программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как прави'
                        + 'ло, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, н'
                        + 'о программный код можно включать и непосредственно в код страницы. Всё это делается с помощью т'
                        + 'ега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге scri'
                        + 'pt можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий раб'
                        + 'оту с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запу'
                        + 'стить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного ин'
                        + 'аче. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notep'
                        + 'ad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                ],
            },
            {
                id: '8',
                type: 'IMAGE',
                src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                title: 'Рисунок 1 - скриншот сайта',
            },
            {
                id: '9',
                type: 'TEXT',
                title: 'Заголовок этого блока',
                paragraphs: [
                    'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае '
                        + 'речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строч'
                        + 'ки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы бу'
                        + 'квально в считанных секундах от своей первой JavaScript-программы.',
                ],
            },
        ],
    } as Article;

    const [view, setView] = useState(ArticleView.SMALL);

    return (
        <div className={classNames(classes.ArticleListPage, {}, [])}>
            <ArticleList
                articles={
                    new Array(16)
                        .fill(0)
                        .map((_, index) => ({
                            ...article,
                            id: String(index),
                        }))
                }
                view={ArticleView.BIG}
                isLoading
            />
        </div>
    );
};

export default memo(ArticleListPage);
