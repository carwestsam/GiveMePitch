<template>
    <v-card>
        <v-card-title class="card-title">历史文章</v-card-title>
        <v-card-text class="card-text">
            <div v-for="(group,idx) in contents" :key="idx">
                <h2>{{group.name}}</h2>
                <div v-for="(content, idxx) in group.contents" :key="idxx">
                    <a target="_blank" :href="content.link"> {{ content.name }} </a>
                </div>
            </div>
        </v-card-text>
        <v-card-text>
            请长按下方二维码，或者搜索微信公众号“<b>合唱忍者</b>”，后续的内容会第一时间更新在微信公众号上
            <br />
            <img width="95" src="../assets/qrcode.jpg" alt="qrcode" />
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    data () {
        let contents = [{
            'name': '土法合唱训练',
            'contents':[
                {name: '怎么让没有音准的团员有音准?', link: 'https://mp.weixin.qq.com/s/R6TIUBUgDgxSv_tuxgcrKA'},
                {name: '如何解决声音小的问题?', link: 'https://mp.weixin.qq.com/s/hdRNt6iQF7IuOo5erQK5Ow'},
                {name: '指挥说我漏气，什么是漏气?', link: 'https://mp.weixin.qq.com/s/WXk6ukb5NMVEA1WgywtbCw'},
                {name: '节奏不稳怎么办？', link: 'https://mp.weixin.qq.com/s/RRq_YXsB4NaUoxeXeMfgVA'},
                {name: '提升合唱团凝聚力的方法几则', link: 'https://mp.weixin.qq.com/s/HrEsOiWzumjAzun88tn76A'},
                {name: '稳定气息的方法两则', link: 'https://mp.weixin.qq.com/s/ubgPID25Bqtkl6tNr5hEuw'},
                {name: '谱面上应该有哪些笔记？', link: 'https://mp.weixin.qq.com/s/JuRntFg8-4NxgCeCYVqX4w'},
            ]
        },{
            'name': '杂文',
            'contents': [
                {name: '你的合唱团在什么段位？', link:'https://mp.weixin.qq.com/s/PSybfJVhrpMngZUIsAfeEw'}
            ]
        }]
        return {
            contents
        }
    }
}
</script>

<style scoped>
.card-title {
    font-size: 2em;
}
a {
    text-decoration: none;
}
.card-text div{
    line-height: 2em;
}
</style>
