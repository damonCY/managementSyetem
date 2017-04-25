// default settings. fis3 release

// Global start
fis.match('*.{js,css}', {
  useHash: true
});

fis.match('::image', {
  useHash: true
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

fis.match('*.less', {
  parser: fis.plugin('less'),  
  rExt: '.css'
})

// Global end

// default media is `dev`
fis.media('dev')
  .match('*',{
    useHash: false,
    optimizer: null
  })
  .match('*.less', {
  parser: fis.plugin('less'),  
  rExt: '.css'
});


fis.media('test')
  .match('**.css',{
    useHash: false,
    optimizer: fis.plugin('clean-css')
  })
  .match('**.js',{
    useHash: true,
    optimizer: fis.plugin('uglify-js')
  });


// extends GLOBAL config
fis.media('production');