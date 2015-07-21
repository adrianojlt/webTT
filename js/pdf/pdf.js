// ... dom is ready 
$(document).ready(function() {

	$('#tmp').click(function(evt) {
    	//var doc = new jsPDF('p', 'in', 'letter');
		var doc = new jsPDF('p','pt','a4');
		addHeader(doc);
    	doc.text(20, 100, 'Hello world!');
		doc.text(20, 300, 'This is client-side Javascript, pumping out a PDF.');
		doc.addPage();
		addHeader(doc);
		doc.addPage();
		addHeader(doc);
		doc.output('dataurlnewwindow');
	});

	$('#print').click(function(evt) {
		//console.log('print');
		createPDF();
	});

	$('#fromHTML').click(function(evt) {
		//console.log('print');
		fromHTML();
	});

	function addHeader(pdf) {
    	pdf.text(20, 40, 'Header');
	};

	function fromHTML() {
    	var pdf = new jsPDF('p', 'in', 'letter');
        var source = $('#testcase').first();
        var specialElementHandlers = {
            '#bypassme': function(element, renderer) {
                return true;
            }
        };

        pdf.fromHTML(
        $('#container').get(0), // [Refer Exact code tutorial][2]HTML string or DOM elem ref.
         	0.5,    // x coord
         	0.5,    // y coord
         	{
             	'width': 7.5, // max width of content on PDF
             	'elementHandlers': specialElementHandlers
         });

        pdf.output('dataurl');
	};

	function createPDF() {

		var pdf = new jsPDF('p','pt','a4');
		//var container = $('#container');
		var container = document.getElementById('container');
		var body = document.body;

		var options = {pagesplit: true };

		pdf.addHTML(body,0,0,options,function() {
			//pdf.save('web.pdf');
			//pdf.output('dataurl');
			pdf.output('dataurlnewwindow');
		});

		//pdf.addHTML(document.body,function() {
			//pdf.save('web.pdf');
		//});
	};

});
