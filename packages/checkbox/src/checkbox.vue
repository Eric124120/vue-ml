<template>
    <div class="ml-list-item ml-list-item-checkbox">
        <div v-if="icon" class="ml-list-icon">
            <slot name="icon"></slot>
        </div>
        <div class="ml-list-content">
            <slot></slot>
        </div>
        <div class="ml-checkbox">
            <input :type="type" :name="name" :value="value">
            <span class="ml-icon-checkbox"></span>
        </div>
    </div>
</template>

<script>
    import './checkbox.scss'
    export default{
        name: 'ml-checkbox',
        props: {
            name: String,
            value: String,
            icon: String,
            type: {
              type: String,
              default: 'checkbox',
                validator(value) {
                    return [
                        'radio',
                        'checkbox'
                    ].indexOf(value) > -1;
                }
            }
        }
    }
</script>
