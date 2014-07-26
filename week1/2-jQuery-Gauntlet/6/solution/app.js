/*
* Solution by Deyan Yanakiev
* GitHub - https://github.com/lostm1nd
*/
 
$(document).ready(function() {
	'use strict';

	// the data-list attr gets the id
	// of the list from which we need to
	// move elements and the listToMoveTo
	// is the other list (left or right)
	var getOppositeList = {
		'#leftSelect': '#rightSelect',
		'#rightSelect': '#leftSelect'
	};

	$('.btn').on('click', function() {
		var listToMoveFrom = $(this).attr('data-list'),
			selectedValues = $(listToMoveFrom).val(),
			listToMoveTo = getOppositeList[listToMoveFrom];

		// check if there is actually
		// some option that is selected
		// cannot forEach null
		if (selectedValues) {
			selectedValues.forEach(function(val) {
				var element = $(listToMoveFrom).find('option[value="' + val + '"]');
				element.removeAttr('selected');
				$(listToMoveTo).append(element);
			});
		}
	});

	$.getJSON('http://localhost:3000/students', function(students) {
		populateLeftSelect(students);
	});

	function populateLeftSelect(students) {
		students.forEach(function(student) {
			var option = $('<option>');

			option.attr('value', student.id);
			option.text(student.name);

			$('#leftSelect').append(option);
		});
	}
});