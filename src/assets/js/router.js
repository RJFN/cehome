import VueRouter from 'vue-router'
import index from '../../components/index.vue'
import shopping from '../../components/shopping.vue'
import detail from '../../components/detail.vue'
import denglu from '../../components/denglu.vue'
import denglu2 from '../../components/denglu2.vue'
import grzx from '../../components/grzx.vue'
var router = new VueRouter({
    
    routes:[
       
        {
            path:'/index',
            component:index
        },
        {
            path:'/',
            redirect:'/index'
        },
        {
            path:'/shopping',
            component:shopping
        },
        {
            path:'/detail',
            component:detail
        },
        {
            path:'/denglu',
            component:denglu
        },
        {
            path:'/denglu2',
            component:denglu2
        },
        {
            path:'/grzx',
            component:grzx
        },
    ]
})
export default router;