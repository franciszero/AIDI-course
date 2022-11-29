use test;
drop table calendar;
create table calendar (
	idx int auto_increment,
	listing_id int,
	date DATE,
	available text,
	price text,
	primary key (idx)
);

load data local infile "/Users/francis/Documents/Georgian\ College/AIDI/AIDI\ all\ solutions/AIDI\ 1004\ Issues\ and\ Challenges/Project\ -\ Seattle\ EDA/calendar.csv " 
into table calendar
fields terminated by ','  ENCLOSED BY '"'
lines terminated by '\n'
ignore 1 rows
(listing_id,date,available,price)
;

SELECT * FROM calendar;