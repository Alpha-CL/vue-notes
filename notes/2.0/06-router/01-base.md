# base router

#### what is router

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 什么是路由
 * 
 * 
 * 路由是根据不同的 "url address" 展现不同的内容或页面
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 什么时候使用前端路由
 * 
 *  
 * 前端路由更多用在单页应用上，也就是 SPA( Single Page Web Application )，在单页面应用中，大部分页面结果不变，只改变部分内容的使用
 */


//-------------------------------------------------------------------------------------------------------------------//


// 刷新跳转

1. 请求资源

    - request index.html
    - request resource: { .js, .css ...}

2. 执行 JS

    - exec .js

3. 创建 Vue 应用

    - create vueApp

4. 渲染组件树

    - render compoent-tree

5. 将组件树挂载到指定节点

    - mount compoent-tree in target tag


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 无刷新跳转

1. 执行指定 JS 代码，切换某个区域的组件


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### install vue-router

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 安装 vue-router
 * 
 * 
 * 
 */

npm install vue-router


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## base usage

#### base usage

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


1) 配置 vue-router

    1. 注入 new Vue({..., router, ...});
       关联 Vue.use(VueRouter);
    
    2. 创建实例 const router = new VueRouter(config);
    
    3. 通过 config: {                        // 配置 路由匹配规则
    
        - mode: hash/history/abstract       // 配置 路由匹配模式
        
        - routes: object[]                  // 配置 路由匹配条件
        
        - ...
        
       };


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


2) 配置 路由匹配条件


routes: [                                

    {
        path: '@/path',                 // @ === ./src
        component: CustomComp,
        
    }
];


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


3) 在 页面组件 中使用路由，并与匹配规则匹配


<RouterLink to=""/> === <router-link to=""/>            // 指定匹配路径 -> 根据 routes 中的配置 匹配组件
    
    - 添加点击事件
    
    - 阻止默认行为
    
    - 使用 history api 更改路径


<RouterView/> === <router-view/>                        // 展示路径匹配成功的组件  

    - 用于占位: 将匹配成功后的组件展示于此


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### router mode

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const router = new VueRouter({

    mode: 'hash',           // default
});


//-------------------------------------------------------------------------------------------------------------------//


/**
 * hash-mode                // localtion.hash
 * 
 * 
 * 1) 页面地址会增加 hash 
 * 
 * 2) 页面跳转不会重新加载
 * 
 ** 路径阅读感不好
 */


// 仅关注 # 后的路径

http://local:8080/#/home                => /home
http://local:8080/about#/blog           => /blog


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * history-mode             // history.pushState(null, null,path: string);
 * 
 * 
 * 1) 页面地址不会增加 hash( 相较于 hash-mode 的页面地址好看一些 )
 * 
 * 2) 该模式访问未知页面，若没有后端配合，则会返回 404
 *    ( 若 url 匹配不到任何静态资源，则返回同一个 index.html )
 * 
 ** 路径阅读感较好
 */


http://localhost:8080/#/blog            => blog
http://localhost:8080/#about/blog       => blog
http://localhost:8080/blog              => blog


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * abstract-mode
 * 
 * 
 * 路由从内存中获取路径，改变路径也只改动内动中的值
 * 
 ** 通常用应用在非浏览器环境中
 */


RAM: /          => /
RAM: /about     => /about
RAM: /blog      => /blog


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## route rule

#### configuration route

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * routes: object[];                // 配置路由规则
 * 
 * 
 * 1) 路由可根据 path 匹配组件
 * 
 * 2) 路由可根据 name? 匹配组件        // 可避免后期路径修改导致路由匹配路径失效
 */


import [Comp] from "@/views/[Comp]"

routes: [

    {
        name: '[name]',            // 路由命名
        path: '/[path]',
        component: [Comp],
    },
];


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

### match route

#### match rule

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 匹配路由规则
 * 
 * 
 * 
 */


<RouterLink                             // 匹配路由规则

    to="path: string | name: object"    // 设置匹配规则( 路径 | 路由命名 )
    exact?="boolean"                    // 是否精确匹配
    active-class?="newClass"            // 默认模糊匹配成功后添加的类名
    active-exact-class?="newClass"      // 默认精确匹配成功后添加的类命
/>


<RouoterView/>                          // 仅占位: 路由匹配成功后，展示对应的组件


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### named route

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 命名路由: 若路径可能会修改，则便于后期维护

<RouterLink to="{name: 'key'}"/>        // 根据命名匹配


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 普通路径跳转路由

<RouterLink to="/path"/>                // 根据路径匹配


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

### is exact-match

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * exact: boolean;
 * 
 * 
 * 是否精确匹配
 */


模糊匹配: 以当前匹配路径开头的路径，匹配成功则为导航添加 router-link-active 类名

    - attribute: active-class="newClass"            // rename class

    eg: '/'         =>      '/home', '/blog', '/about'


精确匹配: 必须和当前匹配路径完全一致的路径，匹配成功则为导航添加 router-link-exact-active 类名

    - attribute: exact-active-class="newClass"      // rename class

    eg: '/home'     =>      '/home'


//-------------------------------------------------------------------------------------------------------------------//


routes = [

    {
        path: '/',
        component: Home,
    },
        {
        path: '/blog',
        component: Blog,
    }
];


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


attr: exact: false;                     // 未精确匹配

<RouterLink to="/"/>                    // class="router-link-active"
<RouterLink to="/blog"/>                // class="router-link-active router-link-exact-active"


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


arrt: exact: true;                      // 精确匹配

<RouterLink to="/" exact/>              // class="router-link-exact-active"
<RouterLink to="/blog"/>                // class="router-link-active router-link-exact-active"


<RouterLink to="/" exact/>              // class="router-link-exact-active"
<RouterLink to="/blog" exact/>          // class="router-link-exact-active"


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```
