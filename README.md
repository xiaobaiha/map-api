# map-api

地图相关 API

## 中文地址转经纬度

### 高德

高德开发者 API 提供了[地理编码](https://lbs.amap.com/api/webservice/guide/api/georegeo/)的能力，可以满足中文地址转换为经纬度，具体步骤有：

1. 注册成为高德开发者
2. 创建一个应用并添加“Web 服务”的 KEY
3. 使用这个 KEY 进行 GET 请求
4. http/https GET 请求：

```bash
https://restapi.amap.com/v3/geocode/geo?key=26c5de63eb69ffaa1bb31496c621205e&address=浙江省杭州市西湖区浙江大学玉泉校区
```

| params  | 意义              |
| ------- | ----------------- |
| key     | 应用 web 服务 key |
| address | 中文地址          |

5. GET 请求响应：

```javascript
{
    "status": "1",
    "info": "OK",
    "infocode": "10000",
    "count": "1",
    "geocodes": [
        {
            "formatted_address": "浙江省杭州市西湖区浙江大学玉泉校区",
            "country": "中国",
            "province": "浙江省",
            "citycode": "0571",
            "city": "杭州市",
            "district": "西湖区",
            "township": [],
            "neighborhood": {
                "name": [],
                "type": []
            },
            "building": {
                "name": [],
                "type": []
            },
            "adcode": "330106",
            "street": [],
            "number": [],
            "location": "120.123077,30.263842",
            "level": "兴趣点"
        }
    ]
}
```

测试 demo：

## 百度

百度与高德的步骤类似，先去申请一个 key（ak），然后通过 http/https 来请求某地址的地理编码信息。但是，百度需要对开发者进行个人认证，需要身份证等信息，相比高德是不需要这些信息。而且，百度使用的这个 key 需要购买才能使用，每次购买是购买一定的查询次数。
