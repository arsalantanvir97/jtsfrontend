/*
// for off canvans, mobile menu and cart drawer
$(document).ready(function () {
  // for off canvas and mobile menu
  $(".hamburger").click(function () {
    $(".off-canvas").addClass("active");
    $(".overlay").addClass("overlay-active");
  });
  $(".close").click(function () {
    $(".off-canvas").removeClass("active");
    $(".overlay").removeClass("overlay-active");
  });
  // for cart drawer
  $("#drawer").click(function () {
    $(".cart-drawer").addClass("active");
    $(".overlay").addClass("overlay-active");
  });
  $(".close").click(function () {
    $(".cart-drawer").removeClass("active");
    $(".overlay").removeClass("overlay-active");
  });
  $("#add-to-cart").click(function () {
    $(".cart-drawer").addClass("active");
    $(".overlay").addClass("overlay-active");
  });
  $(".close").click(function () {
    $(".cart-drawer").removeClass("active");
    $(".overlay").removeClass("overlay-active");
  });
});

// for quantity product counter
var QtyInput = (function () {
  var $qtyInputs = $(".qty-input");

  if (!$qtyInputs.length) {
    return;
  }

  var $inputs = $qtyInputs.find(".product-qty");
  var $countBtn = $qtyInputs.find(".qty-count");
  var qtyMin = parseInt($inputs.attr("min"));
  var qtyMax = parseInt($inputs.attr("max"));

  $inputs.change(function () {
    var $this = $(this);
    var $minusBtn = $this.siblings(".qty-count--minus");
    var $addBtn = $this.siblings(".qty-count--add");
    var qty = parseInt($this.val());

    if (isNaN(qty) || qty <= qtyMin) {
      $this.val(qtyMin);
      $minusBtn.attr("disabled", true);
    } else {
      $minusBtn.attr("disabled", false);

      if (qty >= qtyMax) {
        $this.val(qtyMax);
        $addBtn.attr("disabled", true);
      } else {
        $this.val(qty);
        $addBtn.attr("disabled", false);
      }
    }
  });

  $countBtn.click(function () {
    var operator = this.dataset.action;
    var $this = $(this);
    var $input = $this.siblings(".product-qty");
    var qty = parseInt($input.val());

    if (operator == "add") {
      qty += 1;
      if (qty >= qtyMin + 1) {
        $this.siblings(".qty-count--minus").attr("disabled", false);
      }

      if (qty >= qtyMax) {
        $this.attr("disabled", true);
      }
    } else {
      qty = qty <= qtyMin ? qtyMin : (qty -= 1);

      if (qty == qtyMin) {
        $this.attr("disabled", true);
      }

      if (qty < qtyMax) {
        $this.siblings(".qty-count--add").attr("disabled", false);
      }
    }

    $input.val(qty);
  });
})();
// for video upload
jQuery(document).ready(function ($) {
  // Click button to activate hidden file input
  $(".fileuploader-btn").on("click", function () {
    $(".fileuploader").click();
  });

  // Click above calls the open dialog box
  // Once something is selected the change function will run
  $(".fileuploader").change(function () {
    // Create new FileReader as a variable
    var reader = new FileReader();

    // Onload Function will run after video has loaded
    reader.onload = function (file) {
      var fileContent = file.target.result;
      $("body").append(
        '<video src="' +
          fileContent +
          '" width="320" height="240" controls></video>'
      );
    };

    // Get the selected video from Dialog
    reader.readAsDataURL(this.files[0]);
  });
});
*/

