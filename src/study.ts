declare var lab: any

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max)
}

let templateParameters = [
  {
    "item1": "71",
    "item2": "75",
    "item3": "68",
    "item4": "0",
    "item5": "0",
    "item6": "0",
    "item7": "0",
    "max": "75",
    "max_index": "2",
    "graphFlag": "1",
    "size": "3",
    "deviation": "5",
    "img": "graph-3-sd-1.png"
  },
  {
    "item1": "71",
    "item2": "75",
    "item3": "68",
    "item4": "0",
    "item5": "0",
    "item6": "0",
    "item7": "0",
    "max": "75",
    "max_index": "2",
    "graphFlag": "0",
    "size": "3",
    "deviation": "5",
    "img": "number-3-sd-1.png"
  },
  {
    "item1": "54",
    "item2": "57",
    "item3": "51",
    "item4": "0",
    "item5": "0",
    "item6": "0",
    "item7": "0",
    "max": "57",
    "max_index": "2",
    "graphFlag": "1",
    "size": "3",
    "deviation": "5",
    "img": "graph-3-sd-2.png"
  },
  {
    "item1": "54",
    "item2": "57",
    "item3": "51",
    "item4": "0",
    "item5": "0",
    "item6": "0",
    "item7": "0",
    "max": "57",
    "max_index": "2",
    "graphFlag": "0",
    "size": "3",
    "deviation": "5",
    "img": "number-3-sd-2.png"
  },
  {
    "item1": "21",
    "item2": "28",
    "item3": "25",
    "item4": "0",
    "item5": "0",
    "item6": "0",
    "item7": "0",
    "max": "28",
    "max_index": "2",
    "graphFlag": "1",
    "size": "3",
    "deviation": "5",
    "img": "graph-3-sd-3.png"
  },
  {
    "item1": "21",
    "item2": "28",
    "item3": "25",
    "item4": "0",
    "item5": "0",
    "item6": "0",
    "item7": "0",
    "max": "28",
    "max_index": "2",
    "graphFlag": "0",
    "size": "3",
    "deviation": "5",
    "img": "number-3-sd-3.png"
  },
  {
    "item1": "15",
    "item2": "11",
    "item3": "18",
    "item4": "0",
    "item5": "0",
    "item6": "0",
    "item7": "0",
    "max": "18",
    "max_index": "3",
    "graphFlag": "1",
    "size": "3",
    "deviation": "5",
    "img": "graph-3-sd-4.png"
  },
  {
    "item1": "15",
    "item2": "11",
    "item3": "18",
    "item4": "0",
    "item5": "0",
    "item6": "0",
    "item7": "0",
    "max": "18",
    "max_index": "3",
    "graphFlag": "0",
    "size": "3",
    "deviation": "5",
    "img": "number-3-sd-4.png"
  },
  {
    "item1": "83",
    "item2": "76",
    "item3": "80",
    "item4": "0",
    "item5": "0",
    "item6": "0",
    "item7": "0",
    "max": "83",
    "max_index": "1",
    "graphFlag": "1",
    "size": "3",
    "deviation": "5",
    "img": "graph-3-sd-5.png"
  },
  {
    "item1": "83",
    "item2": "76",
    "item3": "80",
    "item4": "0",
    "item5": "0",
    "item6": "0",
    "item7": "0",
    "max": "83",
    "max_index": "1",
    "graphFlag": "0",
    "size": "3",
    "deviation": "5",
    "img": "number-3-sd-5.png"
  },
  {
    "item1": "52",
    "item2": "43",
    "item3": "63",
    "item4": "0",
    "item5": "0",
    "item6": "0",
    "item7": "0",
    "max": "63",
    "max_index": "3",
    "graphFlag": "1",
    "size": "3",
    "deviation": "15",
    "img": "graph-3-ld-1.png"
  },
  {
    "item1": "52",
    "item2": "43",
    "item3": "63",
    "item4": "0",
    "item5": "0",
    "item6": "0",
    "item7": "0",
    "max": "63",
    "max_index": "3",
    "graphFlag": "0",
    "size": "3",
    "deviation": "15",
    "img": "number-3-ld-1.png"
  },
  {
    "item1": "52",
    "item2": "62",
    "item3": "72",
    "item4": "0",
    "item5": "0",
    "item6": "0",
    "item7": "0",
    "max": "72",
    "max_index": "3",
    "graphFlag": "1",
    "size": "3",
    "deviation": "15",
    "img": "graph-3-ld-2.png"
  },
  {
    "item1": "52",
    "item2": "62",
    "item3": "72",
    "item4": "0",
    "item5": "0",
    "item6": "0",
    "item7": "0",
    "max": "72",
    "max_index": "3",
    "graphFlag": "0",
    "size": "3",
    "deviation": "15",
    "img": "number-3-ld-2.png"
  },
  {
    "item1": "21",
    "item2": "43",
    "item3": "32",
    "item4": "0",
    "item5": "0",
    "item6": "0",
    "item7": "0",
    "max": "43",
    "max_index": "2",
    "graphFlag": "1",
    "size": "3",
    "deviation": "15",
    "img": "graph-3-ld-3.png"
  },
  {
    "item1": "21",
    "item2": "43",
    "item3": "32",
    "item4": "0",
    "item5": "0",
    "item6": "0",
    "item7": "0",
    "max": "43",
    "max_index": "2",
    "graphFlag": "0",
    "size": "3",
    "deviation": "15",
    "img": "number-3-ld-3.png"
  },
  {
    "item1": "90",
    "item2": "70",
    "item3": "80",
    "item4": "0",
    "item5": "0",
    "item6": "0",
    "item7": "0",
    "max": "90",
    "max_index": "1",
    "graphFlag": "1",
    "size": "3",
    "deviation": "15",
    "img": "graph-3-ld-4.png"
  },
  {
    "item1": "90",
    "item2": "70",
    "item3": "80",
    "item4": "0",
    "item5": "0",
    "item6": "0",
    "item7": "0",
    "max": "90",
    "max_index": "1",
    "graphFlag": "0",
    "size": "3",
    "deviation": "15",
    "img": "number-3-ld-4.png"
  },
  {
    "item1": "10",
    "item2": "19",
    "item3": "30",
    "item4": "0",
    "item5": "0",
    "item6": "0",
    "item7": "0",
    "max": "30",
    "max_index": "3",
    "graphFlag": "1",
    "size": "3",
    "deviation": "15",
    "img": "graph-3-ld-5.png"
  },
  {
    "item1": "10",
    "item2": "19",
    "item3": "30",
    "item4": "0",
    "item5": "0",
    "item6": "0",
    "item7": "0",
    "max": "30",
    "max_index": "3",
    "graphFlag": "0",
    "size": "3",
    "deviation": "15",
    "img": "number-3-ld-5.png"
  },
  {
    "item1": "48",
    "item2": "43",
    "item3": "46",
    "item4": "53",
    "item5": "51",
    "item6": "0",
    "item7": "0",
    "max": "53",
    "max_index": "4",
    "graphFlag": "1",
    "size": "5",
    "deviation": "5",
    "img": "graph-5-sd-1.png"
  },
  {
    "item1": "48",
    "item2": "43",
    "item3": "46",
    "item4": "53",
    "item5": "51",
    "item6": "0",
    "item7": "0",
    "max": "53",
    "max_index": "4",
    "graphFlag": "0",
    "size": "5",
    "deviation": "5",
    "img": "number-5-sd-1.png"
  },
  {
    "item1": "24",
    "item2": "26",
    "item3": "31",
    "item4": "21",
    "item5": "28",
    "item6": "0",
    "item7": "0",
    "max": "31",
    "max_index": "3",
    "graphFlag": "1",
    "size": "5",
    "deviation": "5",
    "img": "graph-5-sd-2.png"
  },
  {
    "item1": "24",
    "item2": "26",
    "item3": "31",
    "item4": "21",
    "item5": "28",
    "item6": "0",
    "item7": "0",
    "max": "31",
    "max_index": "3",
    "graphFlag": "0",
    "size": "5",
    "deviation": "5",
    "img": "number-5-sd-2.png"
  },
  {
    "item1": "81",
    "item2": "77",
    "item3": "84",
    "item4": "79",
    "item5": "86",
    "item6": "0",
    "item7": "0",
    "max": "86",
    "max_index": "5",
    "graphFlag": "1",
    "size": "5",
    "deviation": "5",
    "img": "graph-5-sd-3.png"
  },
  {
    "item1": "81",
    "item2": "77",
    "item3": "84",
    "item4": "79",
    "item5": "86",
    "item6": "0",
    "item7": "0",
    "max": "86",
    "max_index": "5",
    "graphFlag": "0",
    "size": "5",
    "deviation": "5",
    "img": "number-5-sd-3.png"
  },
  {
    "item1": "70",
    "item2": "68",
    "item3": "75",
    "item4": "65",
    "item5": "72",
    "item6": "0",
    "item7": "0",
    "max": "75",
    "max_index": "3",
    "graphFlag": "1",
    "size": "5",
    "deviation": "5",
    "img": "graph-5-sd-4.png"
  },
  {
    "item1": "70",
    "item2": "68",
    "item3": "75",
    "item4": "65",
    "item5": "72",
    "item6": "0",
    "item7": "0",
    "max": "75",
    "max_index": "3",
    "graphFlag": "0",
    "size": "5",
    "deviation": "5",
    "img": "number-5-sd-4.png"
  },
  {
    "item1": "70",
    "item2": "63",
    "item3": "67",
    "item4": "65",
    "item5": "60",
    "item6": "0",
    "item7": "0",
    "max": "70",
    "max_index": "1",
    "graphFlag": "1",
    "size": "5",
    "deviation": "5",
    "img": "graph-5-sd-5.png"
  },
  {
    "item1": "70",
    "item2": "63",
    "item3": "67",
    "item4": "65",
    "item5": "60",
    "item6": "0",
    "item7": "0",
    "max": "70",
    "max_index": "1",
    "graphFlag": "0",
    "size": "5",
    "deviation": "5",
    "img": "number-5-sd-5.png"
  },
  {
    "item1": "27",
    "item2": "40",
    "item3": "19",
    "item4": "33",
    "item5": "48",
    "item6": "0",
    "item7": "0",
    "max": "48",
    "max_index": "5",
    "graphFlag": "1",
    "size": "5",
    "deviation": "15",
    "img": "graph-5-ld-1.png"
  },
  {
    "item1": "27",
    "item2": "40",
    "item3": "19",
    "item4": "33",
    "item5": "48",
    "item6": "0",
    "item7": "0",
    "max": "48",
    "max_index": "5",
    "graphFlag": "0",
    "size": "5",
    "deviation": "15",
    "img": "number-5-ld-1.png"
  },
  {
    "item1": "1",
    "item2": "28",
    "item3": "8",
    "item4": "14",
    "item5": "20",
    "item6": "0",
    "item7": "0",
    "max": "28",
    "max_index": "2",
    "graphFlag": "1",
    "size": "5",
    "deviation": "15",
    "img": "graph-5-ld-2.png"
  },
  {
    "item1": "1",
    "item2": "28",
    "item3": "8",
    "item4": "14",
    "item5": "20",
    "item6": "0",
    "item7": "0",
    "max": "28",
    "max_index": "2",
    "graphFlag": "0",
    "size": "5",
    "deviation": "15",
    "img": "number-5-ld-2.png"
  },
  {
    "item1": "37",
    "item2": "28",
    "item3": "43",
    "item4": "58",
    "item5": "50",
    "item6": "0",
    "item7": "0",
    "max": "58",
    "max_index": "4",
    "graphFlag": "1",
    "size": "5",
    "deviation": "15",
    "img": "graph-5-ld-3.png"
  },
  {
    "item1": "37",
    "item2": "28",
    "item3": "43",
    "item4": "58",
    "item5": "50",
    "item6": "0",
    "item7": "0",
    "max": "58",
    "max_index": "4",
    "graphFlag": "0",
    "size": "5",
    "deviation": "15",
    "img": "number-5-ld-3.png"
  },
  {
    "item1": "44",
    "item2": "36",
    "item3": "15",
    "item4": "30",
    "item5": "24",
    "item6": "0",
    "item7": "0",
    "max": "44",
    "max_index": "1",
    "graphFlag": "1",
    "size": "5",
    "deviation": "15",
    "img": "graph-5-ld-4.png"
  },
  {
    "item1": "44",
    "item2": "36",
    "item3": "15",
    "item4": "30",
    "item5": "24",
    "item6": "0",
    "item7": "0",
    "max": "44",
    "max_index": "1",
    "graphFlag": "0",
    "size": "5",
    "deviation": "15",
    "img": "number-5-ld-4.png"
  },
  {
    "item1": "47",
    "item2": "75",
    "item3": "61",
    "item4": "54",
    "item5": "68",
    "item6": "0",
    "item7": "0",
    "max": "75",
    "max_index": "2",
    "graphFlag": "1",
    "size": "5",
    "deviation": "15",
    "img": "graph-5-ld-5.png"
  },
  {
    "item1": "47",
    "item2": "75",
    "item3": "61",
    "item4": "54",
    "item5": "68",
    "item6": "0",
    "item7": "0",
    "max": "75",
    "max_index": "2",
    "graphFlag": "0",
    "size": "5",
    "deviation": "15",
    "img": "number-5-ld-5.png"
  },
  {
    "item1": "27",
    "item2": "34",
    "item3": "31",
    "item4": "36",
    "item5": "33",
    "item6": "30",
    "item7": "39",
    "max": "39",
    "max_index": "7",
    "graphFlag": "1",
    "size": "7",
    "deviation": "5",
    "img": "graph-7-sd-1.png"
  },
  {
    "item1": "27",
    "item2": "34",
    "item3": "31",
    "item4": "36",
    "item5": "33",
    "item6": "30",
    "item7": "39",
    "max": "39",
    "max_index": "7",
    "graphFlag": "0",
    "size": "7",
    "deviation": "5",
    "img": "number-7-sd-1.png"
  },
  {
    "item1": "55",
    "item2": "48",
    "item3": "52",
    "item4": "57",
    "item5": "59",
    "item6": "50",
    "item7": "53",
    "max": "59",
    "max_index": "5",
    "graphFlag": "1",
    "size": "7",
    "deviation": "5",
    "img": "graph-7-sd-2.png"
  },
  {
    "item1": "55",
    "item2": "48",
    "item3": "52",
    "item4": "57",
    "item5": "59",
    "item6": "50",
    "item7": "53",
    "max": "59",
    "max_index": "5",
    "graphFlag": "0",
    "size": "7",
    "deviation": "5",
    "img": "number-7-sd-2.png"
  },
  {
    "item1": "16",
    "item2": "21",
    "item3": "24",
    "item4": "25",
    "item5": "22",
    "item6": "28",
    "item7": "19",
    "max": "28",
    "max_index": "6",
    "graphFlag": "1",
    "size": "7",
    "deviation": "5",
    "img": "graph-7-sd-3.png"
  },
  {
    "item1": "16",
    "item2": "21",
    "item3": "24",
    "item4": "25",
    "item5": "22",
    "item6": "28",
    "item7": "19",
    "max": "28",
    "max_index": "6",
    "graphFlag": "0",
    "size": "7",
    "deviation": "5",
    "img": "number-7-sd-3.png"
  },
  {
    "item1": "33",
    "item2": "37",
    "item3": "36",
    "item4": "31",
    "item5": "34",
    "item6": "29",
    "item7": "39",
    "max": "39",
    "max_index": "7",
    "graphFlag": "1",
    "size": "7",
    "deviation": "5",
    "img": "graph-7-sd-4.png"
  },
  {
    "item1": "33",
    "item2": "37",
    "item3": "36",
    "item4": "31",
    "item5": "34",
    "item6": "29",
    "item7": "39",
    "max": "39",
    "max_index": "7",
    "graphFlag": "0",
    "size": "7",
    "deviation": "5",
    "img": "number-7-sd-4.png"
  },
  {
    "item1": "21",
    "item2": "16",
    "item3": "19",
    "item4": "24",
    "item5": "18",
    "item6": "15",
    "item7": "12",
    "max": "24",
    "max_index": "4",
    "graphFlag": "1",
    "size": "7",
    "deviation": "5",
    "img": "graph-7-sd-5.png"
  },
  {
    "item1": "21",
    "item2": "16",
    "item3": "19",
    "item4": "24",
    "item5": "18",
    "item6": "15",
    "item7": "12",
    "max": "24",
    "max_index": "4",
    "graphFlag": "0",
    "size": "7",
    "deviation": "5",
    "img": "number-7-sd-5.png"
  },
  {
    "item1": "42",
    "item2": "38",
    "item3": "52",
    "item4": "33",
    "item5": "26",
    "item6": "60",
    "item7": "47",
    "max": "60",
    "max_index": "6",
    "graphFlag": "1",
    "size": "7",
    "deviation": "15",
    "img": "graph-7-ld-1.png"
  },
  {
    "item1": "42",
    "item2": "38",
    "item3": "52",
    "item4": "33",
    "item5": "26",
    "item6": "60",
    "item7": "47",
    "max": "60",
    "max_index": "6",
    "graphFlag": "0",
    "size": "7",
    "deviation": "15",
    "img": "number-7-ld-1.png"
  },
  {
    "item1": "53",
    "item2": "58",
    "item3": "35",
    "item4": "71",
    "item5": "63",
    "item6": "48",
    "item7": "42",
    "max": "71",
    "max_index": "4",
    "graphFlag": "1",
    "size": "7",
    "deviation": "15",
    "img": "graph-7-ld-2.png"
  },
  {
    "item1": "53",
    "item2": "58",
    "item3": "35",
    "item4": "71",
    "item5": "63",
    "item6": "48",
    "item7": "42",
    "max": "71",
    "max_index": "4",
    "graphFlag": "0",
    "size": "7",
    "deviation": "15",
    "img": "number-7-ld-2.png"
  },
  {
    "item1": "90",
    "item2": "68",
    "item3": "62",
    "item4": "83",
    "item5": "77",
    "item6": "73",
    "item7": "56",
    "max": "90",
    "max_index": "1",
    "graphFlag": "1",
    "size": "7",
    "deviation": "15",
    "img": "graph-7-ld-3.png"
  },
  {
    "item1": "90",
    "item2": "68",
    "item3": "62",
    "item4": "83",
    "item5": "77",
    "item6": "73",
    "item7": "56",
    "max": "90",
    "max_index": "1",
    "graphFlag": "0",
    "size": "7",
    "deviation": "15",
    "img": "number-7-ld-3.png"
  },
  {
    "item1": "61",
    "item2": "27",
    "item3": "43",
    "item4": "39",
    "item5": "34",
    "item6": "49",
    "item7": "54",
    "max": "61",
    "max_index": "1",
    "graphFlag": "1",
    "size": "7",
    "deviation": "15",
    "img": "graph-7-ld-4.png"
  },
  {
    "item1": "61",
    "item2": "27",
    "item3": "43",
    "item4": "39",
    "item5": "34",
    "item6": "49",
    "item7": "54",
    "max": "61",
    "max_index": "1",
    "graphFlag": "0",
    "size": "7",
    "deviation": "15",
    "img": "number-7-ld-4.png"
  },
  {
    "item1": "43",
    "item2": "38",
    "item3": "27",
    "item4": "48",
    "item5": "19",
    "item6": "56",
    "item7": "33",
    "max": "56",
    "max_index": "6",
    "graphFlag": "1",
    "size": "7",
    "deviation": "15",
    "img": "graph-7-ld-5.png"
  },
  {
    "item1": "43",
    "item2": "38",
    "item3": "27",
    "item4": "48",
    "item5": "19",
    "item6": "56",
    "item7": "33",
    "max": "56",
    "max_index": "6",
    "graphFlag": "0",
    "size": "7",
    "deviation": "15",
    "img": "number-7-ld-5.png"
  }
]

