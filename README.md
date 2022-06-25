***
**_NOTE_**: Does not handle Mutations
***

## A GraphQL Demo App

### To begin
`docker compose up -d`

In your browser, open `http://localhost:4000/graphql` and try the following query:

```
{
  users(id: 1) {
    firstName
    id
  }
}
```

### Architecture
Adapted from https://medium.com/swlh/how-to-setup-a-graphql-express-and-postgresql-server-7ab2c0f6ddbd

With some small edits made to have it work with newer versions of Node and then Docker Compose.

### To access the DB
```
docker exec -it postgres bash
# su postgres
$ psql -U salt -d graphql
graphql=# \l
[note the list of DBs]
\q
exit
exit
```
