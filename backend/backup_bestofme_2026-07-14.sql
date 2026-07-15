--
-- PostgreSQL database dump
--

\restrict ynd4XXDYS6AFJabMQYK7J1JbGxj0Nxefv14hy8udu1q6I1eEm2hM57sJrUDY77h

-- Dumped from database version 16.14 (Homebrew)
-- Dumped by pg_dump version 16.14 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: habit_logs; Type: TABLE; Schema: public; Owner: achern0v
--

CREATE TABLE public.habit_logs (
    id integer NOT NULL,
    habit_id integer,
    date date NOT NULL,
    completed boolean DEFAULT true
);


ALTER TABLE public.habit_logs OWNER TO achern0v;

--
-- Name: habit_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: achern0v
--

CREATE SEQUENCE public.habit_logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.habit_logs_id_seq OWNER TO achern0v;

--
-- Name: habit_logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: achern0v
--

ALTER SEQUENCE public.habit_logs_id_seq OWNED BY public.habit_logs.id;


--
-- Name: habits; Type: TABLE; Schema: public; Owner: achern0v
--

CREATE TABLE public.habits (
    id integer NOT NULL,
    user_id integer,
    name character varying(255) NOT NULL,
    category character varying(100),
    created_at timestamp without time zone DEFAULT now(),
    difficulty integer DEFAULT 1
);


ALTER TABLE public.habits OWNER TO achern0v;

--
-- Name: habits_id_seq; Type: SEQUENCE; Schema: public; Owner: achern0v
--

CREATE SEQUENCE public.habits_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.habits_id_seq OWNER TO achern0v;

--
-- Name: habits_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: achern0v
--

ALTER SEQUENCE public.habits_id_seq OWNED BY public.habits.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: achern0v
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password_hash character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.users OWNER TO achern0v;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: achern0v
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO achern0v;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: achern0v
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: habit_logs id; Type: DEFAULT; Schema: public; Owner: achern0v
--

ALTER TABLE ONLY public.habit_logs ALTER COLUMN id SET DEFAULT nextval('public.habit_logs_id_seq'::regclass);


--
-- Name: habits id; Type: DEFAULT; Schema: public; Owner: achern0v
--

ALTER TABLE ONLY public.habits ALTER COLUMN id SET DEFAULT nextval('public.habits_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: achern0v
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: habit_logs; Type: TABLE DATA; Schema: public; Owner: achern0v
--

COPY public.habit_logs (id, habit_id, date, completed) FROM stdin;
1	5	2026-07-11	t
8	8	2026-07-14	t
6	7	2026-07-14	f
\.


--
-- Data for Name: habits; Type: TABLE DATA; Schema: public; Owner: achern0v
--

COPY public.habits (id, user_id, name, category, created_at, difficulty) FROM stdin;
5	5	Пить воду	health	2026-07-13 12:57:03.620098	1
8	7	Читать книгу	Work	2026-07-14 18:34:12.594318	2
7	4	Go to the gym	Sport	2026-07-14 18:18:54.548528	3
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: achern0v
--

COPY public.users (id, email, password_hash, created_at) FROM stdin;
1	test@example.com	$2b$10$WvKyT4aKOlYeOvlm.PEhsu0CWj0J6kZqEFTJL49BJ74ubCQHvS38q	2026-07-09 14:04:35.376675
2	test@exampl.com	$2b$10$rm9Ca3C1pZ27t8B18VUL8uXJy64dQlJTZQdup.e.1Mj5EXnUqbw6a	2026-07-09 14:05:10.461819
3	test@test.com	$2b$10$D9F.b2mnku3nD9NqrcovFOR5X/SCa.Td/fgS75joNVso.EGc67FxK	2026-07-13 12:31:19.999531
4	test1@test.com	$2b$10$.aLaMF/l8DI//PXO/KqIQORRJJV6m2ch8kADPb8gsxpKle6eamzBe	2026-07-13 12:54:08.951191
5	test12@test.com	$2b$10$T7KtsrWmOeza5JWbMWCnlucb2TwMpeSEvFw6xl7UkOg3wLqaaTo0u	2026-07-13 12:56:26.985894
6	test2@test.com	$2b$10$NAi4b1qIyb7nEFULKJF5R.Rv6ReKB1RGMSvnUSNYym.PhuKGg8kPS	2026-07-14 17:52:54.806064
7	testpostman@test.com	$2b$10$RKgDVVa6PXzFkF0FyagXNO/vkx6slTcSC/8xnaLeP17mkClT5BG4y	2026-07-14 18:19:54.487026
\.


--
-- Name: habit_logs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: achern0v
--

SELECT pg_catalog.setval('public.habit_logs_id_seq', 9, true);


--
-- Name: habits_id_seq; Type: SEQUENCE SET; Schema: public; Owner: achern0v
--

SELECT pg_catalog.setval('public.habits_id_seq', 8, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: achern0v
--

SELECT pg_catalog.setval('public.users_id_seq', 7, true);


--
-- Name: habit_logs habit_logs_habit_id_log_date_key; Type: CONSTRAINT; Schema: public; Owner: achern0v
--

ALTER TABLE ONLY public.habit_logs
    ADD CONSTRAINT habit_logs_habit_id_log_date_key UNIQUE (habit_id, date);


--
-- Name: habit_logs habit_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: achern0v
--

ALTER TABLE ONLY public.habit_logs
    ADD CONSTRAINT habit_logs_pkey PRIMARY KEY (id);


--
-- Name: habits habits_pkey; Type: CONSTRAINT; Schema: public; Owner: achern0v
--

ALTER TABLE ONLY public.habits
    ADD CONSTRAINT habits_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: achern0v
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: achern0v
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: habit_logs habit_logs_habit_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: achern0v
--

ALTER TABLE ONLY public.habit_logs
    ADD CONSTRAINT habit_logs_habit_id_fkey FOREIGN KEY (habit_id) REFERENCES public.habits(id) ON DELETE CASCADE;


--
-- Name: habits habits_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: achern0v
--

ALTER TABLE ONLY public.habits
    ADD CONSTRAINT habits_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict ynd4XXDYS6AFJabMQYK7J1JbGxj0Nxefv14hy8udu1q6I1eEm2hM57sJrUDY77h