const imageFiles = {
  "graph-3-ld-1.png": "embedded\u002Ff6d9088a8fcbd256303ca756bef55de4df2262c35e5bb89edfd00182f2415db0.png",
  "graph-3-ld-2.png": "embedded\u002Fe5cd797029cdd08d5c6674c13a4ea29661a8ca9bef96903ea752dfea55fe5b05.png",
  "graph-3-ld-3.png": "embedded\u002F7e42491bbc848976c8bb546d7049a895473cb0d485ccb28887f0be2f78414cba.png",
  "graph-3-ld-4.png": "embedded\u002F3b8691eee4b62df21f44338f576d21fe32509ee1f397b73bafa3171707639e3f.png",
  "graph-3-ld-5.png": "embedded\u002Fc54e1a8bf83cba0de9d9b3c3819bf5d6cc6669185adcf832be9edcfce77c4490.png",
  "graph-3-sd-1.png": "embedded\u002F9a8488ddb091ebf6d5fbdf77d5b22f5dc446a2a4285d57f87a295e45261efe3a.png",
  "graph-3-sd-2.png": "embedded\u002F4cccc105c6c97ee2098f88a73fe0395c45bbea6e0855fa1fa1a69701d4053c91.png",
  "graph-3-sd-3.png": "embedded\u002F4dbc6efc11b4ea173785a749fbafe4b92cecf75fb6c6d5691bf591353a0abc1d.png",
  "graph-3-sd-4.png": "embedded\u002F8f2dfbfd1bcb635d4aeedca02ce85f034069dbc759a4e32cc2175960cb7b7323.png",
  "graph-3-sd-5.png": "embedded\u002F62b82a4a04d26f67f7f56cab252829b8e80553dd8c3350db7b50094620451cf3.png",
  "graph-5-ld-1.png": "embedded\u002Fe75cc74dd4b5f0c453353826487f55b0784e8f853325edd8f7642072f893e9f8.png",
  "graph-5-ld-2.png": "embedded\u002Ffe12a9cb46da77d197f39d2d2911ed915d0e5077a9fa1d60980cd83f9038375d.png",
  "graph-5-ld-3.png": "embedded\u002F3da7b0c57e9e2bbdadfe9d2a0a2f406ea8520b57c394df0963d929910799d226.png",
  "graph-5-ld-4.png": "embedded\u002Fe6c887f9e15a2225659a118eabe69492b1098a26bba8f69dda818767eef41fba.png",
  "graph-5-ld-5.png": "embedded\u002F724ff2d0b3fe71f63cac3370033282748485924fc3b31b98a66061a117336a49.png",
  "graph-5-sd-1.png": "embedded\u002F234fc422a906aee51815eff38eb42afb568d24b8d7e4a360a68eafb4b1723365.png",
  "graph-5-sd-2.png": "embedded\u002F9df38eee50e497704a757b4469a81e253c56c4c128102ce227cf85d575371eb2.png",
  "graph-5-sd-3.png": "embedded\u002F33b0d46c160c8b97e699e8f63d5d75c75bbd405640614ab0fdb2955d11bafb90.png",
  "graph-5-sd-4.png": "embedded\u002Fc6601e5bd20880fdde99957df27ea639b023e2e58a4d554e55f21e200ede0529.png",
  "graph-5-sd-5.png": "embedded\u002Fa83c1d738fe32171f86e2a699ef83d09ccbddf78902adb7100fe71747c1e2c26.png",
  "graph-7-ld-1.png": "embedded\u002F7a652bfea79d20e675b5e27902a230d04a8f060d40145038063d603d0738b152.png",
  "graph-7-ld-2.png": "embedded\u002F2a76d57c98cf3923b1d29964581b9a46ddc244e72aa92b6bee28d5ccc9755b31.png",
  "graph-7-ld-3.png": "embedded\u002F0400a8ead41de21bf63afeb8821b3652371f4dcba33f725121f1fda2c83eb674.png",
  "graph-7-ld-4.png": "embedded\u002Ffe1c900516c0aaf1b1359e020612bf641cd5f9bf9e585a51941cb2b15c6cded2.png",
  "graph-7-ld-5.png": "embedded\u002F4d6959686a8ebda2e15f1a0876a09e55068265eeef3c5ca49ddd8056ddfb5fb1.png",
  "graph-7-sd-1.png": "embedded\u002F8e235e5cddb79567a569d25ec1d149a8e328e9cff096a61f6f62ef7d94169f00.png",
  "graph-7-sd-2.png": "embedded\u002F4a0cf4ab66136b5d6112ad4ead6e04bf5ca048999077da8e462f3c94ecf9bd26.png",
  "graph-7-sd-3.png": "embedded\u002Fbe5900a31e7958579d62016e93229a434e90ba9e62335af03bf511a4b97511d9.png",
  "graph-7-sd-4.png": "embedded\u002F994295bd3048b874079b1d5af63c1e954cad41748c88e1d64c216394e88c8b56.png",
  "graph-7-sd-5.png": "embedded\u002Ff6fcdff982b8d32bc0fbea50c0b34ac57ddab318eefd1b319a5c17dcb0489f2d.png",
  "number-3-ld-1.png": "embedded\u002F406addcce822354c502547aee88ed365e0cddd160b55d2a25f64f44db4ee8703.png",
  "number-3-ld-2.png": "embedded\u002Fde88071b065a609e6e4b90bd5b3cabc198387751af728b05e1e10656172f17e3.png",
  "number-3-ld-3.png": "embedded\u002F62b08483c85a74aa55a7ddeb63f3ce8d33b2d7ceabacd8c8a80e869721fc7329.png",
  "number-3-ld-4.png": "embedded\u002Fae8e98f7e7b9901b474f7848c972d5ad0e918d9ff981b8e6d8064f81ccf497e4.png",
  "number-3-ld-5.png": "embedded\u002Fdab63a3553e3f15e892d7cb21183509e5c852611aa865c1434d4c10718203bd7.png",
  "number-3-sd-1.png": "embedded\u002F6bfbae4921c59821ccdfbeae984a04055ca6a201e9e529d032fa6263fdd807e5.png",
  "number-3-sd-2.png": "embedded\u002Fbd71e926d15f19b5381cade44d4f42241fa215bba652aae71cc88d52b3138a44.png",
  "number-3-sd-3.png": "embedded\u002F21b0b7acc68d5aeddd51b63ba1af49fe5aba2a40b3dc62ac6353b97654e17a03.png",
  "number-3-sd-4.png": "embedded\u002Fa88fb2511c8a36e19ba881920d69688ee701e0675ef05da40e06aa9e74077b07.png",
  "number-3-sd-5.png": "embedded\u002F50424f1c06c5228d74d514891e703683db5c3cb6e6aa57779143b28e02a193d7.png",
  "number-5-ld-1.png": "embedded\u002F345dd4f1eae8200fe3b755ec3444145d510317c1d350358fa0bbebc8b7be04b9.png",
  "number-5-ld-2.png": "embedded\u002Fd6b7c285bd52bb476a5fba6d14e25bbcfde8cf07bea46b385238bab66a40e5fa.png",
  "number-5-ld-3.png": "embedded\u002F04f3fe44fcfd8306d9a2aa69f42b9f436a1e40f0da831de87369db0388bea879.png",
  "number-5-ld-4.png": "embedded\u002Fe6f8f3201fc83d3528478429d44a977b18f13f5a494512563942078425529489.png",
  "number-5-ld-5.png": "embedded\u002Fb94663cc8eee90a551d7b5a3251018f4dc3b8200e937fe380fed42b22f612552.png",
  "number-5-sd-1.png": "embedded\u002F318e657bcb45c876fcf4b5269363b13dd178fa30302233c76a28a2ac255bd296.png",
  "number-5-sd-2.png": "embedded\u002F8cda6aef2366a1c411582b0287469a79c38f3abda425802c1a6961157cf6be63.png",
  "number-5-sd-3.png": "embedded\u002Fd02d00f38c3c40fda3340bb6a068db371301db5bf192558891fd8eee46d7db31.png",
  "number-5-sd-4.png": "embedded\u002F45955e3db1e6e1933717c588f733557783aaa377bf067c75a03b9154b91bfba3.png",
  "number-5-sd-5.png": "embedded\u002F516e0bee924c30c9abf985c49f40afe3e1e46ec82a5b6d86cdc5fe8fcabb591c.png",
  "number-7-ld-1.png": "embedded\u002Ff6d7f8b2dca6c6775a4ff6da3607964ed31617e01104ec36945348c337304920.png",
  "number-7-ld-2.png": "embedded\u002F26898b6b64338633ff8b859e2ba9095283e2946769c9f174f0696a481d9c1788.png",
  "number-7-ld-3.png": "embedded\u002F13a115c1348989e2dcf92fc3264bbdcf42f60d2160ecc552703110ed78b6c8c0.png",
  "number-7-ld-4.png": "embedded\u002F43a86b4d856f25038a9e8b9cfa8a155d2cea196e5763f61c1d3b943eb032d194.png",
  "number-7-ld-5.png": "embedded\u002F4da851f45c004735df2156b2c63e8e28b582c10cb76d8899c2859c05c87bc132.png",
  "number-7-sd-1.png": "embedded\u002Ff790196095d376853b1207723c2465667351e1687745d60a00471a4077dad07f.png",
  "number-7-sd-2.png": "embedded\u002Fd06689a1a1b6c34ef67735ff390b5220808a1402c42a24a1608db81fc323791a.png",
  "number-7-sd-3.png": "embedded\u002F9f8f214e9b6bad00752404c9b77535aab8d286d4ada7bb2c7b11748fd32f67b7.png",
  "number-7-sd-4.png": "embedded\u002F223dd6238d7c1e1d77eb43c565a6f6454206bb4fbdbed9d782e88b31c9509279.png",
  "number-7-sd-5.png": "embedded\u002Fa6eb1541d7a1d3e075c5cf9397d7f2e6c2dfe09d307a8a75ea9bfc77a932e328.png"
};

