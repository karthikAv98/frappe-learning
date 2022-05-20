// Copyright (c) 2022, karthik and contributors
// For license information, please see license.txt

frappe.ui.form.on('Attendance', {
	refresh: function(frm) {
		let today = new Date().toISOString().slice(0, 10);
		frm.set_value('date', today);
		console.log(today);
	},

	class_name: function(frm) {
		if(frm.doc.class_name) {
			frappe.call({
				method: "sample_test.sample_test.doctype.attendance.api.get_teacher",
				args: {
					class_name: frm.doc.class_name
				}
			}).done((r) => {
				console.log(r.message)
				frm.set_value('teacher', r.message.teacher.teacher);
				$.each(r.message.members, function(_i, e) {
					let entry = frm.add_child('attendance_list');
					entry.member = e.full_name;
				})

				refresh_field('attendance_list');
			})
		}
	}
});
