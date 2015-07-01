if(typeof exports === 'object') {
	var assert = require("assert");
	var alasql = require('..');
} else {
	__dirname = '.';
};



describe('Test 360 AGGR function', function() {
  
  it('1. CREATE DATABASE',function(done){
    alasql('CREATE DATABASE test360;USE test360');
    done();
  });

  var data = [{"report_date":1435190400000,"srv_class_name":"intern","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":3,"mails_200er":112,"mails_400er":1,"mails_500er":3,"mails_total":119},{"report_date":1435190400000,"srv_class_name":"intern","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":23,"mails_400er":0,"mails_500er":0,"mails_total":23},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":1360,"mails_200er":16802,"mails_400er":2767,"mails_500er":3562,"mails_total":24491},{"report_date":1435190400000,"srv_class_name":"US","is_spam_sender":1,"is_bounce":0,"mails_no_such_user":0,"mails_200er":0,"mails_400er":0,"mails_500er":0,"mails_total":0},{"report_date":1435190400000,"srv_class_name":"US","is_spam_sender":0,"is_bounce":1,"mails_no_such_user":0,"mails_200er":0,"mails_400er":0,"mails_500er":0,"mails_total":0},{"report_date":1435190400000,"srv_class_name":"US","is_spam_sender":1,"is_bounce":0,"mails_no_such_user":0,"mails_200er":0,"mails_400er":42,"mails_500er":57,"mails_total":99},{"report_date":1435190400000,"srv_class_name":"US","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":1,"mails_200er":17,"mails_400er":0,"mails_500er":1,"mails_total":19},{"report_date":1435190400000,"srv_class_name":"US","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":0,"mails_400er":0,"mails_500er":0,"mails_total":0},{"report_date":1435190400000,"srv_class_name":"US","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":232,"mails_400er":1,"mails_500er":0,"mails_total":233},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":6,"mails_400er":0,"mails_500er":1,"mails_total":7},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":61,"mails_200er":3094,"mails_400er":566,"mails_500er":154,"mails_total":3875},
 {"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":1,"mails_no_such_user":0,"mails_200er":0,"mails_400er":0,"mails_500er":0,"mails_total":0},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":0,"mails_400er":0,"mails_500er":0,"mails_total":0},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":4,"mails_200er":36,"mails_400er":0,"mails_500er":5,"mails_total":45},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":0,"mails_400er":0,"mails_500er":0,"mails_total":0},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":1,"mails_no_such_user":0,"mails_200er":0,"mails_400er":0,"mails_500er":0,"mails_total":0},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":1,"is_bounce":0,"mails_no_such_user":0,"mails_200er":1,"mails_400er":0,"mails_500er":0,"mails_total":1},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":1,"is_bounce":0,"mails_no_such_user":1,"mails_200er":0,"mails_400er":0,"mails_500er":1,"mails_total":2},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":1,"mails_200er":6,"mails_400er":0,"mails_500er":1,"mails_total":8},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":2,"mails_400er":0,"mails_500er":0,"mails_total":2},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":0,"mails_400er":0,"mails_500er":0,"mails_total":0},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":2,"mails_200er":7,"mails_400er":0,"mails_500er":2,"mails_total":11},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":1,"mails_400er":0,"mails_500er":0,"mails_total":1},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":0,"mails_400er":0,"mails_500er":0,"mails_total":0},{"report_date":1435190400000,"srv_class_name":"intern","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":0,"mails_400er":0,"mails_500er":0,"mails_total":0},{"report_date":1435190400000,"srv_class_name":"intern","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":0,"mails_400er":0,"mails_500er":0,"mails_total":0},{"report_date":1435190400000,"srv_class_name":"intern","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":174,"mails_400er":0,"mails_500er":0,"mails_total":174},{"report_date":1435190400000,"srv_class_name":"US","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":0,"mails_400er":0,"mails_500er":0,"mails_total":0},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":4,"mails_400er":1,"mails_500er":0,"mails_total":5},{"report_date":1435190400000,"srv_class_name":"US","is_spam_sender":0,"is_bounce":1,"mails_no_such_user":11,"mails_200er":11,"mails_400er":0,"mails_500er":11,"mails_total":33},{"report_date":1435190400000,"srv_class_name":"US","is_spam_sender":1,"is_bounce":0,"mails_no_such_user":48,"mails_200er":167,"mails_400er":310,"mails_500er":281,"mails_total":806},{"report_date":1435190400000,"srv_class_name":"US","is_spam_sender":1,"is_bounce":0,"mails_no_such_user":0,"mails_200er":1,"mails_400er":0,"mails_500er":0,"mails_total":1},{"report_date":1435190400000,"srv_class_name":"US","is_spam_sender":1,"is_bounce":0,"mails_no_such_user":0,"mails_200er":0,"mails_400er":0,"mails_500er":0,"mails_total":0},{"report_date":1435190400000,"srv_class_name":"US","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":0,"mails_400er":0,"mails_500er":0,"mails_total":0},
 {"report_date":1435190400000,"srv_class_name":"US","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":18,"mails_200er":3795,"mails_400er":0,"mails_500er":132,"mails_total":3945},{"report_date":1435190400000,"srv_class_name":"US","is_spam_sender":1,"is_bounce":0,"mails_no_such_user":0,"mails_200er":0,"mails_400er":0,"mails_500er":0,"mails_total":0},{"report_date":1435190400000,"srv_class_name":"US","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":42,"mails_400er":4,"mails_500er":0,"mails_total":46},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":4,"mails_400er":0,"mails_500er":0,"mails_total":4},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":1,"mails_400er":1,"mails_500er":0,"mails_total":2},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":0,"mails_400er":0,"mails_500er":0,"mails_total":0},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":178,"mails_200er":4752,"mails_400er":0,"mails_500er":855,"mails_total":5785},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":14,"mails_400er":0,"mails_500er":0,"mails_total":14},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":0,"mails_400er":0,"mails_500er":0,"mails_total":0},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":0,"mails_400er":0,"mails_500er":0,"mails_total":0},{"report_date":1435190400000,"srv_class_name":"EU","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":1,"mails_400er":0,"mails_500er":0,"mails_total":1},{"report_date":1435190400000,"srv_class_name":"US","is_spam_sender":0,"is_bounce":1,"mails_no_such_user":3,"mails_200er":20,"mails_400er":5,"mails_500er":12,"mails_total":40},{"report_date":1435190400000,"srv_class_name":"US","is_spam_sender":1,"is_bounce":0,"mails_no_such_user":0,"mails_200er":0,"mails_400er":2011,"mails_500er":3,"mails_total":2014},{"report_date":1435190400000,"srv_class_name":"US","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":1,"mails_200er":699,"mails_400er":6,"mails_500er":8,"mails_total":714},{"report_date":1435190400000,"srv_class_name":"US","is_spam_sender":0,"is_bounce":0,"mails_no_such_user":0,"mails_200er":0,"mails_400er":0,"mails_500er":0,"mails_total":0},{"report_date":1435190400000,"srv_class_name":"US","is_spam_sender":0,"is_bounce":1,"mails_no_such_user":0,"mails_200er":0,"mails_400er":0,"mails_500er":0,"mails_total":0}];


  it('2. Prepare Data',function(done){
    var res = alasql(function(){/*

SELECT
    report_date, srv_class_name,
    SUM(CAST(mails_200er AS float)),
    SUM(CAST(mails_400er AS float)),
    SUM(CAST(mails_500er AS float)),
    SUM(CAST(mails_no_such_user AS float)),
    SUM(CAST(mails_total AS float)),

    AGGR(SUM(CAST(mails_200er as float)) / SUM(CAST(mails_total as float)) * 100) AS percentage_200er

FROM ?

  */},[data]);

   // console.log(res);

    done();
  });

  it('2. Prepare Data',function(done){
    var res = alasql(function(){/*

    SELECT
        SUM(CAST(mails_200er AS float)) AS [Anzahl 200er],
        SUM(CAST(mails_total AS float)) AS [Gesamt E-Mails],
        AGGR(100 / [Gesamt E-Mails] * [Anzahl 200er]) AS percentage_200er
    FROM ?
    GROUP BY report_date

  */},[data]);

   // console.log(res);

    done();
  });





  it('99. DROP DATABASE',function(done){
    alasql.options.modifier = undefined;
    alasql('DROP DATABASE test360');
    done();
  });

});
