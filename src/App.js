import React from "react";
import VisGraph from "react-vis-graph-wrapper";
import "./styles.css";

export default function App() {
  const graph = {
    nodes: [
      {
        id: "Air",
        label: "Air",
        value: "1",
        color: "#566573"
      },
      {
        id: "Ground",
        label: "Ground",
        value: "1",
        color: "#900C3F"
      },
      {
        id: "aim0159",
        label: "73 Room",
        value: "14895.463779"
      },
      {
        id: "aim0180",
        label: "4 Vestibule",
        value: "7037.4704101"
      },
      {
        id: "aim0281",
        label: "45 Office",
        value: "900.050255"
      },
      {
        id: "aim0381",
        label: "18 Office",
        value: "900.050255"
      },
      {
        id: "aim0481",
        label: "19 Office",
        value: "900.050255"
      },
      {
        id: "aim0581",
        label: "20 Office",
        value: "900.050255"
      },
      {
        id: "aim0681",
        label: "21 Conference",
        value: "1857.1868173"
      },
      {
        id: "aim0826",
        label: "22 Office",
        value: "900.050255"
      },
      {
        id: "aim0926",
        label: "38 Office",
        value: "900.050255"
      },
      {
        id: "aim1026",
        label: "47 Circulation",
        value: "11224.3138927"
      },
      {
        id: "aim1126",
        label: "2-08 Analytical Space",
        value: "611.6717177"
      },
      {
        id: "aim1226",
        label: "2-07 Analytical Space",
        value: "611.6717177"
      },
      {
        id: "aim1326",
        label: "2-06 Analytical Space",
        value: "611.6717177"
      },
      {
        id: "aim1426",
        label: "2-05 Analytical Space",
        value: "611.6717177"
      },
      {
        id: "aim1526",
        label: "2-09 Analytical Space",
        value: "1259.6710854"
      },
      {
        id: "aim1671",
        label: "2-04 Analytical Space",
        value: "611.6717177"
      },
      {
        id: "aim1771",
        label: "2-03 Analytical Space",
        value: "611.6717177"
      },
      {
        id: "aim1871",
        label: "58 Training",
        value: "14401.3594273"
      },
      {
        id: "aim2017",
        label: "57 Office",
        value: "900.050255"
      },
      {
        id: "aim2163",
        label: "56 Office",
        value: "900.050255"
      },
      {
        id: "aim2309",
        label: "55 Office",
        value: "900.050255"
      },
      {
        id: "aim2455",
        label: "54 Office",
        value: "900.050255"
      },
      {
        id: "aim2601",
        label: "53 Conference",
        value: "1857.1868173"
      },
      {
        id: "aim2792",
        label: "52 Office",
        value: "900.050255"
      },
      {
        id: "aim2938",
        label: "51 Office",
        value: "900.050255"
      },
      {
        id: "aim3050",
        label: "50 Circulation",
        value: "13666.5379137"
      },
      {
        id: "aim3286",
        label: "3-06 Analytical Space",
        value: "611.6717177"
      },
      {
        id: "aim3431",
        label: "3-05 Analytical Space",
        value: "611.6717177"
      },
      {
        id: "aim3576",
        label: "3-04 Analytical Space",
        value: "611.6717177"
      },
      {
        id: "aim3721",
        label: "3-03 Analytical Space",
        value: "611.6717177"
      },
      {
        id: "aim3866",
        label: "3-08 Analytical Space",
        value: "1259.6710854"
      },
      {
        id: "aim4056",
        label: "3-02 Analytical Space",
        value: "611.6717177"
      },
      {
        id: "aim4201",
        label: "3-01 Analytical Space",
        value: "611.6717177"
      },
      {
        id: "aim4346",
        label: "3-07 Analytical Space",
        value: "9402.6370598"
      },
      {
        id: "aim4491",
        label: "33 Mechanical",
        value: "101473.9394448"
      },
      {
        id: "aim5223",
        label: "1 Training",
        value: "3262.168503"
      },
      {
        id: "aim5595",
        label: "64 Training",
        value: "3176.0236195"
      },
      {
        id: "aim6508",
        label: "24 Stair",
        value: "1899.0116442"
      },
      {
        id: "aim6608",
        label: "80 Room",
        value: "16121.8225177"
      },
      {
        id: "aim6664",
        label: "9 Mech",
        value: "1014.2757822"
      },
      {
        id: "aim6765",
        label: "8 Training",
        value: "6576.2336489"
      },
      {
        id: "aim7001",
        label: "44 Conference",
        value: "3262.168503"
      },
      {
        id: "aim7239",
        label: "6 Vestibule",
        value: "5306.4288966"
      },
      {
        id: "aim7340",
        label: "66 Stair",
        value: "1832.9088414"
      },
      {
        id: "aim7440",
        label: "79 Room",
        value: "16458.3477562"
      },
      {
        id: "aim7541",
        label: "65 Mech",
        value: "984.0199115"
      },
      {
        id: "aim7642",
        label: "60 Training",
        value: "6370.9414342"
      },
      {
        id: "aim7878",
        label: "59 Conference",
        value: "3160.8198117"
      },
      {
        id: "aim8729",
        label: "74 Room",
        value: "40379.2454152"
      },
      {
        id: "aim9104",
        label: "49 Room",
        value: "1294.2017478"
      },
      {
        id: "aim9580",
        label: "34 Room",
        value: "1067.770656"
      },
      {
        id: "aim14872",
        label: "3 Circulation",
        value: "13642.4483823"
      },
      {
        id: "aim14951",
        label: "43 Stair",
        value: "2192.8161629"
      },
      {
        id: "aim15012",
        label: "42 Mech",
        value: "1745.1624935"
      },
      {
        id: "aim15118",
        label: "40 Elevator",
        value: "740.7707103"
      },
      {
        id: "aim15265",
        label: "27 Female",
        value: "1709.1425404"
      },
      {
        id: "aim15320",
        label: "26 Male",
        value: "1713.9756115"
      },
      {
        id: "aim15513",
        label: "11 Conference",
        value: "2949.7209062"
      },
      {
        id: "aim15672",
        label: "10 Classroom",
        value: "2937.1406639"
      },
      {
        id: "aim16775",
        label: "30 Elevator",
        value: "720.4174921"
      },
      {
        id: "aim16831",
        label: "29 Mechanical",
        value: "1703.3298232"
      },
      {
        id: "aim16938",
        label: "69 Stair",
        value: "2121.3592575"
      },
      {
        id: "aim17000",
        label: "2-12 Analytical Space",
        value: "152.8772647"
      },
      {
        id: "aim17056",
        label: "68 Male",
        value: "932.1727905"
      },
      {
        id: "aim17118",
        label: "2-02 Analytical Space",
        value: "1997.24644"
      },
      {
        id: "aim17127",
        label: "62 Conference",
        value: "5031.7676608"
      },
      {
        id: "aim17183",
        label: "2-01 Analytical Space",
        value: "1986.9532761"
      },
      {
        id: "aim17192",
        label: "63 Conference",
        value: "5045.8117785"
      },
      {
        id: "aim17295",
        label: "2-15 Analytical Space",
        value: "176.1271304"
      },
      {
        id: "aim17351",
        label: "2-14 Analytical Space",
        value: "270.8716352"
      },
      {
        id: "aim17407",
        label: "2-11 Analytical Space",
        value: "71.6044099"
      },
      {
        id: "aim17463",
        label: "67 Female",
        value: "820.1887737"
      },
      {
        id: "aim17525",
        label: "2-13 Analytical Space",
        value: "173.5021304"
      },
      {
        id: "aim17581",
        label: "2-10 Analytical Space",
        value: "484.362735"
      }
    ],
    edges: [
      {
        id: "aim0217",
        value: 261.7017110625,
        from: "aim0159",
        to: "aim0180"
      },
      {
        id: "aim0318",
        value: 81.875,
        from: "aim0281",
        to: "Air"
      },
      {
        id: "aim0418",
        value: 81.875,
        from: "aim0381",
        to: "Air"
      },
      {
        id: "aim0518",
        value: 81.875,
        from: "aim0481",
        to: "Air"
      },
      {
        id: "aim0618",
        value: 81.875,
        from: "aim0581",
        to: "Air"
      },
      {
        id: "aim0718",
        value: 163.75,
        from: "aim0681",
        to: "Air"
      },
      {
        id: "aim0863",
        value: 81.875,
        from: "aim0826",
        to: "Air"
      },
      {
        id: "aim0963",
        value: 81.875,
        from: "aim0926",
        to: "Air"
      },
      {
        id: "aim1063",
        value: 273.3645838,
        from: "aim1026",
        to: "Air"
      },
      {
        id: "aim1163",
        value: 58.125,
        from: "aim1126",
        to: "Air"
      },
      {
        id: "aim1263",
        value: 58.125,
        from: "aim1226",
        to: "Air"
      },
      {
        id: "aim1363",
        value: 58.125,
        from: "aim1326",
        to: "Air"
      },
      {
        id: "aim1463",
        value: 58.125,
        from: "aim1426",
        to: "Air"
      },
      {
        id: "aim1563",
        value: 116.25,
        from: "aim1526",
        to: "Air"
      },
      {
        id: "aim1708",
        value: 58.125,
        from: "aim1671",
        to: "Air"
      },
      {
        id: "aim1808",
        value: 58.125,
        from: "aim1771",
        to: "Air"
      },
      {
        id: "aim1908",
        value: 124.12121803125,
        from: "aim1871",
        to: "aim0180"
      },
      {
        id: "aim2054",
        value: 55.951946,
        from: "aim2017",
        to: "Air"
      },
      {
        id: "aim2145",
        value: 12.638176000000001,
        from: "aim2017",
        to: "Air"
      },
      {
        id: "aim2200",
        value: 55.951946,
        from: "aim2163",
        to: "Air"
      },
      {
        id: "aim2291",
        value: 12.638176000000001,
        from: "aim2163",
        to: "Air"
      },
      {
        id: "aim2346",
        value: 55.951946,
        from: "aim2309",
        to: "Air"
      },
      {
        id: "aim2437",
        value: 12.638176000000001,
        from: "aim2309",
        to: "Air"
      },
      {
        id: "aim2492",
        value: 55.951946,
        from: "aim2455",
        to: "Air"
      },
      {
        id: "aim2583",
        value: 12.638176000000001,
        from: "aim2455",
        to: "Air"
      },
      {
        id: "aim2638",
        value: 111.903892,
        from: "aim2601",
        to: "Air"
      },
      {
        id: "aim2774",
        value: 25.276352000000003,
        from: "aim2601",
        to: "Air"
      },
      {
        id: "aim2829",
        value: 55.951946,
        from: "aim2792",
        to: "Air"
      },
      {
        id: "aim2920",
        value: 12.638176000000001,
        from: "aim2792",
        to: "Air"
      },
      {
        id: "aim2983",
        value: 70.19361494784141,
        from: "aim2938",
        to: "Air"
      },
      {
        id: "aim3087",
        value: 159.86946641875,
        from: "aim3050",
        to: "Air"
      },
      {
        id: "aim3178",
        value: 138.17247254004394,
        from: "aim1871",
        to: "Air"
      },
      {
        id: "aim3323",
        value: 58.125,
        from: "aim3286",
        to: "Air"
      },
      {
        id: "aim3468",
        value: 58.125,
        from: "aim3431",
        to: "Air"
      },
      {
        id: "aim3613",
        value: 58.125,
        from: "aim3576",
        to: "Air"
      },
      {
        id: "aim3758",
        value: 58.125,
        from: "aim3721",
        to: "Air"
      },
      {
        id: "aim3903",
        value: 116.25,
        from: "aim3866",
        to: "Air"
      },
      {
        id: "aim4093",
        value: 58.125,
        from: "aim4056",
        to: "Air"
      },
      {
        id: "aim4238",
        value: 58.125,
        from: "aim4201",
        to: "Air"
      },
      {
        id: "aim4383",
        value: 113.49511738125,
        from: "aim4346",
        to: "Air"
      },
      {
        id: "aim4528",
        value: 1903.8706684989584,
        from: "aim4491",
        to: "Air"
      },
      {
        id: "aim5024",
        value: 273.3645838,
        from: "aim1026",
        to: "Air"
      },
      {
        id: "aim5160",
        value: 197.4340284,
        from: "aim1026",
        to: "Air"
      },
      {
        id: "aim5260",
        value: 280,
        from: "aim5223",
        to: "Air"
      },
      {
        id: "aim5396",
        value: 159.86946641875,
        from: "aim3050",
        to: "Air"
      },
      {
        id: "aim5532",
        value: 115.4636505375,
        from: "aim3050",
        to: "Air"
      },
      {
        id: "aim5632",
        value: 280,
        from: "aim5595",
        to: "Air"
      },
      {
        id: "aim5903",
        value: 113.49511738125,
        from: "aim4346",
        to: "Air"
      },
      {
        id: "aim6129",
        value: 81.9703778625,
        from: "aim4346",
        to: "Air"
      },
      {
        id: "aim6265",
        value: 791.1158580211409,
        from: "aim4491",
        to: "Air"
      },
      {
        id: "aim6545",
        value: 132.8366675190167,
        from: "aim6508",
        to: "Air"
      },
      {
        id: "aim6645",
        value: 171.34117,
        from: "aim6508",
        to: "aim6608"
      },
      {
        id: "aim6701",
        value: 92.6770838,
        from: "aim6664",
        to: "aim6608"
      },
      {
        id: "aim6802",
        value: 560,
        from: "aim6765",
        to: "aim6608"
      },
      {
        id: "aim7038",
        value: 280,
        from: "aim7001",
        to: "aim6608"
      },
      {
        id: "aim7175",
        value: 115.8051398,
        from: "aim0159",
        to: "aim6608"
      },
      {
        id: "aim7276",
        value: 142.6532061050554,
        from: "aim0159",
        to: "aim7239"
      },
      {
        id: "aim7377",
        value: 131.8533804,
        from: "aim7340",
        to: "Air"
      },
      {
        id: "aim7477",
        value: 171.34117,
        from: "aim7340",
        to: "aim7440"
      },
      {
        id: "aim7578",
        value: 92.6770838,
        from: "aim7541",
        to: "aim7440"
      },
      {
        id: "aim7679",
        value: 560,
        from: "aim7642",
        to: "aim7440"
      },
      {
        id: "aim7915",
        value: 280,
        from: "aim7878",
        to: "aim7440"
      },
      {
        id: "aim8052",
        value: 113.5217776,
        from: "aim1871",
        to: "aim7440"
      },
      {
        id: "aim8144",
        value: 67.6582878496877,
        from: "aim1871",
        to: "aim7239"
      },
      {
        id: "aim8191",
        value: 64.556879039781,
        from: "aim1871",
        to: "Air"
      },
      {
        id: "aim8253",
        value: 1517.3347523609946,
        from: "aim4491",
        to: "Air"
      },
      {
        id: "aim8766",
        value: 826.7291662,
        from: "aim0159",
        to: "aim8729"
      },
      {
        id: "aim9038",
        value: 59.35988883037001,
        from: "aim1871",
        to: "aim8729"
      },
      {
        id: "aim9085",
        value: 59.35988883037001,
        from: "aim1871",
        to: "aim8729"
      },
      {
        id: "aim9141",
        value: 554.610903,
        from: "aim1871",
        to: "aim9104"
      },
      {
        id: "aim9278",
        value: 59.8883121645636,
        from: "aim1871",
        to: "Air"
      },
      {
        id: "aim9369",
        value: 59.8883121645636,
        from: "aim1871",
        to: "Air"
      },
      {
        id: "aim9468",
        value: 587.6609548191843,
        from: "aim4491",
        to: "Air"
      },
      {
        id: "aim9617",
        value: 425.4492851326229,
        from: "aim4491",
        to: "aim9580"
      },
      {
        id: "aim9754",
        value: 80.0262008,
        from: "aim6608",
        to: "Air"
      },
      {
        id: "aim9845",
        value: 84.25377520529476,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim9936",
        value: 71.1935406,
        from: "aim6608",
        to: "Air"
      },
      {
        id: "aim10027",
        value: 74.95450872111657,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim10118",
        value: 71.1935406,
        from: "aim6608",
        to: "Air"
      },
      {
        id: "aim10209",
        value: 74.95450872111657,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim10300",
        value: 71.1935406,
        from: "aim6608",
        to: "Air"
      },
      {
        id: "aim10391",
        value: 74.95450872111657,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim10482",
        value: 71.1935406,
        from: "aim6608",
        to: "Air"
      },
      {
        id: "aim10573",
        value: 74.95450872111657,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim10664",
        value: 71.1935406,
        from: "aim6608",
        to: "Air"
      },
      {
        id: "aim10755",
        value: 74.95450872111657,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim10846",
        value: 71.1935406,
        from: "aim6608",
        to: "Air"
      },
      {
        id: "aim10937",
        value: 74.95450872111657,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim11028",
        value: 71.1935406,
        from: "aim6608",
        to: "Air"
      },
      {
        id: "aim11119",
        value: 74.95450872111657,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim11210",
        value: 71.1935406,
        from: "aim6608",
        to: "Air"
      },
      {
        id: "aim11301",
        value: 74.95450872111657,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim11392",
        value: 71.1935406,
        from: "aim6608",
        to: "Air"
      },
      {
        id: "aim11483",
        value: 74.95450872111657,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim11574",
        value: 71.1935406,
        from: "aim6608",
        to: "Air"
      },
      {
        id: "aim11665",
        value: 74.95450872111657,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim11756",
        value: 71.1935406,
        from: "aim6608",
        to: "Air"
      },
      {
        id: "aim11847",
        value: 74.95450872111657,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim11938",
        value: 71.1935406,
        from: "aim6608",
        to: "Air"
      },
      {
        id: "aim12029",
        value: 74.95450872111657,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim12120",
        value: 71.1935406,
        from: "aim6608",
        to: "Air"
      },
      {
        id: "aim12211",
        value: 74.95450872111657,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim12302",
        value: 71.1935406,
        from: "aim6608",
        to: "Air"
      },
      {
        id: "aim12393",
        value: 74.95450872111657,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim12484",
        value: 71.1935406,
        from: "aim6608",
        to: "Air"
      },
      {
        id: "aim12575",
        value: 74.95450872111657,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim12666",
        value: 71.1935406,
        from: "aim6608",
        to: "Air"
      },
      {
        id: "aim12757",
        value: 74.95450872111657,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim12848",
        value: 72.8620522,
        from: "aim6608",
        to: "Air"
      },
      {
        id: "aim12939",
        value: 76.71116341506058,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim13030",
        value: 73.2083338,
        from: "aim6508",
        to: "Air"
      },
      {
        id: "aim13076",
        value: 73.2083338,
        from: "aim7340",
        to: "Air"
      },
      {
        id: "aim13122",
        value: 81.12846455115682,
        from: "aim4491",
        to: "Air"
      },
      {
        id: "aim13168",
        value: 127.24465231200423,
        from: "aim1026",
        to: "Air"
      },
      {
        id: "aim13259",
        value: 66.41288086875001,
        from: "aim3050",
        to: "Air"
      },
      {
        id: "aim13350",
        value: 47.14807573125,
        from: "aim4346",
        to: "Air"
      },
      {
        id: "aim13396",
        value: 138.78108346133143,
        from: "aim4491",
        to: "Air"
      },
      {
        id: "aim13487",
        value: 14.285443200000001,
        from: "aim6608",
        to: "Air"
      },
      {
        id: "aim13578",
        value: 62.518750000000004,
        from: "aim6608",
        to: "Air"
      },
      {
        id: "aim13669",
        value: 15.04010571598704,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim13760",
        value: 65.8214516740625,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim13851",
        value: 2152.0198173734952,
        from: "aim8729",
        to: "Air"
      },
      {
        id: "aim13942",
        value: 421.5968417703125,
        from: "aim8729",
        to: "Air"
      },
      {
        id: "aim14033",
        value: 421.5968417703125,
        from: "aim8729",
        to: "Air"
      },
      {
        id: "aim14147",
        value: 297.0647222344857,
        from: "aim7239",
        to: "Air"
      },
      {
        id: "aim14263",
        value: 1953.9310339336748,
        from: "aim8729",
        to: "Air"
      },
      {
        id: "aim14344",
        value: 385.04231728125,
        from: "aim0180",
        to: "Air"
      },
      {
        id: "aim14601",
        value: 1136.9904138137622,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim14733",
        value: 5542.398661149448,
        from: "aim4491",
        to: "Air"
      },
      {
        id: "aim14762",
        value: 1151.3043434531262,
        from: "aim4491",
        to: "Air"
      },
      {
        id: "aim14808",
        value: 1121.9895827,
        from: "aim0159",
        to: "Ground"
      },
      {
        id: "aim14854",
        value: 258.4375,
        from: "aim7001",
        to: "Ground"
      },
      {
        id: "aim14925",
        value: 912.0000002558896,
        from: "aim14872",
        to: "Ground"
      },
      {
        id: "aim14992",
        value: 185.04421654545982,
        from: "aim14951",
        to: "Ground"
      },
      {
        id: "aim15053",
        value: 145.9517478535601,
        from: "aim15012",
        to: "Ground"
      },
      {
        id: "aim15155",
        value: 62.64986861420814,
        from: "aim15118",
        to: "Ground"
      },
      {
        id: "aim15201",
        value: 129.21875,
        from: "aim0281",
        to: "Ground"
      },
      {
        id: "aim15247",
        value: 129.21875,
        from: "aim0381",
        to: "Ground"
      },
      {
        id: "aim15302",
        value: 137.13541700000002,
        from: "aim15265",
        to: "Ground"
      },
      {
        id: "aim15357",
        value: 137.13541700000002,
        from: "aim15320",
        to: "Ground"
      },
      {
        id: "aim15403",
        value: 516.875,
        from: "aim6765",
        to: "Ground"
      },
      {
        id: "aim15449",
        value: 129.21875,
        from: "aim0481",
        to: "Ground"
      },
      {
        id: "aim15495",
        value: 129.21875,
        from: "aim0581",
        to: "Ground"
      },
      {
        id: "aim15562",
        value: 400,
        from: "aim15513",
        to: "Ground"
      },
      {
        id: "aim15608",
        value: 258.4375,
        from: "aim0681",
        to: "Ground"
      },
      {
        id: "aim15654",
        value: 85.5401208734375,
        from: "aim6664",
        to: "Ground"
      },
      {
        id: "aim15709",
        value: 400,
        from: "aim15672",
        to: "Ground"
      },
      {
        id: "aim15755",
        value: 129.21875,
        from: "aim0826",
        to: "Ground"
      },
      {
        id: "aim15805",
        value: 164.87745415756552,
        from: "aim6508",
        to: "Ground"
      },
      {
        id: "aim15853",
        value: 129.21875,
        from: "aim0926",
        to: "Ground"
      },
      {
        id: "aim15915",
        value: 777.3333313233604,
        from: "aim1026",
        to: "Ground"
      },
      {
        id: "aim15969",
        value: 258.4375,
        from: "aim5223",
        to: "Ground"
      },
      {
        id: "aim16095",
        value: 1168.9590879101431,
        from: "aim6608",
        to: "Ground"
      },
      {
        id: "aim16291",
        value: 1153.0534409876736,
        from: "aim0159",
        to: "aim1871"
      },
      {
        id: "aim16338",
        value: 129.21875,
        from: "aim1126",
        to: "aim2017"
      },
      {
        id: "aim16385",
        value: 129.21875,
        from: "aim1226",
        to: "aim2163"
      },
      {
        id: "aim16432",
        value: 129.21875,
        from: "aim1326",
        to: "aim2309"
      },
      {
        id: "aim16479",
        value: 129.21875,
        from: "aim1426",
        to: "aim2455"
      },
      {
        id: "aim16526",
        value: 258.4375,
        from: "aim1526",
        to: "aim2601"
      },
      {
        id: "aim16573",
        value: 129.21875,
        from: "aim1671",
        to: "aim2792"
      },
      {
        id: "aim16620",
        value: 129.21875,
        from: "aim1771",
        to: "aim2938"
      },
      {
        id: "aim16679",
        value: 775.6002564370224,
        from: "aim1026",
        to: "aim3050"
      },
      {
        id: "aim16748",
        value: 911.9219199527256,
        from: "aim14872",
        to: "aim3050"
      },
      {
        id: "aim16812",
        value: 62.64986861420814,
        from: "aim15118",
        to: "aim16775"
      },
      {
        id: "aim16872",
        value: 145.9517478535601,
        from: "aim15012",
        to: "aim16831"
      },
      {
        id: "aim16979",
        value: 185.04421654545982,
        from: "aim14951",
        to: "aim16938"
      },
      {
        id: "aim17037",
        value: 15.75,
        from: "aim15320",
        to: "aim17000"
      },
      {
        id: "aim17097",
        value: 80.26171864540323,
        from: "aim15320",
        to: "aim17056"
      },
      {
        id: "aim17164",
        value: 400,
        from: "aim17118",
        to: "aim17127"
      },
      {
        id: "aim17229",
        value: 400,
        from: "aim17183",
        to: "aim17192"
      },
      {
        id: "aim17276",
        value: 258.4375,
        from: "aim5223",
        to: "aim5595"
      },
      {
        id: "aim17332",
        value: 16.875,
        from: "aim15320",
        to: "aim17295"
      },
      {
        id: "aim17388",
        value: 24.248697825,
        from: "aim15320",
        to: "aim17351"
      },
      {
        id: "aim17444",
        value: 8.24999985,
        from: "aim15265",
        to: "aim17407"
      },
      {
        id: "aim17504",
        value: 72.7057289138166,
        from: "aim15265",
        to: "aim17463"
      },
      {
        id: "aim17562",
        value: 16.500000149999998,
        from: "aim15265",
        to: "aim17525"
      },
      {
        id: "aim17618",
        value: 39.679687349999995,
        from: "aim15265",
        to: "aim17581"
      },
      {
        id: "aim17665",
        value: 258.4375,
        from: "aim7001",
        to: "aim7878"
      },
      {
        id: "aim17712",
        value: 516.875,
        from: "aim6765",
        to: "aim7642"
      },
      {
        id: "aim17759",
        value: 85.5401208734375,
        from: "aim6664",
        to: "aim7541"
      },
      {
        id: "aim17810",
        value: 164.87745415756552,
        from: "aim6508",
        to: "aim7340"
      },
      {
        id: "aim17859",
        value: 1153.0534409876736,
        from: "aim1871",
        to: "aim4491"
      },
      {
        id: "aim17906",
        value: 129.21875,
        from: "aim3286",
        to: "aim4491"
      },
      {
        id: "aim17953",
        value: 129.21875,
        from: "aim3431",
        to: "aim4491"
      },
      {
        id: "aim18000",
        value: 129.21875,
        from: "aim3576",
        to: "aim4491"
      },
      {
        id: "aim18047",
        value: 129.21875,
        from: "aim3721",
        to: "aim4491"
      },
      {
        id: "aim18094",
        value: 258.4375,
        from: "aim3866",
        to: "aim4491"
      },
      {
        id: "aim18141",
        value: 129.21875,
        from: "aim4056",
        to: "aim4491"
      },
      {
        id: "aim18188",
        value: 129.21875,
        from: "aim4201",
        to: "aim4491"
      },
      {
        id: "aim18267",
        value: 1694.1368807288095,
        from: "aim4346",
        to: "aim4491"
      },
      {
        id: "aim18358",
        value: 89.4278829691367,
        from: "aim9104",
        to: "aim9580"
      },
      {
        id: "aim18419",
        value: 62.64986861420814,
        from: "aim16775",
        to: "aim4491"
      },
      {
        id: "aim18470",
        value: 145.9517478535601,
        from: "aim16831",
        to: "aim4491"
      },
      {
        id: "aim18568",
        value: 185.04421654545982,
        from: "aim16938",
        to: "aim4491"
      },
      {
        id: "aim18617",
        value: 15.75,
        from: "aim17000",
        to: "aim4491"
      },
      {
        id: "aim18668",
        value: 80.26171864540323,
        from: "aim17056",
        to: "aim4491"
      },
      {
        id: "aim18717",
        value: 400,
        from: "aim17127",
        to: "aim4491"
      },
      {
        id: "aim18764",
        value: 400,
        from: "aim17192",
        to: "aim4491"
      },
      {
        id: "aim18811",
        value: 258.4375,
        from: "aim5595",
        to: "aim4491"
      },
      {
        id: "aim18858",
        value: 16.875,
        from: "aim17295",
        to: "aim4491"
      },
      {
        id: "aim18905",
        value: 24.248697825,
        from: "aim17351",
        to: "aim4491"
      },
      {
        id: "aim18952",
        value: 8.24999985,
        from: "aim17407",
        to: "aim4491"
      },
      {
        id: "aim19003",
        value: 72.7057289138166,
        from: "aim17463",
        to: "aim4491"
      },
      {
        id: "aim19052",
        value: 16.500000149999998,
        from: "aim17525",
        to: "aim4491"
      },
      {
        id: "aim19099",
        value: 39.679687349999995,
        from: "aim17581",
        to: "aim4491"
      },
      {
        id: "aim19146",
        value: 258.4375,
        from: "aim7878",
        to: "aim4491"
      },
      {
        id: "aim19193",
        value: 516.875,
        from: "aim7642",
        to: "aim4491"
      },
      {
        id: "aim19240",
        value: 85.5401208734375,
        from: "aim7541",
        to: "aim4491"
      },
      {
        id: "aim19291",
        value: 164.87745415756552,
        from: "aim7340",
        to: "aim4491"
      },
      {
        id: "aim19346",
        value: 1081.0423351691722,
        from: "aim6608",
        to: "aim7440"
      },
      {
        id: "aim19404",
        value: 297.57511682275845,
        from: "aim0180",
        to: "Air"
      },
      {
        id: "aim19687",
        value: 65.72112772936094,
        from: "aim0180",
        to: "Air"
      },
      {
        id: "aim19847",
        value: 155.39426624180294,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim19924",
        value: 80.66407694222907,
        from: "aim7239",
        to: "Air"
      },
      {
        id: "aim20060",
        value: 488.6072318126112,
        from: "aim7239",
        to: "aim8729"
      },
      {
        id: "aim20242",
        value: 217.27018711433794,
        from: "aim7239",
        to: "Air"
      },
      {
        id: "aim20423",
        value: 415.51178995925926,
        from: "aim0180",
        to: "aim8729"
      },
      {
        id: "aim20560",
        value: 398.588866546875,
        from: "aim0180",
        to: "Air"
      },
      {
        id: "aim20651",
        value: 297.0647222344857,
        from: "aim7239",
        to: "Ground"
      },
      {
        id: "aim20697",
        value: 2024.4847007390624,
        from: "aim8729",
        to: "Ground"
      },
      {
        id: "aim20743",
        value: 385.04231728125,
        from: "aim0180",
        to: "Ground"
      },
      {
        id: "aim20789",
        value: 105.7978515625,
        from: "aim0826",
        to: "aim0681"
      },
      {
        id: "aim20836",
        value: 75.1083984375,
        from: "aim1671",
        to: "aim1526"
      },
      {
        id: "aim20883",
        value: 180.90625,
        from: "aim7001",
        to: "aim6765"
      },
      {
        id: "aim20975",
        value: 191.9895838,
        from: "aim15265",
        to: "aim14872"
      },
      {
        id: "aim21022",
        value: 275.5520838,
        from: "aim14951",
        to: "aim14872"
      },
      {
        id: "aim21069",
        value: 105.7978515625,
        from: "aim0926",
        to: "aim0826"
      },
      {
        id: "aim21116",
        value: 75.1083984375,
        from: "aim1771",
        to: "aim1671"
      },
      {
        id: "aim21163",
        value: 105.7978515625,
        from: "aim0681",
        to: "aim0581"
      },
      {
        id: "aim21210",
        value: 75.1083984375,
        from: "aim1526",
        to: "aim1426"
      },
      {
        id: "aim21257",
        value: 105.7978515625,
        from: "aim0581",
        to: "aim0481"
      },
      {
        id: "aim21304",
        value: 75.1083984375,
        from: "aim1426",
        to: "aim1326"
      },
      {
        id: "aim21351",
        value: 105.7978515625,
        from: "aim0381",
        to: "aim0281"
      },
      {
        id: "aim21398",
        value: 75.1083984375,
        from: "aim1226",
        to: "aim1126"
      },
      {
        id: "aim21445",
        value: 280,
        from: "aim5223",
        to: "aim1026"
      },
      {
        id: "aim21582",
        value: 81.875,
        from: "aim14872",
        to: "aim0281"
      },
      {
        id: "aim21674",
        value: 81.875,
        from: "aim14872",
        to: "aim0381"
      },
      {
        id: "aim21766",
        value: 81.875,
        from: "aim14872",
        to: "aim0481"
      },
      {
        id: "aim21858",
        value: 81.875,
        from: "aim14872",
        to: "aim0581"
      },
      {
        id: "aim21950",
        value: 163.75,
        from: "aim14872",
        to: "aim0681"
      },
      {
        id: "aim22087",
        value: 81.875,
        from: "aim14872",
        to: "aim0826"
      },
      {
        id: "aim22179",
        value: 81.875,
        from: "aim14872",
        to: "aim0926"
      },
      {
        id: "aim22271",
        value: 58.125,
        from: "aim14872",
        to: "aim1126"
      },
      {
        id: "aim22318",
        value: 58.125,
        from: "aim14872",
        to: "aim1226"
      },
      {
        id: "aim22365",
        value: 58.125,
        from: "aim14872",
        to: "aim1326"
      },
      {
        id: "aim22412",
        value: 58.125,
        from: "aim14872",
        to: "aim1426"
      },
      {
        id: "aim22459",
        value: 116.25,
        from: "aim14872",
        to: "aim1526"
      },
      {
        id: "aim22506",
        value: 58.125,
        from: "aim14872",
        to: "aim1671"
      },
      {
        id: "aim22553",
        value: 58.125,
        from: "aim14872",
        to: "aim1771"
      },
      {
        id: "aim22600",
        value: 180.90625,
        from: "aim5223",
        to: "aim1026"
      },
      {
        id: "aim22692",
        value: 181.4895838,
        from: "aim6664",
        to: "aim6508"
      },
      {
        id: "aim22739",
        value: 92.6770838,
        from: "aim14872",
        to: "aim6664"
      },
      {
        id: "aim22831",
        value: 560,
        from: "aim14872",
        to: "aim6765"
      },
      {
        id: "aim23058",
        value: 280,
        from: "aim14872",
        to: "aim7001"
      },
      {
        id: "aim23195",
        value: 163.75,
        from: "aim1026",
        to: "aim15672"
      },
      {
        id: "aim23332",
        value: 92.4583338,
        from: "aim1026",
        to: "aim14872"
      },
      {
        id: "aim23379",
        value: 105.7978515625,
        from: "aim1026",
        to: "aim0926"
      },
      {
        id: "aim23426",
        value: 116.25,
        from: "aim1026",
        to: "aim17183"
      },
      {
        id: "aim23473",
        value: 75.1083984375,
        from: "aim1026",
        to: "aim1771"
      },
      {
        id: "aim23520",
        value: 161.27669298125,
        from: "aim15672",
        to: "aim15513"
      },
      {
        id: "aim23567",
        value: 114.49414081875,
        from: "aim17183",
        to: "aim17118"
      },
      {
        id: "aim23614",
        value: 105.7978515625,
        from: "aim0381",
        to: "aim0481"
      },
      {
        id: "aim23661",
        value: 75.1083984375,
        from: "aim1226",
        to: "aim1326"
      },
      {
        id: "aim23708",
        value: 180.90625,
        from: "aim6664",
        to: "aim6765"
      },
      {
        id: "aim23755",
        value: 108.28125,
        from: "aim1026",
        to: "aim6508"
      },
      {
        id: "aim23802",
        value: 140,
        from: "aim14951",
        to: "aim15320"
      },
      {
        id: "aim23849",
        value: 140,
        from: "aim14951",
        to: "aim15265"
      },
      {
        id: "aim23896",
        value: 99.4700812,
        from: "aim15118",
        to: "aim15012"
      },
      {
        id: "aim23943",
        value: 210.21875,
        from: "aim15012",
        to: "aim14951"
      },
      {
        id: "aim23990",
        value: 123.4479162,
        from: "aim15118",
        to: "aim15012"
      },
      {
        id: "aim24037",
        value: 194.4922462,
        from: "aim15012",
        to: "aim14951"
      },
      {
        id: "aim24084",
        value: 49,
        from: "aim16938",
        to: "aim17000"
      },
      {
        id: "aim24131",
        value: 52.5,
        from: "aim16938",
        to: "aim17295"
      },
      {
        id: "aim24178",
        value: 38.5,
        from: "aim16938",
        to: "aim17351"
      },
      {
        id: "aim24225",
        value: 25.6666662,
        from: "aim16938",
        to: "aim17407"
      },
      {
        id: "aim24272",
        value: 51.3333338,
        from: "aim16938",
        to: "aim17525"
      },
      {
        id: "aim24319",
        value: 63,
        from: "aim16938",
        to: "aim17581"
      },
      {
        id: "aim24366",
        value: 99.4700812,
        from: "aim16775",
        to: "aim16831"
      },
      {
        id: "aim24413",
        value: 210.21875,
        from: "aim16831",
        to: "aim16938"
      },
      {
        id: "aim24460",
        value: 123.4479162,
        from: "aim16775",
        to: "aim16831"
      },
      {
        id: "aim24507",
        value: 194.4922462,
        from: "aim16831",
        to: "aim16938"
      },
      {
        id: "aim24554",
        value: 80.8410862,
        from: "aim6508",
        to: "aim14872"
      },
      {
        id: "aim24601",
        value: 241.01307999999997,
        from: "aim6508",
        to: "aim1026"
      },
      {
        id: "aim24693",
        value: 163.75,
        from: "aim15513",
        to: "aim14872"
      },
      {
        id: "aim24830",
        value: 116.25,
        from: "aim17118",
        to: "aim14872"
      },
      {
        id: "aim24877",
        value: 135.7708338,
        from: "aim14872",
        to: "aim15265"
      },
      {
        id: "aim24969",
        value: 140,
        from: "aim14872",
        to: "aim15320"
      },
      {
        id: "aim25061",
        value: 191.9895838,
        from: "aim15265",
        to: "aim15320"
      },
      {
        id: "aim25108",
        value: 99.4700812,
        from: "aim15118",
        to: "aim14872"
      },
      {
        id: "aim25155",
        value: 95.022165,
        from: "aim15012",
        to: "aim14872"
      },
      {
        id: "aim25202",
        value: 81.0598362,
        from: "aim14951",
        to: "aim14872"
      },
      {
        id: "aim25249",
        value: 191.9895838,
        from: "aim15320",
        to: "aim14872"
      },
      {
        id: "aim25296",
        value: 57.26741324870357,
        from: "aim15672",
        to: "aim1026"
      },
      {
        id: "aim25388",
        value: 98.93444143125001,
        from: "aim15672",
        to: "aim14872"
      },
      {
        id: "aim25480",
        value: 163.75,
        from: "aim15513",
        to: "aim14872"
      },
      {
        id: "aim25617",
        value: 39.83820028808691,
        from: "aim17183",
        to: "aim1026"
      },
      {
        id: "aim25664",
        value: 70.23590116875,
        from: "aim17183",
        to: "aim14872"
      },
      {
        id: "aim25711",
        value: 116.25,
        from: "aim17118",
        to: "aim14872"
      },
      {
        id: "aim25758",
        value: 91.875,
        from: "aim14872",
        to: "aim1026"
      },
      {
        id: "aim25805",
        value: 180.90625,
        from: "aim7001",
        to: "aim0159"
      },
      {
        id: "aim25852",
        value: 92.4583338,
        from: "aim14872",
        to: "aim0159"
      },
      {
        id: "aim25899",
        value: 92.4583338,
        from: "aim14872",
        to: "aim0159"
      },
      {
        id: "aim25946",
        value: 69.78125,
        from: "aim14951",
        to: "aim0159"
      },
      {
        id: "aim25993",
        value: 86.7708338,
        from: "aim15012",
        to: "aim0159"
      },
      {
        id: "aim26085",
        value: 123.4479162,
        from: "aim15118",
        to: "aim0159"
      },
      {
        id: "aim26132",
        value: 105.7978515625,
        from: "aim0281",
        to: "aim0159"
      },
      {
        id: "aim26179",
        value: 75.1083984375,
        from: "aim1126",
        to: "aim0159"
      },
      {
        id: "aim26226",
        value: 163.75,
        from: "aim15513",
        to: "aim14872"
      },
      {
        id: "aim26363",
        value: 163.75,
        from: "aim15672",
        to: "aim14872"
      },
      {
        id: "aim26500",
        value: 116.25,
        from: "aim17118",
        to: "aim14872"
      },
      {
        id: "aim26547",
        value: 116.25,
        from: "aim17183",
        to: "aim14872"
      },
      {
        id: "aim26594",
        value: 180.90625,
        from: "aim5223",
        to: "aim1026"
      },
      {
        id: "aim26686",
        value: 105.7978515625,
        from: "aim2792",
        to: "aim2601"
      },
      {
        id: "aim26733",
        value: 75.1083984375,
        from: "aim4056",
        to: "aim3866"
      },
      {
        id: "aim26780",
        value: 180.90625,
        from: "aim7878",
        to: "aim7642"
      },
      {
        id: "aim26872",
        value: 38.13486880625,
        from: "aim17463",
        to: "aim3050"
      },
      {
        id: "aim26919",
        value: 67.55090431547256,
        from: "aim17581",
        to: "aim3050"
      },
      {
        id: "aim26966",
        value: 154.0771646875,
        from: "aim16938",
        to: "aim3050"
      },
      {
        id: "aim27013",
        value: 27.072845793749998,
        from: "aim17463",
        to: "aim4346"
      },
      {
        id: "aim27060",
        value: 50.023020549961885,
        from: "aim17581",
        to: "aim4346"
      },
      {
        id: "aim27107",
        value: 109.3830253125,
        from: "aim16938",
        to: "aim4346"
      },
      {
        id: "aim27154",
        value: 105.7978515625,
        from: "aim2938",
        to: "aim2792"
      },
      {
        id: "aim27201",
        value: 75.1083984375,
        from: "aim4201",
        to: "aim4056"
      },
      {
        id: "aim27248",
        value: 105.7978515625,
        from: "aim2601",
        to: "aim2455"
      },
      {
        id: "aim27295",
        value: 75.1083984375,
        from: "aim3866",
        to: "aim3721"
      },
      {
        id: "aim27342",
        value: 105.7978515625,
        from: "aim2455",
        to: "aim2309"
      },
      {
        id: "aim27389",
        value: 75.1083984375,
        from: "aim3721",
        to: "aim3576"
      },
      {
        id: "aim27436",
        value: 105.7978515625,
        from: "aim2163",
        to: "aim2017"
      },
      {
        id: "aim27483",
        value: 75.1083984375,
        from: "aim3431",
        to: "aim3286"
      },
      {
        id: "aim27530",
        value: 163.75,
        from: "aim5595",
        to: "aim3050"
      },
      {
        id: "aim27667",
        value: 116.25,
        from: "aim5595",
        to: "aim4346"
      },
      {
        id: "aim27714",
        value: 81.875,
        from: "aim3050",
        to: "aim2017"
      },
      {
        id: "aim27806",
        value: 81.875,
        from: "aim3050",
        to: "aim2163"
      },
      {
        id: "aim27898",
        value: 81.875,
        from: "aim3050",
        to: "aim2309"
      },
      {
        id: "aim27990",
        value: 81.875,
        from: "aim3050",
        to: "aim2455"
      },
      {
        id: "aim28082",
        value: 163.75,
        from: "aim3050",
        to: "aim2601"
      },
      {
        id: "aim28219",
        value: 81.875,
        from: "aim3050",
        to: "aim2792"
      },
      {
        id: "aim28311",
        value: 81.875,
        from: "aim3050",
        to: "aim2938"
      },
      {
        id: "aim28403",
        value: 58.125,
        from: "aim4346",
        to: "aim3286"
      },
      {
        id: "aim28450",
        value: 58.125,
        from: "aim4346",
        to: "aim3431"
      },
      {
        id: "aim28497",
        value: 58.125,
        from: "aim4346",
        to: "aim3576"
      },
      {
        id: "aim28544",
        value: 58.125,
        from: "aim4346",
        to: "aim3721"
      },
      {
        id: "aim28591",
        value: 116.25,
        from: "aim4346",
        to: "aim3866"
      },
      {
        id: "aim28638",
        value: 58.125,
        from: "aim4346",
        to: "aim4056"
      },
      {
        id: "aim28685",
        value: 58.125,
        from: "aim4346",
        to: "aim4201"
      },
      {
        id: "aim28732",
        value: 105.7978515625,
        from: "aim5595",
        to: "aim3050"
      },
      {
        id: "aim28824",
        value: 75.1083984375,
        from: "aim5595",
        to: "aim4346"
      },
      {
        id: "aim28871",
        value: 181.4895838,
        from: "aim7541",
        to: "aim7340"
      },
      {
        id: "aim28918",
        value: 50.71305383452744,
        from: "aim3050",
        to: "aim7541"
      },
      {
        id: "aim28965",
        value: 306.432928,
        from: "aim3050",
        to: "aim7642"
      },
      {
        id: "aim29192",
        value: 153.216464,
        from: "aim3050",
        to: "aim7878"
      },
      {
        id: "aim29329",
        value: 37.55419945628811,
        from: "aim4346",
        to: "aim7541"
      },
      {
        id: "aim29376",
        value: 226.920732,
        from: "aim4346",
        to: "aim7642"
      },
      {
        id: "aim29513",
        value: 113.460366,
        from: "aim4346",
        to: "aim7878"
      },
      {
        id: "aim29605",
        value: 163.75,
        from: "aim3050",
        to: "aim17192"
      },
      {
        id: "aim29742",
        value: 38.99850144631821,
        from: "aim3050",
        to: "aim3050"
      },
      {
        id: "aim29789",
        value: 105.7978515625,
        from: "aim3050",
        to: "aim2938"
      },
      {
        id: "aim29836",
        value: 116.25,
        from: "aim4346",
        to: "aim17192"
      },
      {
        id: "aim29883",
        value: 24.81722843502222,
        from: "aim4346",
        to: "aim4346"
      },
      {
        id: "aim29930",
        value: 75.1083984375,
        from: "aim4346",
        to: "aim4201"
      },
      {
        id: "aim29977",
        value: 280,
        from: "aim17192",
        to: "aim17127"
      },
      {
        id: "aim30024",
        value: 105.7978515625,
        from: "aim2163",
        to: "aim2309"
      },
      {
        id: "aim30071",
        value: 75.1083984375,
        from: "aim3431",
        to: "aim3576"
      },
      {
        id: "aim30118",
        value: 180.90625,
        from: "aim7541",
        to: "aim7642"
      },
      {
        id: "aim30165",
        value: 63.3251953125,
        from: "aim3050",
        to: "aim7340"
      },
      {
        id: "aim30212",
        value: 44.9560546875,
        from: "aim4346",
        to: "aim7340"
      },
      {
        id: "aim30259",
        value: 42.45710900625,
        from: "aim7340",
        to: "aim3050"
      },
      {
        id: "aim30306",
        value: 30.141306393750003,
        from: "aim7340",
        to: "aim4346"
      },
      {
        id: "aim30353",
        value: 133.5345339625,
        from: "aim7340",
        to: "aim3050"
      },
      {
        id: "aim30445",
        value: 94.7993256375,
        from: "aim7340",
        to: "aim4346"
      },
      {
        id: "aim30492",
        value: 163.75,
        from: "aim17127",
        to: "aim3050"
      },
      {
        id: "aim30629",
        value: 116.25,
        from: "aim17127",
        to: "aim4346"
      },
      {
        id: "aim30676",
        value: 74.29402524702745,
        from: "aim3050",
        to: "aim17463"
      },
      {
        id: "aim30768",
        value: 76.608232,
        from: "aim3050",
        to: "aim17056"
      },
      {
        id: "aim30860",
        value: 55.01645891097561,
        from: "aim4346",
        to: "aim17463"
      },
      {
        id: "aim30907",
        value: 56.730183,
        from: "aim4346",
        to: "aim17056"
      },
      {
        id: "aim30954",
        value: 58.770833800000005,
        from: "aim17407",
        to: "aim17351"
      },
      {
        id: "aim31001",
        value: 50.3945316,
        from: "aim17463",
        to: "aim17351"
      },
      {
        id: "aim31048",
        value: 68.5416662,
        from: "aim17463",
        to: "aim17056"
      },
      {
        id: "aim31095",
        value: 54.000111781250006,
        from: "aim16775",
        to: "aim3050"
      },
      {
        id: "aim31142",
        value: 51.996286153302,
        from: "aim16831",
        to: "aim3050"
      },
      {
        id: "aim31234",
        value: 44.35607669636856,
        from: "aim16938",
        to: "aim3050"
      },
      {
        id: "aim31281",
        value: 34.4737044,
        from: "aim17000",
        to: "aim3050"
      },
      {
        id: "aim31328",
        value: 70.27173395,
        from: "aim17056",
        to: "aim3050"
      },
      {
        id: "aim31375",
        value: 38.33595721875,
        from: "aim16775",
        to: "aim4346"
      },
      {
        id: "aim31422",
        value: 38.50446292504425,
        from: "aim16831",
        to: "aim4346"
      },
      {
        id: "aim31469",
        value: 32.84670958268589,
        from: "aim16938",
        to: "aim4346"
      },
      {
        id: "aim31516",
        value: 25.52858235,
        from: "aim17000",
        to: "aim4346"
      },
      {
        id: "aim31563",
        value: 49.88756685,
        from: "aim17056",
        to: "aim4346"
      },
      {
        id: "aim31610",
        value: 159.68420130625,
        from: "aim17192",
        to: "aim3050"
      },
      {
        id: "aim31747",
        value: 156.97366802500002,
        from: "aim17127",
        to: "aim3050"
      },
      {
        id: "aim31884",
        value: 113.36359329375001,
        from: "aim17192",
        to: "aim4346"
      },
      {
        id: "aim31931",
        value: 111.43932157500001,
        from: "aim17127",
        to: "aim4346"
      },
      {
        id: "aim31978",
        value: 180.90625,
        from: "aim7878",
        to: "aim1871"
      },
      {
        id: "aim32025",
        value: 54.07161485625,
        from: "aim3050",
        to: "aim1871"
      },
      {
        id: "aim32117",
        value: 54.07161485625,
        from: "aim3050",
        to: "aim1871"
      },
      {
        id: "aim32209",
        value: 69.78125,
        from: "aim16938",
        to: "aim1871"
      },
      {
        id: "aim32256",
        value: 86.7708338,
        from: "aim16831",
        to: "aim1871"
      },
      {
        id: "aim32348",
        value: 123.4479162,
        from: "aim16775",
        to: "aim1871"
      },
      {
        id: "aim32395",
        value: 105.7978515625,
        from: "aim2017",
        to: "aim1871"
      },
      {
        id: "aim32442",
        value: 38.386718943750004,
        from: "aim4346",
        to: "aim1871"
      },
      {
        id: "aim32489",
        value: 38.386718943750004,
        from: "aim4346",
        to: "aim1871"
      },
      {
        id: "aim32536",
        value: 75.1083984375,
        from: "aim3286",
        to: "aim1871"
      },
      {
        id: "aim32583",
        value: 155.818359375,
        from: "aim17127",
        to: "aim3050"
      },
      {
        id: "aim32720",
        value: 158.03580701875,
        from: "aim17192",
        to: "aim3050"
      },
      {
        id: "aim32857",
        value: 110.619140625,
        from: "aim17127",
        to: "aim4346"
      },
      {
        id: "aim32904",
        value: 112.19335918125,
        from: "aim17192",
        to: "aim4346"
      },
      {
        id: "aim32951",
        value: 101.064453125,
        from: "aim5595",
        to: "aim3050"
      },
      {
        id: "aim33043",
        value: 71.748046875,
        from: "aim5595",
        to: "aim4346"
      },
      {
        id: "aim33090",
        value: 399.532217,
        from: "aim6608",
        to: "aim7239"
      },
      {
        id: "aim33272",
        value: 186.4398024270045,
        from: "aim7440",
        to: "aim7239"
      },
      {
        id: "aim33507",
        value: 228.304124,
        from: "aim7440",
        to: "Air"
      },
      {
        id: "aim33688",
        value: 114.0035922061824,
        from: "aim9104",
        to: "aim8729"
      },
      {
        id: "aim33711",
        value: 114.00356255201278,
        from: "aim9104",
        to: "aim8729"
      },
      {
        id: "aim33869",
        value: 23.944511,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim33891",
        value: 0.9273487983484401,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim33912",
        value: 2.8682978982919805,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim33934",
        value: 7.8528621454956,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim33957",
        value: 23.944508,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim33979",
        value: 0.58311237363276,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34000",
        value: 1.04960263398939,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34021",
        value: 2.65740384109163,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34042",
        value: 12.53265823206747,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34063",
        value: 1.15213715743284,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34084",
        value: 8.4250828979964,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34105",
        value: 0.51553376291862,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34126",
        value: 0.5230385464812,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34147",
        value: 1.15287761838765,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34169",
        value: 23.9445005,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34191",
        value: 2.6645834803008,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34213",
        value: 6.013450195108559,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34235",
        value: 0.9227093380205,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34257",
        value: 23.9445005,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34279",
        value: 2.8210606134528,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34300",
        value: 12.5321819674599,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34321",
        value: 0.7023051161227,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34342",
        value: 1.0289200366598399,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34363",
        value: 8.42437681973904,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34384",
        value: 0.92212434962753,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34406",
        value: 8.3342255,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34437",
        value: 4.1673925,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34482",
        value: 8.3342425,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34513",
        value: 4.167377,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34558",
        value: 8.334236,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34589",
        value: 4.1673765000000005,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34634",
        value: 8.3342235,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34665",
        value: 4.167396500000001,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34710",
        value: 8.334227,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim34741",
        value: 4.167366,
        from: "aim9104",
        to: "Air"
      },
      {
        id: "aim35101",
        value: 48.865459177018614,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35122",
        value: 1.5004301828883602,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35143",
        value: 1.5015725696889202,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35165",
        value: 10.485147748157878,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35187",
        value: 18.8099798093228,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35208",
        value: 25.982975848740352,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35230",
        value: 25.0479082,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35252",
        value: 2.8702074161958797,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35273",
        value: 2.87080832701314,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35294",
        value: 35.95370649141825,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35315",
        value: 2.87006301312122,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35336",
        value: 1.5001424907205498,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35357",
        value: 1.5001359917352899,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35378",
        value: 18.834699168374936,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35400",
        value: 25.0479146,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35422",
        value: 1.5002775745560402,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35443",
        value: 1.50105482866174,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35465",
        value: 8.402442189842398,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35487",
        value: 25.904041570577277,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35508",
        value: 35.96665260394635,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35529",
        value: 48.82352381530452,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35550",
        value: 2.8701214985322,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35571",
        value: 2.87054125214472,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35592",
        value: 2.8700504300061995,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35614",
        value: 2.000187,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35645",
        value: 2.0001838,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35690",
        value: 2.0001896,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35721",
        value: 2.0001806,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35766",
        value: 2.0001906,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35797",
        value: 2.0001776,
        from: "aim9580",
        to: "Air"
      },
      {
        id: "aim35856",
        value: 400,
        from: "aim15672",
        to: "aim17183"
      },
      {
        id: "aim35903",
        value: 400,
        from: "aim15513",
        to: "aim17118"
      },
      {
        id: "aim35950",
        value: 129.21875,
        from: "aim2938",
        to: "aim4201"
      },
      {
        id: "aim35997",
        value: 129.21875,
        from: "aim0926",
        to: "aim1771"
      },
      {
        id: "aim36044",
        value: 129.21875,
        from: "aim2792",
        to: "aim4056"
      },
      {
        id: "aim36091",
        value: 258.4375,
        from: "aim2601",
        to: "aim3866"
      },
      {
        id: "aim36138",
        value: 129.21875,
        from: "aim0826",
        to: "aim1671"
      },
      {
        id: "aim36185",
        value: 258.4375,
        from: "aim0681",
        to: "aim1526"
      },
      {
        id: "aim36232",
        value: 129.21875,
        from: "aim0581",
        to: "aim1426"
      },
      {
        id: "aim36279",
        value: 129.21875,
        from: "aim2309",
        to: "aim3576"
      },
      {
        id: "aim36326",
        value: 129.21875,
        from: "aim2163",
        to: "aim3431"
      },
      {
        id: "aim36373",
        value: 129.21875,
        from: "aim2017",
        to: "aim3286"
      },
      {
        id: "aim36420",
        value: 129.21875,
        from: "aim0481",
        to: "aim1326"
      },
      {
        id: "aim36467",
        value: 129.21875,
        from: "aim0381",
        to: "aim1226"
      },
      {
        id: "aim36514",
        value: 129.21875,
        from: "aim0281",
        to: "aim1126"
      },
      {
        id: "aim36561",
        value: 129.21875,
        from: "aim2455",
        to: "aim3721"
      },
      {
        id: "aim36640",
        value: 1700.9168550671232,
        from: "aim3050",
        to: "aim4346"
      },
      {
        id: "aim36703",
        value: 63,
        from: "aim17000",
        to: "aim17295"
      },
      {
        id: "aim36750",
        value: 60.447916199999995,
        from: "aim17056",
        to: "aim17351"
      },
      {
        id: "aim36797",
        value: 63,
        from: "aim17295",
        to: "aim17351"
      },
      {
        id: "aim36844",
        value: 63,
        from: "aim17407",
        to: "aim17525"
      },
      {
        id: "aim36891",
        value: 60.447916199999995,
        from: "aim17463",
        to: "aim17581"
      },
      {
        id: "aim36938",
        value: 63,
        from: "aim17525",
        to: "aim17581"
      },
      {
        id: "aim36985",
        value: 63,
        from: "aim17581",
        to: "aim17463"
      },
      {
        id: "aim37032",
        value: 38.5,
        from: "aim17351",
        to: "aim17056"
      },
      {
        id: "aim37079",
        value: 52.5,
        from: "aim17056",
        to: "aim17295"
      },
      {
        id: "aim37126",
        value: 49,
        from: "aim17056",
        to: "aim17000"
      },
      {
        id: "aim37173",
        value: 51.3333338,
        from: "aim17463",
        to: "aim17525"
      },
      {
        id: "aim37220",
        value: 25.6666662,
        from: "aim17463",
        to: "aim17407"
      },
      {
        id: "aim37267",
        value: 229.48188881768192,
        from: "aim4491",
        to: "Air"
      },
      {
        id: "aim37337",
        value: 86.1037383908761,
        from: "aim8729",
        to: "aim9104"
      },
      {
        id: "aim37396",
        value: 12.92215413373048,
        from: "aim0180",
        to: "Air"
      }
    ]
  };

  const options = {
    edges: {
      smooth: {
        type: "cubicBezier"
      },
      arrows: {
        to: {
          enabled: false
        },
        middle: {
          enabled: false
        },
        from: {
          enabled: false
        }
      },
      physics: false,
      color: {
        color: "#848484",
        highlight: "#848484",
        hover: "#848484",
        inherit: "from",
        opacity: 0.5
      }
    },
    nodes: {
      shape: "dot",
      physics: true
    },
    physics: {
      forceAtlas2Based: {
        gravitationalConstant: -26,
        centralGravity: 0.005,
        springLength: 230,
        springConstant: 0.18
      },
      maxVelocity: 146,
      solver: "forceAtlas2Based",
      timestep: 0.35,
      stabilization: { iterations: 150 }
    }
  };

  const events = {
    select: (event) => {
      const { nodes, edges } = event;
      console.log(nodes, edges);
    }
  };
  return (
    <VisGraph
      graph={graph}
      options={options}
      events={events}
      getNetwork={(network) => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
        //console.log(network);
      }}
    />
  );
}
