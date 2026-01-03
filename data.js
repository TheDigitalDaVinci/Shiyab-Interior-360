var APP_DATA = {
  "scenes": [
    {
      "id": "0-formal-living",
      "name": "Formal Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6752813485989329,
          "pitch": 0.21288141935223592,
          "rotation": 0,
          "target": "1-family-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-family-living",
      "name": "Family Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6150619625092375,
          "pitch": 0.30435212756820285,
          "rotation": 0,
          "target": "5-passage"
        },
        {
          "yaw": 2.5135993312447926,
          "pitch": -0.011014716246254608,
          "rotation": 6.283185307179586,
          "target": "7-stair"
        },
        {
          "yaw": 2.049898240575512,
          "pitch": 0.04717273961998458,
          "rotation": 5.497787143782138,
          "target": "8-upper-living"
        },
        {
          "yaw": -3.0437335491244557,
          "pitch": 0.2413153011987177,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": -2.4090200642117185,
          "pitch": 0.026165243230892088,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": -2.8611383140538003,
          "pitch": 0.10103240969737115,
          "rotation": 4.71238898038469,
          "target": "4-work-area"
        },
        {
          "yaw": 0.8501140056367227,
          "pitch": 0.10172205691848646,
          "rotation": 1.5707963267948966,
          "target": "10-gf-bed-1"
        },
        {
          "yaw": -0.8579870298457806,
          "pitch": 0.13023712915091146,
          "rotation": 1.5707963267948966,
          "target": "0-formal-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1368187885280001,
          "pitch": -0.20401083813673537,
          "rotation": 0.7853981633974483,
          "target": "8-upper-living"
        },
        {
          "yaw": -0.7739974265924552,
          "pitch": 0.2644871471993735,
          "rotation": 1.5707963267948966,
          "target": "7-stair"
        },
        {
          "yaw": -1.9520379552030676,
          "pitch": 0.36711236372832445,
          "rotation": 0,
          "target": "1-family-living"
        },
        {
          "yaw": -2.529708966142083,
          "pitch": 0.13430058772586762,
          "rotation": 0,
          "target": "0-formal-living"
        },
        {
          "yaw": -1.7882884544442756,
          "pitch": 0.15714573994062597,
          "rotation": 0,
          "target": "5-passage"
        },
        {
          "yaw": 1.262909510539167,
          "pitch": 0.2688773812430778,
          "rotation": 4.71238898038469,
          "target": "4-work-area"
        },
        {
          "yaw": 2.079337113753269,
          "pitch": 0.23819597091735467,
          "rotation": 0,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.428414947656508,
          "pitch": 0.32868211722823126,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": -2.1161849712877103,
          "pitch": 0.17487924717351255,
          "rotation": 1.5707963267948966,
          "target": "4-work-area"
        },
        {
          "yaw": -2.971623809642985,
          "pitch": 0.0746653200996672,
          "rotation": 0,
          "target": "1-family-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-work-area",
      "name": "Work Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3970861779396149,
          "pitch": 0.2748605080775217,
          "rotation": 0,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-passage",
      "name": "Passage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0409528125395227,
          "pitch": 0.015788505707856615,
          "rotation": 0,
          "target": "10-gf-bed-1"
        },
        {
          "yaw": 0.32334152711158026,
          "pitch": 0.482036662535652,
          "rotation": 0,
          "target": "1-family-living"
        },
        {
          "yaw": 0.17911977853443872,
          "pitch": 0.072558546791754,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": -2.9998104872534803,
          "pitch": 0.11430216740278709,
          "rotation": 0,
          "target": "6-courtyard"
        },
        {
          "yaw": 1.8356969864689496,
          "pitch": 0.1066023596393535,
          "rotation": 0,
          "target": "12-gf-bed-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-courtyard",
      "name": "Courtyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.004016511767551,
          "pitch": -0.10651957145897128,
          "rotation": 0,
          "target": "5-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-stair",
      "name": "Stair",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1788619284133297,
          "pitch": -0.08545161167820758,
          "rotation": 0.7853981633974483,
          "target": "8-upper-living"
        },
        {
          "yaw": -0.7375124014706032,
          "pitch": 0.034053920048013,
          "rotation": 0,
          "target": "1-family-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-upper-living",
      "name": "Upper Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2846485939708963,
          "pitch": 0.25826446702598815,
          "rotation": 0,
          "target": "7-stair"
        },
        {
          "yaw": -0.4939943410608212,
          "pitch": 0.29421347441883405,
          "rotation": 6.283185307179586,
          "target": "9-upper-passage"
        },
        {
          "yaw": -0.22103461248966738,
          "pitch": 0.11443816286137576,
          "rotation": 1.5707963267948966,
          "target": "15-ff-bed-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-upper-passage",
      "name": "Upper Passage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7024571290792068,
          "pitch": 0.18569698972208393,
          "rotation": 0,
          "target": "15-ff-bed-2"
        },
        {
          "yaw": -1.5978540712450666,
          "pitch": 0.17759017305908564,
          "rotation": 0,
          "target": "13-ff-bed-1"
        },
        {
          "yaw": 0.13641367930520154,
          "pitch": 0.37522599176088,
          "rotation": 6.283185307179586,
          "target": "8-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-gf-bed-1",
      "name": "GF BED 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.544803041675678,
          "pitch": 0.10749927535409753,
          "rotation": 0,
          "target": "5-passage"
        },
        {
          "yaw": 0.10911277137314279,
          "pitch": 0.2683059108124173,
          "rotation": 0,
          "target": "11-gf-bed-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-gf-bed-1",
      "name": "GF BED 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7295544627202712,
          "pitch": 0.040581849537378645,
          "rotation": 0.7853981633974483,
          "target": "5-passage"
        },
        {
          "yaw": 0.38492703545368734,
          "pitch": 0.2848247366001395,
          "rotation": 0,
          "target": "10-gf-bed-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-gf-bed-2",
      "name": "GF BED 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.49976559366916007,
          "pitch": 0.028019865266927013,
          "rotation": 4.71238898038469,
          "target": "5-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-ff-bed-1",
      "name": "FF BED 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6050991650727262,
          "pitch": 0.26094283445533506,
          "rotation": 0,
          "target": "14-ff-bed-1"
        },
        {
          "yaw": -2.0744544222299446,
          "pitch": -0.010541805022047157,
          "rotation": 0,
          "target": "9-upper-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-ff-bed-1",
      "name": "FF BED 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4416726100888475,
          "pitch": 0.08619858620256693,
          "rotation": 0.7853981633974483,
          "target": "9-upper-passage"
        },
        {
          "yaw": 0.20020868912176581,
          "pitch": 0.3305512876358794,
          "rotation": 0,
          "target": "13-ff-bed-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-ff-bed-2",
      "name": "FF BED 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4755675162395168,
          "pitch": 0.040047227353985804,
          "rotation": 0,
          "target": "9-upper-passage"
        },
        {
          "yaw": 0.12688291245239114,
          "pitch": 0.239687593514617,
          "rotation": 0,
          "target": "15-ff-bed-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-ff-bed-2",
      "name": "FF BED 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0273881663244993,
          "pitch": 0.023506335339646967,
          "rotation": 4.71238898038469,
          "target": "9-upper-passage"
        },
        {
          "yaw": -1.7188851415015165,
          "pitch": 0.1482151978762296,
          "rotation": 0,
          "target": "15-ff-bed-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Shiyab Residence",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
