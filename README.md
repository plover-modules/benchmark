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
➜  ~ wrk -t20 -c20 -d30s http://127.0.0.1:4000/render
Running 30s test @ http://127.0.0.1:4000/render
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   433.04ms   53.21ms 681.46ms   71.96%
    Req/Sec     1.84      0.58     4.00     63.55%
  1380 requests in 30.09s, 735.44MB read
Requests/sec:     45.87
Transfer/sec:     24.45MB
````

### with birdbird

```
➜  benchmark git:(master) ✗ wrk -t20 -c20 -d30s http://127.0.0.1:4000/render
Running 30s test @ http://127.0.0.1:4000/render
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   355.40ms   27.22ms 493.69ms   80.73%
    Req/Sec     2.55      0.55     4.00     55.80%
  1681 requests in 30.10s, 0.87GB read
Requests/sec:     55.85
Transfer/sec:     29.76MB
```
