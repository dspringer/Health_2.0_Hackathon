$(document).ready(function() {
            var calories_data=[];
            //console.log($('#button1').attr("data-state"));

            //after button is clicked we download the data

    $('.fr').click(function() {
        $.get('http://unshakable-beast-50-212504.use1.nitrousbox.com:8080/healthboard');
        alert('Text Sent');
    });        



    $('#button11').click(function(){
                id=this.id;
                console.log(id);
                            console.log($('#button11').attr("data-state"));

                //start ajax request
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",

                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
        calories_data=gen_data12();
   

             $('#container1').highcharts({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '1 yr Risk Profile(Hypertension)'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Predicted Risk(%)'
                        }
                    },
                    xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        }],
                    series: [{
                        name: 'Predicted Risk',
                        data: calories_data
                    }]
                });
            });

   $('#button12').click(function(){
                id=this.id;
                console.log(id);
                console.log($('#button1').attr("data-state"));

                //start ajax request
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",

                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
             fake_data=gen_data12();

             $('#container1').highcharts({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '1 yr Risk Profile(Diabetes)'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Predicted Risk(%)'
                        }
                    },
                               xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        }],
                    series: [{
                        name: 'Predicted Risk',
                        data: fake_data
                    }]
                });
            });
   
   $('#button13').click(function(){
                id=this.id;

                //start ajax request
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",

                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
             fake_data=gen_data12();

             $('#container1').highcharts({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Workout Intensity'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Moderate Intensity Workout(mins)'
                        }
                    },
                xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
                    }],
                    series: [{
                        name: 'Workout Intensity',
                        data: fake_data
                    }]
                });
            });
   //////////////
 $('#button21').click(function(){
                id=this.id;

                //start ajax request
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",

                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
             fake_data=gen_data13();

             $('#container2').highcharts({
                     chart: {
                        type: 'column'
                    },
                    title: {
                        text: '1 yr Risk Profile(Hypertension)'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Predicted Risk(%)'
                        }
                    },

                               xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        }],
                    series: [{
                        name: 'Predicted Risk',
                        data: fake_data
                    }]
                });
            });
  $('#button22').click(function(){
                id=this.id;

                //start ajax request
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",

                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
             fake_data=gen_data13();

             $('#container2').highcharts({
                     chart: {
                        type: 'column'
                    },
                    title: {
                        text: '1 yr Risk Profile(Diabetes)'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Predicted Risk(%)'
                        }
                    },
                               xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        }],
                    series: [{
                        name: 'Predicted Risk',
                        data: fake_data
                    }]
                });
            });
  $('#button23').click(function(){
                id=this.id;

                //start ajax request
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",

                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
             fake_data=gen_data12();

             $('#container2').highcharts({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Workout Intensity'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Moderate Intensity Workout(mins)'
                        }
                    },
                    series: [{
                        name: 'Workout Intensity',
                        data: fake_data
                    }]
                });
            });
   //////////////
  $('#button31').click(function(){
                id=this.id;

                //start ajax request
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",

                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
             fake_data=gen_data12();

             $('#container3').highcharts({
                     chart: {
                        type: 'column'
                    },
                    title: {
                        text: '1 yr Risk Profile'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Predicted Risk(%)'
                        }
                    },
        xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        }],
                    series: [{
                        name: 'Predicted Risk',
                        data: fake_data
                    }]
                });
            });
  $('#button32').click(function(){
                id=this.id;

                //start ajax request
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",

                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
             fake_data=gen_data12();

             $('#container3').highcharts({
                     chart: {
                        type: 'column'
                    },
                    title: {
                        text: '1 yr Risk Profile'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Predicted Risk(%)'
                        }
                    },
                    series: [{
                        name: 'Predicted Risk',
                        data: fake_data
                    }]
                });
            });
  $('#button33').click(function(){
                id=this.id;

                //start ajax request
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",

                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
             fake_data=gen_data12();

             $('#container3').highcharts({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Workout Intensity'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Moderate Intensity Workout(mins)'
                        }
                    },
                    series: [{
                        name: 'Workout Intensity',
                        data: fake_data
                    }]
                });
            });


   //////////////

  $('#button41').click(function(){
                id=this.id;

                //start ajax request
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",

                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
             fake_data=gen_data12();

             $('#container4').highcharts({
                     chart: {
                        type: 'column   '
                    },
                    title: {
                        text: '1 yr Risk Profile'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Predicted Risk(%)'
                        }
                    },
                    series: [{
                        name: 'Predicted Risk',
                        data: fake_data
                    }]
                });
            });
  $('#button42').click(function(){
                id=this.id;

                //start ajax request
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",

                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
             fake_data=gen_data12();

             $('#container4').highcharts({
                     chart: {
                        type: 'column'
                    },
                    title: {
                        text: '1 yr Risk Profile'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Predicted Risk(%)'
                        }
                    },
                    series: [{
                        name: 'Predicted Risk',
                        data: fake_data
                    }]
                });
            });
  $('#button43').click(function(){
                id=this.id;

                //start ajax request
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",

                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
             fake_data=gen_data12();

             $('#container4').highcharts({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Workout Intensity'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Moderate Intensity Workout(mins)'
                        }
                    },
                    series: [{
                        name: 'Workout Intensity',
                        data: fake_data
                    }]
                });
            });


   /////

  $('#button51').click(function(){
                id=this.id;

                //start ajax request
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",

                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
             fake_data=gen_data12();

             $('#container5').highcharts({
                     chart: {
                        type: 'column   '
                    },
                    title: {
                        text: '1 yr Risk Profile'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Predicted Risk(%)'
                        }
                    },
                    series: [{
                        name: 'Predicted Risk',
                        data: fake_data
                    }]
                });
            });
  $('#button52').click(function(){
                id=this.id;

                //start ajax request
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",

                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
             fake_data=gen_data12();

             $('#container5').highcharts({
                     chart: {
                        type: 'column'
                    },
                    title: {
                        text: '1 yr Risk Profile'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Predicted Risk(%)'
                        }
                    },
                    series: [{
                        name: 'Predicted Risk',
                        data: fake_data
                    }]
                });
            });
  $('#button53').click(function(){
                id=this.id;

                //start ajax request
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",

                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
             fake_data=gen_data12();

             $('#container4').highcharts({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Workout Intensity'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Moderate Intensity Workout(mins)'
                        }
                    },
                    series: [{
                        name: 'Workout Intensity',
                        data: fake_data
                    }]
                });
            });



