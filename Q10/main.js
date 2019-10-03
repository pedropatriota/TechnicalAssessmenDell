$(document).ready(function() {  
    $("body").prepend('<div></div>');
    $('body div').addClass("content");
    
    $("script").before('<div class="movie"></div>');
   
    //Title:
    $(".content").prepend('<div></div>');
    $(".content div").addClass("title");

    $(".title").append("<h2></h2>");
    $(".title h2").text("The future of the 2-in-1");

    //"Compare x Options" CTA:
    $(".title").after('<div class="ctaBtn"></div>');
    $(".ctaBtn").append("<button></button>");
    $(".ctaBtn button").text("Compare 6 Options");

    //Description:
    $(".ctaBtn").before('<div class="description"></div>');
    $(".description").append("<p></p>");
    $(".description p").html(
      "13-inch 2-in-1 with a stunning HDR display, 10th Gen Intel® processors and up to 2.5 times more performance in a thinner frame, packaged in a luxurious design."
    );

    //Price 'Starting at $999.99':
    $(".ctaBtn").before('<div class="price"></div>');
    $(".price").append("<p></p>");
    $(".price p").text('Starting at $999.99');

    //Financing:
    $(".ctaBtn").before('<div class="financial"></div>');
    $(".financial").append('<div class="img"></div>');
    $(".financial .img").html('Dell<br>Preferred<br>Account');
    $(".financial").append('<ul></ul>');
    $(".financial ul").append('<li></li>');
    $(".financial ul li:nth-child(1)").text('Financing');
    
    $(".financial ul").append('<li class="apply"></li>');
    $(".financial ul .apply").append('<a href="#"></a>');
    $(".financial ul li:nth-child(2) a").text('As low as $30/mo.^');
    
    $(".financial ul li:nth-child(2)").append('<a href="#"></a>');
    $(".financial ul li:nth-child(2) a:nth-child(2)").text('| Apply');

    //tech specs below Title and above "Compare x Options" CTA:
    $(".ctaBtn").before('<div class="techSpec"></div>');
    $(".techSpec").append('<div class="min"></div>');
    $(".min").text("Minimum Tech Specs:");
    
    $(".techSpec").append('<ul class="specs"></ul>');
    $(".specs").append("<li></li>");
    $(".specs li:nth-child(1)").text(
      "10th Generation Intel® Core™ i3-1005G1 Processor (4MB Cache, up to 3.4 GHz)");
    
    $(".specs").append("<li></li>");
    $(".specs li:nth-child(2)").text("Windows 10 Home 64-bit English");
    
    $(".specs").append("<li></li>");
    $(".specs li:nth-child(3)").text("Intel® UHD Graphics");
    
    $(".specs").append("<li></li>");
    $(".specs li:nth-child(4)").text('13.4" 16:10 FHD+ WLED Touch Display (1920 x 1200)');
    
    $(".specs").append("<li></li>");
    $(".specs li:nth-child(5)").text("4GB 3733MHz LPDDR4 Memory Onboard");

    $(".specs").append("<li></li>");
    $(".specs li:nth-child(6)").text("256GB PCIe NVMe x4 Solid State Drive Onboard");

    //Price Stack | standard delivery:
    $(".ctaBtn").before('<div class="priceStack"></div');
    $(".priceStack").append('<ul class="stDelivery"></ul');
    
    $(".stDelivery").append("<li></li>");
    $(".stDelivery li:nth-child(1)").text("Standart Delivery");
    
    $(".stDelivery").append("<li></li>");
    $(".stDelivery li:nth-child(2)").append('<a href="#"></a>');
    $(".stDelivery li:nth-child(2) a").text("Free");

    //Price Stack | est.value:
    $(".priceStack").append('<ul class="stValue"></ul');
    
    $(".stValue").append("<li></li>");
    $(".stValue li:nth-child(1)").append("<strong></strong>");
    $(".stValue li:nth-child(1) strong").text("Dell Price");
    
    $(".stValue").append("<li></li>");
    $(".stValue li:nth-child(2)").append("<strong></strong>");
    $(".stValue li:nth-child(2) strong").text("$999.99");

    //Rewards:
    $(".ctaBtn").before('<div class="rewards"></div');
    $(".rewards").append("<ul></ul");
    
    $(".rewards ul").append("<li></li>");
    $(".rewards li:nth-child(1)").text("Up to $59 Back");
    $(".rewards li:nth-child(1)").prepend('<i class="fas fa-star"></i>');
    
    $(".rewards ul").append("<li></li>");
    $(".rewards li:nth-child(2)").text("in rewards");

    $('.movie').append('<iframe></iframe>');
    $('.movie iframe').addClass('myFrame');
    $('.movie iframe').prepend('allowfullscreen');
    $('.movie iframe').attr('src',"http://player.ooyala.com/static/v4/stable/4.36.2/skin-plugin/iframe.html?ec=13MGp1aDE62mCkSKRb5ldxO2hgCIEHuW&pbid=b71985dbc2bf441f93da7897f568754b&pcode=RvYmY6hur13N6wMKKnX_HgCa0VEU");
  });