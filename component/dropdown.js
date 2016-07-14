var drpCanvas = new Phaser.Game(480, 150, Phaser.CANVAS, 'drpState',{
  preload:function() {
  },
  create:function() {
    var game=this.game;
    game.stage.backgroundColor='#fff';
    game.gui=new RSGUI(game);

    var dropdown=game.gui.add.dropdown(0,0,"default");
    dropdown.appendValue('option1');
    dropdown.appendValue('option2');
    dropdown.appendValue('option3');

    dropdown.onSelect.add(function(value){
      console.log(value);
    });

  }
});
