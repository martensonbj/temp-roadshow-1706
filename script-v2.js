// Version 2: Less Ugly.

function getValues() {
  var name = $('.grocery-list-form--item').val();
  var quantity = $('.grocery-list-form--quantity').val();
  return { name: name, quantity: quantity }
}

function createListItem(item) {
  return (
    `<li> Quantity: <span>${item.quantity}</span> Item: <span>${item.name}</span>
      <button>X</button>
    </li>`
  )
}

function appendElement(target, content) {
  target.append(content);
}

function clearFields() {
  $('.grocery-list-form--item').val('');
  $('.grocery-list-form--quantity').val('');
}

function disableButton() {
  $('.grocery-list-form--submit').addClass('disabled')
  $('.grocery-list-form--submit').attr('disabled', true)
}


function saveItem(e) {
  e.preventDefault();

  var item = getValues();
  var content = createListItem(item);
  var target = $('.grocery-list');

  appendElement(target, content);
  clearFields();
  disableButton();
};

function handleDisableButton() {
  var item = getValues();
  var setDisabled = (item.name === '' || item.quantity === '');

  $('.grocery-list-form--submit').attr('disabled', setDisabled);
  $('.grocery-list-form--submit').toggleClass('disabled', setDisabled);
}

function removeItem() {
  $(this).closest('li').remove();
};

function editText() {
  $(this).attr('contentEditable', true);
};

$('.grocery-list-form--submit').on('click', saveItem);
$('.grocery-list-form--item, .grocery-list-form--quantity').on('input', handleDisableButton);
$('.grocery-list').on('click', 'button', removeItem);
$('.grocery-list').on('click', 'span', editText);
