// Copyright (c) 2022, karthik and contributors
// For license information, please see license.txt

frappe.ui.form.on('Student', {
	first_name: function(frm) {
		if(frm.doc.first_name) {
			let last_name = frm.doc.last_name == undefined ? "":frm.doc.last_name;
			frm.set_value('full_name', frm.doc.first_name + " " + last_name);
		}
	},

	last_name: function(frm) {
		if(frm.doc.last_name) {
			frm.set_value('full_name', frm.doc.first_name + " " + frm.doc.last_name);
		}
	},

	birthday: function(frm) {
		let age = 10;
		frm.set_value('age', age)
	}
});
