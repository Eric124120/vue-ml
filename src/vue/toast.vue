<template>
    <div>
        <h1>{{text}}</h1>
        <button @click="successToast">successToast</button>
        <button @click="failToast">failToast</button>
        <button @click="networkToast">networkToast</button>
    </div>
</template>
<style>
    button {
        margin: 10px 10%;
        width: 80%;
        line-height: 44px;
        border: 1px solid #e8e8e8;
        border-radius: 5px;
        background: #fff;
    }
</style>
<script>
    import {Toast} from '../index.js'
    
    export default{
        data(){
            return{
                text:'Show Toast'
            }
        },
        methods:{
            successToast: function() {
                this.$toast({
                    message: '操作成功',
                    iconClass: 'icon-toast-success'
                });
            },
            failToast: function() {
                this.$toast({
                    message: '操作失败',
                    iconClass: 'icon-toast-fail'
                });
            },
            networkToast: function() {
                this.$toast({
                    message: '网络异常',
                    iconClass: 'icon-toast-network'
                });
            }
        }
    }
</script>
