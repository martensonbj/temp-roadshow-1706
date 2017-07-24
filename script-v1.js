// Version 1: Real Ugly.

var submitBtn = $('.grocery-list-form--submit');
var itemInput = $('.grocery-list-form--item');
var quantityInput = $('.grocery-list-form--quantity');
var list = $('.grocery-list');

submitBtn.on('click', function(e) {
  e.preventDefault();
  console.log('clicking!');
  var item = itemInput.val();
  var quantity = quantityInput.val();

  list.append('<li> Quantity: <span class="grocery-list-item-quantity">' + quantity + '</span> Item: <span class="grocery-list-item-item">' + item + '</span><button>X</button></li>');

  itemInput.val('')
  quantityInput.val('')

  submitBtn.addClass('disabled')
  submitBtn.attr('disabled', true)
});

itemInput.on('input', function() {
  var val = $(this).val()
  console.log( val);
  if (val === '' || quantityInput.val() === '') {
    console.log('button disabled');
    submitBtn.addClass('disabled')
    submitBtn.attr('disabled', true)
  } else {
    console.log('button enabled');
    submitBtn.removeClass('disabled')
    submitBtn.attr('disabled', false)
  }
})

quantityInput.on('input', function() {
  var val = $(this).val()
  console.log(val);
  if (val === '' || itemInput.val() === '') {
    console.log('button disabled');
    submitBtn.addClass('disabled')
    submitBtn.attr('disabled', true)

  } else {
    console.log('button enabled');
    submitBtn.removeClass('disabled')
    submitBtn.attr('disabled', false)
  }
})

list.on('click', 'button', function() {
  $(this).closest('li').remove();
})

list.on('click', 'span', function() {
  $(this).attr('contentEditable', true)
})
