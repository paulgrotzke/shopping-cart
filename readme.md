### structure
    
    ├── src                     
    │   ├── tests.ts            # test cases / think:implement frontend features
    │   ├── cart                 
    │       ├── index.ts        # export of cart functions for frontend / think: cart-modul-api
    │       ├── types.ts        # type declaration file for cart-modul
    │       ├── utils            
    │           ├── api.ts      # "async" functions for fetching, etc. 
    │           ├── data.ts     # mock db data
    │           ├── lambda.ts   # sales-deals logic, which would prop. be handled from backend
    │           ├── helper.ts            

### setup
if you want to run the code, a minimal TS setup is also included in the repo

`npm i` / `yarn install`
run `npm start` / `yarn start` for sample flow
configure the sample flow in `src/index.ts`

