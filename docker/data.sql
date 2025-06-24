DROP TABLE IF EXISTS Jobs;
DROP TABLE IF EXISTS Locations;
DROP TABLE IF EXISTS ContractTypes;

create table if not exists ContractTypes (
                                             id int auto_increment not null,
                                             workType varchar(100) not null,
    primary key (id)
    );

create table if not exists Locations (
                                         id bigint auto_increment not null,
                                         lattitude varchar(30),
    longitude varchar(30),
    countryState varchar(30),
    city varchar(30),
    zipCode varchar(30) default null,
    primary key (id)
    );

create table if not exists Jobs (
                                    id bigint auto_increment not null,
                                    title varchar(100) not null,
    description text not null,
    company varchar(100) not null,
    salaryMin double,
    contractType varchar(100),
    locationId bigint not null,
    applyUrl text not null,
    insertedAt timestamp default now(),
    createdAt timestamp,
    primary key (id),
    foreign key (locationId) references Locations(id)
    );


INSERT INTO Locations (lattitude, longitude, countryState, city) VALUES
    ('44.288778', '-85.594462', 'New York', 'New York City');

INSERT INTO Locations (lattitude, longitude, countryState, city) VALUES
    ('44.288778', '-81.594462', 'New York', 'New York City');

INSERT INTO Locations (lattitude, longitude, countryState, city) VALUES
    ('44.288778', '-81.594462', 'Alabama', 'Atlanta');

insert into ContractTypes (workType) values ('full-time');
insert into ContractTypes (workType) values ('part-time');
insert into ContractTypes (workType) values ('contract');

INSERT INTO Jobs (title, description, company, salaryMin, contractType, locationId, applyUrl, insertedAt, createdAt) VALUES
    ('Software Engineer', 'This is a job for software engineers', 'Meijer', 121422.7, 'full-time',
     '1',
     'https://www.adzuna.com/land/ad/5261754728?se=6kQTOuxP8BG_Ctxhj4VHjg&utm_medium=api&utm_source=6ddc0eff&v=EF77028515D752223A82139CCDCA0D95C5C0554F', '2022-01-01', '2025-06-21T10:35:56Z');

INSERT INTO Jobs (title, description, company, salaryMin, contractType, locationId, applyUrl, insertedAt, createdAt) VALUES
    ('Software Engineer', 'This is a job for software engineers', 'FB', 121422.7, 'full-time',
     2,
     'https://www.adzuna.com/land/ad/5261754728?se=6kQTOuxP8BG_Ctxhj4VHjg&utm_medium=api&utm_source=6ddc0eff&v=EF77028515D752223A82139CCDCA0D95C5C0554F', '2022-01-01', '2025-06-21T10:35:56Z');

INSERT INTO Jobs (title, description, company, salaryMin, contractType, locationId, applyUrl, insertedAt, createdAt) VALUES
    ('Software Engineer', 'This is a job for software engineers', 'Apple', 121422.7, 'full-time',
     3,
     'https://www.adzuna.com/land/ad/5261754728?se=6kQTOuxP8BG_Ctxhj4VHjg&utm_medium=api&utm_source=6ddc0eff&v=EF77028515D752223A82139CCDCA0D95C5C0554F', '2022-01-01', '2025-06-21T10:35:56Z');