const teaching = new lab.util.fromObject({
  'type': 'lab.html.Page',
  'title': '教示',
  'datacommit': false,
  'items': [
    {
      'type': 'text',
      'title': 'もっとも大きなデータ要素を探す実験',
      'content': '\u003Cp\u003E本日は実験にご協力いただきありがとうございます！\u003C\u002Fp\u003E\n\n\u003Cp\u003E実験では、画面内のどこかに横に並んだ「数字」か「棒グラフ」が表示されます。その中でもっとも大きいデータ要素（最も値の大きな数値か棒）をクリックしてください。\u003C\u002Fp\u003E\n\n\u003Csmall\u003E（タッチパネル液晶をお使いの場合は指タップでも実験可能ですが、画面の小さいスマホは使わないでください）\u003C\u002Fsmall\u003E\n\n\u003Cp\u003E選択はなるべく速く、そしてなるべく正確に行ってください。\u003C\u002Fp\u003E\n\n\u003Cp\u003E毎回、判断していただく画面に先立ち、画面の中央に「＋」、下の方に「クリックしてスタート」という文字がある画面が提示されます。\u003C\u002Fp\u003E\n\n\u003Cp\u003E毎回必ず「＋」に視線を置いた上、「クリックしてスタート」を押して実験を始めてください。指タップでももちろん可能です。\n\u003Cul\u003E\n\u003Cli\u003Eマウスボタン（指）の押し下げではなく、離したとき（mouse-up）に実験が始まります。\n\u003Cli\u003Eですので、マウスを押し下げた上で「＋」に視線を合わせてからマウスボタンを離して実験を始めるとスムーズです。\n\u003C\u002Ful\u003E\n\n\u003Cp\u003E判断いただく数字やグラフは全部で60組となります。すぐ終わると思います。\u003C\u002Fp\u003E\n\n\u003Cp\u003E<p>画面と近すぎず遠すぎず，腕を伸ばしたくらいのところで実験してください。</p>それでは準備ができたら右の「実験を始める」をクリックして実験を始めてください。\u003C\u002Fp\u003E\n\u003Cp\u003Eよろしくお願いします！\u003C\u002Fp\u003E'
    }
  ],
  'scrollTop': true,
  'submitButtonText': '実験を始める',
  'submitButtonPosition': 'right',
  'files': {},
  'responses': {
    '': ''
  },
  'parameters': {},
  'messageHandlers': {}
})

