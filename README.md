# SBCM-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Samuel Campos

## Ejemplo

```
import {
ProductCard,
ProductImage,
ProductTitle,
ProductButtons,
} from "sbcm-product-card"
```

```
      <ProductCard
        product={product}
        initialValues={{
          count: 6,
        }}
      >
        {({
          reset,
          count,
          increaseBy,
          maxCount,
          isMaxCountReached,
        }: ProductCardHandlers) => {
          return (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />

            </>
          );
        }}
      </ProductCard>
```
