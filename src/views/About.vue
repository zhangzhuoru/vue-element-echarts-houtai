<template>
    <div>
        <div class="about">
            <div class="butbox">
                <el-button class='but1' @click="open">默认按钮</el-button>
            </div>
            <div class="butbox">
                <el-button class='but1' @click="open">默认按钮</el-button>
            </div>
        </div>
        <div class="about">
            <div id="chart1"></div>
            <div id="chart2"></div>
        </div>
        <div class="about">
            <Chart id="test" :option='option' ref="mychild" />
        </div>
        <div class="about">
            <Gauge id="gauge" />
        </div>
    </div>
</template>
<script>
import Chart from "../components/Charts";
import Gauge from "../components/Gauge";
export default {
    name: 'about',
    data() {
        return {
            option: {

                title: {
                    text: "vue-Echarts"
                },
                legend: {
                    data: ["销量"]
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: [{
                    type: "value"
                }],
                series: [{
                    name: "销量",
                    type: "line",
                    data: [10, 40, 16, 30, 30, 20]
                }]

            }
        }
    },

    components: {
        Chart,
        Gauge
    },
    mounted() {
        console.log('this.$chart');
        this.$chart.line1('chart1');
        this.$chart.line1('chart2');
    },
    methods: {
        open() {
            this.$message('这是一条消息提示');
            this.option.series[0].data = [90, 80, 60, 40, 30, 0]
            this.$refs.mychild.init()
        },

        openVn() {
            const h = this.$createElement;
            this.$message({
                message: h('p', null, [
                    h('span', null, '内容可以是 '),
                    h('i', { style: 'color: teal' }, 'VNode')
                ])
            });
        }
    }
}
</script>
<style scoped>
.about {
    width: 80%;
    margin: 10px auto;
    display: flex;
}

#chart1 {
    flex: 1;
    height: 300px;

}

#chart2 {
    flex: 1;
    height: 300px;

}

.butbox {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.but1 {

    width: 300px;

}
</style>