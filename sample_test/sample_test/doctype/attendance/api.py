import frappe

def fetch_teacher(class_name):
    t = frappe.db.sql(
        f"""select t.full_name as teacher
        from `tabTeacher` as t
            join `tabClass` as c on (c.teacher = t.name)
        where c.name = '{class_name}'""",
        as_dict=1
    )

    return t[0]

def fetch_members(class_name):
    m = frappe.db.sql(
        f"""select s.full_name
        from `tabStudent` as s
            join `tabClass Members` as cm on (s.name = cm.member_name)
        where cm.parent = '{class_name}'""",
        as_dict=1
    )

    return m

@frappe.whitelist()
def get_teacher(class_name):
    teacher = fetch_teacher(class_name)
    members = fetch_members(class_name)

    return dict(teacher = teacher, members = members)