const fixationCross = new lab.util.fromObject({
  'type': 'lab.canvas.Screen',
  // 'timeout': 500,
  'title': 'Fixation Cross',
  'datacommit': false,
  'content': [
    {
      'type': 'i-text',
      'left': 0,
      'top': 0,
      'angle': 0,
      'width': 18.69,
      'height': 36.16,
      'stroke': null,
      'strokeWidth': 1,
      'fill': 'black',
      'text': '+',
      'fontStyle': 'normal',
      'fontWeight': 'normal',
      'fontSize': 32,
      'fontFamily': 'sans-serif',
      'lineHeight': 1.16,
      'textAlign': 'center'
    },
    {
      'type': 'i-text',
      'left': 0,
      'top': 250,
      'angle': 0,
      'width': 108,
      'height': 43.93,
      'stroke': null,
      'strokeWidth': 1,
      'fill': 'black',
      'text': 'クリックして\nスタート',
      'fontStyle': 'normal',
      'fontWeight': 'normal',
      'fontSize': '18',
      'fontFamily': 'sans-serif',
      'lineHeight': 1.16,
      'textAlign': 'center'
    },
    {
      'type': 'aoi',
      'left': 0,
      'top': 250,
      'angle': 0,
      'width': 128,
      'height': 80,
      'stroke': null,
      'strokeWidth': 1,
      'fill': 'rgba(0, 0, 0, 0.2)',
      'label': 'btn_start'
    }
  ],
  'files': {},
  'responses': {
    'mouseup @btn_start': 'start'
  },
  'parameters': {},
  'messageHandlers': {}
})

