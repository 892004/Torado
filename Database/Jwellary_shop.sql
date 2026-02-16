Create Database Torado;
use Torado;

-- Users Table --
create table users (
user_id int auto_increment primary key ,
name varchar(255) ,
email varchar(255) unique,
password varchar (255),
phone varchar(20),
role enum ('admin' , 'user' ) default 'user',
status tinyint default 1,
created_at timestamp default current_timestamp
);

-- Category Table --   
create table categories(
category_id int auto_increment primary key ,
category_name varchar(255),
image varchar (255),
status tinyint default 1,
created_at timestamp default current_timestamp 
);


-- Products Table --
create table Products(
product_id int auto_increment primary key ,
category_id int ,
product_name varchar(255),
description text,
price decimal (10 , 2),
discount_price decimal (10 , 2),
stock int ,
thumbnail varchar(255),
status tinyint default 1,
created_at timestamp default current_timestamp,
foreign key (category_id) references categories(category_id)
); 

-- product_image table --
create table product_img(
image_id int auto_increment primary key ,
product_id int ,
image_url varchar (255),
foreign key (product_id) references products(product_id)
); 

-- Wishlist table --
create table wishlist(
wishlist_id int auto_increment primary key,
user_id int,
product_id int,
created_at timestamp default current_timestamp,
foreign key (user_id) references users(user_id),
foreign key (product_id) references products(product_id) 
);  

-- Cart table--
create table cart(
cart_id int auto_increment primary key,
user_id int,
product_id int,
qty int,
price decimal(10 , 2),
foreign key (user_id) references users(user_id),
foreign key (product_id) references products(product_id) 
);

-- orders table-- 
create table orders(
order_id int auto_increment primary key,
user_id int,
total_amount decimal(10,2),
payment_status varchar(255),
order_status varchar(255),
address text,
created_at timestamp default current_timestamp,
foreign key (user_id) references users(user_id)
); 


-- order_items table --   
create table order_items(
order_item_id int auto_increment primary key,
order_id int,
product_id int,
qty int,
price decimal(10,2),
foreign key (order_id) references orders(order_id),
foreign key (product_id) references products(product_id) 
);


-- insert demo data inside table --


-- add on users table --  
insert into users (name , email , password , phone , role) values
('KaushalVora'  , 'vorakaushal123@gmail.com' , '123456789' , '9173739731' , 'admin');
select*from users;

-- add on Categories table --
insert into categories(category_name , image ) values
('Ring' , 'ring.jpg'); 
select*from categories;
 
delete from categories where category_id = 2;  -- delete query ;

-- add on products table --
insert into products(category_id , product_name , description ,  price , discount_price , stock , thumbnail) values
(1 , 'Rose Gold Ring' ,  'This is most selled item'  , 2000 , 1800,10,'Rose gold.jpg');
select*from products;


-- add on product_img table --
insert into product_img (product_id , image_url) values
(1 , 'product_1.jpg'); 
select*from product_img;


-- Store Procedure -- 


-- -- -- users procedure -- -- --

-- 1. sp_register_user -- 
DELIMITER $$
Create procedure sp_register_user(
IN p_name varchar(255),
IN p_email varchar (255),
IN p_password varchar (255),
IN p_phone varchar (20)
) 
BEGIN
insert into users(name , email , password , phone , role) values 
(p_name , p_email , p_password , p_phone ,'user');

END $$
DELIMITER ;


-- 2. sp_login_user --  
DELIMITER $$
create procedure sp_login_user(
IN p_email varchar(255),
IN p_password varchar(255)
)
BEGIN
select*from users where email = p_email and password = p_password and status = 1;
END $$
DELIMITER ;

-- 3.sp_get_user_by_id --
DELIMITER $$
create procedure sp_get_user_by_id(
IN p_user_id int
)   
BEGIN 
select*from users where user_id = p_user_id;
END $$
DELIMITER ;


-- -- -- category procedure -- -- --

-- 1. sp_add_category --
DELIMITER $$
create procedure sp_add_category(
IN p_category_name varchar(255),
IN p_image varchar(255)
)
BEGIN
insert into categories (category_name , image) values
(p_category_name , p_image);
END $$
DELIMITER ;

-- 2. sp_get_category --
DELIMITER $$
create procedure sp_get_categories()
BEGIN 
select*from categories where status = 1 order by category_id desc;
END $$
DELIMITER ;

