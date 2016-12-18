<template>
    <button
        :type="nativeType"
        class="ml-btn"
        :class="['ml-btn-' + type, 'ml-btn-' + size]"
        @click="handleClick"
        :disabled="disabled">
        <label class="ml-btn-text"><slot></slot></label>
    </button>
</template>
<style>
    
</style>
<script>
    import './button.scss'
    
    export default{
        name: 'ml-button',

        methods: {
            handleClick(evt) {
                this.$emit('handleClick', evt);
            }
        },
        props: {
            disabled: Boolean,
            nativeType: String,
            text: String,
            type: {
                type: String,
                default: 'default'
            },
            size: {
                type: String,
                default: 'normal'
            }
        }
    }
</script>
