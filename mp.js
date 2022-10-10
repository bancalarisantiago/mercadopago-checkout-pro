


const mp = new MercadoPago('TEST-246e7b18-7353-4de7-b81a-d37a68af980e', {
  locale: 'es-AR'
});

mp.checkout({
  preference: {
    id: 'YOUR_PREFERENCE_ID'
  },
  render: {
    container: '.cho-container',
    label: 'Pagar',
  }
});