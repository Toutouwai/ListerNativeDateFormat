$(document).ready(function() {

	$('#lndf-dropdown li').click(function() {
		$('#lndf_format').val($(this).text());
		$('#lndf').submit();
	});

});
