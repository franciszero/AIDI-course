-- use test;
-- drop table reviews;
-- create table reviews (
-- 	idx int auto_increment,
-- 	listing_id int,
-- 	id int, 
-- 	date date,
-- 	reviewer_id int,
-- 	reviewer_name text,
-- 	comments text,
-- 	primary key (idx)
-- );

-- load data local infile "/Users/francis/Documents/Georgian\ College/AIDI/AIDI\ all\ solutions/AIDI\ 1004\ Issues\ and\ Challenges/Project\ -\ Seattle\ EDA/reviews.csv " 
-- into table reviews
-- fields terminated by ','  ENCLOSED BY '"'
-- lines terminated by '\n'
-- ignore 1 rows
-- (listing_id, id, date, reviewer_id, reviewer_name, comments)
-- ;

select count(*) from reviews order by idx;
