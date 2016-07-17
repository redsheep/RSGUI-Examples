var lstCanvas = new Phaser.Game(480, 150, Phaser.CANVAS, 'lstState',{
  preload:function() {
  },
  create:function() {
    var game=this.game;
    game.stage.backgroundColor='#fff';
    game.gui=new RSGUI(game);

    var button10=game.gui.add.listview(0,0,100,100);
    /*var button11=game.gui.add.button(-20,0,"this is a wide button");
    var button12=game.gui.add.button(-20,40,"this is a wide button");
    var button13=game.gui.add.button(-20,80,"this is a wide button");
    var button14=game.gui.add.button(-20,120,"this is a wide button");*/
    button10.addItem("button11");
    button10.addItem("button12");
    button10.addItem("button13");
    button10.addItem("button14");
  }
});
