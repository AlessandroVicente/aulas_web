/* ========== SWIPER ========== */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  mousewheel: true,
  keyboard: true,

  // Swiper 7
  watchOverflow: false,
  resizeObserver: false,
  watchSlidesProgress: true,

  breakpoints: {
    576: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3,
      setWrapperSize: true
    }
  }
});

/* ========== CALCLAR ========== */
function calcular() {
  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;
  let email = document.getElementById('email').value;
  let output = document.getElementById('output');
  let precoFinal = 0; 

  let prods = [
    { id: 1, name: "Bife com batata", price: 30.0 },
    { id: 2, name: "Coxa crocante", price: 25.0 },
    { id: 3, name: "Carne de panela", price: 22.0 },
    { id: 4, name: "Farofa", price: 10.0 },
    { id: 5, name: "Salada", price: 8.0 },
    { id: 6, name: "Torresmo", price: 12.0 }
  ];

  let quantities = document.getElementsByName("quantity");
  console.log(quantities);
  console.log(name);

  output.innerHTML = `<p>Caro(a) <b>${name}, </p></br></br>`
  output.innerHTML += `<p>Seguem os dados do seu pedido:</p></br>`
  output.innerHTML += `<ul>`
  
  for (let input of quantities) {
    if (input.value > 0) {
      precoFinal += (input.value*prods[input.id-1].price);

      output.innerHTML += `<li>
        Prato: ${prods[input.id-1].name} 
        - Preço unitário: ${prods[input.id-1].price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} 
        - Quantidade: ${input.value} 
        - Total: ${(input.value*prods[input.id-1].price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </li></br>`;
    }
  }

  output.innerHTML += `</ul></br>`;
  output.innerHTML += `<p>Preço final: <b>${precoFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</b></p></br>`;
  output.innerHTML += `
    📞 ${phone}</br> 
    📧 ${email}
  `
}

/* ========== MASK ========== */
document.getElementById('phone').addEventListener('input', event => {
  let x = event.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
  event.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});
