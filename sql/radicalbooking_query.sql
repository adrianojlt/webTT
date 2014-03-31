show tables;
desc offer;
desc class;
desc schedule;
desc reserve;
desc fullcalevent;

select * from users;
select * from meta;
select * from sh;
select * from offer;
select * from class;
select * from schedule;
select * from fullcalevent;
select * from reserve;

select * from offer where id = 12;
select * from class where offer_id = 12;
select max(id) as id from class where offer_id = 12;
select * from class where id = 43;
select * from schedule where class_id = 43;
select * from schedule group by offer_id;
select * from schedule order by id desc;

-- all offers from the specific user
select id as offerId, name as offerName, numberOfClasses,level, part from offer f where users_id = 7;

-- latest class's scheduled from the user with id 7
select offer_id, max(class_id) as biggest_class_id from schedule where offer_id in (select id from offer where users_id = 7) group by offer_id;

-- count the schedules of each class available
select offer_id, class_id, count(class_id) from schedule group by class_id;

-- latest class's scheduled from the user with id 7 and the quantity of each class
select offer_id, class_id, count(class_id) as qt from schedule where class_id in (select max(class_id) as biggest_class_id from schedule where offer_id in (select id from offer where users_id = 7) group by offer_id) group by offer_id;
-- select offer_id, class_id, count(class_id) as qt from schedule where class_id in (34,38,32,36,41,43,39) group by offer_id;

select id as offerId, name as offerName, numberOfClasses,level, part from offer f where users_id = 7
inner join (select offer_id, class_id, count(class_id) as qt from schedule where class_id in (select max(class_id) as biggest_class_id from schedule where offer_id in (select id from offer where users_id = 7) group by offer_id) group by offer_id) as subtable on offer.id = subtable.offer_id;

select * from offer inner join class on class.offer_id = offer.id;




-- classes with schedules after current time
select class_id, count(*) as qt from schedule s where start >= now() group by class_id;

-- all classes with id's in the previous select
select class_id, count(*) as qt from (select * from schedule where class_id in (select class_id from schedule s where start >= now() group by class_id)) as allSch group by class_id;

-- the difference between the previous two tables
select class_id from (select class_id, count(*) as qt from schedule s where start >= now() group by class_id) as table1
inner join (select class_id as classID, count(*) as qt from (select * from schedule where class_id in (select class_id from schedule s where start >= now() group by class_id)) as allSch group by class_id) as table2
on table1.class_id = table2.classID and table1.qt = table2.qt group by classID;

-- school_ids associated to this hotel
select school_id from sh where hotel_id = 5 group by school_id;

select
	o.users_id 				as schoolId,
    m.company				as schoolName,
    o.id					as offer_id,
    c.id					as class_id,
	o.name					as name,
	o.price					as price,
	o.level					as level,
	o.maxPart				as maxPart,
	o.numberOfClasses		as numberOfClasses,
    (c.maxPart - c.part)	as spots
from offer o
inner join class 	c on c.offer_id = o.id
inner join users 	u on u.id 		= o.users_id
inner join meta 	m on m.user_id 	= u.id
where 	users_id 	in ( select school_id from sh where hotel_id = 5 group by school_id ) and
		c.id 		in ( select classID from ( select class_id, count(*) as qt from schedule s where start >= curdate() group by class_id ) as table1 inner join ( select class_id as classID, count(*) as qt from ( select * from schedule where class_id in (select class_id from schedule s where start >= curdate() group by class_id)) as allSch group by class_id) as table2 on table1.class_id = table2.classID and table1.qt = table2.qt group by classID);


select
	o.users_id 				as schoolId,
    m.company				as schoolName,
    o.id					as offer_id,
    c.id					as class_id,
	o.name					as name,
	o.price					as price,
	o.level					as level,
	o.maxPart				as maxPart,
	o.numberOfClasses		as numberOfClasses,
    (c.maxPart - c.part)	as spots
from offer o
inner join class 	c on c.offer_id = o.id
inner join users 	u on u.id 		= o.users_id
inner join meta 	m on m.user_id 	= u.id
where 	users_id 	in (3,7) and
		c.id 		in (38,39);


select * from (select class_id from schedule s where start >= curdate() group by class_id) as sc;
select * from schedule where class_id in (select class_id from schedule s where start >= curdate() group by class_id);


select class_id from (select * from schedule s) as sch;

select * from schedule where class_id in (37,38,39);
select class_id, count(*) from schedule where class_id = 37 group by class_id;

select * from schedule where start >= curdate();
select class_id from schedule where start >= curdate();
select * from schedule where class_id = 37;
select * from schedule where class_id in (select class_id from schedule where start >= curdate());
select * from class where id = 38;
select * from offer where id = 12;


