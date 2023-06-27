<template>
    <div>
        用户信息
    </div>
</template>

<script>
export default {
    created() {
        console.log('用户信息---created')
    },
    destroyed() {
        console.log('用户信息--destroyed')
    },
    activated() {
        console.log('用户信息--activated')
    },
    deactivated() {
        console.log('用户信息--deactivated')
    }
}
</script>

<style></style>