<template>
    <div>
        <div class="ml-list">
            <div class="ml-list-header">
                复选框样式
            </div>
            <div class="ml-list-body">
                <ml-checkbox name="name1" value="1">内容一</ml-checkbox>
                <ml-checkbox name="name1" value="2">内二</ml-checkbox>
                <ml-checkbox name="name1" value="3">内容三</ml-checkbox>
            </div>
        </div>
        <div class="ml-list">
            <div class="ml-list-header">
                单选框样式
            </div>
            <div class="ml-list-body">
                <ml-checkbox type="radio" name="name1" value="1">内容一</ml-checkbox>
                <ml-checkbox type="radio" name="name1" value="2">内二</ml-checkbox>
                <ml-checkbox type="radio" name="name1" value="3">内容三</ml-checkbox>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    
    export default{
        data(){
            return{
                name1:'content',
                name2: 'content2'
            }
        }
    }
</script>
