import React, { Suspense } from "react";
import './App.css'

// const ProductsPage = React.lazy(
//   () => import("products/ProductsPage")
// );

// const UsersPage = React.lazy(
//   () => import("users/UsersPage")
// )


const Button = React.lazy(() => import("sharedui/Button"));

function App() {


  return (
     <Suspense fallback={<div>Loading...</div>}>
      {/* <ProductsPage />
      <UsersPage /> */}
       <Button />
    </Suspense>
  )
}

export default App