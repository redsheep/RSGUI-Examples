var tipCanvas = new Phaser.Game(480, 150, Phaser.CANVAS, 'tipState',{
  preload:function() {
  },
  create:function() {
    var game=this.game;
    game.stage.backgroundColor='#fff';
    game.gui=new RSGUI(game);

    var downToolTip=game.gui.add.tooltip(0,10,'this is a tip\n with two lines',ToolTipDirect.Bottom);
    var upToolTip=game.gui.add.tooltip(10,80,'this is a tip\n with two lines',ToolTipDirect.Top);
    var leftToolTip=game.gui.add.tooltip(200,10,'this is a tip\n with two lines',ToolTipDirect.Left);
    var rightToolTip=game.gui.add.tooltip(210,80,'this is a tip\n with two lines',ToolTipDirect.Right);

  }
});
