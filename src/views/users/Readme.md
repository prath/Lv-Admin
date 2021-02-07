# Flow Map of User Pages

The following are application flow for each of views in User Pages.

## Users.vue
`Users.vue` is the list page, this page used to view every users in Lokaven: Guest, Host, or Deactivated Users. The flow of this page is as follow:

```mermaid
sequenceDiagram;
  participant users.vue
  participant vuex state
  participant vuex actions
  participant vuex mutations
  participant vuex getters
  participant API Server
  users.vue->>vuex actions: getUsers() on created()
  vuex actions->>API Server: getUsers()
  API Server->>vuex actions: Response
  vuex actions->>vuex mutations: Commit SET_USERS
  vuex mutations->>vuex state: SET_USERS():
  note right of vuex state: users state is set per pagination
```