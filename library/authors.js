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
        } else if (firstName == "" || lastName == "") {
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
            $('#new-author-form').toggleClass('hidden');

            if (action === 'cancel')
                resetBtn();
            else {
                checkEntered();
            }
        }
    });

    $('.update-author').click(function (event) {
        var action = $(this).data('action');
        var index = $(this).data('index');

        var $firstNameText = $('#first-name-text-' + index);
        var $lastNameText = $('#last-name-text-' + index);
        var $firstNameInput = $('#first-name-input-' + index);
        var $lastNameInput = $('#last-name-input-' + index);

        var $icon = $(this).find('#edit-icon-' + index);
        var $text = $(this).find('#edit-text-' + index);

        if (action === 'edit') {
            $firstNameText.addClass('hidden');
            $lastNameText.addClass('hidden');
            $firstNameInput.removeClass('hidden');
            $lastNameInput.removeClass('hidden');

            $firstNameInput.val($firstNameText.text());
            $lastNameInput.val($lastNameText.text());

            $icon.removeClass('glyphicon-pencil');
            $icon.addClass('glyphicon-floppy-disk');
            $text.text('Save');

            $(this).data('action', 'save');
        } else if (action === 'save') {
            $thisObj = $(this);

            $.ajax({
                type: 'POST',
                url: '/api/author/' + index,
                data: {
                    'first_name': $firstNameInput.val(),
                    'last_name': $lastNameInput.val()
                },
                success: function (data) {
                    if (typeof data.first_name != 'undefined' && typeof data.last_name != 'undefined') {
                        $firstNameText.text(data.first_name);
                        $lastNameText.text(data.last_name);

                        $firstNameText.removeClass('hidden');
                        $lastNameText.removeClass('hidden');
                        $firstNameInput.addClass('hidden');
                        $lastNameInput.addClass('hidden');

                        $icon.removeClass('glyphicon-floppy-disk');
                        $icon.addClass('glyphicon-pencil');
                        $text.text('Edit');

                        $thisObj.data('action', 'edit');
                    }

                },
                fail: function (data) {
                    // Show errors
                    console.log(data);
                }
            });
        }
    });



    var $newAuthor = $('#new-author-form');
    var $firstName = $newAuthor.find('#first-name');
    var $lastName = $newAuthor.find('#last-name');

    $firstName.keyup(checkEntered);
    $lastName.keyup(checkEntered);

});
