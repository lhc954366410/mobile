//接口地址
const localtion = "http://192.168.0.204:299/api/"
const url = {
    "MALL000107":localtion+"MALL0001/MALL000107",//首页通栏获取
    "MALL000202":localtion+"MALL0002/MALL000202",//获取文章分类列表
    "MALL000204":localtion+"MALL0002/MALL000204",//获取分账下拉列表
    "MALL000302":localtion+"MALL0003/MALL000302",//获取文章列表
    "MALL000303":localtion+"MALL0003/MALL000303",//获取文章详情
    "MDM000206" :localtion+"MDM0002/MDM000206",  //商城首页用 一二四 分类获取
    "MDM000207" :localtion+"MDM0002/MDM000207",  //商城列表用 头部筛选条件获取
    "MDM000405" :localtion+"MDM0004/MDM000405",  //查询商城精品品牌列表
    "MDM001505" :localtion+"MDM0015/MDM001505",  //按筛选条件查询门店信息
    "MDM002905" :localtion+"MDM0029/MDM002905",  //产品列表
    "MDM002906" :localtion+"MDM0029/MDM002906",  //产品详情

}
export default url;
