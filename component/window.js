var winCanvas = new Phaser.Game(480, 200, Phaser.CANVAS, 'winState',{
  preload:function() {
  },
  create:function() {
    var game=this.game;
    game.stage.backgroundColor='#fff';
    game.gui=new RSGUI(game);

    var mywin=game.gui.add.window(160,60,320,150,"window");
    //mywin.input.enableDrag();

  }
});
