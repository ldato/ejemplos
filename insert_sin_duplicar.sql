//PARA INSERTAR

insert into tabla1
select * from tabla2
left join tabla1 on (tabla1.id=tabla2.id)
where tabla1.id is null


//PARA ACTUALIZAR

update tabla1
set tabla1.value=t1.value
from
(
select * from tabla2
left join tabla1 on (tabla1.id=tabla2.id)
where tabla1.id is not null
) t1 where t1.id=tabla1.id
