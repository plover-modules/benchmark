# benchmark


## 测试框架中的频繁操作


```
- benchmark/
  - assign        // Object.assign的替代
  - concat        // 字符串拼接
  - render-child  // plover子模板的渲染
  - route-info    // RouteInfo.parse
```


## 测试页面渲染性能

```
npm run start
```

## 使用压测工具访问以下页面

```
http://127.0.0.1:4000/render
http://127.0.0.1:4000/renderejs
```


## benchmark

### ploverx@2.1.0, node v7.7.4

```
Running 30s test @ http://127.0.0.1:4000/render
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   347.06ms   36.80ms 535.77ms   81.74%
    Req/Sec     2.62      0.66    10.00     95.81%
  1720 requests in 30.08s, 0.90GB read
Requests/sec:     57.18
Transfer/sec:     30.47MB
```

```
Running 30s test @ http://127.0.0.1:4000/renderejs
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   395.45ms   27.69ms 642.86ms   74.32%
    Req/Sec     2.18      0.49     4.00     72.79%
  1507 requests in 30.11s, 799.89MB read
Requests/sec:     50.06
Transfer/sec:     26.57MB
```
