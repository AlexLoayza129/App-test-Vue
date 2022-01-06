const app = new Vue({
    el:'#app',
    data:{
        productos:[],
        newProduct: '',
        newDesc: '',
        newColor:'',
        upProduct:'',
        upDesc: '',
        upColor: '',
        modal : false,
        modal_id: null,
    },
    methods:{
        // getProducts() {
        //     Axios.get('url')
        //         .then ( response => {
        //             this.productos = response.data;
        //         })
        // },
        addProduct: function(){
            let object = {
                name: this.newProduct,
                description: this.newDesc,
                color: this.newColor,
                image: `../assets/images/${this.newColor}.jpg`
            };
            this.productos.push(object);
            localStorage.setItem('app-test',JSON.stringify(this.productos));
            this.newProduct = '';
            this.newDesc = '';
            this.newColor = '';
        },
        deleteProduct: function(index){
            this.productos.splice(index,1);
            localStorage.setItem('app-test',JSON.stringify(this.productos));
        },
        infoProduct: function(index){
            this.modal = true;
            this.modal_id = index;
            this.upProduct = this.productos[index].name;
            this.upDesc = this.productos[index].description;
            this.upColor = this.productos[index].color;
        },
        closeModal: function(){
            this.modal = false;
            this.modal_id = null;
        },
        updateProduct :function(index){
            this.productos[index]['name'] = this.upProduct;
            this.productos[index]['description'] = this.upDesc;
            this.productos[index]['color'] = this.upColor;
            this.productos[index]['image'] = `/assets/images/${this.upColor}.jpg`;
            localStorage.setItem('app-test', JSON.stringify(this.productos));
            this.closeModal();
        }
    },
    created: function(){
        let db = JSON.parse(localStorage.getItem('app-test'));
        if(db === null){
            this.productos = [];
        }else{
            this.productos = db;
        }
        
        // this.getProducts();
    }
});