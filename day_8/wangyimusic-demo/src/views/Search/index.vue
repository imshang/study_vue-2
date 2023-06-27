<template>
    <div>
        <!-- 文档内这种 @update:model-value="onSearch" 不会用 -->
        <van-search shape="round" v-model="value" placeholder="请输入搜索关键词" @input="onSearch" />
        <!-- 搜索下容器 -->
        <div v-if="listArr.length === 0" class="search_wrap">
            <!-- 标题 -->
            <p class="hot_title">热门搜索</p>
            <!-- 热搜 -->
            <div class="hot_name_wrap">
                <!-- 热搜关键词 -->
                <span @click="setVal(obj.searchWord)" class="hot_item" v-for="(obj, index) in hotListArr" :key="index">{{
                    obj.searchWord
                }}</span>
            </div>
        </div>
        <!-- 搜索结果 -->
        <div v-else>
            <!-- 标题 -->
            <p class="hot_title">最佳匹配</p>
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <SongItem v-for="obj in listArr" :key="obj.id" :name="obj.name" :author="obj.ar[0].name" :id="obj.id"
                    center></SongItem>
            </van-list>

        </div>
    </div>
</template>

<script>
import { searchKeyApi } from '@/api'
import { searchListApi } from '@/api'
import SongItem from '@/components/SongItem.vue'
export default {
    data() {
        return {
            value: '',
            hotListArr: [],
            listArr: [],
            loading: false,//加载中(状态) -只有为false ，才能触底后自动触发onload事件
            finished: false, //未加载全部(true加载全部)
            page: 1,//当前搜索结果的页码
            timer: null,
        }
    },
    async created() {
        const res = await searchListApi();
        console.log('value' + this.value, typeof (this.value), Boolean(this.value))
        this.hotListArr = res.data.data;
    },
    methods: {
        async getListFn() {
            // return的是一个Promist对象
            return await searchKeyApi({
                keywords: this.value,
                limit: 20,
                offset: (this.page - 1) * 20
            })
            // (难点):
            // async修饰的函数 -> 默认返回一个全新Promise对象
            // 这个Promise对象的结果就是async函数内return的值
            // 拿到getListFn的返回值需要用await提取结果
        },
        // 检测输入框内容改变触发  
        async onSearch() {
            // 防抖 计时n秒，最后执行一次，如果再次触发，重新计时  (检测输入框发生改变 太频繁发送请求了)
            if (this.timer) clearTimeout(this.timer);
            this.page = 1;//点击重新获取第一页的数据
            this.timer = setTimeout(async () => {
                this.finished = false;//输入框发生改变，可能有新的更多数据
                console.log(this.value, Boolean(this.value), typeof (this.value), this.value.length)
                // 搜索为空 就把搜索结果清空
                if (this.value.length === 0) {
                    console.log('value' + this.value)
                    this.listArr = [];
                    return
                }
                const arr = await this.getListFn();
                console.log(arr)
                if (arr.data.result.songs === undefined) return this.listArr = [];
                this.listArr = arr.data.result.songs;
            }, 500)
        },
        async setVal(val) {
            this.page = 1;//点击重新获取第一页的数据
            this.finished = false;//输入框发生改变，可能有新的更多数据
            this.value = val;
            const arr = await this.getListFn();
            this.listArr = arr.data.result.songs;
        },
        async onLoad() {//触底事件，false才会加载下一页的数据，然后内部会自动把loading改为true
            this.page++;//页数+1 
            const arr = await this.getListFn();//重新请求
            if (!arr.data.result.songs) {
                this.finished = true;//加载完毕了
                this.loading = false;//返回初始值 
                return
            }
            this.listArr = [...this.listArr, ...arr.data.result.songs]//拼接
            this.loading = false;//数据加载完毕-保证下一次还能触发onload
        }
    },
    components: {
        SongItem
    }
}
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
    padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
    font-size: 0.32rem;
    color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
    margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
    display: inline-block;
    height: 0.853333rem;
    margin-right: 0.213333rem;
    margin-bottom: 0.213333rem;
    padding: 0 0.373333rem;
    font-size: 0.373333rem;
    line-height: 0.853333rem;
    color: #333;
    border-color: #d3d4da;
    border-radius: 0.853333rem;
    border: 1px solid #d3d4da;
}
</style>