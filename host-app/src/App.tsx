import React, { Suspense } from "react";
import './App.css'

const ProductsPage = React.lazy(
  () => import("products/ProductsPage")
);

const UsersPage = React.lazy(
  () => import("users/UsersPage")
)

function App() {


  return (
     <Suspense fallback={<div>Loading...</div>}>
      <ProductsPage />
      <UsersPage />
    </Suspense>
  )
}

export default App
