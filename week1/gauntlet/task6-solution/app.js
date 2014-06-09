$(document).ready(function() {
	'use strict';

	var ALL_STUDENTS = [],
		leftSelect = $('#container').find('select').first(),
		moveRightBtn = $('#container').find('button').first(),
		rightSelect = $('#container').find('select').last(),
		moveLeftBtn = $('#container').find('button').last();

	moveRightBtn.on('click', function() {
		var selectedValues = leftSelect.val();

		// check if there is actually
		// some option that is selected
		// cannot forEach null
		if (selectedValues) {
			selectedValues.forEach(function(val) {
				var element = leftSelect.find('option[value="' + val + '"]');
				element.remove();
				element.removeAttr('selected');
				rightSelect.append(element);
			});
		}
	});

	moveLeftBtn.on('click', function() {
		var selectedValues = rightSelect.val();

		// check if there is actually
		// some option that is selected
		// cannot forEach null
		if (selectedValues) {
			selectedValues.forEach(function(val) {
				var element = rightSelect.find('option[value="' + val + '"]');
				element.remove();
				element.removeAttr('selected');
				leftSelect.append(element);
			});
		}
	});


	$.getJSON('http://localhost:3000/students', function(students) {
		ALL_STUDENTS = students;

		populateLeftSelect();
	});

	function populateLeftSelect() {
		ALL_STUDENTS.forEach(function(student) {
			var option = $('<option>');

			option.attr('value', student.id);
			option.text(student.name);

			leftSelect.append(option);
		});
	}
});