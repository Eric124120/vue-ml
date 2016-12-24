<template>
    <div class="ml-list">
        <div class="ml-list-header">switch 滑动开关</div>
        <div class="ml-list-body">
            <div class="ml-list-item">
                <div class="ml-list-content">选中状态</div>
                <ml-switch v-model="switch1" name="name1" @change="change1"></ml-switch>
            </div>

            <div class="ml-list-item">
                <div class="ml-list-content">未选中状态</div>
                <ml-switch v-model="switch2" name="name2"></ml-switch>
            </div>

            <div class="ml-list-item">
                <div class="ml-list-content">禁用状态</div>
                <ml-switch v-model="switch3" name="name3" disabled></ml-switch>
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
                switch1: true,
                switch2: false,
                switch3: false
            }
        },
        methods: {
            change1: function(e, value) {
                console.log(e.target, value);
            }
        }
    }
</script>
