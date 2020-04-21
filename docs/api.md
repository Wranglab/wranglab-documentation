---
id: api
title: Einleitung
sidebar_label: Einleitung
---

## API Token

Zum erhalten des Tokens ist es erforderlich zunächst ein Konto mitsamt Enterprise Abonnement unter https://dashboard.wranglab.com abzuschließen.

Anschließend können Sie eine E-Mail an info@wranglab.com senden, worauf hin wir Ihnen den API Token zukommen lassen.

Der Token dient als Zentrale authentifikation und muss bei jeder API Anfrage enthalten sein.

## API Prefix

Der API Prefix lautet:

```
https://api.wranglab.com/
```

So ergibt sich aus der API Schnittstelle...

```
api/v1/upload/<api_token>
```

Diese vollständige URL:

```
https://api.wranglab.com/api/v1/upload/<api_token>
```