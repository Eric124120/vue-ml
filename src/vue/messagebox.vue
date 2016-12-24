<template>
    <div>
        <div class="demo-list page-button-group">
            <h3>show messageBox</h3>
            <ml-button size="large" @handleClick="alert">alert</ml-button>
            <ml-button size="large" @handleClick="confirm">confirm</ml-button>
            <ml-button size="large"  @handleClick="iconConfirm">icon confirm</ml-button>
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
        methods:{
            alert: function() {
                this.$ml.MessageBox({
                    title: '提示',
                    type: 'alert',
                    content: '提示内容文字增加，框体随之增加长文本提示内容，内容尽量简短，避免出现滚动条。',
                    cancelButtonText: '我知道了'
                });
            },
            confirm: function() {
                this.$ml.MessageBox({
                    title: '提示标题',
                    type: 'confirm',
                    content: '提示内容文字增加，框体随之增加长文本提示内容。',
                    confirmButtonText: '主操作',
                    cancelButtonText: '辅助操作',
                    cancelCallback: function() {
                        console.log('cancelCallback');
                    },
                    confirmCallback: function() {
                        console.log('confirmCallback');
                    }
                });
            },
            iconConfirm: function() {
                this.$ml.MessageBox({
                    icon: require('../images/logo.png'),
                    title: '提示标题',
                    type: 'confirm',
                    content: '提示内容文字增加，框体随之增加长文本提示内容。',
                    confirmButtonText: '主操作',
                    cancelButtonText: '辅助操作',
                    cancelCallback: function() {
                        console.log('cancelCallback');
                    },
                    confirmCallback: function() {
                        console.log('confirmCallback');
                    }
                });
            }
        }
    }
</script>
