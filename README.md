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

```
➜  benchmark git:(master) ✗ wrk -t20 -c20 -d30s http://127.0.0.1:4000/render
Running 30s test @ http://127.0.0.1:4000/render
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   413.18ms   40.75ms 669.70ms   73.82%
    Req/Sec     1.99      0.53     4.00     72.36%
  1440 requests in 30.06s, 767.42MB read
Requests/sec:     47.90
Transfer/sec:     25.53M
````
