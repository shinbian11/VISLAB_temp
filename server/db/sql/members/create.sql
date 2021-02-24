INSERT INTO members(name, role, degree, interest, employment, email, website, enrolled_year, enrolled_month, is_alumni, image_data, image_name)
VALUES ( ${name}, ${role}, ${degree}, ${interest}, ${employment}, ${email}, ${website}, ${enrolled_year}, ${enrolled_month}, ${is_alumni}, ${image_data}, ${image_name} )
RETURNING *
