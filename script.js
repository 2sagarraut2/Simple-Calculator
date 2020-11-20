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
