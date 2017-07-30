<template>
    <div id="map-view">
        <div>請選擇災害類型</div>
        <v-select :options="category" v-model="selection"></v-select>
        <div id="map"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            map: {},
            category: ["廣告招牌災情", "道路、隧道災情", "路樹災情", "環境汙染", "民生、基礎設施災情", "建物毀損", "橋梁災情"],
            selection: "廣告招牌災情",
            events: [],
            eventDisplay: [],
            markers: [],
            modifyArray: [],
            infos: []
        }
    },
    watch: {
        selection(newSelection) {
            let tmp = [];
            this.events.forEach((event) => {

                if (event.PName == newSelection) {
                    tmp.push(event);
                    return;
                }


            })
            this.eventDisplay = tmp;
            this.setMapOnAll(null);
            this.eventDisplay.forEach((event) => {
                if (event.PName == this.selection) {
                    this.setMarker(event.Wgs84Y, event.Wgs84X, event.CaseDescription);
                }
            });
        }
    },
    mounted() {
        this.initMap();
    },
    methods: {
        getData() {
            let req = {
                method: "get",
                url: 'https://tcgbusfs.blob.core.windows.net/blobfs/GetDisasterSummary.json',
            }
            return axios(req)
        },
        initMap() {
            let Taipei = { lat: 25.047065, lng: 121.538883 };
            this.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: Taipei
            });
            this.queryMarker();
        },
        queryMarker() {
            this.getData().then((res) => {
                this.events = res.data.DataSet['diffgr:diffgram'].NewDataSet.CASE_SUMMARY;
                this.events.forEach((event) => {
                    if (event.PName == this.selection) {
                        this.setMarker(event.Wgs84Y, event.Wgs84X, event.CaseDescription);
                    }
                });
            })
        },
        setMarker(lat, lng, info) {

            var infowindow = new google.maps.InfoWindow({
                content: info
            });

            this.infos.push(infowindow);
            var marker = new google.maps.Marker({
                position: { lat: Number(lat), lng: Number(lng) },
                title: "here"
            });
            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
            this.modifyArray.push(marker);
            marker.setMap(this.map);
        },
        setMapOnAll(map) {
            for (var i = 0; i < this.modifyArray.length; i++) {
                this.modifyArray[i].setMap(map);
            }
        }
    }
}
</script>
