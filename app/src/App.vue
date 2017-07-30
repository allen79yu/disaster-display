<template>
    <div id="main">
        <h1>台北市最新災害專案的災情資料查詢</h1>
        <p>資料來源 ：
            <a href="https://taipeicity.github.io/eoc_119/" target="_blank">臺北市政府 消防局EOC 開放資料專區</a>
        </p>
        <div class="menu">
            <router-link to="/card">列表</router-link>
            <router-link to="/map">地圖</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>

</script>
