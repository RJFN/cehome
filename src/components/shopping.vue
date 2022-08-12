<template>
    <main>
      <router-view></router-view>
        <!-- 搜索框 -->
        <form action="/">
          <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
          />
      </form>

      <!-- 下拉菜单 -->
        <van-dropdown-menu active-color="#1989fa">
          <van-dropdown-item v-model="value1" :options="option1" />
          <van-dropdown-item v-model="value2" :options="option2" />
          <van-dropdown-item v-model="value3" :options="option3" />
          <van-dropdown-item v-model="value4" :options="option4" />
        </van-dropdown-menu>

      <!-- 商品内容 -->
      <div class="main">
        <ul class="main-ul">
            <li>
              <router-link to="/detail">
              <van-card
              num="1"
              price="18.00万"
              desc="使用一年，无内耗，内部器械没有任何问题"
              title="三一重工 GTA5"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
              >
              <template #tags>
                <van-tag plain type="danger">降价</van-tag>
                <van-tag plain type="danger">最多收藏</van-tag>
              </template>
              <template #footer>
                <van-button size="mini">私聊</van-button>
                <van-button size="mini">竞价</van-button>
              </template>
              </van-card>
              </router-link>
            </li>

            <li>
              <van-card
              num="1"
              price="18.00万"
              desc="使用一年，无内耗，内部器械没有任何问题"
              title="三一重工 GTA5"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
              >
              <template #tags>
                <van-tag plain type="danger">降价</van-tag>
                <van-tag plain type="danger">最多收藏</van-tag>
              </template>
              <template #footer>
                <van-button size="mini">私聊</van-button>
                <van-button size="mini">竞价</van-button>
              </template>
              </van-card>
            </li>

            <li>
              <van-card
              num="1"
              price="18.00万"
              desc="使用一年，无内耗，内部器械没有任何问题"
              title="三一重工 GTA5"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
              >
              <template #tags>
                <van-tag plain type="danger">降价</van-tag>
                <van-tag plain type="danger">最多收藏</van-tag>
              </template>
              <template #footer>
                <van-button size="mini">私聊</van-button>
                <van-button size="mini">竞价</van-button>
              </template>
              </van-card>
            </li>

            <li>
              <van-card
              num="1"
              price="18.00万"
              desc="使用一年，无内耗，内部器械没有任何问题"
              title="三一重工 GTA5"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
              >
              <template #tags>
                <van-tag plain type="danger">降价</van-tag>
                <van-tag plain type="danger">最多收藏</van-tag>
              </template>
              <template #footer>
                <van-button size="mini">私聊</van-button>
                <van-button size="mini">竞价</van-button>
              </template>
              </van-card>
            </li>

            <li>
              <van-card
              num="1"
              price="18.00万"
              desc="使用一年，无内耗，内部器械没有任何问题"
              title="三一重工 GTA5"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
              >
              <template #tags>
                <van-tag plain type="danger">降价</van-tag>
                <van-tag plain type="danger">最多收藏</van-tag>
              </template>
              <template #footer>
                <van-button size="mini">私聊</van-button>
                <van-button size="mini">竞价</van-button>
              </template>
              </van-card>
            </li>

            <li>
              <van-card
              num="1"
              price="18.00万"
              desc="使用一年，无内耗，内部器械没有任何问题"
              title="三一重工 GTA5"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
              >
              <template #tags>
                <van-tag plain type="danger">降价</van-tag>
                <van-tag plain type="danger">最多收藏</van-tag>
              </template>
              <template #footer>
                <van-button size="mini">私聊</van-button>
                <van-button size="mini">竞价</van-button>
              </template>
              </van-card>
            </li>

            <li>
              <van-card
              num="1"
              price="18.00万"
              desc="使用一年，无内耗，内部器械没有任何问题"
              title="三一重工 GTA5"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
              >
              <template #tags>
                <van-tag plain type="danger">降价</van-tag>
                <van-tag plain type="danger">最多收藏</van-tag>
              </template>
              <template #footer>
                <van-button size="mini">私聊</van-button>
                <van-button size="mini">竞价</van-button>
              </template>
              </van-card>
            </li>

            <li>
              <van-card
              num="1"
              price="18.00万"
              desc="使用一年，无内耗，内部器械没有任何问题"
              title="三一重工 GTA5"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
              >
              <template #tags>
                <van-tag plain type="danger">降价</van-tag>
                <van-tag plain type="danger">最多收藏</van-tag>
              </template>
              <template #footer>
                <van-button size="mini">私聊</van-button>
                <van-button size="mini">竞价</van-button>
              </template>
              </van-card>
            </li>

            <li>
              <van-card
              num="1"
              price="18.00万"
              desc="使用一年，无内耗，内部器械没有任何问题"
              title="三一重工 GTA5"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
              >
              <template #tags>
                <van-tag plain type="danger">降价</van-tag>
                <van-tag plain type="danger">最多收藏</van-tag>
              </template>
              <template #footer>
                <van-button size="mini">私聊</van-button>
                <van-button size="mini">竞价</van-button>
              </template>
              </van-card>
            </li>

            <li>
              <van-card
              num="1"
              price="18.00万"
              desc="使用一年，无内耗，内部器械没有任何问题"
              title="三一重工 GTA5"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
              >
              <template #tags>
                <van-tag plain type="danger">降价</van-tag>
                <van-tag plain type="danger">最多收藏</van-tag>
              </template>
              <template #footer>
                <van-button size="mini">私聊</van-button>
                <van-button size="mini">竞价</van-button>
              </template>
              </van-card>
            </li>

            <li>
              <van-card
              num="1"
              price="18.00万"
              desc="使用一年，无内耗，内部器械没有任何问题"
              title="三一重工 GTA5"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
              >
              <template #tags>
                <van-tag plain type="danger">降价</van-tag>
                <van-tag plain type="danger">最多收藏</van-tag>
              </template>
              <template #footer>
                <van-button size="mini">私聊</van-button>
                <van-button size="mini">竞价</van-button>
              </template>
              </van-card>
            </li>   
            
        </ul>
      </div>
    </main>
</template>

<style scoped>
*{
  margin: 0px;
  padding: 0px;
}
.main{
  width: 100%;
  background-color: black;
}
</style>

<script>
import { Toast } from 'vant';

export default {
  data() {
    return {  
      value: '',  
      value1: 0,
      value2: 'a',
      value3:'e',
      value4:0,
      option1: [
        { text: '默认排序', value: 0 },
        { text: '从高到低', value: 1 },
        { text: '从低到高', value: 2 },
        { text: '信誉优先', value: 3 },
        { text: '销量优先', value: 4 },
      ],
      option2: [
        { text: '机型', value: 'a' },
        { text: '挖掘机', value: 'b' },
        { text: '装载机', value: 'c' },
        { text: '推土机', value: 'd' },
        { text: '压路机', value: 'e' },
        { text: '叉车', value: 'f' },
      ],
      option3: [
        { text: '品牌', value: 'e' },
        { text: '斗山', value: 'f' },
        { text: '小松', value: 'g' },
        { text: '泰伞', value: 'h' },
        { text: '路霸', value: 'i' },
        { text: '天丛云', value: 'j' },
      ],
      option4: [
        { text: '地域', value: 0 },
        { text: '山东', value: 1 },
        { text: '广西', value: 2 },
        { text: '广州', value: 3 },
        { text: '深圳', value: 4 },
      ],
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
    }
    
  },  
    
      
};
  

</script>
