declare module "products/ProductsPage" {
  const ProductsPage: React.ComponentType;
  export default ProductsPage;
}

declare module "users/UsersPage" {
  const UsersPage: React.ComponentType;
  export default UsersPage;
}

declare module "sharedui/Button" {
  interface ButtonProps {
    title: string;
  }
  const Button: React.ComponentType<ButtonProps>;
  export default Button;
}
