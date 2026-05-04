import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowRight, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: ''
  });

  const total = getCartTotal();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }

    const res = await loadRazorpay();

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_demo_key', // Replace with actual Razorpay Key ID
      amount: total * 100, // Amount in paise
      currency: 'INR',
      name: 'Salamati Ayurveda Pvt. Ltd.',
      description: 'Purchase of Ayurvedic Products',
      image: '/logo.png',
      handler: function (response) {
        alert('Payment Successful! Order ID: ' + response.razorpay_payment_id);
        clearCart();
        // Redirect to a success page or show success message
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone
      },
      notes: {
        address: formData.address
      },
      theme: {
        color: '#0d2818'
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  if (cart.length === 0) {
    return (
      <main style={{ marginTop: '100px', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <ShoppingBag size={80} color="#ccc" style={{ marginBottom: '20px' }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', marginBottom: '16px' }}>Your Cart is Empty</h2>
          <p style={{ color: '#666', marginBottom: '32px' }}>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/products" className="btn-see-more">Start Shopping</Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ marginTop: '100px', background: '#f9fafb', padding: '60px 0' }}>
      <div className="container">
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: 'var(--green)', marginBottom: '40px', textAlign: 'center' }}>
          Checkout
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '40px' }}>
          
          {/* Left Side: Cart Items & Form */}
          <div>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Order Items</h3>
              {cart.map(item => (
                <div key={item.id} style={{ display: 'flex', gap: '20px', padding: '20px 0', borderBottom: '1px solid #f5f5f5' }}>
                  <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '16px', marginBottom: '5px' }}>{item.name}</h4>
                    <p style={{ color: '#e2ab34', fontWeight: 700 }}>{item.current}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '4px' }}>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ padding: '2px 8px', background: '#f5f5f5' }}>-</button>
                        <span style={{ padding: '2px 12px', fontSize: '14px' }}>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ padding: '2px 8px', background: '#f5f5f5' }}>+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} style={{ color: '#ff4d4d', background: 'none', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}>
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Delivery Details</h3>
              <form onSubmit={handlePayment} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>Full Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleInputChange} style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleInputChange} style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>Phone Number *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>Shipping Address *</label>
                  <textarea name="address" required value={formData.address} onChange={handleInputChange} rows="3" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }}></textarea>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>City *</label>
                  <input type="text" name="city" required value={formData.city} onChange={handleInputChange} style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>Pincode *</label>
                  <input type="text" name="pincode" required value={formData.pincode} onChange={handleInputChange} style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>
                
                <button 
                  type="submit"
                  style={{
                    gridColumn: 'span 2',
                    background: 'var(--green)',
                    color: '#fff',
                    padding: '18px',
                    borderRadius: '4px',
                    fontWeight: 700,
                    fontSize: '18px',
                    marginTop: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  <CreditCard size={20} /> Pay Now ₹{total.toLocaleString()}
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Summary */}
          <div style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Order Summary</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <span>Subtotal</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <span>Shipping</span>
                <span style={{ color: '#22c55e' }}>FREE</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', paddingTop: '20px', borderTop: '2px solid #f5f5f5', fontWeight: 700, fontSize: '22px' }}>
                <span>Total</span>
                <span style={{ color: '#e2ab34' }}>₹{total.toLocaleString()}</span>
              </div>
              
              <div style={{ background: '#fef3c7', padding: '15px', borderRadius: '4px', fontSize: '13px', color: '#92400e', marginBottom: '20px' }}>
                <strong>Secure Payment:</strong> Your payment is processed securely via Razorpay.
              </div>

              <Link to="/products" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--green)', fontSize: '14px', fontWeight: 600 }}>
                <ShoppingBag size={16} /> Continue Shopping <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
