var chkCanvas = new Phaser.Game(480, 100, Phaser.CANVAS, 'chkState',{
  preload:function() {
  },
  create:function() {
    var game=this.game;
    game.stage.backgroundColor='#fff';
    game.gui=new RSGUI(game);

    var chkbox1=game.gui.add.checkbox(0,0,"option1");
    var chkbox2=game.gui.add.checkbox(0,30,"option2");
    var chkbox3=game.gui.add.checkbox(0,60,"option3");
    chkbox1.group='group1';
    chkbox2.group='group1';
    chkbox3.group='group1';
    chkbox1.onChange.add(function(check){
      console.log(check);
    });
    chkbox3.disable();

  }
});
