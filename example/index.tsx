import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';
const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  // img: "./coffee-mug.png",
};
const App = () => {
  return (
    <div>
      <ProductCard
        product={product}
        initialValues={{
          count: 0,
        }}
      >
        {({ reset, count, increaseBy, maxCount, isMaxCountReached }) => {
          return (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          );
        }}
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
