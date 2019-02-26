//组件
var mylist = {
    template: '#mylist',
    props:['myposition'],
    data(){
        return{

        }
    },
    methods: {
        
    },
}

Vue.component('my-list',mylist);
//vue实例
var progress = new Vue({
    el: "#root",
    data: {
        aa: 123,
    },
    mounted() {
        
    },
    methods: {
        
    },
    watch: {
        
    },
})