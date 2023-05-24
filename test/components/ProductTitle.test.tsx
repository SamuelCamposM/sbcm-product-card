import React from 'react';
import rendered from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product } from '../data/products';

describe('ProductTitle', () => {
  test('debe de mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = rendered.create(
      <ProductTitle title="Custom Product" className="custom-class" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('Debe de mostrar el componente con el nombre del produccto', () => {
    const wrapper = rendered.create(
      <ProductCard product={product}>
        {() => {
          return <ProductTitle />;
        }}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
