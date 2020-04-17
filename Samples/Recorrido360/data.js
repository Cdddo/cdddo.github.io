var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "Entrada",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "1-biblioteca",
      "name": "Biblioteca",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.2822189665789026,
        "pitch": 0.03652229067779622,
        "fov": 1.5907907003473358
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "2-cafe",
      "name": "Cafe",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "3-terraza",
      "name": "Terraza",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.394414054384148,
          "pitch": 0.29767934668284823,
          "rotation": 7.0685834705770345,
          "target": "0-entrada"
        },
        {
          "yaw": 2.4633615211228097,
          "pitch": -0.06408811712178242,
          "rotation": 4.71238898038469,
          "target": "2-cafe"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0558144540360228,
          "pitch": -0.5240407730984451,
          "title": "Punto de Interés",
          "text": "Aquí puedes describir a detalle el punto de interés."
        }
      ]
    }
  ],
  "name": "Recorrido Interactivo 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
