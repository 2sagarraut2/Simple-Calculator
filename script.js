        $('document').ready(function()
        {
            let res;

            $('.btnClick').click(function(){
                $('#textbox').val($('#textbox').val() + this.id);
            });

            $('.equal').click(function(){
                let string = $('#textbox').val();
                res = eval(string);
                $('#resultbox').val(string + " = " + res);
                $('#textbox').val("");
            });

            $('.clear').click(function(){
                $('#textbox').val("");
                $('#resultbox').val("");
            })
        });

  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
  function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
  e=o.createElement(i);r=o.getElementsByTagName(i)[0];
  e.src='//www.google-analytics.com/analytics.js';
  r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
  ga('create','UA-52746336-1');ga('send','pageview');
  var isCompleted = {};
  function sampleCompleted(sampleName){
    if (ga && !isCompleted.hasOwnProperty(sampleName)) {
      ga('send', 'event', 'WebCentralSample', sampleName, 'completed'); 
      isCompleted[sampleName] = true;
    }
  }
