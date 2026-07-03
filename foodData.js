const allData = {
  "categories": [
    {
      "id": "烧烤",
      "name": "烧烤",
      "emoji": "🍖"
    },
    {
      "id": "火锅",
      "name": "火锅",
      "emoji": "🍲"
    },
    {
      "id": "日料",
      "name": "日料",
      "emoji": "🍣"
    },
    {
      "id": "韩料",
      "name": "韩料",
      "emoji": "🇰🇷"
    },
    {
      "id": "面食",
      "name": "面食",
      "emoji": "🍜"
    },
    {
      "id": "米线",
      "name": "米线",
      "emoji": "🍜"
    },
    {
      "id": "披萨",
      "name": "披萨",
      "emoji": "🍕"
    },
    {
      "id": "炸鸡",
      "name": "炸鸡",
      "emoji": "🍗"
    },
    {
      "id": "甜品",
      "name": "甜品",
      "emoji": "🍰"
    },
    {
      "id": "奶茶",
      "name": "奶茶",
      "emoji": "🧋"
    },
    {
      "id": "小吃",
      "name": "小吃",
      "emoji": "🥟"
    },
    {
      "id": "轻食",
      "name": "轻食",
      "emoji": "🥗"
    },
    {
      "id": "小龙虾",
      "name": "小龙虾",
      "emoji": "🦞"
    },
    {
      "id": "川菜",
      "name": "川菜",
      "emoji": "🌶️"
    },
    {
      "id": "粤菜",
      "name": "粤菜",
      "emoji": "🥢"
    },
    {
      "id": "湘菜",
      "name": "湘菜",
      "emoji": "🌶️"
    },
    {
      "id": "东北菜",
      "name": "东北菜",
      "emoji": "🥘"
    },
    {
      "id": "西北菜",
      "name": "西北菜",
      "emoji": "🍜"
    },
    {
      "id": "云南菜",
      "name": "云南菜",
      "emoji": "🍄"
    },
    {
      "id": "新疆菜",
      "name": "新疆菜",
      "emoji": "🍖"
    },
    {
      "id": "闽南菜",
      "name": "闽南菜",
      "emoji": "🍜"
    },
    {
      "id": "江浙菜",
      "name": "江浙菜",
      "emoji": "🦀"
    },
    {
      "id": "鲁菜",
      "name": "鲁菜",
      "emoji": "🐟"
    },
    {
      "id": "湖北菜",
      "name": "湖北菜",
      "emoji": "🍜"
    },
    {
      "id": "北京菜",
      "name": "北京菜",
      "emoji": "🦆"
    },
    {
      "id": "潮汕菜",
      "name": "潮汕菜",
      "emoji": "🥩"
    },
    {
      "id": "海南菜",
      "name": "海南菜",
      "emoji": "🥥"
    },
    {
      "id": "贵州菜",
      "name": "贵州菜",
      "emoji": "🌶️"
    },
    {
      "id": "泰国菜",
      "name": "泰国菜",
      "emoji": "🍛"
    },
    {
      "id": "港式",
      "name": "港式",
      "emoji": "🥡"
    },
    {
      "id": "麻辣烫",
      "name": "麻辣烫",
      "emoji": "🍲"
    },
    {
      "id": "螺蛳粉",
      "name": "螺蛳粉",
      "emoji": "🍜"
    },
    {
      "id": "重庆小面",
      "name": "重庆小面",
      "emoji": "🍜"
    },
    {
      "id": "麻辣香锅",
      "name": "麻辣香锅",
      "emoji": "🌶️"
    },
    {
      "id": "黄焖鸡",
      "name": "黄焖鸡",
      "emoji": "🍗"
    },
    {
      "id": "饺子馄饨",
      "name": "饺子馄饨",
      "emoji": "🥟"
    },
    {
      "id": "粥粉面",
      "name": "粥粉面",
      "emoji": "🍜"
    },
    {
      "id": "烤鱼",
      "name": "烤鱼",
      "emoji": "🐟"
    },
    {
      "id": "酸菜鱼",
      "name": "酸菜鱼",
      "emoji": "🐟"
    },
    {
      "id": "串串香",
      "name": "串串香",
      "emoji": "🍢"
    }
  ],
  "restaurants": [
    // ... 原有餐厅保留（1-89），此处省略，实际使用时保留全部原有数据
    // 以下是新增餐厅 90-120
    {
      "id": 90,
      "name": "老街麻辣烫",
      "category": "麻辣烫",
      "rating": 4.5,
      "deliveryTime": 30,
      "deliveryFee": 3,
      "minPrice": 20,
      "dishes": [
        { "name": "肥牛卷", "price": 12, "emoji": "🥓", "description": "澳洲肥牛，麻辣烫必点", "monthlySales": 2345 },
        { "name": "毛肚", "price": 14, "emoji": "🐂", "description": "脆嫩毛肚，七上八下", "monthlySales": 1876 },
        { "name": "午餐肉", "price": 8, "emoji": "🥫", "description": "梅林午餐肉，经典之选", "monthlySales": 2100 },
        { "name": "鸭血", "price": 6, "emoji": "🦆", "description": "嫩滑鸭血，入口即化", "monthlySales": 1654 },
        { "name": "虾滑", "price": 15, "emoji": "🦐", "description": "手工虾滑，鲜嫩弹牙", "monthlySales": 1432 },
        { "name": "牛肉丸", "price": 10, "emoji": "🥩", "description": "手打牛肉丸，Q弹爆汁", "monthlySales": 1987 },
        { "name": "鱼丸", "price": 8, "emoji": "🐟", "description": "手工鱼丸，鲜嫩弹牙", "monthlySales": 1765 },
        { "name": "蟹棒", "price": 6, "emoji": "🦀", "description": "鱼糜蟹味，火锅经典", "monthlySales": 1543 },
        { "name": "豆腐皮", "price": 5, "emoji": "🫔", "description": "手工豆皮，吸满汤汁", "monthlySales": 2345 },
        { "name": "腐竹", "price": 5, "emoji": "🫔", "description": "泡发腐竹，软嫩入味", "monthlySales": 1987 },
        { "name": "金针菇", "price": 5, "emoji": "🍄", "description": "新鲜金针菇，口感脆嫩", "monthlySales": 2654 },
        { "name": "香菇", "price": 6, "emoji": "🍄", "description": "鲜嫩香菇，汁水丰盈", "monthlySales": 1876 },
        { "name": "土豆片", "price": 4, "emoji": "🥔", "description": "薄切土豆，软糯入味", "monthlySales": 2456 },
        { "name": "藕片", "price": 5, "emoji": "🪷", "description": "脆嫩藕片，清甜爽口", "monthlySales": 1987 },
        { "name": "宽粉", "price": 6, "emoji": "🍜", "description": "红薯宽粉，软糯Q弹", "monthlySales": 2345 }
      ]
    },
    {
      "id": 91,
      "name": "辣到哭麻辣烫",
      "category": "麻辣烫",
      "rating": 4.8,
      "deliveryTime": 25,
      "deliveryFee": 0,
      "minPrice": 25,
      "dishes": [
        { "name": "嫩牛肉", "price": 13, "emoji": "🥩", "description": "鲜嫩牛肉，肉质细腻", "monthlySales": 2156 },
        { "name": "鸡胸肉", "price": 10, "emoji": "🐔", "description": "低脂鸡胸，健康之选", "monthlySales": 1876 },
        { "name": "猪肚", "price": 12, "emoji": "🐷", "description": "脆嫩猪肚，嚼劲十足", "monthlySales": 1543 },
        { "name": "鹌鹑蛋", "price": 6, "emoji": "🥚", "description": "小巧鹌鹑蛋，营养丰富", "monthlySales": 1987 },
        { "name": "鱼豆腐", "price": 6, "emoji": "🧈", "description": "鱼豆腐，外焦里嫩", "monthlySales": 2345 },
        { "name": "甜不辣", "price": 5, "emoji": "🍢", "description": "鱼糜制品，口感独特", "monthlySales": 1765 },
        { "name": "海带结", "price": 4, "emoji": "🌊", "description": "厚切海带，鲜美爽脆", "monthlySales": 2100 },
        { "name": "木耳", "price": 5, "emoji": "🍄", "description": "黑木耳，脆嫩爽口", "monthlySales": 1987 },
        { "name": "娃娃菜", "price": 4, "emoji": "🥬", "description": "嫩甜娃娃菜，清甜可口", "monthlySales": 2456 },
        { "name": "生菜", "price": 3, "emoji": "🥬", "description": "新鲜生菜，清脆爽口", "monthlySales": 2654 },
        { "name": "豆芽", "price": 2, "emoji": "🌱", "description": "绿豆芽，清脆解腻", "monthlySales": 2876 },
        { "name": "方便面", "price": 4, "emoji": "🍜", "description": "泡面搭档，麻辣烫灵魂", "monthlySales": 3456 },
        { "name": "红薯粉", "price": 5, "emoji": "🍜", "description": "红薯粉条，软糯Q弹", "monthlySales": 2100 },
        { "name": "年糕", "price": 5, "emoji": "🍡", "description": "软糯年糕，吸满汤汁", "monthlySales": 1876 },
        { "name": "油条", "price": 3, "emoji": "🥖", "description": "炸油条，吸汁神器", "monthlySales": 1987 }
      ]
    },
    {
      "id": 92,
      "name": "阿香麻辣烫",
      "category": "麻辣烫",
      "rating": 4.3,
      "deliveryTime": 35,
      "deliveryFee": 5,
      "minPrice": 20,
      "dishes": [
        { "name": "麻辣牛肉", "price": 14, "emoji": "🥩", "description": "麻辣腌制牛肉，鲜辣入味", "monthlySales": 1876 },
        { "name": "脆皮肠", "price": 6, "emoji": "🌭", "description": "脆皮小香肠，爆汁口感", "monthlySales": 2345 },
        { "name": "蟹肉棒", "price": 5, "emoji": "🦀", "description": "蟹味鱼糜，鲜美十足", "monthlySales": 1987 },
        { "name": "豆腐", "price": 4, "emoji": "🧈", "description": "嫩豆腐，吸满汤汁", "monthlySales": 2100 },
        { "name": "千张", "price": 5, "emoji": "🫔", "description": "千张豆皮，层次丰富", "monthlySales": 1765 },
        { "name": "香菇贡丸", "price": 8, "emoji": "🍄", "description": "香菇肉丸，Q弹鲜香", "monthlySales": 1543 },
        { "name": "芝士年糕", "price": 8, "emoji": "🍡", "description": "芝士夹心年糕，拉丝效果", "monthlySales": 1654 },
        { "name": "花菜", "price": 4, "emoji": "🥦", "description": "新鲜花菜，脆嫩可口", "monthlySales": 1987 },
        { "name": "西兰花", "price": 5, "emoji": "🥦", "description": "绿色西兰花，营养健康", "monthlySales": 1765 },
        { "name": "莴笋", "price": 4, "emoji": "🥬", "description": "脆嫩莴笋，清爽解腻", "monthlySales": 1876 },
        { "name": "冬瓜", "price": 3, "emoji": "🥒", "description": "清甜冬瓜，解腻佳品", "monthlySales": 1987 },
        { "name": "玉米", "price": 4, "emoji": "🌽", "description": "甜玉米段，清香甘甜", "monthlySales": 2100 },
        { "name": "魔芋", "price": 4, "emoji": "🍢", "description": "魔芋豆腐，低卡健康", "monthlySales": 1543 },
        { "name": "粉丝", "price": 4, "emoji": "🍜", "description": "龙口粉丝，爽滑细腻", "monthlySales": 2345 },
        { "name": "炸蛋", "price": 5, "emoji": "🥚", "description": "炸鸡蛋，吸汁入味", "monthlySales": 1987 }
      ]
    },
    {
      "id": 93,
      "name": "柳州螺蛳粉",
      "category": "螺蛳粉",
      "rating": 4.9,
      "deliveryTime": 30,
      "deliveryFee": 3,
      "minPrice": 20,
      "dishes": [
        { "name": "原味螺蛳粉", "price": 18, "emoji": "🍜", "description": "经典原味，酸辣鲜香", "monthlySales": 3456 },
        { "name": "炸蛋螺蛳粉", "price": 22, "emoji": "🍜", "description": "黄金炸蛋，吸满汤汁", "monthlySales": 2876 },
        { "name": "鸭脚螺蛳粉", "price": 25, "emoji": "🍜", "description": "软糯鸭脚，入口即化", "monthlySales": 2345 },
        { "name": "猪脚螺蛳粉", "price": 28, "emoji": "🍜", "description": "胶原猪脚，软糯入味", "monthlySales": 1987 },
        { "name": "腊肠螺蛳粉", "price": 24, "emoji": "🍜", "description": "广式腊肠，甜香适口", "monthlySales": 1876 },
        { "name": "加料豆泡", "price": 4, "emoji": "🧈", "description": "炸豆腐泡，吸汁神器", "monthlySales": 3100 },
        { "name": "加料酸笋", "price": 3, "emoji": "🎋", "description": "柳州酸笋，灵魂配料", "monthlySales": 3456 },
        { "name": "加料腐竹", "price": 4, "emoji": "🫔", "description": "炸腐竹，酥脆泡汤", "monthlySales": 2876 },
        { "name": "加料花生", "price": 3, "emoji": "🥜", "description": "酥脆花生，香气四溢", "monthlySales": 2654 },
        { "name": "加料酸豆角", "price": 3, "emoji": "🫘", "description": "酸豆角，酸爽开胃", "monthlySales": 2345 },
        { "name": "加料卤蛋", "price": 4, "emoji": "🥚", "description": "卤制鸡蛋，入味十足", "monthlySales": 2100 },
        { "name": "加料空心菜", "price": 3, "emoji": "🥬", "description": "新鲜空心菜，清脆爽口", "monthlySales": 1987 },
        { "name": "加料木耳", "price": 3, "emoji": "🍄", "description": "黑木耳，脆嫩爽口", "monthlySales": 1876 },
        { "name": "加料豆芽", "price": 2, "emoji": "🌱", "description": "绿豆芽，清脆解腻", "monthlySales": 2345 },
        { "name": "加料青菜", "price": 3, "emoji": "🥬", "description": "时令青菜，清爽解腻", "monthlySales": 2100 }
      ]
    },
    {
      "id": 94,
      "name": "阿妹螺蛳粉",
      "category": "螺蛳粉",
      "rating": 4.7,
      "deliveryTime": 25,
      "deliveryFee": 5,
      "minPrice": 15,
      "dishes": [
        { "name": "招牌螺蛳粉", "price": 20, "emoji": "🍜", "description": "秘制汤底，柳州风味", "monthlySales": 2987 },
        { "name": "干捞螺蛳粉", "price": 22, "emoji": "🍜", "description": "干捞吃法，酱香浓郁", "monthlySales": 1765 },
        { "name": "炒螺蛳粉", "price": 24, "emoji": "🍜", "description": "铁板炒粉，锅气十足", "monthlySales": 1654 },
        { "name": "螺蛳粉加鸭脚", "price": 26, "emoji": "🍜", "description": "鸭脚螺蛳粉，双倍快乐", "monthlySales": 2345 },
        { "name": "螺蛳粉加猪脚", "price": 28, "emoji": "🍜", "description": "猪脚螺蛳粉，胶原满满", "monthlySales": 1987 },
        { "name": "加料卤蛋", "price": 4, "emoji": "🥚", "description": "卤蛋入味，蛋白Q弹", "monthlySales": 2456 },
        { "name": "加料腐竹", "price": 4, "emoji": "🫔", "description": "腐竹泡汤，软韧入味", "monthlySales": 2100 },
        { "name": "加料酸笋", "price": 3, "emoji": "🎋", "description": "酸笋脆爽，风味独特", "monthlySales": 2654 },
        { "name": "加料豆泡", "price": 4, "emoji": "🧈", "description": "豆泡吸汁，满口鲜香", "monthlySales": 1987 },
        { "name": "加料花生", "price": 3, "emoji": "🥜", "description": "花生酥脆，香味浓郁", "monthlySales": 1876 },
        { "name": "加料空心菜", "price": 3, "emoji": "🥬", "description": "空心菜脆嫩，清爽解腻", "monthlySales": 1765 },
        { "name": "加料腊肠", "price": 5, "emoji": "🌭", "description": "腊肠切片，咸甜适口", "monthlySales": 1543 },
        { "name": "加料木耳", "price": 3, "emoji": "🍄", "description": "木耳脆嫩，口感丰富", "monthlySales": 1654 },
        { "name": "加料豆芽", "price": 2, "emoji": "🌱", "description": "豆芽清甜，爽脆解腻", "monthlySales": 1987 },
        { "name": "加料青菜", "price": 3, "emoji": "🥬", "description": "时令青菜，新鲜脆嫩", "monthlySales": 1876 }
      ]
    },
    {
      "id": 95,
      "name": "酸爽螺蛳粉",
      "category": "螺蛳粉",
      "rating": 4.4,
      "deliveryTime": 35,
      "deliveryFee": 0,
      "minPrice": 20,
      "dishes": [
        { "name": "经典螺蛳粉", "price": 17, "emoji": "🍜", "description": "传统口味，汤鲜粉滑", "monthlySales": 2876 },
        { "name": "豪华螺蛳粉", "price": 30, "emoji": "🍜", "description": "鸭脚+猪脚+炸蛋，豪华配置", "monthlySales": 1543 },
        { "name": "炸蛋螺蛳粉", "price": 22, "emoji": "🍜", "description": "炸蛋金黄，吸饱汤汁", "monthlySales": 2345 },
        { "name": "鸭脚螺蛳粉", "price": 25, "emoji": "🍜", "description": "鸭脚软烂，一抿脱骨", "monthlySales": 1987 },
        { "name": "猪脚螺蛳粉", "price": 28, "emoji": "🍜", "description": "猪脚Q弹，胶原蛋白", "monthlySales": 1765 },
        { "name": "加料酸笋", "price": 3, "emoji": "🎋", "description": "柳州酸笋，越吃越上瘾", "monthlySales": 2987 },
        { "name": "加料豆泡", "price": 4, "emoji": "🧈", "description": "豆泡吸汁，满口鲜香", "monthlySales": 2100 },
        { "name": "加料腐竹", "price": 4, "emoji": "🫔", "description": "腐竹酥脆，泡汤软韧", "monthlySales": 1987 },
        { "name": "加料花生", "price": 3, "emoji": "🥜", "description": "花生酥脆，越嚼越香", "monthlySales": 1876 },
        { "name": "加料酸豆角", "price": 3, "emoji": "🫘", "description": "酸豆角爽脆，酸味十足", "monthlySales": 1765 },
        { "name": "加料卤蛋", "price": 4, "emoji": "🥚", "description": "卤蛋入味，满口留香", "monthlySales": 1654 },
        { "name": "加料空心菜", "price": 3, "emoji": "🥬", "description": "空心菜清脆，解腻必备", "monthlySales": 1543 },
        { "name": "加料腊肠", "price": 5, "emoji": "🌭", "description": "腊肠香甜，风味独特", "monthlySales": 1432 },
        { "name": "加料鸡脚", "price": 5, "emoji": "🐔", "description": "鸡脚软糯，胶质丰富", "monthlySales": 1321 },
        { "name": "加料豆腐皮", "price": 3, "emoji": "🫔", "description": "豆腐皮软韧，吸汁入味", "monthlySales": 1876 }
      ]
    },
    {
      "id": 96,
      "name": "重庆小面馆",
      "category": "重庆小面",
      "rating": 4.7,
      "deliveryTime": 25,
      "deliveryFee": 3,
      "minPrice": 15,
      "dishes": [
        { "name": "豌杂面", "price": 18, "emoji": "🍜", "description": "豌豆杂酱，重庆招牌", "monthlySales": 2876 },
        { "name": "肥肠面", "price": 22, "emoji": "🍜", "description": "卤制肥肠，香而不腻", "monthlySales": 2345 },
        { "name": "牛肉面", "price": 20, "emoji": "🍜", "description": "红烧牛肉，汤浓味美", "monthlySales": 2654 },
        { "name": "鸡杂面", "price": 19, "emoji": "🍜", "description": "酸辣鸡杂，开胃过瘾", "monthlySales": 1987 },
        { "name": "红油抄手", "price": 16, "emoji": "🥟", "description": "红油抄手，麻辣鲜香", "monthlySales": 2456 },
        { "name": "凉面", "price": 14, "emoji": "🍜", "description": "重庆凉面，酸辣爽口", "monthlySales": 2100 },
        { "name": "醪糟汤圆", "price": 12, "emoji": "🍡", "description": "酒酿汤圆，暖心暖胃", "monthlySales": 1876 },
        { "name": "担担面", "price": 16, "emoji": "🍜", "description": "肉末酱香，麻辣鲜香", "monthlySales": 1765 },
        { "name": "酸辣粉", "price": 15, "emoji": "🍜", "description": "红薯粉条，酸辣过瘾", "monthlySales": 2345 },
        { "name": "干馏豌杂面", "price": 19, "emoji": "🍜", "description": "干拌版本，酱香浓郁", "monthlySales": 1987 },
        { "name": "红烧排骨面", "price": 22, "emoji": "🍜", "description": "排骨酥烂，汤鲜味美", "monthlySales": 1654 },
        { "name": "炸酱面", "price": 17, "emoji": "🍜", "description": "重庆炸酱，麻辣鲜香", "monthlySales": 1543 },
        { "name": "凉糕", "price": 10, "emoji": "🍮", "description": "红糖凉糕，清凉解暑", "monthlySales": 1432 },
        { "name": "冰粉", "price": 10, "emoji": "🍮", "description": "红糖冰粉，夏日必备", "monthlySales": 2100 },
        { "name": "重庆小面", "price": 14, "emoji": "🍜", "description": "经典小面，麻辣鲜香", "monthlySales": 2987 }
      ]
    },
    {
      "id": 97,
      "name": "辣到哭小面",
      "category": "重庆小面",
      "rating": 4.9,
      "deliveryTime": 20,
      "deliveryFee": 5,
      "minPrice": 20,
      "dishes": [
        { "name": "金牌豌杂面", "price": 20, "emoji": "🍜", "description": "秘制豌豆杂酱，招牌必点", "monthlySales": 3100 },
        { "name": "肥肠小面", "price": 24, "emoji": "🍜", "description": "肥肠软糯，麻辣入味", "monthlySales": 2345 },
        { "name": "牛肉小面", "price": 22, "emoji": "🍜", "description": "大块牛肉，汤浓肉烂", "monthlySales": 2654 },
        { "name": "鸡杂小面", "price": 20, "emoji": "🍜", "description": "鸡杂脆嫩，酸辣开胃", "monthlySales": 1987 },
        { "name": "红油抄手", "price": 18, "emoji": "🥟", "description": "皮薄馅大，红油飘香", "monthlySales": 2456 },
        { "name": "凉面", "price": 15, "emoji": "🍜", "description": "麻辣凉面，夏日首选", "monthlySales": 2100 },
        { "name": "醪糟汤圆", "price": 12, "emoji": "🍡", "description": "糯米汤圆，酒酿飘香", "monthlySales": 1876 },
        { "name": "担担面", "price": 17, "emoji": "🍜", "description": "肉末花生，酱香浓郁", "monthlySales": 1765 },
        { "name": "酸辣粉", "price": 16, "emoji": "🍜", "description": "粉条劲道，酸辣过瘾", "monthlySales": 2345 },
        { "name": "红烧排骨面", "price": 23, "emoji": "🍜", "description": "排骨入味，汤鲜味美", "monthlySales": 1654 },
        { "name": "炸酱面", "price": 18, "emoji": "🍜", "description": "肉末炸酱，麻辣鲜香", "monthlySales": 1543 },
        { "name": "冰粉", "price": 10, "emoji": "🍮", "description": "红糖冰粉，解辣神器", "monthlySales": 2876 },
        { "name": "凉糕", "price": 10, "emoji": "🍮", "description": "红糖凉糕，软糯清甜", "monthlySales": 1987 },
        { "name": "重庆小面", "price": 15, "emoji": "🍜", "description": "麻辣小面，重庆味道", "monthlySales": 2987 },
        { "name": "酸菜肉丝面", "price": 18, "emoji": "🍜", "description": "酸菜肉丝，爽口开胃", "monthlySales": 1876 }
      ]
    },
    {
      "id": 98,
      "name": "山城味道",
      "category": "重庆小面",
      "rating": 4.3,
      "deliveryTime": 30,
      "deliveryFee": 0,
      "minPrice": 15,
      "dishes": [
        { "name": "豌杂面", "price": 17, "emoji": "🍜", "description": "耙豌豆杂酱，重庆风味", "monthlySales": 2654 },
        { "name": "肥肠面", "price": 21, "emoji": "🍜", "description": "肥肠软烂，麻辣鲜香", "monthlySales": 2100 },
        { "name": "牛肉面", "price": 20, "emoji": "🍜", "description": "牛肉大块，汤浓味厚", "monthlySales": 2345 },
        { "name": "鸡杂面", "price": 18, "emoji": "🍜", "description": "酸辣鸡杂，开胃下饭", "monthlySales": 1876 },
        { "name": "红油抄手", "price": 15, "emoji": "🥟", "description": "抄手嫩滑，红油鲜香", "monthlySales": 1987 },
        { "name": "凉面", "price": 13, "emoji": "🍜", "description": "麻辣凉面，清爽开胃", "monthlySales": 1765 },
        { "name": "醪糟汤圆", "price": 10, "emoji": "🍡", "description": "糯米汤圆，酒酿香甜", "monthlySales": 1654 },
        { "name": "担担面", "price": 16, "emoji": "🍜", "description": "肉末香脆，麻辣鲜香", "monthlySales": 1543 },
        { "name": "酸辣粉", "price": 15, "emoji": "🍜", "description": "粉条滑爽，酸辣可口", "monthlySales": 1987 },
        { "name": "干馏豌杂面", "price": 18, "emoji": "🍜", "description": "干拌豌杂，酱香浓郁", "monthlySales": 1654 },
        { "name": "红烧排骨面", "price": 22, "emoji": "🍜", "description": "排骨酥烂，汤鲜味美", "monthlySales": 1432 },
        { "name": "炸酱面", "price": 16, "emoji": "🍜", "description": "麻辣炸酱，酱香四溢", "monthlySales": 1321 },
        { "name": "冰粉", "price": 8, "emoji": "🍮", "description": "红糖冰粉，解暑解辣", "monthlySales": 2345 },
        { "name": "凉虾", "price": 8, "emoji": "🦐", "description": "红糖凉虾，重庆特色", "monthlySales": 1876 },
        { "name": "山城小面", "price": 14, "emoji": "🍜", "description": "经典小面，麻辣鲜香", "monthlySales": 2876 }
      ]
    },
    {
      "id": 99,
      "name": "麻辣香锅坊",
      "category": "麻辣香锅",
      "rating": 4.8,
      "deliveryTime": 30,
      "deliveryFee": 5,
      "minPrice": 25,
      "dishes": [
        { "name": "麻辣牛肉", "price": 18, "emoji": "🥩", "description": "麻辣牛肉，口感嫩滑", "monthlySales": 2345 },
        { "name": "鸡翅中", "price": 15, "emoji": "🍗", "description": "鸡翅鲜嫩，香辣入味", "monthlySales": 1987 },
        { "name": "午餐肉", "price": 10, "emoji": "🥫", "description": "梅林午餐肉，香锅必点", "monthlySales": 2100 },
        { "name": "五花肉", "price": 16, "emoji": "🥓", "description": "五花肉片，肥而不腻", "monthlySales": 1876 },
        { "name": "鱼丸", "price": 10, "emoji": "🐟", "description": "手工鱼丸，鲜嫩弹牙", "monthlySales": 1765 },
        { "name": "豆腐皮", "price": 8, "emoji": "🫔", "description": "豆皮吸汁，香辣入味", "monthlySales": 2456 },
        { "name": "金针菇", "price": 8, "emoji": "🍄", "description": "金针菇脆嫩，吸满汤汁", "monthlySales": 2345 },
        { "name": "土豆片", "price": 7, "emoji": "🥔", "description": "薄切土豆，软糯入味", "monthlySales": 2654 },
        { "name": "藕片", "price": 8, "emoji": "🪷", "description": "脆嫩藕片，清甜可口", "monthlySales": 2100 },
        { "name": "花菜", "price": 8, "emoji": "🥦", "description": "花菜脆嫩，香锅绝配", "monthlySales": 1987 },
        { "name": "虾", "price": 22, "emoji": "🦐", "description": "新鲜大虾，干香可口", "monthlySales": 1654 },
        { "name": "鱿鱼须", "price": 20, "emoji": "🦑", "description": "鱿鱼Q弹，香辣鲜美", "monthlySales": 1543 },
        { "name": "腐竹", "price": 8, "emoji": "🫔", "description": "腐竹软韧，吸汁入味", "monthlySales": 1876 },
        { "name": "宽粉", "price": 8, "emoji": "🍜", "description": "宽粉Q弹，香锅搭档", "monthlySales": 2345 },
        { "name": "年糕", "price": 8, "emoji": "🍡", "description": "年糕软糯，外焦里嫩", "monthlySales": 1765 }
      ]
    },
    {
      "id": 100,
      "name": "干锅王麻辣香锅",
      "category": "麻辣香锅",
      "rating": 4.6,
      "deliveryTime": 35,
      "deliveryFee": 3,
      "minPrice": 20,
      "dishes": [
        { "name": "嫩牛肉", "price": 20, "emoji": "🥩", "description": "牛肉嫩滑，香辣入味", "monthlySales": 2100 },
        { "name": "鸡胗", "price": 14, "emoji": "🐔", "description": "鸡胗脆嫩，嚼劲十足", "monthlySales": 1987 },
        { "name": "鸭肠", "price": 16, "emoji": "🦆", "description": "鸭肠爽脆，麻辣鲜香", "monthlySales": 1876 },
        { "name": "肥牛卷", "price": 18, "emoji": "🥓", "description": "肥牛鲜嫩，香锅经典", "monthlySales": 1765 },
        { "name": "鱼豆腐", "price": 10, "emoji": "🧈", "description": "鱼豆腐外焦里嫩", "monthlySales": 2345 },
        { "name": "蟹棒", "price": 8, "emoji": "🦀", "description": "蟹棒鲜甜，口感丰富", "monthlySales": 1987 },
        { "name": "木耳", "price": 8, "emoji": "🍄", "description": "黑木耳脆嫩，香锅绝配", "monthlySales": 2100 },
        { "name": "海带", "price": 7, "emoji": "🌊", "description": "海带结厚实，鲜美爽脆", "monthlySales": 1876 },
        { "name": "西兰花", "price": 8, "emoji": "🥦", "description": "西兰花清甜，营养健康", "monthlySales": 1765 },
        { "name": "莴笋", "price": 7, "emoji": "🥬", "description": "莴笋脆嫩，清爽解腻", "monthlySales": 1654 },
        { "name": "大虾", "price": 24, "emoji": "🦐", "description": "大虾干香，鲜甜可口", "monthlySales": 1543 },
        { "name": "鱿鱼圈", "price": 18, "emoji": "🦑", "description": "鱿鱼圈Q弹，香辣鲜美", "monthlySales": 1432 },
        { "name": "豆干", "price": 8, "emoji": "🧈", "description": "豆干脆嫩，香辣十足", "monthlySales": 1987 },
        { "name": "魔芋", "price": 7, "emoji": "🍢", "description": "魔芋低卡，口感独特", "monthlySales": 1765 },
        { "name": "方便面", "price": 6, "emoji": "🍜", "description": "方便面吸汁，香锅底料", "monthlySales": 2345 }
      ]
    },
    {
      "id": 101,
      "name": "香辣诱惑",
      "category": "麻辣香锅",
      "rating": 4.4,
      "deliveryTime": 25,
      "deliveryFee": 6,
      "minPrice": 25,
      "dishes": [
        { "name": "牛百叶", "price": 22, "emoji": "🐂", "description": "牛百叶脆嫩，香辣可口", "monthlySales": 1876 },
        { "name": "猪肉片", "price": 14, "emoji": "🥩", "description": "猪肉片薄，香嫩入味", "monthlySales": 1987 },
        { "name": "毛肚", "price": 20, "emoji": "🐂", "description": "毛肚脆爽，香锅必点", "monthlySales": 2100 },
        { "name": "鸡米花", "price": 12, "emoji": "🍗", "description": "鸡米花外酥里嫩", "monthlySales": 1765 },
        { "name": "丸子拼盘", "price": 16, "emoji": "🍢", "description": "多种鱼丸肉丸，丰富选择", "monthlySales": 2345 },
        { "name": "豆泡", "price": 8, "emoji": "🧈", "description": "豆泡吸汁，满口鲜香", "monthlySales": 1987 },
        { "name": "香菇", "price": 8, "emoji": "🍄", "description": "香菇鲜嫩，汁水丰盈", "monthlySales": 1876 },
        { "name": "白菜", "price": 5, "emoji": "🥬", "description": "大白菜清甜，解腻佳品", "monthlySales": 2100 },
        { "name": "豆芽", "price": 4, "emoji": "🌱", "description": "豆芽清脆，爽口解腻", "monthlySales": 2456 },
        { "name": "黄瓜", "price": 6, "emoji": "🥒", "description": "黄瓜清甜，解辣必备", "monthlySales": 1765 },
        { "name": "鲜虾", "price": 25, "emoji": "🦐", "description": "鲜虾干香，鲜美可口", "monthlySales": 1654 },
        { "name": "鱿鱼", "price": 20, "emoji": "🦑", "description": "鱿鱼Q弹，香辣鲜美", "monthlySales": 1543 },
        { "name": "豆腐", "price": 7, "emoji": "🧈", "description": "嫩豆腐吸汁，入口即化", "monthlySales": 1876 },
        { "name": "红薯粉", "price": 8, "emoji": "🍜", "description": "红薯粉劲道，Q弹爽滑", "monthlySales": 1987 },
        { "name": "小麻花", "price": 6, "emoji": "🥨", "description": "小麻花酥脆，口感独特", "monthlySales": 1654 }
      ]
    },
    {
      "id": 102,
      "name": "黄焖鸡米饭",
      "category": "黄焖鸡",
      "rating": 4.7,
      "deliveryTime": 25,
      "deliveryFee": 3,
      "minPrice": 20,
      "dishes": [
        { "name": "经典黄焖鸡", "price": 28, "emoji": "🍗", "description": "鸡腿肉焖制，鲜嫩多汁", "monthlySales": 3456 },
        { "name": "黄焖排骨", "price": 32, "emoji": "🥩", "description": "排骨酥烂，酱香浓郁", "monthlySales": 2345 },
        { "name": "黄焖牛腩", "price": 35, "emoji": "🥩", "description": "牛腩软糯，汤汁鲜美", "monthlySales": 1987 },
        { "name": "黄焖鸡中翅", "price": 30, "emoji": "🍗", "description": "鸡翅鲜嫩，胶质丰富", "monthlySales": 2100 },
        { "name": "黄焖鸡腿饭", "price": 26, "emoji": "🍗", "description": "大鸡腿饭，肉多满足", "monthlySales": 2654 },
        { "name": "黄焖猪脚", "price": 30, "emoji": "🍖", "description": "猪脚软糯，胶原满满", "monthlySales": 1876 },
        { "name": "黄焖鸡杂", "price": 24, "emoji": "🐔", "description": "鸡杂黄焖，口感丰富", "monthlySales": 1765 },
        { "name": "黄焖豆腐", "price": 18, "emoji": "🧈", "description": "豆腐黄焖，吸汁入味", "monthlySales": 1987 },
        { "name": "黄焖茄子", "price": 16, "emoji": "🍆", "description": "茄子软糯，酱香浓郁", "monthlySales": 1654 },
        { "name": "黄焖土豆", "price": 14, "emoji": "🥔", "description": "土豆软糯，汤汁入味", "monthlySales": 2345 },
        { "name": "黄焖香菇", "price": 15, "emoji": "🍄", "description": "香菇鲜嫩，吸饱汤汁", "monthlySales": 1543 },
        { "name": "黄焖腐竹", "price": 14, "emoji": "🫔", "description": "腐竹软韧，酱香入味", "monthlySales": 1432 },
        { "name": "黄焖藕片", "price": 14, "emoji": "🪷", "description": "藕片脆嫩，清甜可口", "monthlySales": 1321 },
        { "name": "黄焖宽粉", "price": 12, "emoji": "🍜", "description": "宽粉Q弹，吸汁入味", "monthlySales": 1876 },
        { "name": "黄焖米饭", "price": 5, "emoji": "🍚", "description": "东北大米，配菜佳品", "monthlySales": 2876 }
      ]
    },
    {
      "id": 103,
      "name": "阿福黄焖鸡",
      "category": "黄焖鸡",
      "rating": 4.5,
      "deliveryTime": 30,
      "deliveryFee": 5,
      "minPrice": 25,
      "dishes": [
        { "name": "招牌黄焖鸡", "price": 30, "emoji": "🍗", "description": "秘制酱料，鸡肉鲜嫩", "monthlySales": 2987 },
        { "name": "黄焖排骨", "price": 34, "emoji": "🥩", "description": "排骨焖制，肉烂骨香", "monthlySales": 2100 },
        { "name": "黄焖牛腩", "price": 38, "emoji": "🥩", "description": "牛腩炖煮，软烂入味", "monthlySales": 1876 },
        { "name": "黄焖猪脚", "price": 32, "emoji": "🍖", "description": "猪脚Q弹，胶质浓厚", "monthlySales": 1765 },
        { "name": "黄焖鸡翅", "price": 28, "emoji": "🍗", "description": "鸡翅焖制，鲜香入味", "monthlySales": 1987 },
        { "name": "黄焖鱼块", "price": 30, "emoji": "🐟", "description": "鱼块嫩滑，酱香浓郁", "monthlySales": 1654 },
        { "name": "黄焖豆腐", "price": 18, "emoji": "🧈", "description": "豆腐焖制，吸汁入味", "monthlySales": 1543 },
        { "name": "黄焖腐竹", "price": 16, "emoji": "🫔", "description": "腐竹软韧，酱香四溢", "monthlySales": 1432 },
        { "name": "黄焖木耳", "price": 14, "emoji": "🍄", "description": "木耳脆嫩，入味十足", "monthlySales": 1321 },
        { "name": "黄焖金针菇", "price": 14, "emoji": "🍄", "description": "金针菇脆嫩，吸汁入味", "monthlySales": 1876 },
        { "name": "黄焖土豆片", "price": 12, "emoji": "🥔", "description": "土豆片软糯，汤汁浓郁", "monthlySales": 2345 },
        { "name": "黄焖藕片", "price": 14, "emoji": "🪷", "description": "藕片脆嫩，清甜可口", "monthlySales": 1765 },
        { "name": "黄焖宽粉", "price": 12, "emoji": "🍜", "description": "宽粉Q弹，吸汁入味", "monthlySales": 1654 },
        { "name": "黄焖方便面", "price": 8, "emoji": "🍜", "description": "方便面焖制，吸满汤汁", "monthlySales": 1987 },
        { "name": "黄焖米饭", "price": 5, "emoji": "🍚", "description": "精品米饭，配菜绝配", "monthlySales": 2654 }
      ]
    },
    {
      "id": 104,
      "name": "饺子大王",
      "category": "饺子馄饨",
      "rating": 4.8,
      "deliveryTime": 25,
      "deliveryFee": 3,
      "minPrice": 15,
      "dishes": [
        { "name": "猪肉白菜饺", "price": 18, "emoji": "🥟", "description": "经典北方水饺，皮薄馅大", "monthlySales": 3456 },
        { "name": "韭菜鸡蛋饺", "price": 16, "emoji": "🥟", "description": "韭菜鲜香，鸡蛋滑嫩", "monthlySales": 2987 },
        { "name": "三鲜水饺", "price": 22, "emoji": "🥟", "description": "虾仁猪肉，鲜美无比", "monthlySales": 2654 },
        { "name": "牛肉大葱饺", "price": 24, "emoji": "🥟", "description": "牛肉鲜嫩，大葱提味", "monthlySales": 2345 },
        { "name": "酸菜猪肉饺", "price": 20, "emoji": "🥟", "description": "东北酸菜，酸爽开胃", "monthlySales": 2100 },
        { "name": "虾仁水饺", "price": 26, "emoji": "🥟", "description": "整只虾仁，鲜美多汁", "monthlySales": 1987 },
        { "name": "红油抄手", "price": 18, "emoji": "🥟", "description": "川味红油，麻辣鲜香", "monthlySales": 1876 },
        { "name": "煎饺", "price": 20, "emoji": "🥟", "description": "油煎水饺，外酥里嫩", "monthlySales": 1765 },
        { "name": "蒸饺", "price": 20, "emoji": "🥟", "description": "蒸制水饺，原汁原味", "monthlySales": 1654 },
        { "name": "酸汤水饺", "price": 22, "emoji": "🥟", "description": "酸汤开胃，水饺入味", "monthlySales": 1543 },
        { "name": "芹菜猪肉饺", "price": 18, "emoji": "🥟", "description": "芹菜清香，猪肉鲜嫩", "monthlySales": 1432 },
        { "name": "香菇猪肉饺", "price": 20, "emoji": "🥟", "description": "香菇提鲜，猪肉香嫩", "monthlySales": 1987 },
        { "name": "玉米猪肉饺", "price": 18, "emoji": "🥟", "description": "玉米清甜，猪肉鲜香", "monthlySales": 1876 },
        { "name": "鲜虾云吞", "price": 24, "emoji": "🥟", "description": "港式云吞，虾肉饱满", "monthlySales": 1765 },
        { "name": "馄饨", "price": 16, "emoji": "🥟", "description": "皮薄馅嫩，汤鲜味美", "monthlySales": 2100 }
      ]
    },
    {
      "id": 105,
      "name": "老字号饺子馆",
      "category": "饺子馄饨",
      "rating": 4.6,
      "deliveryTime": 30,
      "deliveryFee": 5,
      "minPrice": 20,
      "dishes": [
        { "name": "猪肉白菜水饺", "price": 16, "emoji": "🥟", "description": "传统口味，经典之选", "monthlySales": 2876 },
        { "name": "韭菜鸡蛋水饺", "price": 15, "emoji": "🥟", "description": "素菜水饺，鲜香可口", "monthlySales": 2345 },
        { "name": "三鲜水饺", "price": 20, "emoji": "🥟", "description": "虾仁猪肉，鲜味十足", "monthlySales": 2100 },
        { "name": "牛肉水饺", "price": 22, "emoji": "🥟", "description": "牛肉馅料，肉香浓郁", "monthlySales": 1987 },
        { "name": "酸菜猪肉水饺", "price": 18, "emoji": "🥟", "description": "酸菜脆爽，肉香四溢", "monthlySales": 1876 },
        { "name": "虾仁水饺", "price": 24, "emoji": "🥟", "description": "鲜虾仁，清甜弹牙", "monthlySales": 1765 },
        { "name": "红油抄手", "price": 16, "emoji": "🥟", "description": "川味抄手，麻辣鲜香", "monthlySales": 1654 },
        { "name": "煎饺", "price": 18, "emoji": "🥟", "description": "底部金黄，外酥里嫩", "monthlySales": 1543 },
        { "name": "蒸饺", "price": 18, "emoji": "🥟", "description": "蒸制水饺，皮薄馅嫩", "monthlySales": 1432 },
        { "name": "酸汤水饺", "price": 20, "emoji": "🥟", "description": "酸汤开胃，水饺鲜嫩", "monthlySales": 1876 },
        { "name": "茴香猪肉饺", "price": 19, "emoji": "🥟", "description": "茴香特殊香气，猪肉鲜香", "monthlySales": 1765 },
        { "name": "白菜豆腐饺", "price": 14, "emoji": "🥟", "description": "素菜水饺，清淡健康", "monthlySales": 1654 },
        { "name": "虾饺", "price": 26, "emoji": "🥟", "description": "港式虾饺，晶莹剔透", "monthlySales": 1543 },
        { "name": "蟹籽云吞", "price": 22, "emoji": "🥟", "description": "蟹籽点缀，鲜味更浓", "monthlySales": 1432 },
        { "name": "小馄饨", "price": 14, "emoji": "🥟", "description": "鲜肉小馄饨，汤鲜味美", "monthlySales": 1987 }
      ]
    },
    {
      "id": 106,
      "name": "粥粥粉面铺",
      "category": "粥粉面",
      "rating": 4.5,
      "deliveryTime": 25,
      "deliveryFee": 3,
      "minPrice": 15,
      "dishes": [
        { "name": "皮蛋瘦肉粥", "price": 16, "emoji": "🥣", "description": "皮蛋瘦肉，经典粤式粥", "monthlySales": 2876 },
        { "name": "海鲜粥", "price": 22, "emoji": "🥣", "description": "虾蟹贝类，鲜美丰富", "monthlySales": 2345 },
        { "name": "猪杂粥", "price": 18, "emoji": "🥣", "description": "猪肝猪肠，粥底绵密", "monthlySales": 1987 },
        { "name": "及第粥", "price": 20, "emoji": "🥣", "description": "猪肝猪腰，寓意吉祥", "monthlySales": 1876 },
        { "name": "牛肉粥", "price": 18, "emoji": "🥣", "description": "牛肉嫩滑，粥鲜味美", "monthlySales": 1765 },
        { "name": "蔬菜粥", "price": 12, "emoji": "🥣", "description": "时令蔬菜，清淡养生", "monthlySales": 1654 },
        { "name": "捞面", "price": 16, "emoji": "🍜", "description": "干捞面条，酱香浓郁", "monthlySales": 1543 },
        { "name": "云吞面", "price": 18, "emoji": "🍜", "description": "云吞加面，汤鲜味美", "monthlySales": 1432 },
        { "name": "牛腩面", "price": 22, "emoji": "🍜", "description": "牛腩软烂，汤底浓郁", "monthlySales": 2100 },
        { "name": "炸酱面", "price": 16, "emoji": "🍜", "description": "肉末炸酱，面条劲道", "monthlySales": 1987 },
        { "name": "葱油拌面", "price": 14, "emoji": "🍜", "description": "葱香浓郁，简单美味", "monthlySales": 1876 },
        { "name": "酸辣粉", "price": 16, "emoji": "🍜", "description": "红薯粉条，酸辣开胃", "monthlySales": 2345 },
        { "name": "炒河粉", "price": 18, "emoji": "🍜", "description": "干炒河粉，锅气十足", "monthlySales": 1765 },
        { "name": "炒面", "price": 16, "emoji": "🍜", "description": "鸡蛋肉丝，大火爆炒", "monthlySales": 1654 },
        { "name": "海鲜炒粉", "price": 22, "emoji": "🍜", "description": "虾仁鱿鱼，海鲜风味", "monthlySales": 1543 }
      ]
    },
    {
      "id": 107,
      "name": "潮汕砂锅粥",
      "category": "粥粉面",
      "rating": 4.9,
      "deliveryTime": 30,
      "deliveryFee": 5,
      "minPrice": 25,
      "dishes": [
        { "name": "虾蟹砂锅粥", "price": 38, "emoji": "🥣", "description": "鲜虾膏蟹，粥底鲜美", "monthlySales": 2345 },
        { "name": "干贝排骨粥", "price": 28, "emoji": "🥣", "description": "干贝提鲜，排骨软烂", "monthlySales": 2100 },
        { "name": "皮蛋瘦肉粥", "price": 16, "emoji": "🥣", "description": "经典粤式，绵密可口", "monthlySales": 2654 },
        { "name": "海鲜砂锅粥", "price": 35, "emoji": "🥣", "description": "多种海鲜，鲜美无比", "monthlySales": 1987 },
        { "name": "猪杂砂锅粥", "price": 20, "emoji": "🥣", "description": "猪杂丰富，粥底鲜甜", "monthlySales": 1876 },
        { "name": "及第粥", "price": 22, "emoji": "🥣", "description": "猪肝猪腰，寓意美好", "monthlySales": 1765 },
        { "name": "牛肉粥", "price": 20, "emoji": "🥣", "description": "牛肉嫩滑，粥鲜味浓", "monthlySales": 1654 },
        { "name": "鱼片粥", "price": 18, "emoji": "🥣", "description": "鱼片鲜嫩，粥底绵滑", "monthlySales": 1543 },
        { "name": "海鲜捞面", "price": 28, "emoji": "🍜", "description": "干捞海鲜面，酱香浓郁", "monthlySales": 1432 },
        { "name": "牛腩捞面", "price": 24, "emoji": "🍜", "description": "牛腩软烂，面条劲道", "monthlySales": 1987 },
        { "name": "叉烧捞面", "price": 22, "emoji": "🍜", "description": "叉烧香甜，面条滑爽", "monthlySales": 1876 },
        { "name": "云吞捞面", "price": 20, "emoji": "🍜", "description": "鲜虾云吞，干捞美味", "monthlySales": 1765 },
        { "name": "葱油拌面", "price": 14, "emoji": "🍜", "description": "香葱炸油，简单美味", "monthlySales": 2100 },
        { "name": "虾籽捞面", "price": 26, "emoji": "🍜", "description": "虾籽提鲜，面条入味", "monthlySales": 1654 },
        { "name": "蚝油捞面", "price": 18, "emoji": "🍜", "description": "蚝油鲜甜，面条爽滑", "monthlySales": 1543 }
      ]
    },
    {
      "id": 108,
      "name": "烤鱼达人",
      "category": "烤鱼",
      "rating": 4.8,
      "deliveryTime": 35,
      "deliveryFee": 6,
      "minPrice": 30,
      "dishes": [
        { "name": "香辣烤鱼", "price": 68, "emoji": "🐟", "description": "香辣过瘾，鱼肉鲜嫩", "monthlySales": 2345 },
        { "name": "麻辣烤鱼", "price": 68, "emoji": "🐟", "description": "麻辣鲜香，越吃越爽", "monthlySales": 2100 },
        { "name": "蒜蓉烤鱼", "price": 72, "emoji": "🐟", "description": "蒜蓉飘香，鲜嫩入味", "monthlySales": 1987 },
        { "name": "豆豉烤鱼", "price": 70, "emoji": "🐟", "description": "豆豉鲜香，别具风味", "monthlySales": 1876 },
        { "name": "酸菜烤鱼", "price": 70, "emoji": "🐟", "description": "酸菜提味，鲜美爽口", "monthlySales": 1765 },
        { "name": "泡椒烤鱼", "price": 72, "emoji": "🐟", "description": "泡椒酸辣，开胃过瘾", "monthlySales": 1654 },
        { "name": "金汤烤鱼", "price": 75, "emoji": "🐟", "description": "金汤浓郁，鲜美无比", "monthlySales": 1543 },
        { "name": "烤鱼配菜-土豆", "price": 8, "emoji": "🥔", "description": "土豆片软糯，吸汁入味", "monthlySales": 2876 },
        { "name": "烤鱼配菜-藕片", "price": 8, "emoji": "🪷", "description": "藕片脆嫩，清甜可口", "monthlySales": 2654 },
        { "name": "烤鱼配菜-金针菇", "price": 8, "emoji": "🍄", "description": "金针菇脆嫩，吸饱汤汁", "monthlySales": 2456 },
        { "name": "烤鱼配菜-腐竹", "price": 8, "emoji": "🫔", "description": "腐竹软韧，入味十足", "monthlySales": 2345 },
        { "name": "烤鱼配菜-豆腐皮", "price": 6, "emoji": "🫔", "description": "豆皮吸汁，满口鲜香", "monthlySales": 2100 },
        { "name": "烤鱼配菜-魔芋", "price": 6, "emoji": "🍢", "description": "魔芋低卡，口感独特", "monthlySales": 1987 },
        { "name": "烤鱼配菜-宽粉", "price": 8, "emoji": "🍜", "description": "宽粉Q弹，吸汁入味", "monthlySales": 1876 },
        { "name": "烤鱼配菜-年糕", "price": 8, "emoji": "🍡", "description": "年糕软糯，外焦里嫩", "monthlySales": 1765 }
      ]
    },
    {
      "id": 109,
      "name": "碳火烤鱼",
      "category": "烤鱼",
      "rating": 4.6,
      "deliveryTime": 40,
      "deliveryFee": 5,
      "minPrice": 35,
      "dishes": [
        { "name": "秘制香辣烤鱼", "price": 72, "emoji": "🐟", "description": "秘制酱料，香辣浓郁", "monthlySales": 2100 },
        { "name": "麻辣诱惑烤鱼", "price": 72, "emoji": "🐟", "description": "麻辣劲爽，欲罢不能", "monthlySales": 1987 },
        { "name": "蒜香烤鱼", "price": 75, "emoji": "🐟", "description": "蒜香四溢，鱼肉鲜嫩", "monthlySales": 1876 },
        { "name": "豆豉烤鱼", "price": 70, "emoji": "🐟", "description": "豆豉风味，鲜香适口", "monthlySales": 1765 },
        { "name": "酸菜烤鱼", "price": 70, "emoji": "🐟", "description": "酸菜脆爽，鱼鲜味美", "monthlySales": 1654 },
        { "name": "剁椒烤鱼", "price": 74, "emoji": "🐟", "description": "剁椒鲜辣，风味独特", "monthlySales": 1543 },
        { "name": "番茄烤鱼", "price": 72, "emoji": "🐟", "description": "番茄酸甜，开胃爽口", "monthlySales": 1432 },
        { "name": "烤鱼配菜-土豆", "price": 6, "emoji": "🥔", "description": "土豆片软糯，汤汁浓郁", "monthlySales": 2654 },
        { "name": "烤鱼配菜-藕片", "price": 8, "emoji": "🪷", "description": "藕片脆嫩，清甜解腻", "monthlySales": 2345 },
        { "name": "烤鱼配菜-金针菇", "price": 8, "emoji": "🍄", "description": "金针菇吸汁，脆嫩可口", "monthlySales": 2100 },
        { "name": "烤鱼配菜-腐竹", "price": 8, "emoji": "🫔", "description": "腐竹软韧，酱香浓郁", "monthlySales": 1987 },
        { "name": "烤鱼配菜-豆腐皮", "price": 6, "emoji": "🫔", "description": "豆皮吸汁，入味十足", "monthlySales": 1876 },
        { "name": "烤鱼配菜-木耳", "price": 6, "emoji": "🍄", "description": "木耳脆嫩，鲜美爽口", "monthlySales": 1765 },
        { "name": "烤鱼配菜-宽粉", "price": 8, "emoji": "🍜", "description": "宽粉滑嫩，Q弹入味", "monthlySales": 1654 },
        { "name": "烤鱼配菜-手擀面", "price": 6, "emoji": "🍜", "description": "手擀面筋道，吸汁入味", "monthlySales": 1543 }
      ]
    },
    {
      "id": 110,
      "name": "酸菜鱼馆",
      "category": "酸菜鱼",
      "rating": 4.9,
      "deliveryTime": 30,
      "deliveryFee": 5,
      "minPrice": 25,
      "dishes": [
        { "name": "金汤酸菜鱼", "price": 58, "emoji": "🐟", "description": "金汤浓郁，鱼肉嫩滑", "monthlySales": 2987 },
        { "name": "番茄酸菜鱼", "price": 56, "emoji": "🐟", "description": "番茄酸甜，开胃爽口", "monthlySales": 2345 },
        { "name": "麻辣酸菜鱼", "price": 58, "emoji": "🐟", "description": "麻辣鲜香，酸爽过瘾", "monthlySales": 2100 },
        { "name": "酸菜鱼片", "price": 48, "emoji": "🐟", "description": "酸菜鱼片，鲜嫩入味", "monthlySales": 1987 },
        { "name": "酸菜鱼头", "price": 42, "emoji": "🐟", "description": "鱼头肉多，胶质丰富", "monthlySales": 1876 },
        { "name": "酸菜鱼腩", "price": 50, "emoji": "🐟", "description": "鱼腩鲜嫩，肥美多汁", "monthlySales": 1765 },
        { "name": "酸菜鱼加豆皮", "price": 52, "emoji": "🐟", "description": "豆皮吸汁，入味十足", "monthlySales": 1654 },
        { "name": "酸菜鱼加土豆粉", "price": 54, "emoji": "🐟", "description": "土豆粉Q弹，酸爽入味", "monthlySales": 1543 },
        { "name": "酸菜鱼加宽粉", "price": 54, "emoji": "🐟", "description": "宽粉劲道，吸满汤汁", "monthlySales": 1432 },
        { "name": "酸菜鱼加金针菇", "price": 50, "emoji": "🐟", "description": "金针菇脆嫩，鲜美爽口", "monthlySales": 1987 },
        { "name": "酸菜鱼加藕片", "price": 50, "emoji": "🐟", "description": "藕片脆嫩，清甜解腻", "monthlySales": 1876 },
        { "name": "酸菜鱼加腐竹", "price": 50, "emoji": "🐟", "description": "腐竹软韧，酱香入味", "monthlySales": 1765 },
        { "name": "酸菜鱼加木耳", "price": 48, "emoji": "🐟", "description": "木耳脆嫩，鲜美爽口", "monthlySales": 1654 },
        { "name": "酸菜鱼加海带", "price": 48, "emoji": "🐟", "description": "海带厚实，鲜美爽脆", "monthlySales": 1543 },
        { "name": "酸菜鱼加豆腐", "price": 50, "emoji": "🐟", "description": "豆腐嫩滑，吸汁入味", "monthlySales": 1432 }
      ]
    },
    {
      "id": 111,
      "name": "老坛酸菜鱼",
      "category": "酸菜鱼",
      "rating": 4.7,
      "deliveryTime": 25,
      "deliveryFee": 3,
      "minPrice": 30,
      "dishes": [
        { "name": "招牌金汤酸菜鱼", "price": 62, "emoji": "🐟", "description": "老坛酸菜，金汤浓郁", "monthlySales": 2654 },
        { "name": "番茄酸菜鱼", "price": 58, "emoji": "🐟", "description": "番茄甜酸，开胃爽口", "monthlySales": 2100 },
        { "name": "麻辣酸菜鱼", "price": 60, "emoji": "🐟", "description": "麻辣爽口，酸菜提味", "monthlySales": 1987 },
        { "name": "酸菜黑鱼", "price": 65, "emoji": "🐟", "description": "黑鱼肉嫩，营养丰富", "monthlySales": 1876 },
        { "name": "酸菜鲈鱼", "price": 62, "emoji": "🐟", "description": "鲈鱼鲜嫩，少刺多肉", "monthlySales": 1765 },
        { "name": "酸菜龙利鱼", "price": 58, "emoji": "🐟", "description": "龙利鱼嫩滑，无刺放心", "monthlySales": 1654 },
        { "name": "酸菜鱼加宽粉", "price": 56, "emoji": "🐟", "description": "宽粉Q弹，吸汁入味", "monthlySales": 1543 },
        { "name": "酸菜鱼加土豆粉", "price": 56, "emoji": "🐟", "description": "土豆粉爽滑，汤鲜味美", "monthlySales": 1432 },
        { "name": "酸菜鱼加腐竹", "price": 52, "emoji": "🐟", "description": "腐竹软韧，酱香浓郁", "monthlySales": 1987 },
        { "name": "酸菜鱼加豆皮", "price": 50, "emoji": "🐟", "description": "豆皮吸汁，入味十足", "monthlySales": 1876 },
        { "name": "酸菜鱼加木耳", "price": 50, "emoji": "🐟", "description": "木耳脆嫩，鲜美可口", "monthlySales": 1765 },
        { "name": "酸菜鱼加金针菇", "price": 52, "emoji": "🐟", "description": "金针菇脆嫩，酸爽开胃", "monthlySales": 1654 },
        { "name": "酸菜鱼加藕片", "price": 52, "emoji": "🐟", "description": "藕片清甜，口感脆嫩", "monthlySales": 1543 },
        { "name": "酸菜鱼加娃娃菜", "price": 50, "emoji": "🐟", "description": "娃娃菜甜嫩，吸汁入味", "monthlySales": 1432 },
        { "name": "酸菜鱼加青笋", "price": 52, "emoji": "🐟", "description": "青笋脆嫩，清甜解腻", "monthlySales": 1321 }
      ]
    },
    {
      "id": 112,
      "name": "串串香火锅",
      "category": "串串香",
      "rating": 4.8,
      "deliveryTime": 30,
      "deliveryFee": 3,
      "minPrice": 25,
      "dishes": [
        { "name": "牛肉串", "price": 3, "emoji": "🥩", "description": "鲜嫩牛肉，麻辣串串必点", "monthlySales": 3456 },
        { "name": "毛肚串", "price": 4, "emoji": "🐂", "description": "脆嫩毛肚，爽口弹牙", "monthlySales": 2987 },
        { "name": "鸭肠串", "price": 3, "emoji": "🦆", "description": "鸭肠爽脆，嚼劲十足", "monthlySales": 2654 },
        { "name": "虾滑串", "price": 5, "emoji": "🦐", "description": "手工虾滑，鲜嫩弹牙", "monthlySales": 2345 },
        { "name": "郡肝串", "price": 3, "emoji": "🐔", "description": "鸡郡干香，口感脆嫩", "monthlySales": 2100 },
        { "name": "五花肉串", "price": 3, "emoji": "🥓", "description": "五花肉片，肥瘦相间", "monthlySales": 1987 },
        { "name": "鱼丸串", "price": 2, "emoji": "🐟", "description": "手工鱼丸，鲜嫩弹牙", "monthlySales": 1876 },
        { "name": "土豆串", "price": 1.5, "emoji": "🥔", "description": "薄切土豆，软糯入味", "monthlySales": 2876 },
        { "name": "藕片串", "price": 2, "emoji": "🪷", "description": "脆嫩藕片，清甜爽口", "monthlySales": 2654 },
        { "name": "花菜串", "price": 2, "emoji": "🥦", "description": "花菜脆嫩，串串绝配", "monthlySales": 2456 },
        { "name": "木耳串", "price": 2, "emoji": "🍄", "description": "黑木耳脆嫩，鲜美爽口", "monthlySales": 2345 },
        { "name": "腐竹串", "price": 2, "emoji": "🫔", "description": "腐竹软韧，吸汁入味", "monthlySales": 2100 },
        { "name": "豆腐皮串", "price": 1.5, "emoji": "🫔", "description": "豆皮吸汁，满口鲜香", "monthlySales": 1987 },
        { "name": "年糕串", "price": 2, "emoji": "🍡", "description": "年糕软糯，外焦里嫩", "monthlySales": 1876 },
        { "name": "金针菇串", "price": 2, "emoji": "🍄", "description": "金针菇脆嫩，吸饱汤汁", "monthlySales": 1765 }
      ]
    },
    {
      "id": 113,
      "name": "冷锅串串",
      "category": "串串香",
      "rating": 4.6,
      "deliveryTime": 25,
      "deliveryFee": 5,
      "minPrice": 20,
      "dishes": [
        { "name": "冷锅牛肉串", "price": 4, "emoji": "🥩", "description": "牛肉鲜嫩，冷锅入味", "monthlySales": 2987 },
        { "name": "冷锅毛肚串", "price": 4, "emoji": "🐂", "description": "毛肚脆爽，冷锅绝配", "monthlySales": 2654 },
        { "name": "冷锅鸭肠串", "price": 3, "emoji": "🦆", "description": "鸭肠爽脆，嚼劲十足", "monthlySales": 2345 },
        { "name": "冷锅虾滑串", "price": 5, "emoji": "🦐", "description": "虾滑鲜嫩，弹牙可口", "monthlySales": 2100 },
        { "name": "冷锅郡肝串", "price": 3, "emoji": "🐔", "description": "郡肝干香，口感脆嫩", "monthlySales": 1987 },
        { "name": "冷锅五花肉串", "price": 3, "emoji": "🥓", "description": "五花肉片，肥瘦适中", "monthlySales": 1876 },
        { "name": "冷锅鱼丸串", "price": 2, "emoji": "🐟", "description": "鱼丸鲜嫩，Q弹爽口", "monthlySales": 1765 },
        { "name": "冷锅土豆串", "price": 2, "emoji": "🥔", "description": "土豆片软糯，入味十足", "monthlySales": 2456 },
        { "name": "冷锅藕片串", "price": 2, "emoji": "🪷", "description": "藕片脆嫩，清甜可口", "monthlySales": 2345 },
        { "name": "冷锅花菜串", "price": 2, "emoji": "🥦", "description": "花菜脆嫩，清甜可口", "monthlySales": 2100 },
        { "name": "冷锅木耳串", "price": 2, "emoji": "🍄", "description": "木耳脆嫩，鲜美爽口", "monthlySales": 1987 },
        { "name": "冷锅腐竹串", "price": 2, "emoji": "🫔", "description": "腐竹软韧，酱香入味", "monthlySales": 1876 },
        { "name": "冷锅豆皮串", "price": 2, "emoji": "🫔", "description": "豆皮吸汁，满口鲜香", "monthlySales": 1765 },
        { "name": "冷锅年糕串", "price": 2, "emoji": "🍡", "description": "年糕软糯，Q弹有嚼劲", "monthlySales": 1654 },
        { "name": "冷锅金针菇串", "price": 2, "emoji": "🍄", "description": "金针菇脆嫩，吸汁入味", "monthlySales": 1543 }
      ]
    },
    {
      "id": 114,
      "name": "小吃集合店",
      "category": "小吃",
      "rating": 4.5,
      "deliveryTime": 20,
      "deliveryFee": 3,
      "minPrice": 15,
      "dishes": [
        { "name": "炸鸡柳", "price": 12, "emoji": "🍗", "description": "外酥里嫩，经典街头小吃", "monthlySales": 2876 },
        { "name": "烤冷面", "price": 10, "emoji": "🫓", "description": "东北烤冷面，酸甜微辣", "monthlySales": 2654 },
        { "name": "铁板豆腐", "price": 10, "emoji": "🧈", "description": "铁板煎制，外焦里嫩", "monthlySales": 2345 },
        { "name": "糖炒栗子", "price": 15, "emoji": "🌰", "description": "现炒栗子，香甜软糯", "monthlySales": 2100 },
        { "name": "烤红薯", "price": 10, "emoji": "🍠", "description": "炭烤红薯，香甜流油", "monthlySales": 1987 },
        { "name": "冰糖葫芦", "price": 8, "emoji": "🍡", "description": "糖衣山楂，酸甜可口", "monthlySales": 1876 },
        { "name": "炸鲜奶", "price": 12, "emoji": "🧊", "description": "外酥里嫩，奶香浓郁", "monthlySales": 1765 },
        { "name": "驴打滚", "price": 10, "emoji": "🍡", "description": "北京小吃，黄豆粉裹", "monthlySales": 1654 },
        { "name": "豌豆黄", "price": 8, "emoji": "🍡", "description": "宫廷小吃，细腻清甜", "monthlySales": 1543 },
        { "name": "糖油粑粑", "price": 8, "emoji": "🍡", "description": "长沙小吃，软糯香甜", "monthlySales": 1432 },
        { "name": "臭豆腐", "price": 10, "emoji": "🧈", "description": "外酥里嫩，臭香诱人", "monthlySales": 2345 },
        { "name": "炸串拼盘", "price": 15, "emoji": "🍢", "description": "多种炸串，丰富满足", "monthlySales": 2100 },
        { "name": "关东煮", "price": 12, "emoji": "🍢", "description": "日式关东煮，汤底鲜美", "monthlySales": 1987 },
        { "name": "煎饼果子", "price": 10, "emoji": "🫔", "description": "鸡蛋薄脆，天津风味", "monthlySales": 1876 },
        { "name": "章鱼小丸子", "price": 15, "emoji": "🐙", "description": "木鱼花飘，日式经典", "monthlySales": 1765 }
      ]
    },
    {
      "id": 115,
      "name": "街边小食汇",
      "category": "小吃",
      "rating": 4.3,
      "deliveryTime": 25,
      "deliveryFee": 0,
      "minPrice": 10,
      "dishes": [
        { "name": "炸鸡柳", "price": 10, "emoji": "🍗", "description": "鸡柳炸制，香酥可口", "monthlySales": 2543 },
        { "name": "烤冷面", "price": 8, "emoji": "🫓", "description": "鸡蛋烤冷面，酱香浓郁", "monthlySales": 2345 },
        { "name": "铁板豆腐", "price": 8, "emoji": "🧈", "description": "铁板嫩豆腐，香辣入味", "monthlySales": 2100 },
        { "name": "糖炒栗子", "price": 12, "emoji": "🌰", "description": "现炒板栗，软糯香甜", "monthlySales": 1987 },
        { "name": "烤红薯", "price": 8, "emoji": "🍠", "description": "红心红薯，蜜甜流油", "monthlySales": 1876 },
        { "name": "冰糖葫芦", "price": 6, "emoji": "🍡", "description": "冰糖包裹，山楂开胃", "monthlySales": 1765 },
        { "name": "炸鲜奶", "price": 10, "emoji": "🧊", "description": "鲜奶炸制，外酥内软", "monthlySales": 1654 },
        { "name": "驴打滚", "price": 8, "emoji": "🍡", "description": "驴打滚，老北京味", "monthlySales": 1543 },
        { "name": "豌豆黄", "price": 6, "emoji": "🍡", "description": "豌豆黄，细腻香甜", "monthlySales": 1432 },
        { "name": "糖油粑粑", "price": 6, "emoji": "🍡", "description": "糖油粑粑，软糯Q弹", "monthlySales": 1321 },
        { "name": "烤面筋", "price": 3, "emoji": "🍢", "description": "孜然辣椒，劲道可口", "monthlySales": 2876 },
        { "name": "肉夹馍", "price": 8, "emoji": "🥙", "description": "腊汁肉香，馍酥肉嫩", "monthlySales": 2654 },
        { "name": "凉皮", "price": 8, "emoji": "🍜", "description": "酸辣凉皮，夏日必点", "monthlySales": 2456 },
        { "name": "鸡蛋灌饼", "price": 7, "emoji": "🫓", "description": "鸡蛋灌饼，营养美味", "monthlySales": 2345 },
        { "name": "手抓饼", "price": 7, "emoji": "🫓", "description": "酥脆手抓饼，层层香", "monthlySales": 2100 }
      ]
    },
    {
      "id": 116,
      "name": "甜品工坊",
      "category": "甜品",
      "rating": 4.9,
      "deliveryTime": 30,
      "deliveryFee": 5,
      "minPrice": 25,
      "dishes": [
        { "name": "提拉米苏", "price": 35, "emoji": "🍰", "description": "意式经典，咖啡酒香", "monthlySales": 2345 },
        { "name": "芒果慕斯", "price": 32, "emoji": "🍰", "description": "新鲜芒果，入口即化", "monthlySales": 2100 },
        { "name": "抹茶慕斯", "price": 32, "emoji": "🍰", "description": "宇治抹茶，清甜不腻", "monthlySales": 1987 },
        { "name": "巧克力慕斯", "price": 34, "emoji": "🍰", "description": "浓郁巧克力，丝滑顺口", "monthlySales": 1876 },
        { "name": "草莓慕斯", "price": 32, "emoji": "🍰", "description": "草莓酸甜，清新不腻", "monthlySales": 1765 },
        { "name": "蓝莓慕斯", "price": 34, "emoji": "🍰", "description": "蓝莓果香，酸甜可口", "monthlySales": 1654 },
        { "name": "榴莲慕斯", "price": 38, "emoji": "🍰", "description": "猫山王榴莲，浓郁醇厚", "monthlySales": 1543 },
        { "name": "黑森林蛋糕", "price": 36, "emoji": "🍰", "description": "樱桃巧克力，德式经典", "monthlySales": 1432 },
        { "name": "芝士蛋糕", "price": 32, "emoji": "🍰", "description": "纽约芝士，浓郁顺滑", "monthlySales": 1987 },
        { "name": "芒果千层", "price": 38, "emoji": "🍰", "description": "层层奶油，芒果香甜", "monthlySales": 1876 },
        { "name": "榴莲千层", "price": 42, "emoji": "🍰", "description": "榴莲果肉，奶油层层", "monthlySales": 1765 },
        { "name": "草莓千层", "price": 36, "emoji": "🍰", "description": "草莓果肉，清新不腻", "monthlySales": 1654 },
        { "name": "抹茶千层", "price": 36, "emoji": "🍰", "description": "抹茶风味，层层绵密", "monthlySales": 1543 },
        { "name": "提拉米苏杯", "price": 28, "emoji": "🍰", "description": "便携装提拉米苏", "monthlySales": 1432 },
        { "name": "慕斯杯", "price": 25, "emoji": "🍰", "description": "多种口味慕斯杯", "monthlySales": 2100 }
      ]
    },
    {
      "id": 117,
      "name": "饮品小屋",
      "category": "奶茶",
      "rating": 4.6,
      "deliveryTime": 20,
      "deliveryFee": 3,
      "minPrice": 10,
      "dishes": [
        { "name": "招牌奶茶", "price": 12, "emoji": "🧋", "description": "经典奶茶，香浓顺滑", "monthlySales": 3456 },
        { "name": "柠檬水", "price": 8, "emoji": "🍋", "description": "鲜柠水，酸甜清爽", "monthlySales": 2987 },
        { "name": "甜筒", "price": 6, "emoji": "🍦", "description": "奶油甜筒，香草风味", "monthlySales": 2654 },
        { "name": "雪糕桶", "price": 12, "emoji": "🍦", "description": "大份雪糕，香草巧克力", "monthlySales": 2345 },
        { "name": "芒果沙冰", "price": 15, "emoji": "🥭", "description": "新鲜芒果，冰爽沙冰", "monthlySales": 2100 },
        { "name": "草莓沙冰", "price": 14, "emoji": "🍓", "description": "草莓沙冰，酸甜冰爽", "monthlySales": 1987 },
        { "name": "抹茶拿铁", "price": 16, "emoji": "🧋", "description": "抹茶牛奶，顺滑可口", "monthlySales": 1876 },
        { "name": "杨枝甘露", "price": 18, "emoji": "🧋", "description": "芒果西柚，经典港式", "monthlySales": 1765 },
        { "name": "珍珠奶茶", "price": 12, "emoji": "🧋", "description": "Q弹珍珠，奶茶香浓", "monthlySales": 1654 },
        { "name": "芋泥波波", "price": 16, "emoji": "🧋", "description": "绵密芋泥，波波Q弹", "monthlySales": 1543 },
        { "name": "芝士奶盖茶", "price": 15, "emoji": "🧋", "description": "咸香奶盖，茶香回甘", "monthlySales": 1432 },
        { "name": "水果茶", "price": 16, "emoji": "🧋", "description": "多种水果，维C满满", "monthlySales": 1987 },
        { "name": "冰淇淋杯", "price": 10, "emoji": "🍦", "description": "杯装冰淇淋，多种口味", "monthlySales": 1876 },
        { "name": "奶昔", "price": 14, "emoji": "🥤", "description": "草莓奶昔，香浓丝滑", "monthlySales": 1765 },
        { "name": "柠檬茶", "price": 10, "emoji": "🍋", "description": "港式柠檬茶，酸甜解暑", "monthlySales": 1654 }
      ]
    },
    {
      "id": 118,
      "name": "甜心甜品店",
      "category": "甜品",
      "rating": 4.8,
      "deliveryTime": 25,
      "deliveryFee": 5,
      "minPrice": 20,
      "dishes": [
        { "name": "法式焦糖布丁", "price": 22, "emoji": "🍮", "description": "焦糖脆壳，布丁嫩滑", "monthlySales": 2345 },
        { "name": "芒果布丁", "price": 20, "emoji": "🍮", "description": "芒果清甜，布丁细腻", "monthlySales": 2100 },
        { "name": "抹茶布丁", "price": 20, "emoji": "🍮", "description": "抹茶清香，口感顺滑", "monthlySales": 1987 },
        { "name": "提拉米苏", "price": 30, "emoji": "🍰", "description": "意式经典，咖啡酒香", "monthlySales": 1876 },
        { "name": "芒果慕斯", "price": 28, "emoji": "🍰", "description": "芒果慕斯，轻盈不腻", "monthlySales": 1765 },
        { "name": "草莓慕斯", "price": 28, "emoji": "🍰", "description": "草莓慕斯，酸甜可口", "monthlySales": 1654 },
        { "name": "巧克力熔岩", "price": 32, "emoji": "🍰", "description": "流心巧克力，蛋糕酥脆", "monthlySales": 1543 },
        { "name": "芝士蛋糕", "price": 30, "emoji": "🍰", "description": "浓郁芝士，入口即化", "monthlySales": 1432 },
        { "name": "红丝绒蛋糕", "price": 32, "emoji": "🍰", "description": "红丝绒经典，奶油顺滑", "monthlySales": 1987 },
        { "name": "椰子蛋糕", "price": 28, "emoji": "🍰", "description": "椰子风味，清新不腻", "monthlySales": 1876 },
        { "name": "柠檬蛋糕", "price": 26, "emoji": "🍰", "description": "柠檬清香，酸甜可口", "monthlySales": 1765 },
        { "name": "巧克力蛋糕", "price": 30, "emoji": "🍰", "description": "浓郁巧克力，口感绵密", "monthlySales": 1654 },
        { "name": "水果塔", "price": 28, "emoji": "🥧", "description": "酥脆塔皮，水果铺面", "monthlySales": 1543 },
        { "name": "蛋挞", "price": 8, "emoji": "🥧", "description": "葡式蛋挞，酥皮蛋香", "monthlySales": 2876 },
        { "name": "泡芙", "price": 12, "emoji": "🥧", "description": "奶油泡芙，一口爆浆", "monthlySales": 2654 }
      ]
    },
    {
      "id": 119,
      "name": "冰冰饮品店",
      "category": "奶茶",
      "rating": 4.4,
      "deliveryTime": 15,
      "deliveryFee": 3,
      "minPrice": 8,
      "dishes": [
        { "name": "招牌柠檬水", "price": 8, "emoji": "🍋", "description": "鲜柠片，冰爽解渴", "monthlySales": 3456 },
        { "name": "珍珠奶茶", "price": 10, "emoji": "🧋", "description": "经典珍珠，奶茶香浓", "monthlySales": 2987 },
        { "name": "抹茶奶茶", "price": 12, "emoji": "🧋", "description": "抹茶风味，清新回甘", "monthlySales": 2654 },
        { "name": "芋泥波波奶茶", "price": 14, "emoji": "🧋", "description": "芋泥绵密，波波Q弹", "monthlySales": 2345 },
        { "name": "芝士奶盖茶", "price": 12, "emoji": "🧋", "description": "咸奶盖，茶香浓郁", "monthlySales": 2100 },
        { "name": "水果茶", "price": 14, "emoji": "🧋", "description": "丰富水果，清爽甘甜", "monthlySales": 1987 },
        { "name": "甜筒", "price": 5, "emoji": "🍦", "description": "香草甜筒，童年味道", "monthlySales": 2876 },
        { "name": "圣代", "price": 10, "emoji": "🍦", "description": "奶油圣代，巧克力酱", "monthlySales": 2654 },
        { "name": "雪糕桶", "price": 10, "emoji": "🍦", "description": "大容量雪糕，分享装", "monthlySales": 2456 },
        { "name": "芒果冰沙", "price": 12, "emoji": "🥭", "description": "鲜榨芒果，冰爽沙冰", "monthlySales": 2345 },
        { "name": "西瓜冰沙", "price": 10, "emoji": "🍉", "description": "西瓜冰沙，夏日解暑", "monthlySales": 2100 },
        { "name": "百香果冰茶", "price": 12, "emoji": "🍋", "description": "百香果香气，酸甜冰爽", "monthlySales": 1987 },
        { "name": "红豆奶茶", "price": 12, "emoji": "🧋", "description": "红豆绵密，奶茶香浓", "monthlySales": 1876 },
        { "name": "烧仙草", "price": 12, "emoji": "🧋", "description": "仙草清凉，配料丰富", "monthlySales": 1765 },
        { "name": "咖啡奶茶", "price": 13, "emoji": "☕", "description": "咖啡与奶茶的完美融合", "monthlySales": 1654 }
      ]
    },
    {
      "id": 120,
      "name": "爽口冰淇淋屋",
      "category": "奶茶",
      "rating": 4.7,
      "deliveryTime": 18,
      "deliveryFee": 0,
      "minPrice": 5,
      "dishes": [
        { "name": "香草甜筒", "price": 5, "emoji": "🍦", "description": "经典香草，入口即化", "monthlySales": 3876 },
        { "name": "巧克力甜筒", "price": 5, "emoji": "🍦", "description": "浓香巧克力，丝滑甜蜜", "monthlySales": 3456 },
        { "name": "草莓甜筒", "price": 5, "emoji": "🍦", "description": "草莓风味，酸甜清新", "monthlySales": 2987 },
        { "name": "抹茶甜筒", "price": 6, "emoji": "🍦", "description": "抹茶清香，微苦回甘", "monthlySales": 2654 },
        { "name": "雪糕桶大份", "price": 12, "emoji": "🍦", "description": "超大份雪糕，多种口味", "monthlySales": 2345 },
        { "name": "圣代杯", "price": 10, "emoji": "🍦", "description": "奶油圣代，果酱淋面", "monthlySales": 2100 },
        { "name": "冰沙杯", "price": 12, "emoji": "🍧", "description": "绵绵冰沙，水果铺面", "monthlySales": 1987 },
        { "name": "水果冰淇淋", "price": 8, "emoji": "🍦", "description": "鲜果冰淇淋，清爽不腻", "monthlySales": 1876 },
        { "name": "芒果冰淇淋", "price": 8, "emoji": "🍦", "description": "芒果果肉，香甜可口", "monthlySales": 1765 },
        { "name": "草莓冰淇淋", "price": 8, "emoji": "🍦", "description": "草莓果肉，酸甜冰爽", "monthlySales": 1654 },
        { "name": "巧克力冰淇淋", "price": 8, "emoji": "🍦", "description": "丝滑巧克力，浓郁香甜", "monthlySales": 1543 },
        { "name": "抹茶冰淇淋", "price": 8, "emoji": "🍦", "description": "抹茶风味，清新宜人", "monthlySales": 1432 },
        { "name": "芋头冰淇淋", "price": 8, "emoji": "🍦", "description": "芋头香气，绵密顺滑", "monthlySales": 1987 },
        { "name": "红豆冰淇淋", "price": 8, "emoji": "🍦", "description": "红豆颗粒，口感丰富", "monthlySales": 1876 },
        { "name": "双球冰淇淋", "price": 10, "emoji": "🍦", "description": "两种口味，一次满足", "monthlySales": 1765 }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = allData;
}