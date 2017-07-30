<template>
    <div id="card-page">
        <div>請選擇行政區</div>
        <v-select multiple :options="districts" v-model="selection">
        </v-select>
        <div class="event-list">
            <div v-for="event in eventDisplay" class="event-card">
                <div class="title">{{event.Name}}</div>
                <div class="district">{{event.CaseLocationDistrict}}</div>
                <div class="description">敘述：{{event.CaseDescription}}</div>
                <div class="location">地點：{{event.CaseLocationDescription}}</div>
                <div class="date">時間:{{event.CaseTime}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            events: [],
            eventDisplay: [],
            selection: [],
            districts: ['中正區', '大同區', '中山區', '松山區', '大安區', '萬華區', '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區']
        }
    },
    watch: {
        selection(newSelection) {
            let tmp = [];
            this.events.forEach((event) => {
                newSelection.forEach((selection) => {
                    if (event.CaseLocationDistrict == selection) {
                        tmp.push(event);
                        return;
                    }
                })

            })
            this.eventDisplay = tmp;
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            let req = {
                method: "get",
                url: 'https://tcgbusfs.blob.core.windows.net/blobfs/GetDisasterSummary.json',
            }
            axios(req).then((res) => {
                console.log(res);
                this.events = res.data.DataSet['diffgr:diffgram'].NewDataSet.CASE_SUMMARY;
            })
        },
        match(district) {
            if (this.selection.length == 0) {
                return true;
            } else {
                this.selection.forEach((item) => {

                    if (district == item) {
                        console.log('match');
                        return true;
                    }
                });
            }


            return false;
        }
    }
}
</script>
