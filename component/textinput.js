var txtCanvas = new Phaser.Game(480, 150, Phaser.CANVAS, 'txtState',{
  preload:function() {
  },
  create:function() {
    var game=this.game;
    game.stage.backgroundColor='#fff';
    game.gui=new RSGUI(game);

    var textinput = game.gui.add.textinput(0,0,"text","text");
    var password = game.gui.add.textinput(100,0,"text","password");
    var textinput2 = game.gui.add.textinput(0,40,"text","text");

    textinput.onChange.add(function(value){
      console.log(value);
    });
    password.onChange.add(function(value){
      console.log(value);
    });
    textinput2.resize(200,100);

  }
});