const stimulusResponse = () => {

  const aoi = (target: number, offset: number) => {
    return {
      'type': 'aoi',
      'left': -332 + 83 * (target + offset),
      'top': 13,
      'angle': 0,
      'width': 65,
      'height': 350,
      'stroke': null,
      'strokeWidth': 1,
      'fill': 'rgba(0, 0, 0, 0.2)',
      'label': target
    }
  }

  const rect = (target: number, offset: number) => {
    return {
      'type': 'rect',
      'left': -332 + 83 * (target + offset),
      'top': 13,
      'angle': 0,
      'width': 65,
      'height': 350,
      'stroke': null,
      'strokeWidth': 1,
      'fill': 'rgba(0, 0, 0, 0.5)',
      'label': target
    }
  }

  let stimulus = new lab.util.fromObject({
    'type': 'lab.canvas.Screen',
    // 'timeout': 500,
    'title': 'Stimulus + Response',
    'content': [
      {
        'type': 'image',
        'left': 0,
        'top': 0,
        'angle': 0,
        'width': 600,
        'height': 400,
        'stroke': null,
        'strokeWidth': 0,
        'fill': 'black',
        'src': '${ this.files[parameters.img] }',
        'autoScale': false
      }
    ],
    'files': imageFiles,
    'responses': {
      'click @1': '1',
      'click @2': '2',
      'click @3': '3',
      'click @4': '4',
      'click @5': '5',
      'click @6': '6',
      'click @7': '7'
    },
    'parameters': {
      'disp_x': 0,
      'disp_y': 0
    },
    'messageHandlers': {

      'before:prepare': function () {

        let options = (<any>this).options
        let contents = options.content
        const aggregateParameters = (<any>this).aggregateParameters

        // 正解
        options.correctResponse = aggregateParameters.max_index

        // aoiを動的に追加する
        const offset = (7 - aggregateParameters.size) / 2
        for (let i = 0; i < 7; i++){
          let offset = (7 - aggregateParameters.size) / 2
          if (i >= aggregateParameters.size) {
            offset = -999
          }
          contents.push(aoi(i+1, offset))
          //contents.push(rect(i+1, offset))
        }

        // 表示位置をランダムにする

        const width = 200
        const height = 200

        const x = (getRandomInt(width) - width/2);
        const y = (getRandomInt(height) - height/2);
        
        contents.forEach(function (element:any) {
          element.left += x
          element.top += y
        });

        (<any>this).options.parameters.disp_x = x;
        (<any>this).options.parameters.disp_y = y;
        
      },
      'run': function () {
        const canvas = document.getElementsByTagName('canvas')[0]
        console.log(canvas)
      }
    }
  })

 
  return stimulus
}

