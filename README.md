# DENO-REST-API

## A Simple REST API using DENO 1.0, TypeScript & Oak Framework

### 🚀 Running the App

```
deno run app.ts
```

```
deno run --allow-env --allow-net app.ts
```
### Requests

1. **GET /movies** : List All the movies

2. **GET /movies/:id** : List requested movie details, returns error if not found.

3. **POST /movies** : Adds a new movie

4. **PUT /movies/:id** : Updates requested movie details, returns error if not found.

5. **DELETE /movies/:id** : Deletes requested movie detail, returns error if not found.

### ✅ Reviews

1. Finally got rid of bulky node packages, Now one can import packages directly through url. 
2. Highly secured, Only permission based access for folders and environment variables.
3. Fast as designed on Rust