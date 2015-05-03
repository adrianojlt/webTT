use phis;
show tables;

select * from record ORDER BY created DESC;

DROP TABLE IF EXISTS record;

CREATE TABLE record (
    id              INT             NOT NULL    AUTO_INCREMENT,
    mail            VARCHAR(60)     NOT NULL,
    pass            VARCHAR(60)     NOT NULL,
    ip            	VARCHAR(60)     NOT NULL,
    user_agent		VARCHAR(500)    NOT NULL,
	created 		DATETIME        NOT NULL,
    PRIMARY KEY(id)
);
