---
id: download_epid
title: EPIDs runterladen
sidebar_label: EPIDs runterladen
---

## API Endpoint
- __GET__ Methode
```
api/v1/epid/download/<api_token>
```

## Response
- Code __200__
```json
[
    {
        "file_id": "<id_des_epid_dateipakets>",
        "name": "<name_des_epid_dateipakets>",
        "file_data": [
            {
                "epid": "232850898",
                "articlenumber": "4",
                "vehicle_type": "DE_SCOOTERS",
                "input_text": "Aprilia Atlantic 500 Sprint 2004 - 2015",
                "make": "Aprilia",
                "model": "Atlantic",
                "ccm": "500",
                "streetname": "Sprint",
                "submodel": "--",
                "year_ebay": "2005",
                "confidence": 1.0
            },
        ]
    },
]
```