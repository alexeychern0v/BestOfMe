--
-- PostgreSQL database dump
--

\restrict TA9FbprFtAccPh1JVI7YR3VMGOmObM3f5xOvlpns0sz8KWafyw73uJCNFs9h4MR

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

\unrestrict TA9FbprFtAccPh1JVI7YR3VMGOmObM3f5xOvlpns0sz8KWafyw73uJCNFs9h4MR

