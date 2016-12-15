$(document).ready(function() {

    var checkEntered = function () {
        var firstName = $firstName.val().trim();
        var lastName = $lastName.val().trim();

        var $addBtn = $('#add-author');
        var $btnIcon = $addBtn.find('#add-author-icon');
        var $btnText = $addBtn.find('#add-author-text');

        if (firstName !== "" && lastName !== "") {
            // Add button becomes Save

            $addBtn.data('action', 'submit');

            $btnIcon.removeClass('glyphicon-plus');
            $btnIcon.removeClass('glyphicon-remove');
            $btnIcon.addClass('glyphicon-floppy-disk');

            $btnText.text('Save');
        } else if (firstName == "" && lastName == "") {
            // Add Button becomes Cancel

            $addBtn.data('action', 'cancel');

            $btnIcon.removeClass('glyphicon-plus');
            $btnIcon.removeClass('glyphicon-floppy-disk');
            $btnIcon.addClass('glyphicon-remove');

            $btnText.text('Cancel');
        }
    };

    var resetBtn = function () {
        var $addBtn = $('#add-author');
        var $btnIcon = $addBtn.find('#add-author-icon');
        var $btnText = $addBtn.find('#add-author-text');

        $addBtn.data('action', '');

        $btnIcon.removeClass('glyphicon-floppy-disk');
        $btnIcon.removeClass('glyphicon-remove');
        $btnIcon.addClass('glyphicon-plus');

        $btnText.text('Add Author');
    };

    $('#add-author').click(function (event) {
        var action = $(this).data('action');

        if (action !== 'submit') {
            event.preventDefault();
            $('#new-author-form').toggle();

            if (action === 'cancel')
                resetBtn();
            else {
                checkEntered();
            }
        }
    });

    var $newAuthor = $('#new-author-form');
    var $firstName = $newAuthor.find('#first-name');
    var $lastName = $newAuthor.find('#last-name');

    $firstName.keyup(checkEntered);
    $lastName.keyup(checkEntered);

});
