SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.cronify_billing_cycles (
    id bigint NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    card_id bigint NOT NULL,
    sub text NOT NULL,
    datefrom timestamp with time zone NOT NULL,
    dateto timestamp with time zone NOT NULL
);
COMMENT ON TABLE public.cronify_billing_cycles IS 'Credit card''s billing cycles';
CREATE SEQUENCE public.cronify_billing_cycles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.cronify_billing_cycles_id_seq OWNED BY public.cronify_billing_cycles.id;
CREATE TABLE public.cronify_card_types (
    id integer NOT NULL,
    name text NOT NULL,
    icon_id integer,
    order_num integer
);
CREATE SEQUENCE public.cronify_card_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.cronify_card_type_id_seq OWNED BY public.cronify_card_types.id;
CREATE TABLE public.cronify_cards (
    id bigint NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    sub text NOT NULL,
    bank text NOT NULL,
    last4num numeric,
    card_type_id smallint NOT NULL,
    provider_id text NOT NULL
);
COMMENT ON TABLE public.cronify_cards IS 'tarjetas';
CREATE SEQUENCE public.cronify_cards_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.cronify_cards_id_seq OWNED BY public.cronify_cards.id;
CREATE TABLE public.cronify_icons (
    id integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL
);
CREATE SEQUENCE public.cronify_icons_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.cronify_icons_id_seq OWNED BY public.cronify_icons.id;
CREATE TABLE public.cronify_providers (
    id text NOT NULL,
    name text NOT NULL
);
COMMENT ON TABLE public.cronify_providers IS 'Credit Cards Providers';
CREATE TABLE public.cronify_purchases (
    id bigint NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    sub text NOT NULL,
    price numeric NOT NULL,
    class_icon_id integer,
    description text,
    billing_cycles_id bigint NOT NULL,
    datetime timestamp with time zone NOT NULL
);
COMMENT ON TABLE public.cronify_purchases IS 'Purchases';
CREATE SEQUENCE public.cronify_purchases_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.cronify_purchases_id_seq OWNED BY public.cronify_purchases.id;
CREATE TABLE public.cronify_users (
    sub text NOT NULL,
    name text NOT NULL,
    given_name text,
    family_name text
);
ALTER TABLE ONLY public.cronify_billing_cycles ALTER COLUMN id SET DEFAULT nextval('public.cronify_billing_cycles_id_seq'::regclass);
ALTER TABLE ONLY public.cronify_card_types ALTER COLUMN id SET DEFAULT nextval('public.cronify_card_type_id_seq'::regclass);
ALTER TABLE ONLY public.cronify_cards ALTER COLUMN id SET DEFAULT nextval('public.cronify_cards_id_seq'::regclass);
ALTER TABLE ONLY public.cronify_icons ALTER COLUMN id SET DEFAULT nextval('public.cronify_icons_id_seq'::regclass);
ALTER TABLE ONLY public.cronify_purchases ALTER COLUMN id SET DEFAULT nextval('public.cronify_purchases_id_seq'::regclass);
ALTER TABLE ONLY public.cronify_billing_cycles
    ADD CONSTRAINT cronify_billing_cycles_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.cronify_card_types
    ADD CONSTRAINT cronify_card_type_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.cronify_cards
    ADD CONSTRAINT cronify_cards_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.cronify_icons
    ADD CONSTRAINT cronify_icons_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.cronify_providers
    ADD CONSTRAINT cronify_providers_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.cronify_purchases
    ADD CONSTRAINT cronify_purchases_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.cronify_users
    ADD CONSTRAINT users_pkey PRIMARY KEY (sub);
CREATE INDEX cronify_cards_sub_ix ON public.cronify_cards USING btree (sub);
CREATE UNIQUE INDEX cronify_users_sub_ix ON public.cronify_users USING btree (sub);
CREATE TRIGGER set_public_cronify_billing_cycles_updated_at BEFORE UPDATE ON public.cronify_billing_cycles FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_cronify_billing_cycles_updated_at ON public.cronify_billing_cycles IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_cronify_cards_updated_at BEFORE UPDATE ON public.cronify_cards FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_cronify_cards_updated_at ON public.cronify_cards IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_cronify_purchases_updated_at BEFORE UPDATE ON public.cronify_purchases FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_cronify_purchases_updated_at ON public.cronify_purchases IS 'trigger to set value of column "updated_at" to current timestamp on row update';
