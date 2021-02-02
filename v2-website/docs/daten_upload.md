---
id: daten_upload
title: Artikeldaten hochladen
sidebar_label: Artikeldaten hochladen
---

>Das Hochladen der Daten löst automatisch den Prozess des EPID erzeugen aus.

## API Endpoint
```
POST: api/v1/upload/<api_token>
```

## Request Body
```json
{ "data": [
        {
            "articlenumber": "1",
            "input_text": "Aprilia Atlantic 500 Sprint 2004 - 2015"
        },
        {
            "articlenumber": "2",
            "input_text": "Beta Alp 4.0 350 2004-2015"
        }
    ]
}
```

## Erfolgreiche Response
- Code __201__
- JSON Objekt
```json
{
    "status": "SUCCESS",
    "message": "task kicked off",
    "task_id": "<id_des_epid_erzeugen_auftrags>",
    "task_status": "PROGRESS",
    "company_id": "<id_des_eigegen_unternehmens",
    "task_origin": "<erzeugter_name_des_hochgeladenen_dateiepakets>",
    "task_origin_id": "<id_des_hochgeladenen_dateipakets>"
}
```