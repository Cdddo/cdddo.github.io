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
      "linkHotspots": [
        {
          "yaw": 1.5707963267948966,
          "pitch": 0.523598775598299,
          "rotation": 0,
          "target": "1-salon"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1,
          "pitch": 0,
          "title": "Punto de Interés",
          "text": "Aquí puedes describir a detalle el punto de interés."
        }
      ]
    },
    {
      "id": "1-salon",
      "name": "Gran Salon",
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
      "linkHotspots": [
        {
          "yaw": -2.394414054384148,
          "pitch": 0.29767934668284823,
          "rotation": 7.0685834705770345,
          "target": "0-entrada"
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
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
