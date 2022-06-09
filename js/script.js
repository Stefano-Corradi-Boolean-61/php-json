

const app = new Vue({
  el: '#app',
  data:{
    apiUrl: 'http://localhost:8888/php-json/json.php',
    user:{}
  },
  mounted(){
    this.getApi();
  },
  methods:{
    getApi(){
      axios.get(this.apiUrl)
        .then(res => {
          this.user = res.data;
          console.log(res.data);
        })
    }
  }
});