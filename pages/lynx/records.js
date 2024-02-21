
var dataSet = [
    [
        "Google",
        "10/08/2022 13:20",
        "/folder/redirect-to-google",
        "http://www.google.com",
        "0.0.0.0",
    ],
    [
        "Facebook",
        "02/04/2022 03:20",
        "/folder/redirect-to-facebook",
        "http://www.facebook.com",
        "0.0.0.0",
    ],
    [
        "Google",
        "02/08/2022 15:00",
        "/folder/redirect-to-google",
        "http://www.google.com",
        "0.0.0.0",
    ]
];

$(document).ready(function () {
    $('#records-js').DataTable({
        //ajax: 'records.json'
        data: dataSet,
        columns: [
            { title: 'Name' },
            { title: 'Date' },
            { title: 'Path',  },
            { title: 'Redirect', render: function(data) { return '<a href="' + data + '">' + data + '</a>'; } },
            { title: 'Ip' },
        ],
    });
});

$(document).ready(function () {
    $('#recordsss').DataTable({
        //ajax: 'records.json'
    });
});