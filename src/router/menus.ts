export const menus = [
    {
        name:'首页',
        path:'/Home',
        icon:'home',
    },
    {
        name:'列表',
        path:'/Lis',
        icon:'list',
        children:[
            {
                name:'数据',
                path:'/List/news'
            },
            {
                name:'详情',
                path:'/List/detail'
            }
        ]
    }
]