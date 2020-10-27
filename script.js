$(document).ready(function(){
    $("#firstBtn").on('click', function(){
        const input = $('#input').val();
        if (input !== '') {
            const next_li = $('<li></li>');
            const span = document.createElement('span');
            $(span).addClass('text-wrapper');
            $('.task-wrapper').append(next_li);
            $('.task-wrapper').fadeIn();
            $(next_li).append(span);
            $(span).append().text(input)
            $('#input').val('');
            const btnSpan = document.createElement('span');
            const doneBtn = $('<button></button>').text('\u2714');
            const declineBtn = $('<button></button>').text('\u2716');
            $(btnSpan).addClass('btn-wrapper');
            $(doneBtn).addClass('doneBtn');
            $(declineBtn).addClass('declineBtn');
            $(btnSpan).append(doneBtn);
            $(btnSpan).append(declineBtn);
            $(next_li).append(btnSpan);
            $(doneBtn).on('click', () => {
                $(next_li).remove();
                alert('Congratulations!!! You\'ve got improved');
            });
            $(declineBtn).on('click', () => {
                $(next_li).remove();
                alert('Don\'t worry! Try it later');
            });
        } else {
            alert('The field cannot be empty!')
        }

        $('#secondBtn').on('click', () => {
            $('.task-wrapper').empty();
        });
    });
});