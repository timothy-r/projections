/**
 * Created by timrodger on 08/04/2016.
 */
var request = require('request'),
    uuid = require('node-uuid');


// get from command line
var total = 1;

var url = 'http://192.168.59.103:2113/streams/test';

for(var i = 0; i < total; i++) {

    var thing = randomThing();


    var options = {
        url: url,
        headers: {
            'Content-Type': 'application/vnd.eventstore.events+json'
        },
        body: JSON.stringify([{
            eventType: thing.name,
            eventId: thing.id,
            data: thing.data,
            metadata: {
                version: '1.0.0'
            }
        }])
    };

    request.post(options, function (err, response) {
        if (err) {
            console.log(JSON.stringify(options) + ' ' + err);
        } else {
            //console.log(response);
        }
    });
}

function randomThing()
{
    var names = ['created', 'removed', 'repriced', 'upvoted', 'downvoted', 'outofstock', 'replenished'];
    var types = ['round', 'triangular', 'haxagonal', 'spherical', 'oblong', 'square', 'rectangular'];

    var now = new Date();
    var id = uuid.v4();
    var verb = names[Math.floor(Math.random()*names.length)];
    var name = 'thing_' + verb;

    return {
        data: {
            uri: 'http://things.net/' + id,
            date: now.toUTCString(),
            created_by: 'tim',
            type: types[Math.floor(Math.random()*types.length)]
        },
        id: id,
        name : name
    };
}
