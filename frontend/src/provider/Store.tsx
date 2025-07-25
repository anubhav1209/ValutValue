import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { UserSlice } from "./slice/user.slice";
import { SidebarSlice } from "./slice/Sidebar.slice";
import { AuthApi } from "./queries/Auth.query";
import { UserApi } from "./queries/Users.query";
import { OrdersApi } from "./queries/Orders.query";
import { AnalysisApi } from './queries/Analysis.query';

export const store = configureStore({
    reducer:{
        [AnalysisApi.reducerPath]: AnalysisApi.reducer,
        [UserSlice.name]: UserSlice.reducer,
        [SidebarSlice.name]: SidebarSlice.reducer,
        [AuthApi.reducerPath]: AuthApi.reducer,
        [UserApi.reducerPath]: UserApi.reducer,
        [OrdersApi.reducerPath]: OrdersApi.reducer
    },

    middleware: (d) => d().concat(AuthApi.middleware, (AnalysisApi.middleware),UserApi.middleware, OrdersApi.middleware)
}) 

setupListeners(store.dispatch)