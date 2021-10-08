
// Contact us form

$('form').on('submit', function (e) {
    e.preventDefault();  //prevent form from submitting
    alert(JSON.stringify($("form").serializeArray().toString()));
});