jQuery(document).ready(function ($) {
  // Off-canvas and mobile menu
  $(".hamburger").click(function () {
    $(".off-canvas").addClass("active");
    $(".overlay").addClass("overlay-active");
  });

  // Close button for off-canvas menu
  $(".off-canvas .close").click(function () {
    $(".off-canvas").removeClass("active");
    $(".overlay").removeClass("overlay-active");
  });

  // Cart drawer
  $("#drawer, #add-to-cart").click(function () {
    $(".cart-drawer").addClass("active");
    $(".overlay").addClass("overlay-active");
  });

  // Close button for cart drawer
  $(".cart-drawer .close").click(function () {
    $(".cart-drawer").removeClass("active");
    $(".overlay").removeClass("overlay-active");
  });

  // Quantity product counter
  var $qtyInputs = $(".qty-input");

  if ($qtyInputs.length) {
    var $inputs = $qtyInputs.find(".product-qty");
    var $countBtn = $qtyInputs.find(".qty-count");
    var qtyMin = parseInt($inputs.attr("min"));
    var qtyMax = parseInt($inputs.attr("max"));

    $inputs.change(function () {
      var $this = $(this);
      var $minusBtn = $this.siblings(".qty-count--minus");
      var $addBtn = $this.siblings(".qty-count--add");
      var qty = parseInt($this.val());

      if (isNaN(qty) || qty <= qtyMin) {
        $this.val(qtyMin);
        $minusBtn.attr("disabled", true);
      } else {
        $minusBtn.attr("disabled", false);

        if (qty >= qtyMax) {
          $this.val(qtyMax);
          $addBtn.attr("disabled", true);
        } else {
          $this.val(qty);
          $addBtn.attr("disabled", false);
        }
      }
    });

    $countBtn.click(function () {
      var operator = this.dataset.action;
      var $this = $(this);
      var $input = $this.siblings(".product-qty");
      var qty = parseInt($input.val());

      if (operator == "add") {
        qty += 1;
        if (qty >= qtyMin + 1) {
          $this.siblings(".qty-count--minus").attr("disabled", false);
        }

        if (qty >= qtyMax) {
          $this.attr("disabled", true);
        }
      } else {
        qty = qty <= qtyMin ? qtyMin : (qty -= 1);

        if (qty == qtyMin) {
          $this.attr("disabled", true);
        }

        if (qty < qtyMax) {
          $this.siblings(".qty-count--add").attr("disabled", false);
        }
      }

      $input.val(qty);
    });
  }

  // Video upload with preview
  $(".fileuploader-btn").on("click", function () {
    $(".fileuploader").click();
  });

  $(".fileuploader").change(function () {
    var reader = new FileReader();

    reader.onload = function (file) {
      var fileContent = file.target.result;
      $(".comment-area").append(
        '<video src="' +
          fileContent +
          '" width="320" height="240" controls></video>'
      );
    };

    reader.readAsDataURL(this.files[0]);
  });
});
// for image upload with preview
jQuery(document).ready(function () {
  ImgUpload();
});

function ImgUpload() {
  var imgWrap = "";
  var imgArray = [];

  $(".upload__inputfile").each(function () {
    $(this).on("change", function (e) {
      imgWrap = $(this).closest(".upload__box").find(".upload__img-wrap");
      var maxLength = $(this).attr("data-max_length");

      var files = e.target.files;
      var filesArr = Array.prototype.slice.call(files);
      var iterator = 0;
      filesArr.forEach(function (f, index) {
        if (!f.type.match("image.*")) {
          return;
        }

        if (imgArray.length > maxLength) {
          return false;
        } else {
          var len = 0;
          for (var i = 0; i < imgArray.length; i++) {
            if (imgArray[i] !== undefined) {
              len++;
            }
          }
          if (len > maxLength) {
            return false;
          } else {
            imgArray.push(f);

            var reader = new FileReader();
            reader.onload = function (e) {
              var html =
                "<div class='upload__img-box'><div style='background-image: url(" +
                e.target.result +
                ")' data-number='" +
                $(".upload__img-close").length +
                "' data-file='" +
                f.name +
                "' class='img-bg'><div class='upload__img-close'></div></div></div>";
              imgWrap.append(html);
              iterator++;
            };
            reader.readAsDataURL(f);
          }
        }
      });
    });
  });

  $("body").on("click", ".upload__img-close", function (e) {
    var file = $(this).parent().data("file");
    for (var i = 0; i < imgArray.length; i++) {
      if (imgArray[i].name === file) {
        imgArray.splice(i, 1);
        break;
      }
    }
    $(this).parent().parent().remove();
  });
}
// share drop down toggler
// $(".share").click(function () {
//   $(".share-dropdown").toggleClass("share-active");
// });

$(document).ready(function () {
  $(".popup-button").click(function (event) {
    var index = $(".popup-button").index(this);
    var $targetPopup = $(".popup").eq(index);

    // Toggle the display of the corresponding popup
    $targetPopup.toggle();

    // Hide other popups
    $(".popup").not($targetPopup).hide();

    event.stopPropagation();
  });

  $(".popup").click(function (event) {
    event.stopPropagation(); // Prevent the click event from propagating to the document
  });

  $(document).click(function (event) {
    if (!$(event.target).hasClass("popup-button")) {
      $(".popup").hide();
    }
  });
});
