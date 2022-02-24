CREATE TABLE industry_employment_population(
    id BIGSERIAL NOT NULL PRIMARY KEY, 
    industry VARCHAR(50) NOT NULL,
    year integer NOT NULL,
    population integer NOT NULL
);

