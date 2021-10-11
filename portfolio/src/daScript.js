const projBox1 = $("#pro1");
const projBox2 = $("#pro2");
const projBox3 = $("#pro3");
const projBox4 = $("#pro4");

$(function () {
  projBox1.on("click", function () {
    window.location.href = $(this).data().link;
  });
});
$(function () {
  projBox2.on("click", function () {
    window.location.href = $(this).data().link;
  });
});
$(function () {
  projBox3.on("click", function () {
    window.location.href = $(this).data().link;
  });
});
$(function () {
  projBox4.on("click", function () {
    window.location.href = $(this).data().link;
  });
});
