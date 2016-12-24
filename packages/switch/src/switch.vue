<template>
    <label class="ml-switch">
        <input type="checkbox" class="ml-switch-checkbox"
               @change="$emit('change', $event, currentValue)"
               v-model="currentValue"
               :disabled="disabled"
               :name="name">
        <div class="ml-switch-label"></div>
    </label>
</template>

<script>
    import './switch.scss'

    export default{
        name: 'ml-switch',

        props: {
            value: Boolean,
            name: String,
            disabled: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                currentValue: this.value
            };
        },

        watch: {
            value(val) {
                this.currentValue = val;
            },

            currentValue(val) {
                this.$emit('input', val);
            }
        }
    }
</script>
