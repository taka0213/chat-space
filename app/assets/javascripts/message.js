$(function() {
  var buildMessageHTML = function(message) {
    var image = message.image.url ? `<img src="${message.image.url}" class="lower-message__image" />` : "";
    var html = `<div class="message new-message" data-message_id="${message.id}">
                  <div class="info">
                    <p class="info__user">${message.user_name}</p>
                    <p class="info__date">${message.created_at}</p>
                  </div>
                  <div class="message__text">
                    <p class="lower-message__content">${message.content}</p>
                    ${image}
                  </div>
                </div>`
    return html;
    };

  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildMessageHTML(data);
      $('.messages').append(html)
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('form')[0].reset();
    })
    .fail(function(){
      alert('error');
    });
  });
});
