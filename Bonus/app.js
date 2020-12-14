let vm = new Vue({
    el: "#app",
    data: {
        classShow: "hidden",
        message: "Hello Dragon",
        image: "https://highxtar.com/wp-content/uploads/2020/05/highxtar-spacex-elon-musk-occupy-mars2.jpg",
    },
    methods: {
        showImg(){
            if (this.classShow==="hidden"){
                this.classShow = "visible"
            } else {
                this.classShow = "hidden"
            }
        }
    }
});