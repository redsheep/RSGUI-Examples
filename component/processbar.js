var pbrCanvas = new Phaser.Game(480, 150, Phaser.CANVAS, 'pbrState',{
  preload:function() {
  },
  create:function() {
    var game=this.game;
    game.stage.backgroundColor='#fff';
    game.gui=new RSGUI(game);

    var processbar = game.gui.add.processbar(0,0,200,30);
    processbar.setValue(0,100);
    processbar.setValue(50);

    var processbar = game.gui.add.processbar(0,50,200,30);
    processbar.setValue(0,100);
    processbar.setValue(100);
  }
});
