---
id: get_progress
title: Fortschritt abfragen
sidebar_label: Fortschritt abfragen
---

## API Endpoint
- __GET__ Methode
```
api/v1/get/progress/<api_token>
```

## Response
- Code __200__
```json
[
    {
        "task_id": "<id_des_epid_erzeugen_auftrags>",
        "status": "PROGRESS",
        "result": {
            "current": 1,
            "total": 2,
            "percent": 50
        },
        "task_origin": {
            "name": "<erzeugter_name_des_hochgeladenen_dateiepakets>",
            "id": "<id_des_hochgeladenen_dateipakets>"
        },
        "task_name": "<name_des_auftrags>",
        "worker": "celery@worker_2",
        "date_created": "2020-04-21T07:46:25.268119Z",
        "date_done": "2020-04-21T07:46:26.262774Z"
    }
]
```

## Response abgeschlossener Aufträge
- Code __200__
```json
[
    {
        "task_id": "<id_des_epid_erzeugen_auftrags>",
        "status": "SUCCESS",
        "result": null,
        "task_origin": null,
        "task_name": "<name_des_auftrags>",
        "worker": "celery@worker_1",
        "date_created": "2020-04-21T07:45:06.594256Z",
        "date_done": "2020-04-21T07:45:59.479185Z"
    }
]
```

Abgeschlossene Aufträge werden nach deren Abfrage automatisch aus der Queue gelöscht.