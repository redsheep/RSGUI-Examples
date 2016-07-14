var lblCanvas = new Phaser.Game(480, 150, Phaser.CANVAS, 'lblState',{
  preload:function() {
  },
  create:function() {
    var game=this.game;
    game.stage.backgroundColor='#fff';
    game.gui=new RSGUI(game);

    var label=game.gui.add.label(50,50,'Label Text!');

    var label2=game.gui.add.label(50,100,'Label Text!');
    label2.setFont('My Font');

    var label3=game.gui.add.label(50,150,'Label Text!');
    label3.setFont('#ff0000');

    var btnMainState=game.gui.add.button(0,0,'main menu');
    btnMainState.onClick.add(function(){
      game.state.start('main');
    });
  }
});
