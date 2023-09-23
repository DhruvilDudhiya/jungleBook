class InputManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.oScene.soundOnBtn.setInteractive().on("pointerdown", function () {
            this.oScene.oTweenManager.buttonClickAnimation(this.oScene.soundOnBtn, this.oScene.soundOffBtn);
        }, this)
        this.oScene.soundOffBtn.setInteractive().on("pointerdown", function () {
            this.oScene.oTweenManager.buttonClickAnimation(this.oScene.soundOffBtn, this.oScene.soundOnBtn);
        }, this)
        this.oScene.next_Button.setInteractive().on("pointerdown", function () {
            this.oScene.oTweenManager.popUpCloseTweenAnimation(this.oScene.container_popup);
            this.oScene.oGameManager.updateLevel();
        }, this)
        this.oScene.home_Button.setInteractive().on("pointerdown", function () {
            this.oScene.scene.start("Level");
        }, this)
        this.oScene.home_btn.setInteractive().on("pointerdown", function () {
            this.oScene.scene.start("Level");
        }, this)
        this.oScene.retry_Button.setInteractive().on("pointerdown", function () {
            this.oScene.alphabetPrefab.holderArr = [];
            this.oScene.oTweenManager.popUpCloseTweenAnimation(this.oScene.container_popup);
            setTimeout(() => {
                this.oScene.scene.start("Game");
            }, 250)
        }, this)
        this.oScene.replay_Button.setInteractive().on("pointerdown", function () {
            this.oScene.oTweenManager.popUpCloseTweenAnimation(this.oScene.container_popup);
            nCurrentLevel = 1;
            this.oScene.scene.start("Game");
        }, this)
        this.oScene.black_Screen.setInteractive().on("pointerdown", function () {
        }, this)

        this.oScene.soundOnBtn.on('pointerover', function () {
            this.oScene.oTweenManager.pointerOverTween(this.oScene.soundOnBtn , 0.8);
		}, this)
        this.oScene.soundOnBtn.on('pointerout', function () {
            this.oScene.oTweenManager.pointerOutTween(this.oScene.soundOnBtn , 0.8);
		}, this)
        this.oScene.soundOffBtn.on('pointerover', function () {
            this.oScene.oTweenManager.pointerOverTween(this.oScene.soundOffBtn , 0.8);
		}, this)
        this.oScene.soundOffBtn.on('pointerout', function () {
            this.oScene.oTweenManager.pointerOutTween(this.oScene.soundOffBtn , 0.8);
		}, this)
        this.oScene.replay_Button.on('pointerover', function () {
            this.oScene.oTweenManager.pointerOverTween(this.oScene.replay_Button , 1);
		}, this)
        this.oScene.replay_Button.on('pointerout', function () {
            this.oScene.oTweenManager.pointerOutTween(this.oScene.replay_Button , 1);
		}, this)
        this.oScene.retry_Button.on('pointerover', function () {
            this.oScene.oTweenManager.pointerOverTween(this.oScene.retry_Button , 1);
		}, this)
        this.oScene.retry_Button.on('pointerout', function () {
            this.oScene.oTweenManager.pointerOutTween(this.oScene.retry_Button , 1);
		}, this)
        this.oScene.next_Button.on('pointerover', function () {
            this.oScene.oTweenManager.pointerOverTween(this.oScene.next_Button , 1);
		}, this)
        this.oScene.next_Button.on('pointerout', function () {
            this.oScene.oTweenManager.pointerOutTween(this.oScene.next_Button , 1);
		}, this)
        this.oScene.home_btn.on('pointerover', function () {
            this.oScene.oTweenManager.pointerOverTween(this.oScene.home_btn , 1);
		}, this)
        this.oScene.home_btn.on('pointerout', function () {
            this.oScene.oTweenManager.pointerOutTween(this.oScene.home_btn , 1);
		}, this)
        this.oScene.home_Button.on('pointerover', function () {
            this.oScene.oTweenManager.pointerOverTween(this.oScene.home_Button , 0.8);
		}, this)
        this.oScene.home_Button.on('pointerout', function () {
            this.oScene.oTweenManager.pointerOutTween(this.oScene.home_Button , 0.8);
		}, this)
    }


}