var lblCanvas = new Phaser.Game(480, 150, Phaser.CANVAS, 'lblState',{
  preload:function() {
  },
  create:function() {
    var game=this.game;
    game.stage.backgroundColor='#fff';
    game.gui=new RSGUI(game);

    var label=game.gui.add.label(0,0,'Label Text!');

    var label2=game.gui.add.label(0,50,'Label Text!');
    label2.setFont('My Font');

    var label3=game.gui.add.label(0,100,'Label Text!');
    label3.setFont('#ff0000');

  }
});
