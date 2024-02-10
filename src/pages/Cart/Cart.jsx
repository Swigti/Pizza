import React from 'react';
import Title from '../../components/Title/Title';
import img from '../../assets/pizza1.png'

const Cart = () => {
    return (
        <div className='cart'>
           <Title title='Корзина' />
           <div className="cart__products">
              <div className="cart__product">
                  <div className="cart__product__content">
                      <div className="cart__product__left">
                          <img src={img} alt="" />
                      </div>
                      <div className="cart__product__right">
                         <h4>Аццки острая</h4>
                         <p>320 ₽</p>
                      </div>
                  </div>
                  <div className="cart__product__count">
                      <button className='dec'>-</button>
                      <span>01</span>
                      <button className='btn inc'>+</button>
                          <span className='del'>
                          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.19185 4.19318L12.5768 12.5782" stroke="#FF3600" stroke-linecap="round"/>
<path d="M4.19342 12.5784L12.5784 4.19343" stroke="#FF3600" stroke-linecap="round"/>
</svg>

                          </span>
                  </div>
              </div>
              <div className="cart__product">
                  <div className="cart__product__content">
                      <div className="cart__product__left">
                          <img src={img} alt="" />
                      </div>
                      <div className="cart__product__right">
                         <h4>Аццки острая</h4>
                         <p>320 ₽</p>
                      </div>
                  </div>
                  <div className="cart__product__count">
                      <button className='dec'>-</button>
                      <span>01</span>
                      <button className='btn inc'>+</button>
                          <span className='del'>
                          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.19185 4.19318L12.5768 12.5782" stroke="#FF3600" stroke-linecap="round"/>
<path d="M4.19342 12.5784L12.5784 4.19343" stroke="#FF3600" stroke-linecap="round"/>
</svg>

                          </span>
                  </div>
              </div>
           </div>
        </div>
    );
}

export default Cart;
