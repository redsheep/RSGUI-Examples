var chkCanvas = new Phaser.Game(480, 150, Phaser.CANVAS, 'btnState',{
  preload:function() {
  },
  create:function() {
    var game=this.game;
    game.stage.backgroundColor='#fff';
    game.gui=new RSGUI(game);

    var btnRed = game.gui.add.button(0,0,"Failure");
    btnRed.setBGColor('#f00');
    var btnGreen = game.gui.add.button(70,0,"Success");
    btnGreen.setBGColor('#0f0');
    var btnOrange = game.gui.add.button(160,0,"Warning");
    btnOrange.setBGColor('#f90');
    var btnDisable = game.gui.add.button(240,0,"Disable");
    btnDisable.disable();
    var btnFont = game.gui.add.button(0,50,"custom Font");
    btnFont.setFont('My Font');
    var btnSize = game.gui.add.button(110,50,"custom size");
    btnSize.resize(120,60);
    var btnEmpty = game.gui.add.button(240,50,"");
    btnEmpty.resize(80,40);

  }
});
