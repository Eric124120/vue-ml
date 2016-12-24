<template>
    <div class="page-toast-group">
        <h1>{{text}}</h1>
        <ml-button size="large" type="primary" v-on:handleClick="successToast">successToast</ml-button>
        <ml-button size="large" type="danger" v-on:handleClick="failToast">failToast</ml-button>
        <ml-button size="large" type="default" v-on:handleClick="networkToast">networkToast</ml-button>
    </div>
</template>
<style>
    .page-toast-group {
        width: 80%;
        padding: 10%;
    }
    .page-toast-group button {
        margin-top: 15px;
    }

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
