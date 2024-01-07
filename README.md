# Fake API Service

## Table of contents 
- [Ecommerce Platform - API's](#heading-2)

## Ecommerce Platform - API's

- [Get Products - GET](#heading-3)
- [Create Products - POST](#heading-3)

### Get Products - GET

- [Endpoint](#heading-4)
- [Query Parameters](#heading-4)
- [Example](#heading-4)
- [Response](#heading-4)

#### Endpoint

```markdown
http://localhost:8000/api/v1/products
```
#### Query Parameters

| Name | Type | Validation |
| ---- | ---- | ------ |
| productName | string | required |
| | | trim |
| price | number | required |
| description | string | required |
| stock | number | required |

#### Example

```markdown
router.get("{BASE_URL}/api/v1/products")
```
#### Response 

```markdown
List of all products
```

### Create Products - POST

- [Endpoint](#heading-4)
- [Request Body](#heading-4)
- [Example](#heading-4)
- [Response](#heading-4)

#### Endpoint

```markdown
http://localhost:8000/api/v1/products
```

#### Request Body

| Name | Type | Validation |
| ---- | ---- | ------ |
| productName | string | required |
| | | trim |
| price | number | required |
| description | string | required |
| stock | number | required |

#### Example

```markdown
router.post("{BASE_URL}/api/v1/products"
    {
    "productName": "Example Product eight",
    "price": 40.99,
    "description": "This is a sample product eight description.",
    "stock": 70
    }
)
```
#### Response 

```markdown
UNKNOWN
```
### Delete Products - DELETE

- [Endpoint](#heading-4)
- [Query Parameters](#heading-4)
- [Example](#heading-4)
- [Response](#heading-4)

#### Endpoint

```markdown
http://localhost:8000/api/v1/products/:productId
```
#### Query Parameters

| Name | Type | Validation |
| ---- | ---- | ------ |
| productName | string | required |
| | | trim |
| price | number | required |
| description | string | required |
| stock | number | required |

#### Example

```markdown
router.get("{BASE_URL}/api/v1/products/:productId")
```
#### Response 

```markdown
Product with that ID delete
```