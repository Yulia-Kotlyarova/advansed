import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticlePage from './ArticlePage';

export default {
    title: 'pages/ArticlePage',
    component: ArticlePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlePage>;

const Template: ComponentStory<typeof ArticlePage> = () => <ArticlePage />;

const data = {
    id: '1',
    title: 'React',
    subtitle: 'smth about React',
    img: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    tag: [ArticleType.REACT, ArticleType.IT],
    views: 1033,
    createdDate: '11.02.2023',
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, '
                + 'world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт '
                + 'о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете '
                + 'этот текст в браузере, '
                + 'на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-'
                + 'программы.',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: `<!DOCTYPE html>
<html>
  <body>
    <p id="hello"></p>

    <script>
      document.getElementById("hello").innerHTML = "Hello, world!";
    </script>
  </body>
</html>;`,
        },
        {
            id: '2',
            type: ArticleBlockType.IMAGE,
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
    ],
};

export const Primary = Template.bind({});
Primary.decorators = [StoreDecorator({})];
Primary.args = {};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {};

PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];