-- 3. sp_get_category_by_id --
DELIMITER $$ 
create procedure sp_get_category_by_id(
IN p_category_id int
)
BEGIN 
select*from categories where category_id = p_category_id ;
END $$
DELIMITER ;

-- 4. sp_update_category --
DELIMITER $$
create procedure sp_update_category(
IN p_category_id int ,
IN p_category_name varchar(255),
IN p_image varchar(255)
) 
BEGIN 
update categories set category_name =  p_category_name, image = p_image where category_id = p_category_id;
END $$
DELIMITER ;

-- 5. sp_delete_category --
DELIMITER $$
create procedure sp_delete_category(
IN p_category_id int
)  
BEGIN
delete from categories where category_id = p_category_id;
END $$
DELIMITER ;



-- -- -- product procedure -- -- --

-- 1. sp_add_products --
DELIMITER $$
create procedure sp_add_products(
IN p_category_id int ,
IN p_product_name varchar(255),
IN p_description TEXT,
IN p_price DECIMAL (10 , 2),
IN p_discount_price DECIMAL (10 , 2),
IN p_stock INT,
IN p_thumbnail varchar(255)
)
BEGIN 
insert into products(category_id , product_name , description , price , discount_price , stock , thumbnail) values 
(p_category_id , p_product_name , p_description , p_price , p_discount_price , p_stock , p_thumbnail);
END $$
DELIMITER ;


-- 2. sp_get_products --
DELIMITER $$

CREATE PROCEDURE sp_get_products()
BEGIN

    SELECT p.*, c.category_name
    FROM products p
    JOIN categories c ON p.category_id = c.category_id
    WHERE p.status = 1
    ORDER BY p.product_id DESC;

END $$

DELIMITER ;

-- 3. sp_get_product_by_id --  
DELIMITER $$
create procedure sp_get_product_by_id(
IN p_product_id int 
)
BEGIN 
select*from products where product_id = p_product_id;
END $$
DELIMITER ;


-- 4. sp_update_product
DELIMITER $$
create procedure sp_update_product(
IN p_product_id int,
IN p_category_id int ,
IN p_product_name varchar(255),
IN p_description text,
IN p_price decimal(10 , 2),
IN p_discount_price decimal (10 , 2),
IN p_stock int ,
IN p_thumbnail varchar(255)
) 
BEGIN 
update products
SET 
category_id =  p_category_id,
product_name =  p_product_name,
description =  p_description,
price = p_price,
discount_price = p_discount_price,
stock = p_stock,
thumbnail = p_thumbnail where product_id = p_product_id;
END $$
DELIMITER ;

-- 5 sp_delete_product --
DELIMITER $$
create procedure sp_delete_product(
IN p_product_id int 
) 
BEGIN
delete from products where product_id = p_product_id;
END $$
DELIMITER ;

-- 6. sp_get_product_by_category --
DELIMITER $$
create procedure sp_get_products_by_category(
IN p_category_id int 
) 
BEGIN
select*from products where category_id = p_category_id and status = 1;
END $$
DELIMITER ;

-- 7. sp_search_product --
DELIMITER $$
create procedure sp_search_product(
IN p_keyword varchar(255) 
) 
BEGIN 
select*from products where product_name like concat('%',p_keyword,'%') or description like concat('%',p_keyword,'%');
END $$
DELIMITER ; 


-- -- -- product_image_procedure -- -- --


-- 1. sp_add_product_image -- 
 DELIMITER $$
 create procedure sp_add_product_image(
 IN p_product_id int ,
 IN p_image_url varchar(255)
 )
 BEGIN 
 insert into product_image (product_id , image_url) values (p_product_id , p_image_url);
 END $$
 DELIMITER ;


-- 2.sp_get_product_image --
DELIMITER $$

CREATE PROCEDURE sp_get_product_images(
    IN p_product_id INT
)
BEGIN

    SELECT *
    FROM product_img
    WHERE product_id = p_product_id;

END $$

DELIMITER ;

-- 3.sp_delete_product_image --  
DELIMITER $$
create procedure sp_delete_product_image(
IN p_image_id int 
)
BEGIN 
DELETE from product_img
where image_id = p_image_id;
END $$
DELIMITER ;


-- -- -- Wishlist procedure -- -- --

--  1. sp_add_wishlist --
DELIMITER $$
create procedure sp_add_wishlist(
IN p_user_id int,
IN p_product_id int
)
BEGIN 
insert into wishlist(user_id , product_id) values(p_user_id , p_product_id);
END $$
DELIMITER ;


