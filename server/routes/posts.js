var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

router.get('/', function(req, res, next) {
  Post.find(function(err, posts){
    if (err) {
      return next(err);
    }

    res.json(posts);
  });
});

router.post('/', function(req, res, next) {
  var post = new Post(req.body);

  post.save(function(err, post){
    if(err) {
      return next(err);
    }

    res.json(post);
  });
});

router.param('postId', function(req, res, next, id) {
  var query = Post.findById(id);

  query.exec(function (err, post){
    if (err) { 
      return next(err); 
    }

    if (!post) { 
      return next(new Error('Não foi possível encontrar o post')); 
    }

    req.post = post;
    return next();
  });
});

router.get('/:postId', function(req, res) {
  req.post.populate('comments', function(err, post) {
    if (err) { 
      return next(err); 
    }

    res.json(post);
  });  
});

router.put('/:postId/upvote', function(req, res, next) {
  req.post.upvote(function(err, post){
    if (err) { 
      return next(err);
    }

    res.json(post);
  });
});

router.post('/:postId/comments', function(req, res, next) {
  var comment = new Comment(req.body);
  comment.post = req.post;

  comment.save(function(err, comment){
    if(err) {
      return next(err);
    }

    req.post.comments.push(comment);
    req.post.save(function(err, post) {
      if(err) {
        return next(err);
      }

      res.json(comment);
    });
  });
});

router.param('commentId', function(req, res, next, id) {
  var query = Comment.findById(id);

  query.exec(function (err, comment){
    if (err) { 
      return next(err); 
    }

    if (!comment) { 
      return next(new Error('Não foi possível encontrar o comment')); 
    }

    req.comment = comment;
    return next();
  });
});

router.get('/:postId/comments/:commentId', function(req, res) {
  res.json(req.comment);
});

router.put('/:postId/comments/:commentId/upvote', function(req, res, next) {
  req.comment.upvote(function(err, comment){
    if (err) { 
      return next(err);
    }

    res.json(comment);
  });
});

module.exports = router;
