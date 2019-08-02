<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'app',
}
</script>
<style>
/*公共样式*/
* {
    margin: 0;
    padding: 0;
}

.margintop {
    margin-top: 20px;
}

.pagin {
    position: absolute;
    bottom: 20px;
    margin-top: 4vh;
}

.logoout {
    position: fixed;
    z-index: 90;
    bottom: 17vh;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #579fe9;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 5px #666;
}
</style>