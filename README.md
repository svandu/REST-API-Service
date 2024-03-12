# Fake API Service

[## API LINK](https://speeding-firefly-532427.postman.co/documentation/21676004-9002fd9d-0452-4857-84dd-c2265cf22dbe/publish?workspaceId=6195eaf9-dafc-4020-8d2f-e7f876fd490a)

## Table of contents 
- [Ecommerce Platform - API's](#ecommerce-platform---apis)
  - [Get Products - GET](#get-products---get)
    - [Endpoint](#endpoint)
    - [Request Body](#request-body)
    - [Example](#example)
    - [Response](#response)
  - [Create Products - POST](#create-products---post)
    - [Endpoint](#endpoint-1)
    - [Request Body](#request-body-1)
    - [Example](#example-1)
    - [Response](#response-1)
  - [Delete Products - DELETE](#delete-products---delete)
    - [Endpoint](#endpoint-2)
    - [Request Body](#request-body-2)
    - [Example](#example-2)
    - [Response](#response-2)
  
## Ecommerce Platform - API's

### Get Products - GET

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
router.get("{BASE_URL}/api/v1/products")
```
#### Response 

```markdown
List of all products
```

### Create Products - POST

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

#### Endpoint

```markdown
http://localhost:8000/api/v1/products/:productId
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
router.get("{BASE_URL}/api/v1/products/:productId")
```
#### Response 

```markdown
Product with that ID delete
```