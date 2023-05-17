export const mainData = [
    {
        title: '工具', //名称
        icon:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', //图标
        name:'home', //跳转的页面名称
    },
    {
        title: '常用JS方法',
        icon:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        name:'home', //跳转的页面名称
    },
    {
        title: '常用CSS样式',
        icon:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        name:'home', //跳转的页面名称
    },
    {
        title: '常用正则',
        icon:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        name:'home', //跳转的页面名称
    },
    {
        title: '常用网站',
        icon:'ChromeFilled',
        name:'web', //跳转的页面名称
    },
    {
        title: '常用插件',
        icon:'',
        name:'home', //跳转的页面名称
    },
    {
        title: '常用软件',
        icon:'',
        name:'home', //跳转的页面名称
    }
]
export type mainDataType = {
    title: string,
    icon: string,
    name: string
}

export const regData = [
    {
        title:'手机电话',
        content:'/^1((34[0-8])|(8\\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\\d{1}))\\d{7}$/'
    },
    {
        title:'手机电话',
        content:'/^1((34[0-8])|(8\\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\\d{1}))\\d{7}$/'
    },
    {
        title:'手机电话',
        content:'/^1((34[0-8])|(8\\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\\d{1}))\\d{7}$/'
    },
    {
        title:'手机电话',
        content:'/^1((34[0-8])|(8\\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\\d{1}))\\d{7}$/'
    }
]
export type regDataType = {
    title: string,
    content: string
}

export const webData = [
    {
        title: '百度',
        icon: '',
        content: '百度搜索引擎',
        href: 'www.baidu.com'
    },
    {
        title: '谷歌',
        icon: '',
        content: '谷歌搜索引擎',
        href: 'www.google.com.cn'
    }
]
export type webDataType = {
    title: string,
    icon: string,
    content: string,
    href: string
}