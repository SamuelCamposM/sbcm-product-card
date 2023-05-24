import React from 'react';
import rendered from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('debe de mostrar el componente correctamente con la imagen personalizada', () => {
    const wrapper = rendered.create(
      <ProductImage img="https://hola.jpg" className="custom-class" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('Debe de mostrar el componente con la imagen del produccto', () => {
    const wrapper = rendered.create(
      <ProductCard product={product2}>
        {() => {
          return <ProductImage />;
        }}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
