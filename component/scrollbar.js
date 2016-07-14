var scbCanvas = new Phaser.Game(480, 150, Phaser.CANVAS, 'scbState',{
  preload:function() {
  },
  create:function() {
    var game=this.game;
    game.stage.backgroundColor='#fff';
    game.gui=new RSGUI(game);

    var vertical=game.gui.add.scrollbar(320,10,20,140,'vertical');
    var horizontal=game.gui.add.scrollbar(0,120,300,20,'horizontal');

    vertical.onChange.add(function(){
      console.log("vertical scroll");
    });
    horizontal.onChange.add(function(){
      console.log("horizontal scroll");
    });

  }
});