-- 2. sp_get_wishlits_by_user --
DELIMITER $$
create procedure sp_get_wishlist_by_user(
IN p_user_id int
)  
BEGIN
 SELECT w.*, p.product_name, p.price, p.thumbnail
    FROM wishlist w
    JOIN products p ON w.product_id = p.product_id
    WHERE w.user_id = p_user_id;
END $$
DELIMITER ;

-- 3.sp_remove_wishlist --
DELIMITER $$
create procedure sp_remove_wishlist(
IN p_wishlist_id int
)
BEGIN 
DELETE from wishlist where wishlist_id = p_wishlist_id;
END $$
DELIMITER ;



-- -- -- cart procedure -- -- --

-- 1. sp_add_to_cart --
DELIMITER $$
create procedure sp_add_to_cart(
IN p_user_id int,
IN p_product_id int,
IN p_qty INT ,
IN p_price decimal(10 , 2)
)
BEGIN 
insert into cart(user_id , product_id , qty , price ) values (p_user_id , p_product_id , p_qty , p_price);
END $$
DELIMITER ;  


-- 2.sp_get_cart_by_user --
DELIMITER $$
create procedure sp_get_cart_by_user(
IN p_uset_id int
) 
BEGIN	
   SELECT c.*, p.product_name, p.thumbnail
    FROM cart c
    JOIN products p ON c.product_id = p.product_id
    WHERE c.user_id = p_user_id;
END $$
DELIMITER ;


-- 3.sp_update_cart_qty --
DELIMITER $$
create procedure sp_update_cart_qty(
IN p_cart_id int ,
IN p_qty int 
)
BEGIN 
update cart set qty = p_qty where cart_id = p_cart_id;
END $$
DELIMITER ;

-- 4.sp_remove_cart_item-- 
DELIMITER $$
create procedure sp_remove_cart_item(
IN p_cart_id int 
)  
BEGIN
delete from cart where cart_id = p_cart_id;
END $$
DELIMITER ;


-- 5. sp_clear_cart --
DELIMITER $$
create procedure sp_clear_cart(
IN p_user_id int
)
BEGIN
DELETE from cart 
where user_id =  p_user_id;
END $$
DELIMITER ; 




-- -- -- order procedure -- -- --

--  1. sp_create_order --
DELIMITER $$
create procedure so_create_order(
IN p_user_id INT, 
IN p_total_amount DECIMAL (10 ,2),
IN p_payment_status varchar(50),
IN p_order_status varchar (50),
IN p_address TEXT 
)
BEGIN 
insert into orders(user_id , total_amount , payment_status , order_status , address) values 
(p_user_id , p_total_amount , p_payment_status , p_order_status , p_address);
END $$
DELIMITER ;


--  2. sp_get_order_by_user --
DELIMITER $$
create procedure sp_get_order_by_user (
IN p_user_id int 
) 
BEGIN 
select*from orders where user_id = p_user_id order by order_id desc;
END $$
DELIMITER ;


-- 3. sp_get_order_by_id --
DELIMITER $$
create procedure sp_get_order_by_id(
IN p_order_id int
) 
BEGIN 
select*from orders where order_id = p_order_id ;
END$$
DELIMITER ;


-- 4. sp_update_order_status --
DELIMITER $$
create procedure sp_update_order_status(
IN p_order_id INT ,
IN p_order_status varchar(50)
) 
BEGIN 
update orders 
set order_status = p_order_status  where order_id = p_order_id ;
END $$
DELIMITER ;



-- -- -- order_items procedure -- -- --



-- 1. sp_add_order_item --  
DELIMITER $$
create procedure sp_add_order_item(
IN p_order_id int,
IN p_product_id int,
IN p_qty int,
IN p_price decimal (10 , 2)
)
BEGIN 
insert into order_items(order_id , product_id , qty , price) values (p_order_id , p_product_id , p_qty , p_price);
END $$
DELIMITER ;


-- 2 sp_get_order_item_by_order
DELIMITER $$
create procedure sp_get_order_item_by_order(
IN p_order_id int 
) 
BEGIN
 SELECT oi.*, p.product_name, p.thumbnail
    FROM order_items oi
    JOIN products p ON oi.product_id = p.product_id
    WHERE oi.order_id = p_order_id;
END $$sp_clear_cart
DELIMITER ;

