-- Type: account_type
DROP TYPE IF EXISTS public.account_type;
CREATE TYPE public.account_type AS ENUM(
  'Client', 
  'Employee', 
  'Admin');

-- create blolg table if it does not exist
CREATE TABLE IF NOT EXISTS public.blog
(
  blog_id integer NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
  blog_title character varying COLLATE pg_catalog."default" NOT NULL,
  blog_content text COLLATE pg_catalog."default" NOT NULL,
  blog_created timestamp with time zone NOT NULL DEFAULT now(),
  blog_thumbnail character varying COLLATE pg_catalog."default" NOT NULL,
  blog_is_published boolean NOT NULL,
  CONSTRAINT blog_pkey PRIMARY KEY (blog_id)
)

-- Table structure for table `keyword`
CREATE TABLE IF NOT EXISTS public.keyword
(
  keyword_id integer NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
  keyword character varying COLLATE pg_catalog."default" NOT NULL,
  CONSTRAINT keyword_pkey PRIMARY KEY (keyword_id)
)

CREATE TABLE IF NOT EXISTS public.blog_keyword
(
  blog_id integer NOT NULL,
  keyword_id integer NOT NULL,
  CONSTRAINT blog_keyword_pkey PRIMARY KEY (blog_id, keyword_id),
  CONSTRAINT fk_blog FOREIGN KEY (blog_id)
    REFERENCES public.blog (blog_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION,
  CONSTRAINT fk_keyword FOREIGN KEY (keyword_id)
    REFERENCES public.keyword (keyword_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
)

-- Table structure for table `account`
CREATE TABLE IF NOT EXISTS public.account
(
  account_id integer NOT NULL GENERATED BY DEFAULT AS IDENTITY,
  account_firstname character varying NOT NULL,
  account_lastname character varying NOT NULL,
  account_email character varying NOT NULL,
  account_password character varying NOT NULL,
  account_type account_type NOT NULL DEFAULT 'Client'::account_type,
  CONSTRAINT account_pkey PRIMARY KEY (account_id)
);