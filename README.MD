
# Test-SOSAFE Client

Esta es una aplicación web de evaluación. Tiene como funcionalidad navegar por el mapa del mundo, crear ubicaciones asi como tambien listarlas.

## How to start
```
npm install
npm run dev
```

## API Reference

#### Get all locations

```http
  GET /api/locations
```

#### Get filtered locations

```http
  GET /api/locations?search=${keyword}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `keyword`      | `string` | **Required** |

#### Create new location

```http
  POST /api/locations
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `description`      | `string` | **Required** |
| `latlng`      | `Object` | **Required** |

## Preview
![](/preview.jpg)