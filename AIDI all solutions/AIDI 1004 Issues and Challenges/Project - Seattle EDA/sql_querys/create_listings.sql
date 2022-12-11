use test;
drop table listings;
create table listings (
	idx int auto_increment,
	id int,
	listing_url text,
	scrape_id long,
	last_scraped DATE,
	name text,
	summary text,
	space text,
	description text,
	experiences_offered text,
	neighborhood_overview text,
	notes text,
	transit text,
	thumbnail_url text,
	medium_url text,
	picture_url text,
	xl_picture_url text,
	host_id int,
	host_url text,
	host_name text,
	host_since text,
	host_location text,
	host_about text,
	host_response_time text,
	host_response_rate text,
	host_acceptance_rate text,
	host_is_superhost text,
	host_thumbnail_url text,
	host_picture_url text,
	host_neighbourhood text,
	host_listings_count text,
	host_total_listings_count text,
	host_verifications text,
	host_has_profile_pic text,
	host_identity_verified text,
	street text,
	neighbourhood text,
	neighbourhood_cleansed text,
	neighbourhood_group_cleansed text,
	city text,
	state text,
	zipcode text,
	market text,
	smart_location text,
	country_code text,
	country text,
	latitude float,
	longitude float,
	is_location_exact text,
	property_type text,
	room_type text,
	accommodates int,
	bathrooms text,
	bedrooms text,
	beds text,
	bed_type text,
	amenities text,
	square_feet text,
	price text,
	weekly_price text,
	monthly_price text,
	security_deposit text,
	cleaning_fee text,
	guests_included int,
	extra_people text,
	minimum_nights int,
	maximum_nights int,
	calendar_updated text,
	has_availability text,
	availability_30 int,
	availability_60 int,
	availability_90 int,
	availability_365 int,
	calendar_last_scraped DATE,
	number_of_reviews int,
	first_review text,
	last_review text,
	review_scores_rating text,
	review_scores_accuracy text,
	review_scores_cleanliness text,
	review_scores_checkin text,
	review_scores_communication text,
	review_scores_location text,
	review_scores_value text,
	requires_license text,
	license text,
	jurisdiction_names text,
	instant_bookable text,
	cancellation_policy text,
	require_guest_profile_picture text,
	require_guest_phone_verification text,
	calculated_host_listings_count int,
	reviews_per_month text,
	primary key (idx)
);

load data local infile "/Users/francis/Documents/Georgian\ College/AIDI/AIDI\ all\ solutions/AIDI\ 1004\ Issues\ and\ Challenges/Project\ -\ Seattle\ EDA/listings.csv " 
into table listings
fields terminated by ','  ENCLOSED BY '"'
lines terminated by '\n'
ignore 1 rows
(id, listing_url, scrape_id, last_scraped, name, summary, space, description, experiences_offered, neighborhood_overview, notes, transit, thumbnail_url, medium_url, picture_url, xl_picture_url, host_id, host_url, host_name, host_since, host_location, host_about, host_response_time, host_response_rate, host_acceptance_rate, host_is_superhost, host_thumbnail_url, host_picture_url, host_neighbourhood, host_listings_count, host_total_listings_count, host_verifications, host_has_profile_pic, host_identity_verified, street, neighbourhood, neighbourhood_cleansed, neighbourhood_group_cleansed, city, state, zipcode, market, smart_location, country_code, country, latitude, longitude, is_location_exact, property_type, room_type, accommodates, bathrooms, bedrooms, beds, bed_type, amenities, square_feet, price, weekly_price, monthly_price, security_deposit, cleaning_fee, guests_included, extra_people, minimum_nights, maximum_nights, calendar_updated, has_availability, availability_30, availability_60, availability_90, availability_365, calendar_last_scraped, number_of_reviews, first_review, last_review, review_scores_rating, review_scores_accuracy, review_scores_cleanliness, review_scores_checkin, review_scores_communication, review_scores_location, review_scores_value, requires_license, license, jurisdiction_names, instant_bookable, cancellation_policy, require_guest_profile_picture, require_guest_phone_verification, calculated_host_listings_count, reviews_per_month)
;

SELECT * FROM listings;