const closing = new lab.util.fromObject({
  'type': 'lab.html.Page',
  'title': 'データDL指示・御礼',
  'datacommit': false,
  'items': [
    {
      'type': 'text',
      'title': 'お疲れ様でした！',
      'content': '画面右下の「データダウンロード」を押してCSVファイルを保存し，指定のフォームからアップロードしてください。\n\n\u003Cbr\u003E\u003Cbr\u003Eデータは研究以外の目的には使用しません。またこのCSVファイルには個人が特定できるデータは含まれていません。実験にご協力いただきありがとうございました！'
    }
  ],
  'scrollTop': true,
  'submitButtonText': 'データダウンロード',
  'submitButtonPosition': 'right',
  'files': {},
  'responses': {
    '': ''
  },
  'parameters': {},
  'messageHandlers': {},
  'events': {
    'click button': function () {
      (<any>this).options.datastore.download()
    }
  }
})


// Define the sequence of components that define the study

const template = new lab.flow.Sequence({
  'content': [
    fixationCross,
    stimulusResponse()
  ],
  'shuffle': false
})

const experiment = new lab.flow.Sequence({
  datastore: new lab.data.Store(),
  content: [
    teaching,
    new lab.flow.Loop({
      'title':'繰り返し（実験パラメータ）',
      'templateParameters': templateParameters,
      'template': template,
      'shuffle': true
    }),
    closing
  ]
})

experiment.run()