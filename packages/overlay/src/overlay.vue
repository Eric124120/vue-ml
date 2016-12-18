<template>
    <div class="ml-overlay" v-if="display" :style="{opacity: opacity}"></div>
</template>
<style>
    .ml-overlay {
        position: fixed;
        top: 0;
        left: 0;
        opacity: .5;

        width: 100%;
        height: 1000%;
        background-color: #000;
        z-index: 100;
    }
</style>
<script>
    
    export default{
        name: 'ml-overlay',

        props: {
           display: {
               type: Boolean,
               default: true
           },
           opacity: {
               type: String,
               default: '0.5'
           }
        }
    }
</script>