///////////////////////////////////////

  $('#button61').click(function(){
                id=this.id;

                //start ajax request
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",

                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
             fake_data=gen_data12();

             $('#container6').highcharts({
                     chart: {
                        type: 'column   '
                    },
                    title: {
                        text: '1 yr Risk Profile'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Predicted Risk(%)'
                        }
                    },
                    series: [{
                        name: 'Predicted Risk',
                        data: fake_data
                    }]
                });
            });
  $('#button62').click(function(){
                id=this.id;

                //start ajax request
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",

                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
             fake_data=gen_data12();

             $('#container6').highcharts({
                     chart: {
                        type: 'column'
                    },
                    title: {
                        text: '1 yr Risk Profile'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Predicted Risk(%)'
                        }
                    },
                    series: [{
                        name: 'Predicted Risk',
                        data: fake_data
                    }]
                });
            });
  $('#button63').click(function(){
                id=this.id;

                //start ajax request
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",

                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
             fake_data=gen_data12();

             $('#container6').highcharts({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Workout Intensity'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Moderate Intensity Workout(mins)'
                        }
                    },
                    series: [{
                        name: 'Workout Intensity',
                        data: fake_data
                    }]
                });
            });


////////////////


  $('#button71').click(function(){
                id=this.id;

                //start ajax request
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",

                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
             fake_data=gen_data12();

             $('#container7').highcharts({
                     chart: {
                        type: 'column   '
                    },
                    title: {
                        text: '1 yr Risk Profile'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Predicted Risk(%)'
                        }
                    },
                    series: [{
                        name: 'Predicted Risk',
                        data: fake_data
                    }]
                });
            });
  $('#button72').click(function(){
                id=this.id;

                //start ajax request
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",

                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
             fake_data=gen_data12();

             $('#container7').highcharts({
                     chart: {
                        type: 'column'
                    },
                    title: {
                        text: '1 yr Risk Profile'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Predicted Risk(%)'
                        }
                    },
                    series: [{
                        name: 'Predicted Risk',
                        data: fake_data
                    }]
                });
            });
  $('#button73').click(function(){
                id=this.id;

                //start ajax request
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",

                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
             fake_data=gen_data12();

             $('#container7').highcharts({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Workout Intensity'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Moderate Intensity Workout(mins)'
                        }
                    },
                    series: [{
                        name: 'Workout Intensity',
                        data: fake_data
                    }]
                });
            });



/////////
   var calories_data1=[];

            //after button is clicked we download the data
            $('#button2').click(function(){

                //start ajax request
                console.log('hi');
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",
                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data1[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
             $('#container2').highcharts({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Calories Burnt'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Calories'
                        }
                    },
                    series: [{
                        name: 'Calories',
                        data: calories_data1
                    }]
                });
            });
   $('#button3').click(function(){

                //start ajax request
                console.log('hi');
                $.ajax({
                    url: "https://api.validic.com/v1/organizations/51aca5a06dedda916400002b/users/51c7dc676dedda04f9000011/fitness.json?access_token=ENTERPRISE_KEY&start_date=2014-04-01",
                    //force to handle it as text
                    dataType: "text",
                    success: function(data) {
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        console.log(json.fitness.length);

                        for (var i=0;i<json.fitness.length;i++)
                        {
                                calories_value=(json.fitness[i]['calories']);
                                calories_data1[i]=calories_value;

                        }
                    }
                });
                ///
                                //console.log(calories_data);
                                fake_data=gen_data();
             $('#container3').highcharts({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Calories Burnt'
                    },
                
                    yAxis: {
                        title: {
                            text: 'Calories'
                        }
                    },
                    series: [{
                        name: 'Calories',
                        data: fake_data
                    }]
                });
            });
});        
function gen_data()
{
    var data=[];
    var min=20; var max=80;
    for (var i=0;i<60;i++)
    {
        data[i]=getRandomArbitrary(min,max);
    }
    return data;
}
function gen_data12()
{
    var data=[];
    var min=10; var max=80;
    for (var i=0;i<12;i++)
    {
        data[i]=getRandomArbitrary(min,max);
    }
    return data;   
}

function gen_data13()
{
    var data=[];
    var min=10; var max=20;
    for (var i=0;i<12;i++)
    {
        data[i]=getRandomArbitrary(min,max);
    }
    return data;   
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}




