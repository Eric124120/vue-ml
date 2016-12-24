<template>
    <div>
        <div class="ml-flexbox">
            <div class="ml-flexbox-item">
                <ml-button size="large" v-on:handleClick="networkToast">networkToast</ml-button>
            </div>
        </div>
        <div class="ml-flexbox">
            <div class="ml-flexbox-item">
                <ml-button size="large" type="white-orange" v-on:handleClick="successToast">successToast</ml-button>
            </div>
        </div>
        <div class="ml-flexbox">
            <div class="ml-flexbox-item">
                <ml-button size="large" type="orange-white" v-on:handleClick="failToast">failToast</ml-button>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import {Toast} from '../../packages'
    
    export default{
        data(){
            return{
                text:'Show Toast'
            }
        },
        methods:{
            successToast: function() {
                this.$ml.Toast({
                    message: '操作成功',
                    iconClass: 'icon-toast-success'
                });
            },
            failToast: function() {
                this.$ml.Toast({
                    message: '操作失败',
                    iconClass: 'icon-toast-fail'
                });
            },
            networkToast: function() {
                this.$ml.Toast({
                    message: '网络异常',
                    iconClass: 'icon-toast-network'
                });
            }
        }
    }
</script>
