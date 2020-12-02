import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(3).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
})

$('.wrap').html(
    `<div class="dropdown">
  <buttom class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
      <ul class="dropdown-list" data-toggle-id="dropdownMenuButton">
          <li class="dropdown-item"><a href="">Action 1</a></li>
          <li class="dropdown-item"><a href="">Action 2</a></li>
          <li class="dropdown-item"><a href="">Action 3</a></li>
      </ul>
</div>`
);

$('.dropdown-toggle').dropdown();