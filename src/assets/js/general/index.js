import general from './general'

export default general


function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const div_ltc = document.getElementById(`crypto__variation`);

const url = 'https://app.ripio.com/api/v3/rates/?country=AR';
fetch(url, {credentials: 'include' })
.then((resp) => resp.json())
.then(function(data) {
  let reqARS = data.find( reqARS => reqARS.ticker == 'LTC_ARS');
  let price_crypto_low = JSON.parse(reqARS.sell_rate);
  let price_crypto_high = JSON.parse(reqARS.buy_rate);
  let price_crypto_variation = JSON.parse(reqARS.variation);

  const variationPrice = JSON.parse(JSON.stringify(reqARS, (variation, value) =>
    ( value.variation > '0' ) 
      ? variationClass = '--positive' :
    ( value.variation < '0' ) 
      ? variationClass ='--negative'
      : reqARS.variation
  ));

  div_ltc.innerHTML = `<div class="--buy">
                          <span class="--label">Precio de compra</span>
                            <span class="--price">$ 
                              ${price_crypto_high} 
                            </span>
                          </span>
                        </div>
                        <div class="--sell">
                          <span class="--label">Precio de venta</span>
                            <span class="--price">$
                              ${price_crypto_low} 
                            </span>
                        </div>
                        <div class="--variation ${variationPrice}">
                          <span class="--label">VariaciÃ³n</span>
                            <span class="--price">
                              ${price_crypto_variation} 
                            </span>
                        </div>
                        `
  append(div_ltc);
})
.catch(function(error) {
  console.log(JSON.stringify(error));
});   