$(document).ready(function(){
    $('#updateKnap').on('click', function(){
        var $id_numb = $('#id').val();
        var $input_text = $('#add_item').val();

        if ($input_text != "") {
            var $delete_button = $('<button>slet</button>').click(function(){
                $(this).closest('li').remove();
            });

            var $list_item = $('<li>' + $id_numb +"  "+ $input_text + '</li>').append($delete_button);
            $('ul').append($list_item);

        }else{
            alert("tekst felt er tomt");
        }

    });


});

function deleteItem(){
    var id = $("#remove_item").val();
    $("#modify_list > li:contains(" + id + ")").remove();
}
