<template>
    <div>
        <div class="demo-list page-button-group">
            <h3>button large</h3>
            <ml-button size="large">default</ml-button>
            <ml-button size="large" type="primary">primary</ml-button>
            <ml-button size="large" type="danger">danger</ml-button>
        </div>
        <div class="demo-list page-button-group">
            <h3>button small</h3>
            <ml-button size="small">default</ml-button>
            <ml-button size="small" type="primary">primary</ml-button>
            <ml-button size="small" type="danger">danger</ml-button>
        </div>
        <div class="demo-list page-button-group">
            <h3>button normal</h3>
            <ml-button size="normal">default</ml-button>
            <ml-button size="normal" type="primary">primary</ml-button>
            <ml-button size="normal" type="danger">danger</ml-button>
        </div>
    </div>
</template>
<style>
    .page-button-group {
        width: 80%;
        padding: 10%;
    }

    .page-button-group button {
        margin-top: 15px;
    }
</style>
<script>
    
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            
        }
    }
</script>
