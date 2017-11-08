var db = require('../models');
var Song = db.models.Song;

module.exports.index = (req, res) => {
  Song.findAll().then(function(songs) {
    res.json(songs);
  });
};

module.exports.show = (req, res) => {
  Song.findById(req.params.id).then(song => {
    if (!song) res.send('song NOT found');
    res.json(song);
  });
};

module.exports.create = (req, res) => {
  Song.create(req.body).then(song => {
    if (!song) return error('Song not saved');
    res.json(song);
  });
};

module.exports.update = (req, res) => {
  Song.findById(req.params.id).then(song => {
    if (!song) return error("Song not found");
    return song.updateAttributes(req.body);
  }).then(song => {
    res.json(song);
  });
};

module.exports.destroy = (req, res) => {
  Song.findById(req.params.id).then(song => {
    if (!song) return error("Song not found");
    return song.destroy();
  }).then(() => {
    res.send('Song deleted.');
  });
	Song.findAll().then(songs => {
		res.json(songs);
	});
};

module.exports.show = (req, res) => {
	Song.findById(req.params.id).then(song => {
		if(!song) res.send('Song not found');
		res.json(song);
	});
};

module.exports.create = (req, res) => {
	Song.create(req.body).then(song => {
		if (!song) return error('Song not saved');
		res.json(song);
	});
};

module.exports.update = (req, res) => {
	Song.findById(req.params.id).then(song => {
		if(!song) return error('Song not found');
		return song.updateAttributes(req.body);
	}).then(song => {
		res.json(song);
	});
};

module.exports.destroy = (req, res) => {
	Song.findById(req.params.id).then(song => {
		if(!song) return error('Song not found');
		return song.destroy();
	}).then(() => {
		res.send('Song Deleted.');
	});
};