var radCanvas = new Phaser.Game(480, 150, Phaser.CANVAS, 'radState',{
  preload:function() {
  },
  create:function() {
    var game=this.game;
    game.stage.backgroundColor='#fff';
    game.gui=new RSGUI(game);

    var radio1=game.gui.add.radiobox(0,0,"option1");
    var radio2=game.gui.add.radiobox(0,30,"option2");
    var radio3=game.gui.add.radiobox(0,60,"option3");
    //radio1.group='group1';
    //radio2.group='group1';
    //radio3.group='group1';
    radio3.disable();
    radio3.onChange.add(function(){
      console.log("radiobox3");
    })

  }
});
