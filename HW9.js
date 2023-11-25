//Завдання 1
$(document).ready(function() {
    $('h2.head').css('background-color', 'green');
  
    $('h2.head .inner').css('font-size', '35px');
  });
  

//Завдання 2
$(document).ready(function() {
    $('a[href^="https"]').attr('target', '_blank');
  });
  

//Завдання 3
$(document).ready(function() {
  $('h3').each(function() {
    const nextDiv = $(this).next('div');
  
    if (nextDiv.length) {
      $(this).before(nextDiv);
    }
  });
});


//Завдання 4
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Task 4</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>
  <h2>Checkboxes</h2>
  <input type="checkbox" id="checkbox1"> Checkbox 1
  <input type="checkbox" id="checkbox2"> Checkbox 2
  <input type="checkbox" id="checkbox3"> Checkbox 3
  <input type="checkbox" id="checkbox4"> Checkbox 4
  <input type="checkbox" id="checkbox5"> Checkbox 5
  <input type="checkbox" id="checkbox6"> Checkbox 6

  <script src="script.js"></script>
</body>
</html>


$(document).ready(function() {
  const checkboxes = $('input[type="checkbox"]');

  checkboxes.on('change', function() {
    const checkedCount = checkboxes.filter(':checked').length;

    if (checkedCount >= 3) {
      checkboxes.prop('disabled', true);
    }
  });
});
