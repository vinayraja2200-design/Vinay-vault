const { data, error } = await supabase
.from('notes')
.insert([
{
title,
content,
category
}
]);
