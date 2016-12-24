<template>
    <div>
        <div class="ml-flexbox">
            <div class="ml-flexbox-item">
                <ml-button size="large">default</ml-button>
            </div>
        </div>
        <div class="ml-flexbox">
            <div class="ml-flexbox-item">
                <ml-button size="large" type="white-orange">white-orange</ml-button>
            </div>
        </div>
        <div class="ml-flexbox">
            <div class="ml-flexbox-item">
                <ml-button size="large" type="orange-white">orange-white</ml-button>
            </div>
        </div>
        <div class="ml-flexbox">
            <div class="ml-flexbox-item">
                <ml-button size="large" type="white-blue">white-blue</ml-button>
            </div>
        </div>
        <div class="ml-flexbox">
            <div class="ml-flexbox-item">
                <ml-button size="large" type="blue-white">blue-white</ml-button>
            </div>
        </div>
        <div class="ml-flexbox">
            <div class="ml-flexbox-item">
                <ml-button size="large" :disabled="disabled">disabled</ml-button>
            </div>
        </div>



        <div class="demo-list">
            <h3>button small</h3>
            <ml-button size="small">default</ml-button>
            <ml-button size="small" type="white-orange">white-orange</ml-button>
            <ml-button size="small" type="orange-white">orange-white</ml-button>
            <ml-button size="small" type="white-blue">white-blue</ml-button>
            <ml-button size="small" type="blue-white">blue-white</ml-button>
            <ml-button size="small" :disabled="disabled">disabled</ml-button>
        </div>
        <div class="demo-list">
            <h3>button normal</h3>
            <ml-button size="normal">default</ml-button>
            <ml-button size="normal" type="white-orange">white-orange</ml-button>
            <ml-button size="normal" type="orange-white">orange-white</ml-button>
            <ml-button size="normal" type="white-blue">white-blue</ml-button>
            <ml-button size="normal" type="blue-white">blue-white</ml-button>
            <ml-button size="normal" :disabled="disabled">disabled</ml-button>
        </div>



    </div>
</template>
<style lang="sass">
    .demo-list {
        padding: 14px;
        h3 {
            padding: 15px;
        }

        button {
            margin: 5px;
        }
    }

</style>
<script>
    
    export default{
        data(){
            return{
                msg:'hello vue',
                disabled: true
            }
        },
        components:{
            
        }
    }
</script>
