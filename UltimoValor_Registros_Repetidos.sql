select numero, nombre, estado, fecha_actualizacion
  from (select *,
  row_number() over (partition by numero order by fecha_actualizacion desc) as rn
  from prueba.dbo.pagos1) t
	where t.rn = 1;





  select t.ShipperID, t.ShipperName, t.Phone
  from (select t.*,
               row_number() over (partition by t.ShipperName order by t.Phone desc) as rn
          from tbl t) t
 where t.rn = 1
