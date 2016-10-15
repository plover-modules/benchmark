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
    Latency   399.54ms   38.90ms 604.48ms   68.29%
    Req/Sec     2.12      0.55     4.00     68.83%
  1498 requests in 30.09s, 798.33MB read
Requests/sec:     49.79
Transfer/sec:     26.53MB
````

### with birdbird

```
➜  benchmark git:(master) ✗ wrk -t20 -c20 -d30s http://127.0.0.1:4000/render
Running 30s test @ http://127.0.0.1:4000/render
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   326.47ms   28.53ms 515.41ms   79.10%
    Req/Sec     2.82      0.47     5.00     77.74%
  1828 requests in 30.09s, 0.95GB read
Requests/sec:     60.74
Transfer/sec:     32.37MB
```
