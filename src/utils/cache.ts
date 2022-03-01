//面向对象,创建一个对象实例,专门负责存储数据
class LocalCache {
  //如果数据是对象,转换成字符串存储
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  //将字符串数据解析成对象返回
  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  //删除一个缓存
  delCache(key: string) {
    window.localStorage.removeItem(key)
  }
  //清空所有缓存
  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
