DROP TABLE IF EXISTS Jobs;
DROP TABLE IF EXISTS Locations;
DROP TABLE IF EXISTS ContractTypes;

create table if not exists ContractTypes (
                                             id int auto_increment not null,
                                             type varchar(100) not null,
    primary key (id)
    );

create table if not exists Locations (
                                         id bigint auto_increment not null,
                                         lattitude varchar(30),
    longitude varchar(30),
    state varchar(30),
    city varchar(30),
    zip_code varchar(30) default null,
    primary key (id)
    );

create table if not exists Jobs (
    id bigint auto_increment not null,
    title varchar(100) not null,
    description text not null,
    company varchar(100) not null,
    salary_min double not null,
    contract_type varchar(100) not null,
    location_id varchar(255) not null,
    apply_url text not null,

    inserted_at timestamp default now(),
    created_at timestamp,
    primary key (id),
    foreign key (location_id) references Locations(id)
);


INSERT INTO Locations (lattitude, longitude, state, city, zip_code) VALUES
    ('44.288778', '-85.594462', 'New York', 'New York City', '10001');

insert into ContractTypes (type) values ('full-time');
insert into ContractTypes (type) values ('part-time');
insert into ContractTypes (type) values ('contract');

INSERT INTO Jobs (title, description, company, salary_min, contract_type, location_id, apply_url, inserted_at, created_at) VALUES
('Software Engineer', 'This is a job for software engineers', 'Meijer', 121422.7, 'full-time',
 '1',
 'https://www.adzuna.com/land/ad/5261754728?se=6kQTOuxP8BG_Ctxhj4VHjg&utm_medium=api&utm_source=6ddc0eff&v=EF77028515D752223A82139CCDCA0D95C5C0554F', '2022-01-01', '2025-06-21T10:35:56Z');

