'use client';

import React from 'react';
import { useCart } from '../context/CartContext';
import CartToast from './CartToast';

const CartToastWrapper: React.FC = () => {
  const { showCartToast, setShowCartToast } = useCart();

  return <CartToast show={showCartToast} />;
};

export default CartToastWrapper;
